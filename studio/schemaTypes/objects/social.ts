import { defineField, defineType } from "sanity";

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'socialSite',
      title: 'Social Site',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'Tik Tok', value: 'tiktok'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Yelp', value: 'yelp'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'Pinterest', value: 'pinterest'},
        ],
      },
    }),
    defineField({
      name: 'socialUrl',
      title: 'Social URL',
      type: 'url',
      description: 'The URL of the social site',
    }),
  ],
})
