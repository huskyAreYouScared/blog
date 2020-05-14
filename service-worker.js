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
    "revision": "b31ed4fcee2e87815077f628b35ca640"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "8bd19b65cd96da0bf7eb1ea5fb5b558d"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "fe6b154214738e44280237c0b4d69adb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2c902a23e75e5e16214731bbd9df1a38"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c1d09dfd1d2cfb5fa1521bd95964b654"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "d678df9e5b722d17c1a7fa4257ed4ac6"
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
    "url": "assets/js/45.64280cdd.js",
    "revision": "91735b37e6b722e149825af9c8c854e2"
  },
  {
    "url": "assets/js/46.68e6e8db.js",
    "revision": "3af32df387fcae04c5eb76b31da98a4b"
  },
  {
    "url": "assets/js/47.c3f99bd6.js",
    "revision": "ca66ad9788bc1de6aa0d408dedcf359e"
  },
  {
    "url": "assets/js/48.3f4ec32b.js",
    "revision": "9c92bb8c559ff8f51c7e67c8d3371e56"
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
    "url": "assets/js/app.79243fb6.js",
    "revision": "4727cdebde8f461fa6f71ef7ae824c20"
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
    "revision": "8105953f0c0a9b35911e3d10e260eda7"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "f3de6198af7b726b3d8c4bc3dee037d1"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "6552d7c104691dd36899f1a63ac77129"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "bbd38c9fe7c8f7e90435b7f081fd226c"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "eb17d3c0c2cfbe81c596085e7cbc9a6e"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "e5803a2de0e8c204c0da635d9b077c04"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "158dc93cff2cf0bc055b607d6064be1c"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "89462b2b191fcbb8957dd8787bfa8d6b"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f74a1c2e0e131c699f14a7a84d385933"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "085a55d776e5bead58708748739e3e13"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "6eea9d896a4c1231c29961c7c6d3e67c"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "e762acc08dab69101f96b530b2a09c90"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "7ae4bea7679668edcb697d415141bbe9"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "daa3d51e687fedcd08169b6391fc942b"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "772ff0ba055e3c4f208b2567a9f83e2a"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "1261341ee6bdedcc94664e9c691cf455"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "1750881a669483d44b3606cd1d6da46b"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "9663d4b028a7a60ebc26584af32d726b"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "d87d6da6c9491e0ad0a674eb998398bf"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "198bc7630c0d9bf4cb087d4722b957dd"
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
    "revision": "b41b414c9742feb7df7e93747c95254e"
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
    "revision": "3cdee2fb0bf4baba2f5b25e0a6236785"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "0296fe296dfe8666f202f3ca30d61939"
  },
  {
    "url": "other/index.html",
    "revision": "22056ffdf4b4f887d0023ea31b99e699"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "09d5014c9ec1bcc48e00639f4237c8cf"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "5247889df6a8cda55e29a3e00d11efeb"
  },
  {
    "url": "other/steam_community.html",
    "revision": "0289ed074365a73b49031dd520db7209"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9fe01c7b65ab1f18062b3856e697a28b"
  },
  {
    "url": "source/index.html",
    "revision": "4aaee735c025ae01c820138872430936"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "5fb5b1a8dc83297bdd2b9db5ae5d4b29"
  },
  {
    "url": "source/webGame.html",
    "revision": "fb0eaf55fc14c8a06c30209d0c86e3c6"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "ad58fa67c1f9b2d680716ceb89bd7ad9"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "5ed339ffc814fa4f5322ff264a9cad90"
  },
  {
    "url": "subtitle/index.html",
    "revision": "0a19ff48d0eef1d8b3feef928f6869df"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "851813b4ed61891a96b587e4a6ec2f3a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "63f6d6db9b95b62b7258e379fc18b462"
  },
  {
    "url": "subtitle/small.html",
    "revision": "1fe8c96453291c52c8048a60e37ad6e7"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "b043d6dd65eafd4b2ffd73b03a3d981c"
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
