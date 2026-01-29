import { defineField, defineType } from "sanity";

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        { type: 'imageAlt'},
      ],
    }),
  ],
})
