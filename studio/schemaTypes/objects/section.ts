import { defineField, defineType } from "sanity";

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the section',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Primary', value: 'primary' }
        ]
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'array',
      of: [
        { type: 'pageBuilderContent' },
        { type: 'imageAlt' },
        { type: 'imageAndText' },
        { type: 'twoCols' },
        { type: 'accordion' },
        { type: 'imageGallery' },
        { type: 'videoEmbed' },

      ],
      description: 'Add content blocks to this section'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'backgroundColor'
    } ,
    prepare({ title, subtitle }: { title: string | undefined; subtitle: string | undefined }) {
      return {
        title: title || 'Untitled Section',
        subtitle: subtitle ? `Background: ${subtitle}` : 'Default background'
      }
    }
  }
})
