import { type QueryParams } from '@sanity/client'
import { sanityClient } from 'sanity:client'

const visualEditingEnabled = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true'
const token = import.meta.env.SANITY_API_READ_TOKEN

export async function loadQuery<QueryResponse>({
	query,
	params,
	preview = false
}: {
	query: string
	params?: QueryParams
	preview?: boolean
}) {
	// Enable preview if explicitly requested or if visual editing is enabled
	const isPreview = preview || visualEditingEnabled

	if (isPreview && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required during preview mode.'
		)
	}

	const perspective = isPreview ? 'previewDrafts' : 'published'

	const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(query, params ?? {}, {
		filterResponse: false,
		perspective,
		resultSourceMap: isPreview ? 'withKeyArraySelector' : false,
		stega: isPreview,
		...(isPreview ? { token } : {})
	})

	return {
		data: result,
		sourceMap: resultSourceMap,
		perspective,
		isPreview
	}
}
