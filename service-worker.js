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
    "revision": "c320faed18e062661052ee1c69435b1e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "dbd629ceaf31e95704446bee9531c8c4"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "d38ff9869a708211ff24ac23868de01d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "377fa17ba5c3414c08db0dfb61b8c6dd"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "5d1580b5f9daf5b97a7dc2953783263e"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "581647e07835b534d21f6552aecc34de"
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
    "url": "assets/js/19.824ad453.js",
    "revision": "e55da028888ce1db871c2597f0eb8485"
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
    "url": "assets/js/40.319be7db.js",
    "revision": "e4fa0d842d22f9cfe46b6555b6881861"
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
    "url": "assets/js/app.48f91885.js",
    "revision": "bdec968c38ce0c970f96303e2eae1f55"
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
    "revision": "91dc151f73b9a8d5551e413acfa78c4a"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "10f1b73e32034f9a7f2c7402158f66c9"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "e10c2f4e0a3f86819c1caefbbe698661"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "466cec383041ba259c56a60f912cbb89"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "aeb7f7239614a5003f08e9f656aa2235"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "707ab9314659114b9b396277f23bdd0d"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "5a3cd368cf6e7b4166981d96c21380b9"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "d5a235df88fe03267d0442d40962ed68"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "dfe8eaece677b01b399debbcef17a84c"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "f9aeea8ac274d7b03a071c8313fd1333"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "3d535cabc4c157587485a73f3ed6b51f"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "238b9a21c856d80da21798d146e28093"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "275166dbac0e04ab4a20abff1f69174a"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "1d55546417c1ecb7504aa6f288216dd4"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "f030fb1d45bd4390180a884e63b95b8e"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "b34f5b24636077d17dda2322c6a6d6df"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "6a9a5c6ddf10baa2d4aaee761b98af66"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "72ddc5b1fd87300a86df766084942330"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "a9733d3d638f063aab08df641098c5a2"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "1d165ac43f998849dd1619d879ecce94"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "204c12c8e22f9781664f3db2aed84fee"
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
    "revision": "474bd37d93ff2b951a8a06b271c44db1"
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
    "revision": "32f9714df033662579d02e48f5f73fa4"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "2e9a06428ff390b6b40ffd3e21f71b9e"
  },
  {
    "url": "other/index.html",
    "revision": "c30a5605e52e2d33c68c3f93a7bf76c1"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "46a5d26557ae5a8c5021878627b58a43"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "c4c46e1469529a582dfb9c9582c41778"
  },
  {
    "url": "other/steam_community.html",
    "revision": "2b5182007d2173b891c2c4ef524c4037"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "a3af9c140432ab7cdf101c9ad77990b2"
  },
  {
    "url": "source/index.html",
    "revision": "471cf736fd34a929534b106832952cd5"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "1ce005a04ac2863dbcd8da1d549ca88a"
  },
  {
    "url": "source/webGame.html",
    "revision": "cb2aae2f753689fad5ff9d55c0882784"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "013e4dc06a57d3e036c14c01ab512132"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "49b8fb8916eee808711c15d4e6981295"
  },
  {
    "url": "subtitle/index.html",
    "revision": "b3c1d8c96a9f14e8f0c3ec60be719fc4"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "4ba42aa6b6df43626e8d159eb52e81cd"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "94310e74616691817f43b84b505ddc54"
  },
  {
    "url": "subtitle/small.html",
    "revision": "ea04a0239bf1bfa01b44b7f8d457a4cc"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "34aa230f94da195b5fff3e1ffba28d5b"
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
