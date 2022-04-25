const { path } = require('@vuepress/utils')

module.exports = {
    lang: 'en-US',
    title: 'AppleDB',
    description: 'A database of Apple software and devices.',
  
    themeConfig: {
      repo: 'emiyl/appledb',
      selectLanguageText: '<i class="fas fa-globe"/>',
      logo: '/assets/images/logo.png',
      logoDark: '/assets/images/logo_dark.png',
    },

    plugins: [
      [
        "@vuepress/plugin-search", {
          locales: {
            '/': {
              placeholder: 'Search',
            },
          },
        }
      ],
      [
        '@vuepress/register-components',
        {
          componentsDir: path.resolve(__dirname, './components')
        }
      ],
      require('./plugins/newDynamicPages/lib/'),
    ],
  
    head: [
      [ 'meta', { property: 'og:image', content: '/assets/images/splash-23aaron-logo.jpg' } ],
      [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
    ],
  
    theme: path.resolve(__dirname, './theme'),
}