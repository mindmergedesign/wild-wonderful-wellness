import { defineField, defineType } from "sanity";

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: 'heroContent',
      title: 'Hero Content',
      type: 'portableText',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageAlt',
    }),
  ] ,
});
