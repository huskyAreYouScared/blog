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
    "revision": "bb9f24a20f3e24ef75370d0415968153"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "6d3f4947bda311f3aff8954998e1186b"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "b652f4a48fdf42c509bdaa6c774cb5e7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4c211fce3269082b4a6709d96697518e"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "0760546d66c63e031c408ade29ff0312"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "50cece78a2fc76c07d08576c0a250996"
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
    "url": "assets/js/22.c8fc76be.js",
    "revision": "9841277d9579f5b7e527e4bd3fd0a27c"
  },
  {
    "url": "assets/js/23.d80ccc28.js",
    "revision": "bb9c4087c71e42f44a970cf712a67930"
  },
  {
    "url": "assets/js/24.eeab405a.js",
    "revision": "f3ed5f4e238d6e5b4c10a84d390a05c0"
  },
  {
    "url": "assets/js/25.5898adee.js",
    "revision": "8fec96d91e2ff5c7461a52b11495bda4"
  },
  {
    "url": "assets/js/26.e0b6e26a.js",
    "revision": "939bfc628a478677773a53b28b3c9ea0"
  },
  {
    "url": "assets/js/27.1a6f7159.js",
    "revision": "7847b7b513700ac8e630d9c0e2298251"
  },
  {
    "url": "assets/js/28.20041f83.js",
    "revision": "8395e939077bf1ca1b03fc90979e0b43"
  },
  {
    "url": "assets/js/29.ffd92402.js",
    "revision": "4a16b8a587bc5a9b97af23cda9598618"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.194c1ec1.js",
    "revision": "1d72458d9a5c0c21c1a951f5ea754817"
  },
  {
    "url": "assets/js/31.e84826cc.js",
    "revision": "7dd8cc68366970d9473cf14a9138e997"
  },
  {
    "url": "assets/js/32.aa4a7f4d.js",
    "revision": "6f799104189046ec526e259f1f16b944"
  },
  {
    "url": "assets/js/33.0ebbe6be.js",
    "revision": "d47c8ba9224e37562f386a956ed77ce3"
  },
  {
    "url": "assets/js/34.44482e43.js",
    "revision": "9ad4f58055d42a2b8ed0eabdf7ceb061"
  },
  {
    "url": "assets/js/35.a0fa2463.js",
    "revision": "b887be528bf5d257f08ebd9df69616f1"
  },
  {
    "url": "assets/js/36.b918bd0f.js",
    "revision": "ffdb36bdadcd5a46128eae8de3d7e475"
  },
  {
    "url": "assets/js/37.a52733b4.js",
    "revision": "e8a5246b00d4028175f9fead3a0782cd"
  },
  {
    "url": "assets/js/38.1305e1f4.js",
    "revision": "239409053e819c900b2f6d9169aea8cc"
  },
  {
    "url": "assets/js/39.d06788e0.js",
    "revision": "4b51202235a4e9294b2448a80bebe1d9"
  },
  {
    "url": "assets/js/4.4b1bae29.js",
    "revision": "ed65e7f7d4ab61d1d3652b49d1c9f8ad"
  },
  {
    "url": "assets/js/40.145944ef.js",
    "revision": "dd5743c9fbd83b40f1b7c5ee49bf3fe2"
  },
  {
    "url": "assets/js/41.09645db6.js",
    "revision": "b29e419ed6d0309ea9cb3917f17e626f"
  },
  {
    "url": "assets/js/42.16ba1c44.js",
    "revision": "254ee6dc95f5472306c9f0c16676d2f6"
  },
  {
    "url": "assets/js/43.d80e784c.js",
    "revision": "fb7b1b9b1a135463816e505199409bd0"
  },
  {
    "url": "assets/js/44.be8656d5.js",
    "revision": "47ae09e61aac08b44ddc2becda00d9b0"
  },
  {
    "url": "assets/js/45.c4468d12.js",
    "revision": "72c8b0a6582067cb914f9fc36e4973f9"
  },
  {
    "url": "assets/js/46.ecd80667.js",
    "revision": "16c2c6015d3e644f9520ca61fe0371c6"
  },
  {
    "url": "assets/js/47.7784c0cc.js",
    "revision": "ea769f629bf8310c7955878022320cd0"
  },
  {
    "url": "assets/js/48.2563df7f.js",
    "revision": "c815619d8f3037b0881dc95458dc2082"
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
    "url": "assets/js/app.9234e3f2.js",
    "revision": "80476a41220d79a0aa6503d6e2c67687"
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
    "revision": "7b2c56a38e5f4dd7058278280eb04220"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "4526295117eb1c1f33b0c715eb1377aa"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "8dcd34c3dc8ecf5869daa10d99ba2029"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "3e9f708d3054096367e9a0d464ecdf6d"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "9c8aab0fb6e8dd2e5ea370fcd3744949"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "37e7a803e3c113063039c69002eff09f"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "f48dc395b493cb82b0f1ea81e8453df9"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "5f01395ab39bf2f5f63a89291a2691d9"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "cffb75270afdec8112ca4337c7d02ead"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "6be58f685ea7e53df6517705d0d17161"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "e38e2221370c637aa75f6e0d6b2ffb33"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "ae86f8018d82c8e2a63ebc1e52905c6d"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "0741a58ca35d4c9e9e5fc77fe1588be1"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "604d08bd9232eb6eb448490c67e72ab3"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "bf6c6a885f58b26e9567631c928a4f77"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "e515844c552e4533c69c4b73025b05ad"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "1a2093ca59cccdf34e2aa9b97540819c"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "b4ca0ba8fe6c841d34e74e874ccd2863"
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
    "revision": "ffb352cb191b2da05a082119df626218"
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
    "revision": "45385c2cad20293a8b4872bce2b130af"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "c216d137c5bf399c192143944917f42d"
  },
  {
    "url": "other/index.html",
    "revision": "a3c3bdc83ba876437b68912ee2c20ec9"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "409af3d3033b880b66f3974f85752228"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "3dbb3fc79f711947986c96cc8bbf4119"
  },
  {
    "url": "other/steam_community.html",
    "revision": "9ab7492f96f0d615a42b6d024df27079"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "680555b083a8079d9afc8d7a9fe4cb92"
  },
  {
    "url": "source/index.html",
    "revision": "5a4a90120dfc363992d4ea6c5c7eb8f9"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "d741e9d463da4918ba7d30262015620d"
  },
  {
    "url": "source/webGame.html",
    "revision": "4d1bd85e928a52b4e8e6c6bf38944558"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "70f99b522b2eb156836de5aa4fecbe55"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "87e7a5e235f419bcdf1e22d43384f112"
  },
  {
    "url": "subtitle/index.html",
    "revision": "90134997d7e4cbc301fcfdef9fb2206a"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "0e70183fd4bc52f00c050ca01241db7d"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "1f91799be9cf8f8a68a2125f95cfde50"
  },
  {
    "url": "subtitle/small.html",
    "revision": "6e45e73720c9b1e88b72d9932e1843cf"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "baf3ae3c9de56f54762f0a89c6b02187"
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
