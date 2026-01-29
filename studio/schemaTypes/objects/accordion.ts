import { defineField, defineType } from "sanity";

export default defineType({
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  fields: [
    defineField({
      name: 'accordionItems',
      title: 'Accordion Items',
      type: 'array',
      of: [{ type: 'titleAndDescription' }],
    }),
  ],
})
