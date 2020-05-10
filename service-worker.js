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
    "revision": "c35388709f06f24ee4bdba61d5c6e546"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "df7cfaca228f79b767aca7b98a63d1bc"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c527daa883be69afefa24c2596085f69"
  },
  {
    "url": "algorithm/index.html",
    "revision": "994128ff6c3feb8b9f5ffe83b7570030"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "456a5253005947d8257ffb7309fa410f"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "9d4a67aa25d5f9a870164e6c44523942"
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
    "url": "assets/js/app.ec750576.js",
    "revision": "87773e81e71b95ebabf882a3f7aecc1c"
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
    "revision": "112a8e0708d40aa72a93007285352dbb"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "5ae857228d2d8292bee3283774e27f7f"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "3bb221f1320179ad8ed392cc889305ea"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "13c484587706579d2dd9c9d947dc046f"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "4d567c877d1806567fb5c6db460bc0bb"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "cc315218428ee3845f4ec6250c274526"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "3ef20e7b349c6701abbd8af8b0ff085d"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "be4725fe3424f5e9f66c4b1c6d41b288"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "6db7f649c6d48d4ab65eab4e888b8721"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "f5c4584a76657cd9c71c9af1b6b40564"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "35d3585d3bd6731143789c3bce1e81a5"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "92285c83333e318b5c4e4b6ed36995c3"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "bf27149e98e351975486bf6c82ea7cdd"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "63b71322859f5b0393b291d929b59f92"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "245d35789a831b2ddacbb1cfd55f177b"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "5a40090aa56b7c049d138234aaaa5d39"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "caafca3961e3dfaf215115d9c3f73270"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "fec2045cbd26be8e3edac2aadb2994ce"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f766112e457b6719ef142e9affe99ab4"
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
    "revision": "49652c21f6b8aa2159d27c0803fa742f"
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
    "revision": "2e5652a34c3cf51601c23adf8ecd9a50"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "5a081a2b8bf94e01c1a269067d5cd45f"
  },
  {
    "url": "other/index.html",
    "revision": "58a7c67bd030fcf24f38cb5df893bc47"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "4ec514e6ec32fa7ae49192e7364220e1"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "8a3f4c02f828fdaa65725ffc44b07eff"
  },
  {
    "url": "other/steam_community.html",
    "revision": "1adf5e8234cb47c866a052e2c61f06d8"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "4f8f98fbe5d8e0adb58e5bedf8a33b1c"
  },
  {
    "url": "source/index.html",
    "revision": "b937e052d37b1b8a8fc850bf646196b0"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "79f89a15aa321807e9d49e6a1ca623d7"
  },
  {
    "url": "source/webGame.html",
    "revision": "a574c4881774119fc74811584c3a9f9f"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "f53fe7e76be75a048237b435e43da731"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "b427023809c4b78a483a0c2cfef1a875"
  },
  {
    "url": "subtitle/index.html",
    "revision": "d44dad2fc9342b620de4a378a1bc2712"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "3cecfc9ccf3a01ec983cd3fa523d8d71"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "9c64c5cc995ace34b1f3b308287e9b88"
  },
  {
    "url": "subtitle/small.html",
    "revision": "6cec697cefdd94ac76f10a766e49da2d"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "ccb1602d91961dac12d904c70e4d389b"
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
