import { defineField, defineType } from "sanity";

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'string',
      description: 'Full site URL',
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Site Name',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'siteEmail',
      title: 'Email',
      type: 'string',
      description: 'Site Email',
    }),
    defineField({
    name: 'locations',
    title: 'Locations',
    type: 'array',
    of: [{ type: 'location' }],
   }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'social',
        },
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'portableText',
    }),
    defineField({
      name: 'sharingImage',
      title: 'Sharing image (Facebook, Twitter, etc.)',
      type: 'image',
    }),
  ],
})
