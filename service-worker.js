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
    "revision": "97fc785e6464a7e7ab316fcb99df3357"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "eda870277ce76962b82a33224c764acb"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "e81cd100303e836a7e2e9859477c48be"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f5e0428ab95b48e37d441da6202b31ce"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c222cb6df51b8e5928942ca81f6da554"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "b2514bea26df0fa724ba2c61c70f4659"
  },
  {
    "url": "assets/css/0.styles.fcf31fcd.css",
    "revision": "30cecc010ede11de4ca60ee171cf4f87"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.509ba014.js",
    "revision": "e8b6ddd97144220328cdcb0ae0ce4163"
  },
  {
    "url": "assets/js/11.3330ee0a.js",
    "revision": "6edaa6628aafafc4e87140ae7de1ee5a"
  },
  {
    "url": "assets/js/12.1877d4d9.js",
    "revision": "58f6e7555ffa63b294824b19bd737c6d"
  },
  {
    "url": "assets/js/13.c925b68d.js",
    "revision": "e85cf9d8101ea0b3a6d81426e0547340"
  },
  {
    "url": "assets/js/14.4ca27cbf.js",
    "revision": "fa76215f7aa2b348e6a871a9fc7e8c90"
  },
  {
    "url": "assets/js/15.bcf1132d.js",
    "revision": "9e3b70ed12010c3c0d71f400772aaf23"
  },
  {
    "url": "assets/js/16.1a3abf1c.js",
    "revision": "f0fcdb1eb90f5ceec138f122535a9f50"
  },
  {
    "url": "assets/js/17.6cf72283.js",
    "revision": "2b1c7bad66023b907a86645baf7dea4c"
  },
  {
    "url": "assets/js/18.0ebc22e3.js",
    "revision": "903a7b962600749605eda88f55483e7e"
  },
  {
    "url": "assets/js/19.96d69c24.js",
    "revision": "8e6922c313dad3727dc7361932b8cee5"
  },
  {
    "url": "assets/js/2.7fed1aa6.js",
    "revision": "66c91329f80896f4562a471dd557e2e7"
  },
  {
    "url": "assets/js/20.64f40bb2.js",
    "revision": "51b237b5393e8061c929c6bb6f68f2a2"
  },
  {
    "url": "assets/js/21.22b7dc29.js",
    "revision": "b2b3dbf3ea3f780b9cacb5e28fec2e5d"
  },
  {
    "url": "assets/js/22.d796dbe0.js",
    "revision": "922a60f0d1c9c38e0e0b564c98dc7834"
  },
  {
    "url": "assets/js/23.cb53f680.js",
    "revision": "5c0fd5b80225fd2e6ab9729b70599950"
  },
  {
    "url": "assets/js/24.2adce9e3.js",
    "revision": "da4438ab65ad78789e0becdfa95895d3"
  },
  {
    "url": "assets/js/25.8d81d6ce.js",
    "revision": "5855261e6d09b7abb7c497eb8c5b7894"
  },
  {
    "url": "assets/js/26.0ebec305.js",
    "revision": "671a4324504615331a01e82260480ec3"
  },
  {
    "url": "assets/js/27.10c4b227.js",
    "revision": "42dae4561d796810a1e20cbd557b0277"
  },
  {
    "url": "assets/js/28.7687acb1.js",
    "revision": "7550fcaa81419df20b631e0ba138074e"
  },
  {
    "url": "assets/js/29.67be01cb.js",
    "revision": "7338c3e404eadcdfff227f9d404d8b0c"
  },
  {
    "url": "assets/js/3.45315044.js",
    "revision": "7a786211143e727a54d5a3f97a0f023e"
  },
  {
    "url": "assets/js/30.b4bd5d35.js",
    "revision": "7b0ca95f45c6e2a3d348554cbab2b12a"
  },
  {
    "url": "assets/js/31.a81eea44.js",
    "revision": "be0decc397868f59e39ad026be70b913"
  },
  {
    "url": "assets/js/32.98a446cc.js",
    "revision": "a00ec1f8b841772fddf6bb615fc3ad3c"
  },
  {
    "url": "assets/js/33.6ba936f4.js",
    "revision": "32ba8a106770bbe1018cf7f6d3ac3905"
  },
  {
    "url": "assets/js/34.ea3c551e.js",
    "revision": "e6531a26699371f95ef3cc53b5804b7d"
  },
  {
    "url": "assets/js/35.6d995a69.js",
    "revision": "714183bfabdf6e6d6fb1b14c5c91aeca"
  },
  {
    "url": "assets/js/36.fea60649.js",
    "revision": "f836dee8ffeb51dd98c96cdf209f79f8"
  },
  {
    "url": "assets/js/37.03af2018.js",
    "revision": "b542d66205c6e9925b23d5095b0f8970"
  },
  {
    "url": "assets/js/38.1dbf0f37.js",
    "revision": "dced348906923bd8562180142f1a0ac5"
  },
  {
    "url": "assets/js/39.08e8a06a.js",
    "revision": "1844a5166cfd7524250eafeb97fe05ee"
  },
  {
    "url": "assets/js/4.7c032e58.js",
    "revision": "ddd8a3da2899ed14b586e7f2168d3964"
  },
  {
    "url": "assets/js/5.bd4094db.js",
    "revision": "6bdbf9a7d9990afa2f72691ee2b65320"
  },
  {
    "url": "assets/js/6.c6ec4bae.js",
    "revision": "39d6c48b6e2e0673e2ab94126cfa225d"
  },
  {
    "url": "assets/js/7.da5a97c8.js",
    "revision": "be8bbf61f003707454e055a5a7b8d6ed"
  },
  {
    "url": "assets/js/8.75a1cbc4.js",
    "revision": "88ef34922459896b25c7f7db18f50aca"
  },
  {
    "url": "assets/js/9.2429f5d9.js",
    "revision": "f246239156e634d6793bd6a624ad67ca"
  },
  {
    "url": "assets/js/app.e545afe6.js",
    "revision": "34c39591d3afd9cc95e489dbade27a05"
  },
  {
    "url": "favicon-114-precomposed.png",
    "revision": "c63bdfbb7baad8bacf7eeadc36d0b05e"
  },
  {
    "url": "favicon-120-precomposed.png",
    "revision": "bb521ab493b93f640d1119f709a0fd2c"
  },
  {
    "url": "favicon-144-precomposed.png",
    "revision": "04f1603cefeecf8933c631ecfe50e2fc"
  },
  {
    "url": "favicon-152-precomposed.png",
    "revision": "9589b55f927f8f606ff4a5f002c3017c"
  },
  {
    "url": "favicon-180-precomposed.png",
    "revision": "ba62629a78ec5c65f1595549c9bc7268"
  },
  {
    "url": "favicon-192.png",
    "revision": "5618579b118377ca96e099130cb59a94"
  },
  {
    "url": "favicon-32.png",
    "revision": "5d8dbc6fc4798718eee8623cdd90137b"
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
    "url": "favicon-57.png",
    "revision": "49ca4d5c8850017deeb49e0ae40752b6"
  },
  {
    "url": "favicon-60.png",
    "revision": "5ac5eee8d3e0ab5b13b6e4839127d909"
  },
  {
    "url": "favicon-72-precomposed.png",
    "revision": "aa514169450e8ce3aa603a880a9d7e7d"
  },
  {
    "url": "favicon-72.png",
    "revision": "aa514169450e8ce3aa603a880a9d7e7d"
  },
  {
    "url": "favicon-76.png",
    "revision": "dde31738126007566925d7d5ae6037aa"
  },
  {
    "url": "favicon-96.png",
    "revision": "40d03531e70d17244aee549e064a2634"
  },
  {
    "url": "HtmlAndCss/babelLoaderError.html",
    "revision": "8cf68cc2d5d3a31e71b841b42ebfad8d"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "8110679cf6f3511bda9b7ce0a67e1423"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "4dcdfd9f771c47bab7961ba893312562"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "5786e6a85fa686d470f6975e54a8a64d"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "41995bddfa6fe29ebbf7ceb66faca902"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "f0d26f882ea1aaa6c2cd55e47c489939"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "1d3859177628b93a1509d5eb2f2d4e56"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "d2f13d6ca2d511797cb53f96b03488f6"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "60e6d19c1410f689352b0eaf3f6485b5"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "4b737b7a653157084b4684ce223c76b2"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "31b1508a6cb933e4b37d40f5f2764890"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "9e47197f8e4a30000368cac874225954"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "66deffb782a24bf81c87697e48a80d04"
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
    "revision": "2f459e8b4a4cd930ab8eb5ab23bb1ff5"
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
    "revision": "749023ff2be55416da4ba41cc465ec08"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "7d3a4b2d012118617e9598eda3c669fd"
  },
  {
    "url": "other/index.html",
    "revision": "07bf76bbc9da6982e20d4761a91f9c01"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "a58f4378b03fbd3a38580dac8c6ac025"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "90e7dbf85f8584d0c11cfdeed3f4570c"
  },
  {
    "url": "other/steam_community.html",
    "revision": "075e7df607e437a1f07c38fd88e603c8"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "6714c0fffa67a82a8768890dac088710"
  },
  {
    "url": "source/index.html",
    "revision": "df7084bfa724f925c80913cc7e4451f7"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "0f130c9240f95f599fa0e3b0a96121ea"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "6401287b67220c1847ee40d526645f48"
  },
  {
    "url": "subtitle/index.html",
    "revision": "098029db777584933de4d23a923dc385"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "1bc9ca61b07c909adf60f61e3c273994"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "06f8df331b9728020b6d96e483ba6994"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "db16ea21444af93463f5272814384533"
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
