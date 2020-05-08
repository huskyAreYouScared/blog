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
    "revision": "61483de731dbb246e921e4545e9907cf"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "b194d559fbe24424cffb3e9e4f25a400"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c03f49f4ff33638fd169204aeaba9354"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1b6f69270547d23ca5243a642e987dea"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "7552a334c524f9b1176e8e9e83c3231d"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "1cd19091863872d103fddc4ccdbda054"
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
    "url": "assets/js/12.15d4266a.js",
    "revision": "16a2d48f2889eef4e25695be7e07c971"
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
    "url": "assets/js/19.b5477915.js",
    "revision": "300260472bb50994cf10b47fa13a0f82"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.c3c5b4e0.js",
    "revision": "52b0d7fdc96e74f06c58a44711635088"
  },
  {
    "url": "assets/js/21.9e8adda0.js",
    "revision": "6fc48576edfa2569954699c1811e128d"
  },
  {
    "url": "assets/js/22.9aa4f9fd.js",
    "revision": "1cd925b35a91cda6ca2a8f8dbea82ea4"
  },
  {
    "url": "assets/js/23.503b2a1f.js",
    "revision": "9aa659a9c75d3e7f136e02f95ec58558"
  },
  {
    "url": "assets/js/24.bafda4f3.js",
    "revision": "da5d1548b2031cced97289d9ec68f1a5"
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
    "url": "assets/js/app.2ce79a0d.js",
    "revision": "fd807e16c1d6327e37e16be71857d1cb"
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
    "revision": "0b35607ec5ca294166c6559b2cbc22e6"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "17663b904026f884f58628cd0fef96af"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "ca97a59e513a8139c31b1853e800777d"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "a4d902837e54a602aefbd6487a6e7f7d"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "48091fcdfd5d723df9f26e5739fbfd09"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "c7eec321254c2d92a23d6ee6f7bcee4f"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "e631084d9eee8a521f304438cf517c71"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "dc01e9bef84fb72289d129944d4c3272"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "d2b442df19e1786054fd384dca0440fa"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "0efbf80964805ffd0b9ac22e76db17d1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "9c38261727e1156e1c837ffc931c2720"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "d352f24bcc10a07ada3b24e4ea4881ba"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "3b7e0129c9dd2dbf0cbe246dd453559d"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "0493246d178388fead157adefc5ad49d"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "10f16a977aa8e4a7d471bc9c6111ab16"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "36b5187566d652584782fd53f2bee60b"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "acb29af0f350e1299b12d69ad2e47712"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "0ebbc3c24346eeda59121c6f6aa041a4"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "97ff7b9c7d838513ad3d6190f057d95c"
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
    "revision": "108e9c9a2302a6acb81860650c1a1b9a"
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
    "revision": "10ec4e637c81bd323620ceab9bcf6ba2"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "a6b66269523c7f3f6f3210c9404ec700"
  },
  {
    "url": "other/index.html",
    "revision": "e1454dd52c65b3aa7d2d18bbe2bf77a6"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b74894d563c14ffc814e280ebabd8292"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "4315d3daaac0841425b07b750d3f287a"
  },
  {
    "url": "other/steam_community.html",
    "revision": "3bdd65b15764e54a5699d2ceb68084c5"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "3264153755bb88177a64942a08860135"
  },
  {
    "url": "source/index.html",
    "revision": "a87b354b7ea91ffd3aec60faffe8e1aa"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "34c36b80b5824aff19421e1f686dc793"
  },
  {
    "url": "source/webGame.html",
    "revision": "61bef387a7d8b82423b81c9ee5f29867"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "4beba5aa424e5c40d867bd4aecdc1b94"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "a7cbb65b38c017c126f9fb140cdf50d3"
  },
  {
    "url": "subtitle/index.html",
    "revision": "4f2e63e4b2b88ee40516208f22572dad"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "98ce1799baa221b13688d86b60d77c50"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "d81644d4b6b5fd274151b73a66492962"
  },
  {
    "url": "subtitle/small.html",
    "revision": "3ba77501dc3464c7ba2bd67b964f9f1f"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "faca8b6ca350e4c31bd1a56032130187"
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
