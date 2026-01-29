import type { Image } from 'sanity'

/**
 * Interface for SEO object type
 */
export interface SEO {
	_type: 'seo'
	metaTitle?: string
	metaDescription?: string
	shareImage?: Image
}
