import { defineField, defineType } from "sanity";

export default defineType({
  name: 'twoCols',
  title: 'Two Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'contentLeft',
      title: 'Content Left',
      type: 'portableText',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'contentRight',
      title: 'Content Right',
      type: 'portableText',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'contentLeft',
    },
  },
})
