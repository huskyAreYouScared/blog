const path = require('path');
module.exports = {
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon-192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  base:'/blog/',
  dest:'dist',
  title: 'huskyAreYouScared-Blog',
  description: '持续学习者，憧憬未来的开发者',
  themeConfig: {
    logo: '/logo/logo.gif',
    nav: [
      { text: '主页', link: '/' },
      { text: 'husky字幕', link: '/subtitle/' },
      { text: '前端日志', link: '/HtmlAndCss/' },
      { text: '算法', link: '/algorithm/' },
      { text: '资源', link: '/source/' },
      { text: '技术杂谈', link: '/other/' },
      { text: 'Github', link: 'https://github.com/huskyAreYouScared/' },
      { text: '国内地址', link: 'https://husky_are_you_scared.gitee.io/blog/' },

    ],
    sidebar: {
      '/subtitle/': [     
        'InitProject', 
        'mac_windows',
        'electronDialog',
        'according-platform-build',
        'user-custom-install'
      ],
      '/source/': [
      ],
      '/HtmlAndCss/': [
        '',
        'css',
        'fontStyle',
        'H5Show',
        'imgCrossDomain',
        'elementUIUpload',
        'unixTimeStamp',
        'babelLoaderError',
        'playFavicon',
        'templateLiterals',
        'compatibility',
        'stringSummary',
        'inputCapture'
      ],
      '/algorithm/': [
        '',
        'quickSort',
        'selectionSort',
        'binarySearch',
        'arraySort'
      ],
      '/other/':[
        'vuepress_build',
        'mac_terminal',
        'mac_npm_error',
        'auto_watch_video',
        'conventional_changelog',
        'steam_community'
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
  plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links','@vuepress/nprogress',
    '@vuepress/pwa',{
      serviceWorker: true,
      updatePopup: true
    }]
}