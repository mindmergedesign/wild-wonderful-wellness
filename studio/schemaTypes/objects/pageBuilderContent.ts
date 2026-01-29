import { defineField, defineType } from "sanity";

export default defineType({
  name: 'pageBuilderContent',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      type: 'portableText',
      title: 'Content',
    }),
  ],
  preview: {
    select: {
      title: 'content',
    },
  },
})
