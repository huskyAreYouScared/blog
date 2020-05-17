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
    "revision": "ccec105195070299ec87ae793d344505"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "2c567ebc28e596a807881d429662541a"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "ace8eb42fe79bd5164d03d05168c2f89"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7b165ac1d8332531fcc857eaf3294371"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "72d3e32ebc9847390d6fbe69afc2250a"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "d763db88dbd27f6aa5b370fef86fa4ea"
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
    "url": "assets/js/18.8567c41e.js",
    "revision": "d8000d2375dafe449e4ca8b49c42c321"
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
    "url": "assets/js/app.1bdcd3eb.js",
    "revision": "4f29ffc22df03aa43f4ba72f317ded21"
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
    "revision": "22729c75f33cf0967614f6db2f65529d"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "cd50cad9706cbf1a989eaa5705d63ea7"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a562653a70d50a2298a3cf0cdf38f337"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "15a21c800de8c5d55f9e940b81dda74f"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "c9e1a7f92f7c443fe14a6da0534d3736"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "f5daf632f868b6dc61330b144f1c56f6"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "4495a854ca4444fcd61bd7dc1dca692c"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "06f6a00dd91794bf3a8924be4041b6a9"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "b5aa2b43ffc5c5ad195d889e107b4bb2"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "6c2cd4a818e75512a93cc0257e59d133"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "823a09621d4a61a01899d0752d01d2b1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "5d4ec79f37950a13e6cbcf40f979934f"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "a40666e02bfbf753ef16938ff353c329"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "1da94875b8bd9d652a5a01b808cdd352"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "cf7e6d322c09809389d6122bd9822115"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "48662a7af31dcb38e6704159df8bac7d"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "c4cce455c10af9dd7cc5592550d7b438"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "604d69eba5ef04724f8df99d1548ea20"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "dcfc64ba6a7dd4541d0e9603a052ad3b"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "71619c3228139f99b419730ad789a1ac"
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
    "revision": "f82203d047c63ac4f222e5d3e9dfde81"
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
    "revision": "42e4b16d65bf4f8c7024c02e5968ea82"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "54004d1c061a8050fd113818b47aa7e0"
  },
  {
    "url": "other/index.html",
    "revision": "f77cbee7aecab837f95f3a2b155b6079"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b5daf96e7128def4b0be28822171305a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "d184e68f798f5c66db604ba3fdee12d0"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c40c4391f9384be27a8c4b3d70d2cac8"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "83562268c07732f8e67dcaf8855bb2e5"
  },
  {
    "url": "source/index.html",
    "revision": "f5c00be9ba30a813468cfbf3ce111bad"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "241a2eb54590e5d669400da05f3e81a6"
  },
  {
    "url": "source/webGame.html",
    "revision": "5b3edd844694d945dc3ee44dc737f938"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "7f1530ab851c9bbeb7af2270611efd5b"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "0ea17e9934629d4c613c6520edd4e55d"
  },
  {
    "url": "subtitle/index.html",
    "revision": "0181d17d91f37324ad57936aaa58e162"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "93fd3ca879625c3a39a73851e58319c5"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "c16057f99c3c3c8aa6a63df4128de118"
  },
  {
    "url": "subtitle/small.html",
    "revision": "6b49a54108f5101fe42f0afe3231afb5"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "9b78ccc9e3dbd3ef4c42101f4aa2cfb8"
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
