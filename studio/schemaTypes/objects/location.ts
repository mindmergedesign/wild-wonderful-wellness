import { defineField, defineType } from "sanity";

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'portableText',
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'faxNumber',
            title: 'Fax Number',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
    ],
})   