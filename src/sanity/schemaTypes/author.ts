import { defineField, defineType } from 'sanity'
import type { SanityDocument, Slug, Image } from 'sanity'

/**
 * Interface for Author document type
 */
export interface Author extends SanityDocument {
	_type: 'author'
	name: string
	slug: Slug
	image: Image & {
		alt?: string
	}
	bio: any[] // Portable Text block
}

export const authorType = defineType({
	name: 'author',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96
			}
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text'
				}
			]
		}),
		defineField({
			name: 'bio',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: []
				}
			]
		})
	],
	preview: {
		select: {
			title: 'name',
			media: 'image'
		}
	}
})
