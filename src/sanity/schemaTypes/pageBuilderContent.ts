import type { BlockContent } from './blockContent'

/**
 * Interface for PageBuilderContent object type
 */
export interface PageBuilderContent {
	_type: 'pageBuilderContent'
	content?: BlockContent
}
