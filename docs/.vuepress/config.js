const path = require('path');
module.exports = {
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['link', { rel: 'manifest', href: './manifest.json' }],
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
      // { text: '算法', link: '/algorithm/' },
      { text: '资源', link: '/source/' },
      { text: '技术杂谈', link: '/other/' },
      { text: 'Github', link: 'https://github.com/huskyAreYouScared/' },
      { text: '国内地址', link: 'https://husky_are_you_scared.gitee.io/blog/' }
    ],
    sidebar: {
      '/subtitle/': [     
        'InitProject', 
        'small',
        'mac_windows',
        'electronDialog',
        'according-platform-build',
        'user-custom-install',
        'vueElectronInitSummary'
      ],
      '/source/': [
        '',
        'vueEcosphere',
        'npmPlugins',
        'tools',
        'frontDocument',
        'jsPlugins',
        'sourceSummary',
        'vscodePlugins',
        'interview',
        'musicSummary',
        'operationTutorial',
        'interestingSite',
        'autoCodeing',
        'framework',
        'devOps',
        'httpProtol',
        'webGame',
        'money'
      ],
      '/HtmlAndCss/': [
        '',
        'pointSummary',
        'css',
        'fontStyle',
        'jsPrototype',
        'es6Summary',
        'webpackConfig',
        'webpackLoader',
        'tapable',
        'CLI',
        'jestSummary',
        'regExpSummary',
        'jsBridgeSummary',
        'H5Show',
        'imgCrossDomain',
        'elementUISummary',
        'unixTimeStamp',
        'babelLoaderError',
        'moduleSummary',
        'playFavicon',
        'templateLiterals',
        'compatibility',
        'stringSummary',
        'inputCapture',
        'webpackPrinciple',
        'proton',
        'qrcodeDemo',
        'jsClosure',
        'interview'
      ],
      '/algorithm/': [
        '',
        'quickSort',
        'selectionSort',
        'insertSort',
        'shellSort',
        'binarySearch',
        'arraySort'
      ],
      '/other/':[
        'vuepress_build',
        'mac_terminal',
        'mac_npm_error',
        'auto_watch_video',
        'conventional_changelog',
        'steam_community',
        'nginxSummary',
        'dockerSummary',
        'authorization'
      ],
      '/': [
        ''
      ],
    },
    lastUpdated: 'Last Updated',
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias':'docs'
      }
    }
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/active-header-links','@vuepress/nprogress',[
      '@vuepress/pwa',{
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}