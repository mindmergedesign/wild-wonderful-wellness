import { defineField, defineType } from 'sanity'
import type { SanityDocument } from 'sanity'

/**
 * Interface for Category document type
 */
export interface Category extends SanityDocument {
	_type: 'category'
	title: string
	description?: string
}

export const categoryType = defineType({
	name: 'category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'description',
			type: 'text'
		})
	]
})
