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
    "revision": "213cd3d96f73d3130878dd1ac5e97a77"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "66ef0d295e96a8276c6ac6797c4ef20d"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "bb29d4d9067e7bbb28fcd6d83f5a8977"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c9115b2eaed93b7337fb3e68b8395feb"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "088d8b2f0319b9fa13488a63450f5ea5"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "466f1d19136cf090a887c3b68b7698c9"
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
    "url": "assets/js/18.aac35d67.js",
    "revision": "36216845af17f468c9983d1795f00748"
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
    "url": "assets/js/39.6f852088.js",
    "revision": "6f054cbcea6c5b87d3ad23ac93b28d54"
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
    "url": "assets/js/43.53fcae96.js",
    "revision": "dba5a243c0e31caaad77ba238a60d3e9"
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
    "url": "assets/js/6.5b06c5b9.js",
    "revision": "c4b5c1ef1fc6f8f9c464943edee7a6b5"
  },
  {
    "url": "assets/js/7.406a1075.js",
    "revision": "a1f634b4e13dbd36ebd4263a2e043220"
  },
  {
    "url": "assets/js/8.fbeb9537.js",
    "revision": "9a27b2c42e3e0cd2f18d04a2af4aded9"
  },
  {
    "url": "assets/js/9.42cedf29.js",
    "revision": "3d222f65e8d0769812900d466ef74206"
  },
  {
    "url": "assets/js/app.4be8cc0a.js",
    "revision": "04169717880f7844b8054b2583158ca8"
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
    "revision": "490ca1f7c0e6c8db1c1431ddc095cad7"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "b7744e7b0ec9368b8687c058cc7c036a"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "51d11a09ade29812c2ce50ed557c43e6"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "a81ad4586ce20ecd91024ca3255a68ab"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "116b0016eb53cd4f48f239bf9f08c558"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "351d418f38d99c11a8d4aa466ec57c12"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "bf32f40f7a5f2c309b1b0fa7d123d5c6"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "d12b50ad092314a41e66a3d24b146bc1"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "ea3801fdfe527e4bfed1b59e90e6974b"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "170881a2bd445bcc593defe5436f6d00"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "f2c8291f3ef795a25f7018791a232dd1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "195160cffde785aea0d935df12c0245f"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "f505a934f73174dcfeb5854970d14aa5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "3e2e9a3aa52ff8f77e5bf9218b898fe9"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "8a7faa1c574be652b2016c974e50fad0"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "6d62079dec3b2d0b6eab4c261a8f97bc"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "8bf80b38f98406545f854dbf14393b8d"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "ac4782c44c03962b0a47a549f6ecdcb3"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "251032a2683e64e709689d502c7aaaff"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "821fdfc9bba76fdbc172bfca52f42e17"
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
    "revision": "0b247b79211003b071f81b77e4ed687e"
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
    "revision": "d10fbf6cc88db98c4e0df0a96ed161d6"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "6cc1bd52b52b784c5543454dbb021116"
  },
  {
    "url": "other/index.html",
    "revision": "05897e50168f44df2162dcd7686363eb"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "65a505c33df29cb06849ce2d291bbde1"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "9cae7ad72893679a6a6ffc5e5ddb382f"
  },
  {
    "url": "other/steam_community.html",
    "revision": "377ccf14e396b387e27f4bb3ebaa169b"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9258d086dba450ee3af7962f379015c6"
  },
  {
    "url": "source/index.html",
    "revision": "d35e1e30e0c701b6233552156168846b"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "241613114fcff4d5e4e391e1c3bd5b8a"
  },
  {
    "url": "source/webGame.html",
    "revision": "ef9c84a7bb8db8f7fb3a3d35700476d8"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "d7a347eb3eb04c0beceb3a3fa735ad7f"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "d74dc1a12123ddff93474f176542cb1e"
  },
  {
    "url": "subtitle/index.html",
    "revision": "048eedcb1edc47950fc31f8602b05926"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "73d3d3091581991e99b2b35c7b9fd483"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "8c4749273f36e708b23de2e6374f4ae2"
  },
  {
    "url": "subtitle/small.html",
    "revision": "51973e7aad9850857bf978c2965b139a"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "0e7a8e280c7ff9282e1e0ce7d5d00eda"
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
