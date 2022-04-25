export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6266e2f9adbe68008cf68c2d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eywouuvo',
                  apiId: '0e54a740-cf4e-4547-a506-68e2422362e2'
                },
                {
                  buildHookId: '6266e2f935021b0f054e5152',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cy84f2sv',
                  apiId: '1f017d41-2c26-4eeb-991f-d0e423c231c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/welcome-dev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cy84f2sv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
