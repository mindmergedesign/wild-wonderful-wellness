import type { SanityDocument, Slug } from 'sanity'
import type { BlockContent } from './blockContent'
import type { SEO } from './seo'

/**
 * Interface for Home document type
 */
export interface Home extends SanityDocument {
	_type: 'home'
	title: string
	slug: Slug
	content?: BlockContent
	seo?: SEO
}
