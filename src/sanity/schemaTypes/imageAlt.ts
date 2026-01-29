import type { Image } from 'sanity'

/**
 * Interface for ImageAlt object type
 */
export interface ImageAlt extends Image {
	_type: 'imageAlt'
	alt?: string
	credits?: string
}
