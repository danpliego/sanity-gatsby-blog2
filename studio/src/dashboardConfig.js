export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eacac637feab73cfe35456b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-2jm91kqd',
                  apiId: 'f365e74a-4b93-4d02-a3c2-04fa885f0441'
                },
                {
                  buildHookId: '5eacac638aa2b7bbcf91f88d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-xpq4noxj',
                  apiId: 'a7cc825c-b632-4c2f-9813-ac62bab6bfbd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danpliego/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-xpq4noxj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
