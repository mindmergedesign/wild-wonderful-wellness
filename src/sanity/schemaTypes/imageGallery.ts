import type { ImageAlt } from './imageAlt'

/**
 * Interface for ImageGallery object type
 */
export interface ImageGallery {
	_type: 'imageGallery'
	title?: string
	images?: ImageAlt[]
}
