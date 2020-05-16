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
    "revision": "8437ef8478bd7a79f08f31a4166250a5"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "e8fc769c9d68f0c863d826c5373eb4b0"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "8cfd043db2e2efb1ae5f4a4a6b7ee125"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6dc4a907999427a08cf20f40e7212748"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c21194b6163f0dd1ea118aee9d5db440"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "b88daeaa60890817778a475b6093e027"
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
    "url": "assets/js/18.759cd7dd.js",
    "revision": "5e9a6a9978ea6e20567cb0907682aa2f"
  },
  {
    "url": "assets/js/19.745c5478.js",
    "revision": "84bbcf5391992c9782e0e4d98ca47062"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.b05c398e.js",
    "revision": "ae98964154b32b17eb90f9d8ed357624"
  },
  {
    "url": "assets/js/21.d9d2af2d.js",
    "revision": "08cb3efe4b668569bc5842716cf76f0b"
  },
  {
    "url": "assets/js/22.c89bb9e2.js",
    "revision": "9e49df2304e103d1f112c29a150c2219"
  },
  {
    "url": "assets/js/23.2ad613ef.js",
    "revision": "4f9e3890db4f77d97557dbce28e689e6"
  },
  {
    "url": "assets/js/24.99967191.js",
    "revision": "a22221534009ba5546a21e9bf84af449"
  },
  {
    "url": "assets/js/25.ddec7ba0.js",
    "revision": "9e952ff50932b0a18a8762a2251b13db"
  },
  {
    "url": "assets/js/26.a74d280f.js",
    "revision": "5e96c1446269d04400e679c095921fec"
  },
  {
    "url": "assets/js/27.e792018c.js",
    "revision": "9ad5569c0374fe3701922b01c394da6d"
  },
  {
    "url": "assets/js/28.25d95f39.js",
    "revision": "fcd5963dfaa3956c7a237a754d19b540"
  },
  {
    "url": "assets/js/29.0151d9de.js",
    "revision": "a06c8f632412e3a5de505151ae960ba3"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.ed340a9f.js",
    "revision": "fc21f189507f696f3c4683a702f0a9d9"
  },
  {
    "url": "assets/js/31.d90298bf.js",
    "revision": "2eb1c77d21a7193ca08a46d99926c737"
  },
  {
    "url": "assets/js/32.719a3f0d.js",
    "revision": "5392225fe76edaddd332b99c4eba8f22"
  },
  {
    "url": "assets/js/33.a6f1bf2f.js",
    "revision": "3fdf569f38da5bb4c4a1c2c33da9220c"
  },
  {
    "url": "assets/js/34.7a04bef4.js",
    "revision": "a677ee72a27b01e5a405e290b018458e"
  },
  {
    "url": "assets/js/35.99375bc4.js",
    "revision": "87bd44bcd1bf4be96115ce1cbff2b671"
  },
  {
    "url": "assets/js/36.46924abb.js",
    "revision": "a7883e9887eb5ea8bad59d90432469df"
  },
  {
    "url": "assets/js/37.1ea99c29.js",
    "revision": "edf414d48c0cfe0858ba81f61ec48d8a"
  },
  {
    "url": "assets/js/38.bffe86cd.js",
    "revision": "ce68fd27288a90b218caf8931f805a01"
  },
  {
    "url": "assets/js/39.8614b503.js",
    "revision": "83fb42f3182e2d8d504d3d7caba5e1cd"
  },
  {
    "url": "assets/js/4.3a05be08.js",
    "revision": "30b428f7a7c1e16776d70e2d1e523a30"
  },
  {
    "url": "assets/js/40.41feb1fa.js",
    "revision": "707640406034f309ca2cde246aa0917d"
  },
  {
    "url": "assets/js/41.01e527ab.js",
    "revision": "e6748c197f0e66b8483216668cf8a04f"
  },
  {
    "url": "assets/js/42.c7ba53f8.js",
    "revision": "53eecaf8a6be42d605a9d84332286545"
  },
  {
    "url": "assets/js/43.7b6ba28a.js",
    "revision": "c1d18e7ac0104e1dac9a6a2d14da510d"
  },
  {
    "url": "assets/js/44.2e78f8ea.js",
    "revision": "e7a2399bbe63cd3f6e75a939d064212e"
  },
  {
    "url": "assets/js/45.5e193828.js",
    "revision": "ca2ef25f99ec9253d22e3dce64de5cab"
  },
  {
    "url": "assets/js/46.470dc77d.js",
    "revision": "c03afdcdf7e51dcbba29982fc8f102fe"
  },
  {
    "url": "assets/js/47.1b008b6e.js",
    "revision": "b5cd9db3b0e3417cd671933b90c2a0e3"
  },
  {
    "url": "assets/js/48.fa2e254b.js",
    "revision": "2c64eec55436624664226d1d695d1b15"
  },
  {
    "url": "assets/js/49.0a740519.js",
    "revision": "798384935c7092ccd9fd71da68f52c4d"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/50.d5120c80.js",
    "revision": "0d90411d22f8f28419addddc0db59cf1"
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
    "url": "assets/js/app.0d992f43.js",
    "revision": "09cb8309be264d8a5f6b68498cb41ba3"
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
    "revision": "65cc45b7d0c34fff8fc6678b98bf7e2e"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "e4066abdf3afc0a3103753dc82cc753f"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "b45b9c2346dda248c50a103c6d89f38b"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "83f41486d3e5591b7e72aca4caded334"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "b35693b7c8a344e7c40cf11768fcaef1"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "64e026533265b3adff89d62fe01f08f4"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "0530540cfece7996cb1dafb5ee45283b"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f952e933f976ced84611c641268e2291"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "086a045fa0566160fafea3bf3af2e130"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "40243ec296672666aff8b09e544bf23e"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "d275ff323d03cb577656b2565737413f"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "8f3fafb0abd6a7dc8f876386330ab70b"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "a7d987f9b8ba318b757dc851c31fdaed"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "47026edf490244053e5077e7eef50a0d"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "055e3c160381e245a61cc1983ea7e5f4"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "3eee536985aa0d4b1676b99dc49767aa"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "3dd7112a9a82c7497abdc1166476844c"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "2cf82f549afaf0761d9f3513678e1def"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "744ef950dfdd22d5be8212cfa0f246fa"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "e8ed41c08eb8c0e63bdb3ad6f39605ae"
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
    "revision": "c228f378f5396321f4a4990f56f3ee02"
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
    "revision": "a9a1fdff9e84aaa11f1232bf8b43d5f3"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "3928418b616b93f3ba14d80b2af4af83"
  },
  {
    "url": "other/index.html",
    "revision": "e5416ac04b6358076f225380604c86b1"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c2c94402a7e2cb914c518714779d7d59"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "50e8dfd7d4b649058e55c4e369ee7989"
  },
  {
    "url": "other/steam_community.html",
    "revision": "07c775fe0ed45722096ab1b048ff35fd"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "1a50b4731d8e8bbc3b2c000d046cd767"
  },
  {
    "url": "source/index.html",
    "revision": "7d011f438eb6a0fe2798924a1892975f"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "6b68fcfc53c69b919bb8d71de6c13023"
  },
  {
    "url": "source/webGame.html",
    "revision": "9b254f6c62a46b0d9bf0e6d86b355f0f"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "271718546306ee85fd940536331b0189"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "01b4c0e78b78b87d2941fcbe8dfdcef9"
  },
  {
    "url": "subtitle/index.html",
    "revision": "f42df655d111202e9943cf9f62e2c896"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "e694b2cacd63cda77fe2e1651681dc7a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "b513e8131eb89a64d6c2206b4773dccc"
  },
  {
    "url": "subtitle/small.html",
    "revision": "e7bbfce37eadcaba0825ca75393e8636"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "1925bb6fb087c36f39ce2c19bcc9a6ed"
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
