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
    "revision": "1832b8e3fb35ae613f8c7bcbd7d5685b"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "cfa53cb0582a8218d0b8e35665c0063b"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "49352d35acf37e26c60181d3f210692b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7792608edf11d747f91245fd79f9797d"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "f8b2ab8b1455318a4134dbaa950d3642"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "d93398184369acde463fe26c8941d57b"
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
    "url": "assets/js/10.dcdeeb00.js",
    "revision": "f10d0e7474727b3c6ff54b027a33f760"
  },
  {
    "url": "assets/js/11.54487ee1.js",
    "revision": "4a683e4a162b4a5fed583679329728e8"
  },
  {
    "url": "assets/js/12.f12f3c80.js",
    "revision": "31ab2afb1d546f96451339f614b1dcdb"
  },
  {
    "url": "assets/js/13.07b21ae3.js",
    "revision": "d61d4484b6398fbe4b5139c4a4fe985c"
  },
  {
    "url": "assets/js/14.852c159e.js",
    "revision": "00f8ec477672c1b2ba67fb12b918dacd"
  },
  {
    "url": "assets/js/15.33bbdd03.js",
    "revision": "a9f87005456bb225e7896cc00a673ddc"
  },
  {
    "url": "assets/js/16.a2382aef.js",
    "revision": "a59864a5407dee9b253949e56e618e37"
  },
  {
    "url": "assets/js/17.de0b142c.js",
    "revision": "870bf4e99e952184b3531e459f5460e1"
  },
  {
    "url": "assets/js/18.bf6556fd.js",
    "revision": "a39e846dd41dbde58e92c94d266c8987"
  },
  {
    "url": "assets/js/19.bc0e81cc.js",
    "revision": "3622eee4858eeef7e72b8cedac5fa717"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.d5ca659a.js",
    "revision": "d9bfa20343702721a0835efe2859c956"
  },
  {
    "url": "assets/js/21.9e8adda0.js",
    "revision": "6fc48576edfa2569954699c1811e128d"
  },
  {
    "url": "assets/js/22.090ed145.js",
    "revision": "2254dcd9c796912e77589589d473c3eb"
  },
  {
    "url": "assets/js/23.cde34823.js",
    "revision": "25d6d0218f870552d2cda290a05e7c4d"
  },
  {
    "url": "assets/js/24.a7c6787d.js",
    "revision": "b5413d6a2b3069fafc37453f1ea0d164"
  },
  {
    "url": "assets/js/25.0513d8d2.js",
    "revision": "61d798874b3e83fb126f5407e6c03103"
  },
  {
    "url": "assets/js/26.408272fa.js",
    "revision": "ca3d71f502e81899e0de79d590c8a8e6"
  },
  {
    "url": "assets/js/27.8f641715.js",
    "revision": "7801952d84b5d47ad3760e23149e8acf"
  },
  {
    "url": "assets/js/28.d07a8ee5.js",
    "revision": "b6a1cef629d6a1d08bfe1cdaf8f3cb87"
  },
  {
    "url": "assets/js/29.63dad9d1.js",
    "revision": "fca0dce164ff2f6a237aacafda5404d2"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.5a64392b.js",
    "revision": "10286c029a4bd87c2f9fb567ec4e12f9"
  },
  {
    "url": "assets/js/31.725d266b.js",
    "revision": "2ca1201a429e53d0a97bab566c2400e8"
  },
  {
    "url": "assets/js/32.92b9c19d.js",
    "revision": "419e9bd75b16f24e590021fdaed12b2b"
  },
  {
    "url": "assets/js/33.69563bd8.js",
    "revision": "2833f432dfb39841682b4773ee145219"
  },
  {
    "url": "assets/js/34.bed3a307.js",
    "revision": "d8584a232aa4772c27da63005b2eea2c"
  },
  {
    "url": "assets/js/35.e2cadebf.js",
    "revision": "8a70dd48305ab395680be5579a762e76"
  },
  {
    "url": "assets/js/36.e86bf1d9.js",
    "revision": "71aa007f84b96a924957ab0034687951"
  },
  {
    "url": "assets/js/37.a36de7b9.js",
    "revision": "8c16cad49dce7b5c22b8e9a2403d9df2"
  },
  {
    "url": "assets/js/38.30ec25f0.js",
    "revision": "14de483d661b12fe60b9a507fa940679"
  },
  {
    "url": "assets/js/39.0387b127.js",
    "revision": "15dbe817148f84583bd3c0d6cd22865f"
  },
  {
    "url": "assets/js/4.03b0f592.js",
    "revision": "6c271b9f945e5952591a4f18b2950d72"
  },
  {
    "url": "assets/js/40.5236fd6c.js",
    "revision": "92d94d41d312ae2dcf089b5c037e8b5c"
  },
  {
    "url": "assets/js/41.ec2bcd22.js",
    "revision": "5042bec7f2ad63e86970d84f23e9d2f6"
  },
  {
    "url": "assets/js/42.3dcafc1a.js",
    "revision": "ae4d967f252623f8498bb8763cf39cf1"
  },
  {
    "url": "assets/js/43.854a286c.js",
    "revision": "3cc1003ee3c6e6a451c54e08ef37d733"
  },
  {
    "url": "assets/js/44.499d1926.js",
    "revision": "570eb481ed242bf7896dbb7e96ebdc08"
  },
  {
    "url": "assets/js/45.33bb5504.js",
    "revision": "e5b2f204e428fe0fae0dcd97c5362583"
  },
  {
    "url": "assets/js/46.5211afbc.js",
    "revision": "1135edc0597537026609450f9a6e8ada"
  },
  {
    "url": "assets/js/47.386f90cf.js",
    "revision": "750bfc66b132676552b3f2ecc27fe28d"
  },
  {
    "url": "assets/js/48.d11b5963.js",
    "revision": "2c4d1919845137d51c5b02f8189c2dc3"
  },
  {
    "url": "assets/js/49.cafa7de3.js",
    "revision": "ccfde6a2a71907f45dba27a1a55cca49"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/6.8575b181.js",
    "revision": "ae21c9a144160db0364769dad7bcd020"
  },
  {
    "url": "assets/js/7.49364597.js",
    "revision": "0f901c5b0166b6ea6a72ac30183ea6c5"
  },
  {
    "url": "assets/js/8.105220eb.js",
    "revision": "1526cb6803591e15e1630a6babea2b3d"
  },
  {
    "url": "assets/js/9.a429d260.js",
    "revision": "4a426c778b8553fd403a3ad01e6c179a"
  },
  {
    "url": "assets/js/app.dfa70273.js",
    "revision": "f46664c28acfdb1ca693b512cf5b6f5b"
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
    "revision": "648354ebe7ea088bc2abbb1d235fe451"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "1690b1685855570862133a1e1e8e4ef0"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "52e5a817c1615bb1007122a332df0f3e"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "d14995ecda31fd73e9ba7ed56ec5aca0"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "c813975f2cf46fee5fc8d02179eb8287"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "e11da7072e8cdb57858da9e88b432ca9"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "bfde0e6002b3246b6f5cceb2472eb5d8"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "bf49005c665ccbf72b2370ed39adf9f2"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "82b75aae157a7ba59a287d2e2bd0ef4c"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "1a7daafaf0f012cbcae2cd0183931bdd"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "42bb677f65fe327bf6bea66366c01e5b"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "aa80a71cda70d2f07dbca0e84932c7ff"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "3974748ede146ea5e3a0f4e7b9cc129a"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "d35868bbd3664c307c328cfb0577deb5"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "5f4cd2e93e545366a0e516ab89e54084"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "3318dc1a86f1e57949c77508ff75c55a"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "63510a5d9ddc1d72426d0195e99d1b4e"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "d73725fb9b9b53296764e4edcf8601ef"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "c192dbaaab5cdb89322eff9d04c36ce9"
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
    "revision": "d0bf75a1f6a8eb29ec98e5efe1dba832"
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
    "revision": "ef94c1fe5a94a22944e3221db97cbf87"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "1717afd7881f4ad0bd537cc0e6846687"
  },
  {
    "url": "other/index.html",
    "revision": "a929b822ed5020418d3df04350f5b30b"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "cb433f4095d05e4a427b8065ceb2ca6f"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "c6242624ea65f6fbd7e377ea932d345b"
  },
  {
    "url": "other/steam_community.html",
    "revision": "eacee9dfebda1955c5551cc5f2cfc23c"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "e892e7165c2648049fb7736ca44c37e3"
  },
  {
    "url": "source/index.html",
    "revision": "3a485f2196a75fe03815244986c26c45"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "3cf73e445320d0cd63f83547a9dcb9e3"
  },
  {
    "url": "source/webGame.html",
    "revision": "ed8d0824641e26878c3baa619a5a3126"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "ac8724e0afaa0a682af43cbb33254fa7"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "5a9b73c5724b1766d9d9acd35d51dddf"
  },
  {
    "url": "subtitle/index.html",
    "revision": "8aba8c32d0c487597ac384159a5f08b9"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "f1a46224948ad91fb7bb2f32cb18419f"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "49cb0067db9fc869860524df688618b8"
  },
  {
    "url": "subtitle/small.html",
    "revision": "9c5ff56a0d566b11b381b8b099d3a097"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "1351505a4f20e2829762a3c8f79df0d0"
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
