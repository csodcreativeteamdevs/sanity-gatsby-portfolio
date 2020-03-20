export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e7414dfef007c8f8346be6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-95w4k1aa',
                  apiId: '96300ded-50f1-4e8e-b08d-0d3c3ee4b297'
                },
                {
                  buildHookId: '5e7414df1d2f979a8fb40037',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y2jhg7x3',
                  apiId: '1fa71da6-b6b5-4a43-8b14-e4886511e14a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/csodcreativeteamdevs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y2jhg7x3.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
