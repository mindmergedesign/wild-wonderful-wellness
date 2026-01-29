import { defineField, defineType } from "sanity";

export default defineType({
  name: 'generic',
  title: 'Generic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Document Title',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder',
    }),
  ],
})
