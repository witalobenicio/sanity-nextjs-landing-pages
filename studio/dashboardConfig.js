export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f4906ef0911a1f44338a159',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t7cpszj7',
                  apiId: '7ec6866f-82a4-4d67-97ac-64eec1c73ac7'
                },
                {
                  buildHookId: '5f4906ef8fb544c9681cc8d3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-39xd12ai',
                  apiId: 'cab3097f-4137-48f9-8a9f-3b1ca647de8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/witalobenicio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-39xd12ai.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
