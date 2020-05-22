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
    "revision": "bf4d6416614563bc112b09678925c1e8"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "cc3554ea669a00f3c2122bee17e37037"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "1cd69e46d08a48224f792cfcbaaba6db"
  },
  {
    "url": "algorithm/index.html",
    "revision": "da0582923273ba66db611a3c44db0264"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "08e6cdf50384909e0d0d6a1a5e911b2f"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "5893d96a497d44816f952102a10a0b47"
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
    "url": "assets/js/app.235202c9.js",
    "revision": "4940503575233256cb2b91a43a7911ed"
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
    "revision": "a6bba5718cf66c9fcbd60f1e1e618d31"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "467edec18300918ae7feb01d97090bea"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "13e4219a0cbbe4443ce3892d9191fd9e"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "151616fb98efde3d6e13a1adf2261cb5"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "7c95546df6ead6c3a4efabd2adfcfdce"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "494f556193eb6866ca6e929a4bf078f1"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "c4594347280808012cd075081a58b263"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "20c6cacb9cbb87fa2b035dc963eaffdd"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "932caf480ef846a78c601ba156df393d"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "1b766fb850418df6ff30cf431c1d1934"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "076c748704f717c89be14946e411ad01"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "f8fdbb2d72c91274a3f1d648889c4e28"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "113923fa5dff25d7a8857c90657a78ba"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "71b1dde4eb0a14273245385706c780b5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "2f4682bd40252a95088ef56eb36901a4"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "269f4e10413f8f0eecd2df391e5872d3"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "68d5503160c63f826ada32f63eab1f20"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "a083b4a0e924dc57b0915451f7779f61"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "34f59e66ab16fe8dcf03988fa55d8630"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "7427eec9b0a871bc79a151eb85d77b65"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "a183ada05388f7cadc6fae0895f258ef"
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
    "revision": "ca3fdba7e455cccf611ea854b2fc098b"
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
    "revision": "155a7958610992e7ba3f222afad108e4"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "c4c9cabbb531b02ca76d59693fa468f1"
  },
  {
    "url": "other/index.html",
    "revision": "eccfb1f0b85155071f1ebec80668612f"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b127c4b8708d00513c26ec64226668fa"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "dfec34694ff8c85ff18ca556d8823521"
  },
  {
    "url": "other/steam_community.html",
    "revision": "580f4876d081943e1f326169988184c6"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "0836989c2a95a71292d51004ffbdd8fb"
  },
  {
    "url": "source/index.html",
    "revision": "88ddd73101cd9be4844d4573c9852ebe"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "02c904b2856891d79c97eabb487c22bb"
  },
  {
    "url": "source/webGame.html",
    "revision": "371999ddf3e3033871f1387b2f7835cf"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "5dd9c7463a9b7d9996ec27934655285e"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "8b00b876d4cf1b1cb7b1d3eaf3ab442f"
  },
  {
    "url": "subtitle/index.html",
    "revision": "9f701c8c00dfd64d75de9ca497ecb723"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "e8b7fd6ef835b99c2c852bc0ac922a35"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "1a830350bb4847ec60d25e4b33795ba2"
  },
  {
    "url": "subtitle/small.html",
    "revision": "57d2aeca8f48d91b1b3d4a01d4ac87dc"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "d4183c8d7807df085445ef0ef793d83e"
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
