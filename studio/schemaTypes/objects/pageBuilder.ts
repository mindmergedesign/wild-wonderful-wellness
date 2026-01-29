import { defineField, defineType } from "sanity";

export default defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'section',
    }),
  ],
})
