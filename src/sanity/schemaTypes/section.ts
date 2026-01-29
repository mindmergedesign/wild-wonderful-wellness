import type { SanityDocument } from 'sanity'
import type { PageBuilderContent } from './pageBuilderContent'
import type { ImageAlt } from './imageAlt'
import type { ImageAndText } from './imageAndText'
import type { TwoCols } from './twoCols'
import type { Accordion } from './accordion'
import type { ImageGallery } from './imageGallery'
import type { VideoEmbed } from './videoEmbed'

/**
 * Interface for Section object type
 */
export interface Section {
	_type: 'section'
	title?: string
	backgroundColor?: 'default' | 'light' | 'dark' | 'primary'
	content?: Array<
		PageBuilderContent | ImageAlt | ImageAndText | TwoCols | Accordion | ImageGallery | VideoEmbed
	>
}
