import { defineField, defineType } from "sanity";

export default defineType({
  name: 'titleAndDescription',
  title: 'Title and Description',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'portableText',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({ name: 'hasIcon', title: 'Has Icon', type: 'boolean' }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'text',
      description: 'Paste the svg code here. https://lucide.dev/icons',
      hidden: ({ parent }: { parent: { hasIcon?: boolean } }) => !parent?.hasIcon
    }),
  ],
    preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    },
  },
})
