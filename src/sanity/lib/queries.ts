import { loadQuery } from '@/sanity/lib/load-query'
import type { SanityDocument } from '@sanity/client'

// Sanity Page Queries

export const { data: home } = await loadQuery<SanityDocument>({
	query: `*[_type == "home"][0]`
})

export const { data: generic } = await loadQuery<SanityDocument>({
	query: `*[_type == "generic"]`
})

export const { data: settings } = await loadQuery<SanityDocument>({
	query: `*[_type == "siteSettings"][0]`
})
