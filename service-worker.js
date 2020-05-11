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
    "revision": "ab2569d011ad3f0e0585516031943eaf"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "736db9b54f91f49f62d627b4bb905e00"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "763ba1e0d3bb07c2f73c3a37484a24eb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bbfb7949b3b92b4b71f31824a98b701b"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "53c4ed8e8600c21c55fec91a4a44215b"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "197fc95390c0449a8accc98033e9a378"
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
    "url": "assets/js/15.2cafa54f.js",
    "revision": "0af97b031ee2bbd7fb030d0de94aaa77"
  },
  {
    "url": "assets/js/16.1349f22d.js",
    "revision": "ec177c26ff66d23a20b392ab3ea3412b"
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
    "url": "assets/js/23.d9df143a.js",
    "revision": "375c8677b1e79c4a46565852f5fcff3f"
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
    "url": "assets/js/46.821cd88d.js",
    "revision": "19845869d8d55c66b932ae29c5989f72"
  },
  {
    "url": "assets/js/47.c3f99bd6.js",
    "revision": "ca66ad9788bc1de6aa0d408dedcf359e"
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
    "url": "assets/js/app.42deb488.js",
    "revision": "ef102048f0b837406a9520101a2f3775"
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
    "revision": "2e04102c2659b39314f0ca6373e3d794"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "974e474bbc6e37cd591be125f9ef05de"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "3a68e3d1e0b9ed53a0cf44709b54b027"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "d7092270ae8bd4f3601cd5927708148e"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "3f4e537033a38d7087a793bfd34a4c25"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "d2a6f26b51ca7ac1e08d5f68844823d7"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "daad0e6e39a49fb8672cbcb253278bbe"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "b22d8bc5da419ae924d2381c097befb7"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "297e015c34cc5cc16ad12f578978a217"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "684301313b7c05d971f1b6b77854306c"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "9f7b697f73d8b7ac7eec24ab7d7153b1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "4cd8d3d76a214c7562aa35460f358573"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "e9fce22f9726eafcf3f3aa82992d10a5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "fd43f6a978a037a1ae95a70df54c6569"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "f887d6149fa61d1eff8f19a575a0d789"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "3838ea7a4061f040740131ad036f4633"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "5e681dc1794516444243778debf9621a"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "be12139bf6871dd38d79d1b903f68a82"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "3231421a32f2e49251b4be540b986fdc"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "41e4cfe7c57baacaefaaede59f392ab7"
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
    "revision": "cb8dc52beb4ed84bb77464d83b3e03b3"
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
    "revision": "2715f5e3ac119ff438ad98a78d327a73"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "09f3d1d6a7e9f796555da118921361e6"
  },
  {
    "url": "other/index.html",
    "revision": "5011f212010eb20f0f2d1812200544ad"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b5fc2339eb1d46290d73fa0a687bec34"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "e43b9dc3e37123c13caed1c41e3b4823"
  },
  {
    "url": "other/steam_community.html",
    "revision": "f48255a34b2767f9ab8efe225561c7e3"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "8713448ca4a1e16f4f8d7a37a8ecf809"
  },
  {
    "url": "source/index.html",
    "revision": "83577c01d56253d54502c29fa7a55bb6"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "b247de521047eda2a0d8f1fd99d41878"
  },
  {
    "url": "source/webGame.html",
    "revision": "bd5cf50f216776fccd7c4ae3c6e9ccaf"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "1e47225117adc7b2bc77095fdd8a8226"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "9e8d8267a16d92f7eebe2cce76f8c55a"
  },
  {
    "url": "subtitle/index.html",
    "revision": "25e0a9f9c01b6e7355755754f2fed616"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "7f6175470bb157dbb3e96e30ffc6f5ec"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "06260e000ccb92e020ea0756c2eda08f"
  },
  {
    "url": "subtitle/small.html",
    "revision": "f9fa6279a7f6d854d3b6d88f2a7521d7"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "656ad1ed9cf1849f550959edf9c20d40"
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
