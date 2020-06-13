/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e1cb22512f52834f700e81d329c02d57"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "8f3956a3cca6dd7fac613c1c20b79601"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "d34737ab8307a9bc65c253778653ff11"
  },
  {
    "url": "algorithm/index.html",
    "revision": "15493cc7749e3003ada7d4dacbdd9f84"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "0b46953e570ba1d2503fe3be0039405a"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "01702221905271bbccb57d38f585f480"
  },
  {
    "url": "assets/css/0.styles.70904243.css",
    "revision": "fcd0ab4afb32d7a808686aef1775d758"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11cf69db.js",
    "revision": "911b83e1822211d576906ededd3a851d"
  },
  {
    "url": "assets/js/11.d6a96ff0.js",
    "revision": "36d580f5cc656d237de49bf11b7082a9"
  },
  {
    "url": "assets/js/12.d5eee066.js",
    "revision": "834eb91a19051e17b420d3249316f06b"
  },
  {
    "url": "assets/js/13.7e9aebaa.js",
    "revision": "c7a6f17af4caf5448686f9aabe3eab06"
  },
  {
    "url": "assets/js/14.cb0c9160.js",
    "revision": "84c9753bec6d27393dc82205ab9b1ea8"
  },
  {
    "url": "assets/js/15.c85b5a0f.js",
    "revision": "83cc10d90b6a8690e3f1ecd804127a1b"
  },
  {
    "url": "assets/js/16.87648487.js",
    "revision": "76fe6c44b567e902a30bcc90334561dc"
  },
  {
    "url": "assets/js/17.93ec2e66.js",
    "revision": "1f9ed2aa5a8e2d655b89c360be33fd39"
  },
  {
    "url": "assets/js/18.caf41a32.js",
    "revision": "d6c4560232b98f8acd2cdf96473ced6e"
  },
  {
    "url": "assets/js/19.f41f9428.js",
    "revision": "e51308734ef3353d2249735668b4797e"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.bf540747.js",
    "revision": "f8a30891bdd84f8ef36f5971d8185ff3"
  },
  {
    "url": "assets/js/21.9e4f7d80.js",
    "revision": "c868abc1f099e4b576c2a3e3ad8d9f7f"
  },
  {
    "url": "assets/js/22.1b4a7812.js",
    "revision": "54258e620ce0d66cd7139db372de7076"
  },
  {
    "url": "assets/js/23.da50aeb4.js",
    "revision": "f20e651567ea73183c88ebc758ace752"
  },
  {
    "url": "assets/js/24.563a94d3.js",
    "revision": "05276ddb0af83d1e279bf954a1c4fdcf"
  },
  {
    "url": "assets/js/25.4355b2b3.js",
    "revision": "3e27772d3b7ff60b1825383d0ebc32fa"
  },
  {
    "url": "assets/js/26.ad174e1f.js",
    "revision": "36e430640a41f914f7a1ca3f3221ff56"
  },
  {
    "url": "assets/js/27.cb8d88eb.js",
    "revision": "4a846447029b09c22b18a8ff9418a67a"
  },
  {
    "url": "assets/js/28.617ae0cb.js",
    "revision": "178b2565989ffc62efc1f01f176a5385"
  },
  {
    "url": "assets/js/29.5cc974a5.js",
    "revision": "4da34c134f2758c44ddf40654fa723b9"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.f874a657.js",
    "revision": "8a758d73eb51a82a474e144555da3c0d"
  },
  {
    "url": "assets/js/31.9de82127.js",
    "revision": "56185fbf7399358d4642218cdac8b9cb"
  },
  {
    "url": "assets/js/32.4f1ab43b.js",
    "revision": "97a29795dee11d12289f674a65349175"
  },
  {
    "url": "assets/js/33.f0d11549.js",
    "revision": "200c751f2fda482bd1585b5aa0d89da0"
  },
  {
    "url": "assets/js/34.a5059d1c.js",
    "revision": "d08bd9236bbe1570733142a820546797"
  },
  {
    "url": "assets/js/35.23d54c79.js",
    "revision": "d215f390967229a17c7863a591fdb477"
  },
  {
    "url": "assets/js/36.bd0375d4.js",
    "revision": "7e114e46dc37f3a8674656705ebc93d8"
  },
  {
    "url": "assets/js/37.750c803e.js",
    "revision": "189b3d1a4ff092ccd612bbba71354489"
  },
  {
    "url": "assets/js/38.e2bd5bd7.js",
    "revision": "bf4466d6837d1f16e7e82b5cc4d62cd9"
  },
  {
    "url": "assets/js/39.02ec3a23.js",
    "revision": "7a131919bd3ba6e1a827a7b3c66383af"
  },
  {
    "url": "assets/js/4.501d8206.js",
    "revision": "fdd762e0cb1b9758efe2b8a19517460b"
  },
  {
    "url": "assets/js/40.babf10a9.js",
    "revision": "174e6caf60cfedadd17d9ee51a2e9c3e"
  },
  {
    "url": "assets/js/41.50e8ccd8.js",
    "revision": "21eca8957857f04191aa2a94059cefef"
  },
  {
    "url": "assets/js/42.03ec5802.js",
    "revision": "1c68076cd5ad2f351fb207ff8e7d76cd"
  },
  {
    "url": "assets/js/43.b0263bd4.js",
    "revision": "f47de9f222571ddf33d755d97305554c"
  },
  {
    "url": "assets/js/44.c4915f4c.js",
    "revision": "c22ef861a1c190ed66b57a708cc32d3a"
  },
  {
    "url": "assets/js/45.ace576df.js",
    "revision": "2fb7878b3fc9f043051f6bf31842cb11"
  },
  {
    "url": "assets/js/46.51133000.js",
    "revision": "00bea055aa7b3281c65fc079d3f78ba4"
  },
  {
    "url": "assets/js/47.490ba125.js",
    "revision": "e6f01b101b5993023b1871ca9240da56"
  },
  {
    "url": "assets/js/48.787e9f19.js",
    "revision": "07da38dcf1a82d6af1667fb9aa4eac02"
  },
  {
    "url": "assets/js/49.eb2f03c7.js",
    "revision": "69804618f8e134b13c4aa8d30a17ea96"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.b74b070d.js",
    "revision": "5007408888151d0aa11029a85104703d"
  },
  {
    "url": "assets/js/51.35e6d585.js",
    "revision": "418c0746738bb6b15f452f165047ea65"
  },
  {
    "url": "assets/js/52.889557c3.js",
    "revision": "cb7dd380d5f68fd0784b7ac9b9812215"
  },
  {
    "url": "assets/js/53.b71e1628.js",
    "revision": "f453d4644a52befdb2dd136b919ac00f"
  },
  {
    "url": "assets/js/54.2bcd6c55.js",
    "revision": "d3a8f01f49d427a949b50d7788f910dc"
  },
  {
    "url": "assets/js/55.1d626956.js",
    "revision": "f8889627a9320dfb65a4220b11dde78a"
  },
  {
    "url": "assets/js/56.11820c64.js",
    "revision": "68d9e494be01dd29ed9a368232c79575"
  },
  {
    "url": "assets/js/57.8ce06c11.js",
    "revision": "828c6abfb2d150423ad2cbb90cd70767"
  },
  {
    "url": "assets/js/58.79810120.js",
    "revision": "232828ef424813e8c4e252ca100328a2"
  },
  {
    "url": "assets/js/59.4bd1020c.js",
    "revision": "d39d56905b823e437d5699142b10ed1d"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.c7b2106f.js",
    "revision": "2ff1f4c97c7471b400d87a418939d724"
  },
  {
    "url": "assets/js/61.fd1c6721.js",
    "revision": "c2d953209c0e43d2d6423a1e38c430b6"
  },
  {
    "url": "assets/js/62.cff50e63.js",
    "revision": "69dbb99daa442c6247e2b57d34ca2dbc"
  },
  {
    "url": "assets/js/63.b2e1cd61.js",
    "revision": "c22177324c5fbcb99076e8acbde99a07"
  },
  {
    "url": "assets/js/64.5a72a24d.js",
    "revision": "32cbba9a0f82da3637b99ba9a23e4ff3"
  },
  {
    "url": "assets/js/65.64fe7d5a.js",
    "revision": "d7f57bd5078eac561f73a3fdb986e4e0"
  },
  {
    "url": "assets/js/66.07e012b6.js",
    "revision": "b7bba15b83e566c631df74abcacbfa4d"
  },
  {
    "url": "assets/js/67.ee617d98.js",
    "revision": "3c8868f34393f97978b67c1dad371509"
  },
  {
    "url": "assets/js/68.66519744.js",
    "revision": "1ed2228e7d6c273e0e7db917b205964a"
  },
  {
    "url": "assets/js/69.cbe86a37.js",
    "revision": "8ff89d5596f85b807665839fd5c2c356"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.22d90399.js",
    "revision": "ef15b665b6b2d5310eee2899f839946d"
  },
  {
    "url": "assets/js/71.7c65fd2d.js",
    "revision": "a0136e34a74fce6ec43febaa1c05132c"
  },
  {
    "url": "assets/js/72.66efe295.js",
    "revision": "a9713c6fccdbad63e13d138c7047dff0"
  },
  {
    "url": "assets/js/73.3e225894.js",
    "revision": "f4a2e9dd301236678b09d45db11d806f"
  },
  {
    "url": "assets/js/74.6b786425.js",
    "revision": "3ec5f766c07d631cecdbffbadaf49faf"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.136544e4.js",
    "revision": "ac5853984ccd15a2c713685a57086498"
  },
  {
    "url": "favicon-144.png",
    "revision": "04f1603cefeecf8933c631ecfe50e2fc"
  },
  {
    "url": "favicon-192.png",
    "revision": "5618579b118377ca96e099130cb59a94"
  },
  {
    "url": "favicon-36.png",
    "revision": "e93adfeeb80b9b5bd55cf506bbe2f81b"
  },
  {
    "url": "favicon-48.png",
    "revision": "c1092a62859b28767166df2d39238f1f"
  },
  {
    "url": "favicon-512.png",
    "revision": "744ac9c7fdb9bf3c024f338d7728e610"
  },
  {
    "url": "favicon-72.png",
    "revision": "aa514169450e8ce3aa603a880a9d7e7d"
  },
  {
    "url": "favicon-96.png",
    "revision": "40d03531e70d17244aee549e064a2634"
  },
  {
    "url": "HtmlAndCss/babelLoaderError.html",
    "revision": "0911f634aef3b764111ff53f20859d40"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "0df01f25cedad6a6dccc60c898599ec6"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "52fd5bb9fbd65c7e57fefeb739114ed9"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "bfa250a208e87a191eb56cfdc1704639"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "e05c5c6a4624586c7e91170a92cb9ece"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "2c663e7c1a1886002a7d71cf542052fa"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "1339bb4ad410806adabda0631021b038"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "18faafb93eeafe6828f5ff7d6d2eb00a"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "ee264ecd213494c0f59f958c76848516"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "51e888ad852e69c076366c1e45ff9014"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "eab871b0195b9899225de30d3b266709"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "d160d59c5b4adf7c1aeccc08f1054bf5"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "b05a44d2a36e5511afd3aec7be36b2aa"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "21f1bd0abd3098a4c3688556ba761cae"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "1728b1029945bd24baef2ad39ad8057c"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "af78442f4d96f7deefb5b750960bd202"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "14246313d2cac1301f7bdeb64eb9ac0a"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "4483ffe88e3a4e9724cdef2f68ced8ec"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "04f0e20658ca0a6312c432f7f7204317"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "d8712ad46d091476bfa08916893d88c9"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "634b1aec2466cdfe41555ee832d1983d"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "bfd8a1228e5fcbf40121b26ca3dfe6ea"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "936351aa701fe0bc37f2dd1891259597"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "fb7abf0df2db28fd7322e3a4407c1a4f"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "73dff0a1289a90dd3b39fe4101b92f17"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "cf0bc21a821ba240e1f5639c20270c49"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "424d2d7860f049b9f2fe28e6dbd0b273"
  },
  {
    "url": "image/autojs-1.jpg",
    "revision": "6885202f1f1d5150ec8215ad76995030"
  },
  {
    "url": "image/autojs-2.jpg",
    "revision": "9aa13545a2a27f9f806cb4e7ce7f9516"
  },
  {
    "url": "image/autojs-3.jpg",
    "revision": "a42c5e7010c4895527351e645f9984ed"
  },
  {
    "url": "image/autojs-4.jpg",
    "revision": "2e0a33c91234e61af17af533800ec017"
  },
  {
    "url": "image/autojs-5.jpg",
    "revision": "119f67acc63f6d0eb7fe9a3398ea0eb5"
  },
  {
    "url": "image/config-privatekey.png",
    "revision": "f9eeefee9e79c1b80356002864a1882b"
  },
  {
    "url": "image/config-pubkey.png",
    "revision": "00e3730709284f82bf831339eb5286cd"
  },
  {
    "url": "image/electron-process-error.png",
    "revision": "a93fc68cde47fdf4aa705f1308c08337"
  },
  {
    "url": "image/elementUI-upload-multiple.png",
    "revision": "8e97ddc6e13e5cf276a4246eb7b6ec5e"
  },
  {
    "url": "image/elementUIUpload-01.png",
    "revision": "4c59088279a735f084f809bddbcdbdd6"
  },
  {
    "url": "image/H5show-over.gif",
    "revision": "6069f0ac491a55a82580402b0301579b"
  },
  {
    "url": "image/ie-error-babel.png",
    "revision": "8ffd4d4134ea08b05dd3a439cf7005bd"
  },
  {
    "url": "image/pub-private-key.png",
    "revision": "2c3aec1ecb1acc4cbf1fd2a8c4534152"
  },
  {
    "url": "index.html",
    "revision": "5cd92cc0295d30f494fd3a5e3538c99c"
  },
  {
    "url": "logo.jpg",
    "revision": "bdd6739c82213d4c79d9d98ef173f70a"
  },
  {
    "url": "logo/logo.gif",
    "revision": "17de485d18e09e9fe0ecf7e54ae12f3a"
  },
  {
    "url": "logo/logo.jpg",
    "revision": "bdd6739c82213d4c79d9d98ef173f70a"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "08af72cd05c6c05e9b825a85c4ff5fcd"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "90faf4d6299821f080505c64503d3990"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "73ed5bb903adb3bfe44567c06c9d8ef2"
  },
  {
    "url": "other/index.html",
    "revision": "e347d86f8f0286b2f2683457af28c4aa"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "69e9b234b79b5f457db013ed17f83181"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "e7ca6991446dcf6523b504ad7ed05fd9"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "22d77a5d1667055afaabe8b713d60bd1"
  },
  {
    "url": "other/steam_community.html",
    "revision": "be5489cce5599732da946814d2645116"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "8b7b1a265cf1d5026064a36888b77f6f"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "cf3531c9c9ea776fe62e828c79dd9b29"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "d1baa24dd53aea75a01bd6ee9febfde5"
  },
  {
    "url": "source/devOps.html",
    "revision": "828ccf4fc31d66f61d485b77c093b50f"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "bb3abd9dd5ba8576e4611dd01a15734d"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "37accfca9a1ab07ab8259f2321c39145"
  },
  {
    "url": "source/index.html",
    "revision": "b18477435cff9299089d3a6b0c2443f2"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "07eefd3bef6d758e0e96428856e0fa1b"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "6783c7ad61358a247f8032d500f9d11b"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "c6b3b6810a1c1fc7f6f63c3979cce35b"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "14d7305603d0d4631f2f24ba1631a9d1"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "272b43a7382b73c08c936eab00b06d5b"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "47ad46673d008b217b9552a326084231"
  },
  {
    "url": "source/tools.html",
    "revision": "0d7ee633cff0e15daa02c1472242fd9d"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "a548f3284f427c6a5c1e908e6d7aae15"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "86733de461b574bdb63be63c66acc3c2"
  },
  {
    "url": "source/webGame.html",
    "revision": "119159a8bf10f7fe31eb6bcc918569bb"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "43cf757f2b8ff5dd00ea4336c7f50c14"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "1e85af7584d78d1f69ffaa5ce69bd952"
  },
  {
    "url": "subtitle/index.html",
    "revision": "281058a2d4a0f2a3f22275ecd9eda0cb"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "c7961ec377169097f030ab93854e9861"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "f04c14aa27d436fd7da0a0deb0097507"
  },
  {
    "url": "subtitle/small.html",
    "revision": "c6faf5117b0e190e95ef68d9deca89b7"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "f7db0b4c19d4dc6833e8035b443b946b"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "fae699971b1d59c2fadc4e6f650ab1ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
