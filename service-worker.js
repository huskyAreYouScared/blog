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
    "revision": "cefbe75a4d2ca9c43832fbfd0552978d"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "167a42674da68d0e2a70420c0392e686"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "f2453de07ececead7634095e410f1e33"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6ffd42637c7980fe9839eb046c3e5765"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "b81367d668063c02d8e62a3c71e8ab96"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "7d7b483dbca0c85b7c8571cedfffd544"
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
    "url": "assets/js/app.4e91ec55.js",
    "revision": "d224e75af1e6a1929bc54dc6a0b2f206"
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
    "revision": "ebe00f5f52133b7eb1a572761db0e725"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "f246cf334ab5a3b5a7bffc3ccb04ae14"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "ca71709c8ce2329c4eeafe5a0e0e07f9"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "9e33dc8b23427b291d8c1e84b76b896b"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "af9b2a6310c8b30b53afda16fb4e1810"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "5f44788a649f65f83384843da9ff8c66"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "099bf90adcd1a5a9d213c016c30807e0"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "167f55da3c5a1fe9c9cabb747cdbc854"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "06d3a1d1e3efb3ac7971d4a3f1e00e80"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "5c02ef5688450f649cd39cc011eea431"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "d8ab7aa263b2a1739d307f08acf298df"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "9b191a9a022b30e086e4756d7331cd4d"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "a54940505e1a8292245b25c397405e3d"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "16f4ec10bb4e15068b439ce474d49423"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "fcc7ed4dc04e3d3793da776bc186418f"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "69129724cfd5da4494820ffa3512e65f"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "d27d7bbed2106498161f23c54e2fc91f"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "d2fd363483700a222b8482404b082791"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "e233e73315e808c91b2065ad522d1c00"
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
    "revision": "78803b24abd5b7d75640a0fa69a086e7"
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
    "revision": "0bb537507edcd0f3b9acefb67a5f2871"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "364ab4787f7aa87e11590f0c36acbb39"
  },
  {
    "url": "other/index.html",
    "revision": "8d512c782ec8c64bcda69d77fd7bf922"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "98d5c239b12306ccc268c84cc9557e98"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "20cecc70b76b7140c2956018a479e29e"
  },
  {
    "url": "other/steam_community.html",
    "revision": "b14dc734f3ed833e4aa7f949d75bf631"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "1e415c5b98c6d801b9a6f7eca0d8d617"
  },
  {
    "url": "source/index.html",
    "revision": "f014e827c4560a393906aa5c723489fb"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "f82d54c3da43618de90eaacc80609263"
  },
  {
    "url": "source/webGame.html",
    "revision": "b1aa4580552b4b3fb3af37be02fbbcb9"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "a1a21c9acde78906e61a5547981480ae"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "268ac22f6657a6d36a297ae5da66a779"
  },
  {
    "url": "subtitle/index.html",
    "revision": "326eba846a4d06aa4ab8b33322ca31ce"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "0e1c73a7694963a2450e0766b30807ed"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "0704f051c119a44f338631acf5d186e0"
  },
  {
    "url": "subtitle/small.html",
    "revision": "f93302c987692b0a065ba74e052438ee"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "a6fb5e7cc3f235ed91e048ee5980ae94"
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
