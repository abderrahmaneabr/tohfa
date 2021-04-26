// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ createPage, graphql }) => {
    // query your data source to retrieve pages
    const response = await graphql(`
      query {
        allProduct {
          edges {
            node {
              id,
              name{fr},
              path,
              fileInfo{name}
            }
          }
        }
      }
    `)

    if (response.errors) {
      throw response.errors[0]
    }

    // generate pages from query response
    response.data.allProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.fileInfo.name}`,
        component: './src/templates/product.vue',
        context: {
          id: node.id,
          locale: node.locale // set page locale for context variable (used for GraphQL queries)
        },
        route: {
          meta: {
            locale: node.locale // set page locale for frontend routing
          }
        }
      })
    })
  })
  if (process.env.ANALYZE === true) {
    api.chainWebpack(config => {
      config
        .plugin('bundle-analyzer-plugin')
        .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
    })
  }
}
