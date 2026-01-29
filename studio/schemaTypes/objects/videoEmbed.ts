import { defineField, defineType } from "sanity";

export default defineType({
  name: 'videoEmbed',
  title: 'video Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Accepts Vimeo URLs',
    }),
  ],
})  
