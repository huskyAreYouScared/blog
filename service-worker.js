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
    "revision": "d4514472ed6fef26a8fca632f6638f35"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "6c161d83eec57ce9d720779d235727b5"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "48c2198afe1bf612c7ea051a96311f52"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6f16904cccb2b4ec65f640b87bcde5ec"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "616e297fd0c53c99edb9181746957c06"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "17f484fbeeb3c1df66ab72305b5b427d"
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
    "url": "assets/js/app.18ec1cc1.js",
    "revision": "7395e3518b8d63002dd1b147dd6c6675"
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
    "revision": "814fbc32c2c2fc017003eda4e96afa7f"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "7e3bfbd0f4445c5919834dabce91baed"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "6b506c8607aaa4af27890cd391e7f465"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "d4ec6ecb1fe3bfd244d9e2a996463507"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "13f3d140028887a5ef9cbdd461c56841"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "77525bacd47fd2991464e38c7eb398fb"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "21fe2105b14f5a98974f2fe19f2d6477"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "e27490e03672338ec48c4951a12f311e"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "65e89050c373a039a4f7b0dc82ec8427"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "12af6e36d8fa53a501dee1ce17b6ee54"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "d45cc2816a6f27a685dfe9a83d22170a"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "8f8fc85d9414dc7e6a873ff9fe43f30b"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "db216e85c5d9a26c6863329b9ad1693d"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "004efad4f80c0e7fc065373fab7788b4"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "9ef9e6c3897507ed25fb7e51020effdc"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "91efd26d295e87fba5b4b58c63fadce7"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "a47a64a49720ec43eedb9db604f8c0e4"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "c4d45c063040046f9aadde584a0ef781"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "9752e1d39a63c8b1db58f8b67e9dbd8f"
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
    "revision": "5578652e2094bd25478e97cb7d5ea02b"
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
    "revision": "a446e9c6a72e7a9bec660e7155587784"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "1ed606f3bd8fdf2c788554f09154091d"
  },
  {
    "url": "other/index.html",
    "revision": "ea76db029ff6001b7a17907a4af5636d"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "7164e9dceb2340aded9bd5452d684969"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "735a89dbc3c0fc793bb57ff1b7ba0481"
  },
  {
    "url": "other/steam_community.html",
    "revision": "a7980b89fed112c697507f6e7ebf10e2"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "a0c009eddd488ba9aa1648e3cabfe5f3"
  },
  {
    "url": "source/index.html",
    "revision": "78d2da2f5633dc0fe45bd27ce19dbb81"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "982ea824eacad6c7ea9e1265511c8960"
  },
  {
    "url": "source/webGame.html",
    "revision": "7b6655ceba0c36c7c6d036dab5224f0c"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "8e239b10402bc4dbafd0c599967fa23e"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "f3ef01b94f2f1a2931e932c1cb014509"
  },
  {
    "url": "subtitle/index.html",
    "revision": "bd8b4034c15db3ea567d2f7dacc1dd50"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "9f0947ad9eeb411fc3dc758c71ec1665"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "9d7ca53b060ed5bdf8727512f1ba095c"
  },
  {
    "url": "subtitle/small.html",
    "revision": "48b8cb96adec0a1b7ccc177711caa2f5"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "c87449aaee329d33651c626589d7b3bb"
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
