import { defineField, defineType } from "sanity";

export default defineType({
    name: 'imageAlt',
    title: 'imageAlt',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
        defineField({
            name: 'credits',
            type: 'string',
            title: 'Credits',
        }),
    ],
})  