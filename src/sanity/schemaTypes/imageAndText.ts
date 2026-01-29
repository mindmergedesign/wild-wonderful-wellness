import type { BlockContent } from './blockContent'
import type { ImageAlt } from './imageAlt'

/**
 * Interface for ImageAndText object type
 */
export interface ImageAndText {
	_type: 'imageAndText' | 'textAndImage'
	text?: BlockContent
	image?: ImageAlt
	imagePosition?: 'left' | 'right'
}
