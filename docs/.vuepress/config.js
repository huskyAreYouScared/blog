const path = require('path');
module.exports = {
  markdown: {
    lineNumbers: true,
  },
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }],
    ["link", { rel: "manifest", href: "./manifest.json" }],
  ],
  base: "/blog/",
  dest: "dist",
  title: "huskyAreYouScared-Blog",
  description: "持续学习者，憧憬未来的开发者",
  themeConfig: {
    logo: "/logo/logo.gif",
    nav: [
      { text: "主页", link: "/" },
      // { text: "开源作品", link: "/openSource/" },
      { text: "前端日志", link: "/HtmlAndCss/" },
      { text: "算法", link: "/algorithm/" },
      { text: "资源", link: "/source/" },
      { text: "技术杂谈", link: "/other/" },
      { text: "真会玩", link: "/play/" },
      { text: "Github", link: "https://github.com/huskyAreYouScared/" },
      { text: "国内地址", link: "https://husky_are_you_scared.gitee.io/blog/" },
    ],
    sidebar: {
      // "/openSource/": [
      //   "",
      //   "InitProject",
      //   "mac_windows",
      //   "electronDialog",
      //   "according-platform-build",
      //   "user-custom-install",
      // ],
      "/source/": [
        "",
        "webgl",
        "vueEcosphere",
        "npmPlugins",
        "tools",
        "frontDocument",
        "jsPlugins",
        "sourceSummary",
        "vscodePlugins",
        "interview",
        "musicSummary",
        "operationTutorial",
        "interestingSite",
        "framework",
        "devOps",
        "httpProtol",
        "webGame",
        "money",
        "book",
        "cloudservices",
        "software",
      ],
      "/HtmlAndCss/": [
        "",
        "customNew",
        "customCallApplyBind",
        "debounceAndThrottle",
        "designPattern",
        "javascript",
        "css",
        "html",
        "fontStyle",
        "jsPrototype",
        "es6Summary",
        "webpackConfig",
        "webpackLoader",
        "tapable",
        "CLI",
        "reactSummary",
        "jestSummary",
        "regExpSummary",
        "jsBridgeSummary",
        "H5Show",
        "imgCrossDomain",
        "elementUISummary",
        "unixTimeStamp",
        "babelLoaderError",
        "moduleSummary",
        "playFavicon",
        "compatibility",
        "inputCapture",
        "webpackPrinciple",
        "proton",
        "qrcodeDemo",
        "jsClosure",
        "interview",
      ],
      "/algorithm/": [
        "",
        "linkedListStructure",
        "stackStructure",
        "queueStructure",
        "dictionaryStructure",
        "treeStructure",
        "graphStructure",
        "quickSort",
        "selectionSort",
        "insertSort",
        "shellSort",
        "mergeSort",
        "binarySearch",
        "arraySort",
        "dp",
      ],
      "/other/": [
        "",
        "vuepress_build",
        "mac_terminal",
        "mac_npm_error",
        "auto_watch_video",
        "conventional_changelog",
        "steam_community",
        "nginxSummary",
        "dockerSummary",
        "authorization",
        "office",
        "linux",
        "yidong"
      ],
      "/play/": [""],
      "/": [""],
    },
    lastUpdated: "Last Updated",
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "docs",
      },
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/active-header-links",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
};