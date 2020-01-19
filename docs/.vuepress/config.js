const path = require('path');
module.exports = {
  title: 'huskyAreYouScared-Blog',
  description: '持续学习者，憧憬未来的开发者',
  themeConfig: {
    logo: '/logo/logo.gif',
    nav: [
      { text: '主页', link: '/' },
      { text: 'husky-subtitle', link: '/subtitle/' },
      { text: '资源', link: '/tools/' },
    ],
    sidebar: {
      '/subtitle/': [     
        'InitProject', 
      ],
      '/tools/': [
        ''
      ],
      '/': [
        ''
      ],
    },
    lastUpdated: 'Last Updated',
    themeConfig: {
      // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
      nextLinks: true,
      // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
      prevLinks: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias':'docs'
      }
    }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links','@vuepress/nprogress']
}

console.log(path.resolve('docs'));
