import { defineField, defineType } from "sanity";

export default defineType({
  name: 'fileDownload',
  title: 'Document Download',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'document',
      title: 'Document',
      type: 'file',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
})
