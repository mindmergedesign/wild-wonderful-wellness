export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettingsPage')),
      S.divider(),

      S.listItem().title('Home').child(S.document().schemaType('home').documentId('homePage')),
      S.divider(),

      S.listItem()
        .title('Generic Page')
        .child(
          S.documentTypeList('generic')
            .title('Page')
            .defaultOrdering([{field: '_createdAt', direction: 'asc'}])
        ),
      S.divider(),

      // ...Other items
      ...S.documentTypeListItems().filter(
        (listItem: any) =>
          !['home', 'media.tag', 'generic', 'siteSettings'].includes(listItem.getId())
      ),
    ])
