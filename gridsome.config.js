// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

module.exports = {
  siteName: 'Tohfa meubles',
  siteUrl: 'https://tohfa-meubles.netlify.app',
  siteDescription: 'Tohfa meubles',
  titleTemplate: '%s - Tohfa meubles',
  icon: './src/assets/images/favicon.png',
  chainWebpack: config => {
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['CloudinaryPrefix', 'CloudinaryFolder'])
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: path.join(__dirname, '/tailwind.config.js'),
        purgeConfig: {
          whitelistPatterns: [/^slick*/]
        }
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/*.md',
        typeName: 'SinglePage'
      }
    }, {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content/',
        path: 'products/*.md',
        typeName: 'Product'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms'
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [ // locales list
          'fr-fr',
          'en-gb',
          'ar-dz'
        ],
        pathAliases: { // path segment alias for each locales
          'fr-fr': 'fr',
          'en-gb': 'en',
          'ar-dz': 'ar'
        },
        fallbackLocale: 'fr-fr', // fallback language
        defaultLocale: 'fr-fr', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false,
        // routes: require('./routes.js'), // load path translation declaration from external file
        messages: {
          'fr-fr': require('./src/locales/fr-fr.json'),
          'en-gb': require('./src/locales/en-gb.json'),
          'ar-dz': require('./src/locales/ar-dz.json')
        }
      }
    }
  ],
  permalinks: {
    trailingSlash: false
  }
}
