import type { BlockContent } from './blockContent'

/**
 * Interface for Accordion object type
 */
export interface AccordionItem {
	_key: string
	title: string
	description?: BlockContent
	icon?: string
}

export interface Accordion {
	_type: 'accordion'
	title?: string
	items?: AccordionItem[]
}
