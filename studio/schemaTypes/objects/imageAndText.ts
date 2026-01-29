import { defineField, defineType } from "sanity";

export default defineType({
  name: 'imageAndText',
  title: 'Image And Text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageAlt',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'portableText',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
})
