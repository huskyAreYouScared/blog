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
    "revision": "2f9649bbcb29443befec5bb261832970"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "f9831a66751506ba956a5f81d667c44d"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "01dfba3e4e293ca0f289a5bb020642cd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "160c8269c54505465a449e95080cf15b"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "ddf60dce20f46ca2809b42af721839f2"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "a15878d023af854c28da75d63b9e8283"
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
    "url": "assets/js/16.26dd7d21.js",
    "revision": "84bda7cadd15ceae47f8dca1de9aedcb"
  },
  {
    "url": "assets/js/17.b668669b.js",
    "revision": "c5fb4ed0ffe263a5277bf787e5cc0ae8"
  },
  {
    "url": "assets/js/18.0c6fa958.js",
    "revision": "43bd8bd1bf4c129d704a1b61ec219a79"
  },
  {
    "url": "assets/js/19.cb70d68b.js",
    "revision": "f70a9975ce2eedf56cb08c694a905f64"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.49a848dc.js",
    "revision": "3bcdf9e1357dd80f15140f39e4f0b90f"
  },
  {
    "url": "assets/js/21.836f5dd8.js",
    "revision": "37b75579e16601214d5f82e854222436"
  },
  {
    "url": "assets/js/22.0fe6f88b.js",
    "revision": "ae129b610eaf082e5f9d073f42267249"
  },
  {
    "url": "assets/js/23.d7ca5728.js",
    "revision": "45690f77c33eebd6d2098c261b955b48"
  },
  {
    "url": "assets/js/24.00dd2b89.js",
    "revision": "7ce508b70efa7873a53e9283f2f60699"
  },
  {
    "url": "assets/js/25.35f0ff68.js",
    "revision": "547a5e1d89cc311c06a3425257f44a49"
  },
  {
    "url": "assets/js/26.eabd6ba9.js",
    "revision": "38080315fd7baad595d2da051d9636ce"
  },
  {
    "url": "assets/js/27.a8299c9c.js",
    "revision": "4b9f8ddad660957f95ddc69dc10fe0b0"
  },
  {
    "url": "assets/js/28.d977fa99.js",
    "revision": "eb46c0b61f93ce0cb1375a974e93f37f"
  },
  {
    "url": "assets/js/29.e8e5d304.js",
    "revision": "d49d7e5f1e3ec87ff710dbab02d56eb6"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.62ac0c21.js",
    "revision": "dc6eff268b6544824b8f61561c6f1663"
  },
  {
    "url": "assets/js/31.4e470145.js",
    "revision": "453322c659e9a3027979f3b199a1ee11"
  },
  {
    "url": "assets/js/32.00313c0b.js",
    "revision": "98167059fd6b3603a15fd7dd6816ced6"
  },
  {
    "url": "assets/js/33.0b3ed5db.js",
    "revision": "eb07c74d9d186255428cdfa718b8069d"
  },
  {
    "url": "assets/js/34.8ccea506.js",
    "revision": "c693caeb3732bb602437cda4709f416d"
  },
  {
    "url": "assets/js/35.aff67702.js",
    "revision": "3b92adebaee1c95c0d69468fd981d3a4"
  },
  {
    "url": "assets/js/36.a3d9357d.js",
    "revision": "708257c28a5f0ff6869c4eae02e2c119"
  },
  {
    "url": "assets/js/37.bfcae6a8.js",
    "revision": "74bc21a9fb00fadbe1c40ba5a6a0b1aa"
  },
  {
    "url": "assets/js/38.a6bacd85.js",
    "revision": "d14b825560581a08b334c33a8183f343"
  },
  {
    "url": "assets/js/39.0f7111e3.js",
    "revision": "1ab1999cfb3cf405317f6dbdaea29d95"
  },
  {
    "url": "assets/js/4.aecf9319.js",
    "revision": "6e5b3534c98cf90edb6118e48b99a9f6"
  },
  {
    "url": "assets/js/40.3e690c5c.js",
    "revision": "07b33e4c7ee36f9eef923794cc67ec7e"
  },
  {
    "url": "assets/js/41.065296a9.js",
    "revision": "c77537407e14abca5897782a4da2890c"
  },
  {
    "url": "assets/js/42.a5326732.js",
    "revision": "6adbacbac897f3ed1c354e99a4576aff"
  },
  {
    "url": "assets/js/43.c55d5ecc.js",
    "revision": "8e0f60010cbd89418d83ee01ffa34e6c"
  },
  {
    "url": "assets/js/44.fa654622.js",
    "revision": "5de18edbc3c92a4c1941f97817f8454c"
  },
  {
    "url": "assets/js/45.df925f32.js",
    "revision": "192a96f819a1517ff20cb96580286e25"
  },
  {
    "url": "assets/js/46.b68f2f7e.js",
    "revision": "281f7bbf634740e6c2dc95c01ee7d52f"
  },
  {
    "url": "assets/js/47.3c02559d.js",
    "revision": "034772ced9c61d5d7b1f7a46bf09eccd"
  },
  {
    "url": "assets/js/48.09a16015.js",
    "revision": "d867cf2857f66e816ef997d1cb63eea0"
  },
  {
    "url": "assets/js/49.c55a4c92.js",
    "revision": "f4e72fd89bb42e678d14c30b7d66e2f1"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/50.53b1742f.js",
    "revision": "c389d9dbc603921e326abe64d4d90f97"
  },
  {
    "url": "assets/js/51.0c7fa282.js",
    "revision": "cdc6b1ca12622f7d352b3522ca45bf09"
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
    "url": "assets/js/app.f1c58d5d.js",
    "revision": "3f82ae868fcd6699dd0eba4ba4b884df"
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
    "revision": "f18ae136bda87604a05f15a9fd58a9fd"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "be0e492785b72cf1027f25ae362ac379"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "8432890bc321b13c527ed38d3bf1a0c6"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "bb6cbe70979297525cb801f42d918b64"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "1a5ba5920c45e5a2d0cc8eb5039b4f60"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "60934e58899a7cf72d4c9ad8fbd28af6"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "fd20eb988e57d3dbb0a49dfeb585200a"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "b8fe675695d4e668f8b051f3cacac8cc"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "0df3ecdb2048c2d66cd883314dc4aadc"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "8fe530a9f68c95e19332ebaa54519098"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "79c612acc76afb54bdff415a532ed900"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "746cdbce8994eb261bc30e18f83b45a0"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "4cb7deeffde5508efb04361f7dad3327"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "c66ada9f4d31c0cadca924952ab767cf"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "658ff3409b850f7b47d95b16d077681f"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "dad69d68083a0db9d39f498b6d117a39"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "3c5dd627196124d4192da53b0cb6b02d"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "caf263661087d0242e7ce32e0c057b83"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "4180e749adcf59add33584eec1dcc144"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "34019b1519b55ececaf70dfba0e7cbe8"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "51f4730926049b6c814dc2aeb48c6a7c"
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
    "revision": "eebab5f3799a40c9feed00ae3ca729c5"
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
    "revision": "a4f6b972fe4eca64181c1de311df8d8e"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "3dc33706913129657f9d5836a8b9f0e0"
  },
  {
    "url": "other/index.html",
    "revision": "e1dfcb1094d97d57fcbfb2f420d9b629"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "25a3a89c6412522a416701566a7fd0c0"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "d4c3356261d8dd231905e95949d1ea9b"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c5a114bec5c7d5a60e2d00e69ed6dd72"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "ac4237a925b7b92ab80168b8bfc79f11"
  },
  {
    "url": "source/index.html",
    "revision": "5196b45f2de04d05a7addf23cb248cd0"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "5e81b0f10268b5520bcc3b2fdfd9d68e"
  },
  {
    "url": "source/webGame.html",
    "revision": "cade85b7d3325fe3185162641ad87482"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "9e547313b235bd0e67d98b5b32b6a2fd"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "6b98c5415463522423ebb128f74d37f2"
  },
  {
    "url": "subtitle/index.html",
    "revision": "a51219f8552fbee156cb7c7150ee5b94"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "a570941c914d7db1c7e75459dd4f7e06"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "41011bd0c43a1a909e1cb2f3f7c6cf4a"
  },
  {
    "url": "subtitle/small.html",
    "revision": "d1b019708de71d9ee33db7c69c2066b2"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "aa6b56776ea5bbb41a7fb1c3e1820060"
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
