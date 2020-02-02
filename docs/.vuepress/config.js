const path = require('path');
module.exports = {
  base:'/blog/',
  dest:'dist',
  title: 'huskyAreYouScared-Blog',
  description: '持续学习者，憧憬未来的开发者',
  themeConfig: {
    logo: '/logo/logo.gif',
    nav: [
      { text: '主页', link: '/' },
      { text: 'husky字幕', link: '/subtitle/' },
      { text: 'HTML+CSS', link: '/HtmlAndCss/' },
      { text: '资源', link: '/source/' },
      { text: '技术杂谈', link: '/other/' },
      { text: 'Github', link: 'https://github.com/huskyAreYouScared/' },
    ],
    sidebar: {
      '/subtitle/': [     
        'InitProject', 
        'mac_windows'
      ],
      '/source/': [
      ],
      '/HtmlAndCss/': [
      ],
      '/other/':[
        'vuepress_build',
        'mac_terminal'
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
