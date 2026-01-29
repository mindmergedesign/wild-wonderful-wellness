import { defineField, defineType } from "sanity";

export default defineType({
  name: 'tabs',
  title: 'Tabs',
  type: 'object',
  fields: [
    defineField({
      name: 'tabItems',
      title: 'Tabs Items',
      type: 'array',
      of: [{ type: 'tab' }],
    }),
  ],
})
