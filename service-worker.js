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
    "revision": "45536391afba8cc5e2df828d86e6f5e7"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "020e05189c37e4db955e02b4725f8797"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "765f0d218cd99f3286bcd480484c94d4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "26e7cbb66e72a2bb72321f6be8793f99"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "382662cce05a39c14c05732612050bb7"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "49dd72bd3d140582c3ce4fcc93c9e918"
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
    "url": "assets/js/10.11cf69db.js",
    "revision": "911b83e1822211d576906ededd3a851d"
  },
  {
    "url": "assets/js/11.d6a96ff0.js",
    "revision": "36d580f5cc656d237de49bf11b7082a9"
  },
  {
    "url": "assets/js/12.d5eee066.js",
    "revision": "834eb91a19051e17b420d3249316f06b"
  },
  {
    "url": "assets/js/13.7e9aebaa.js",
    "revision": "c7a6f17af4caf5448686f9aabe3eab06"
  },
  {
    "url": "assets/js/14.cb0c9160.js",
    "revision": "84c9753bec6d27393dc82205ab9b1ea8"
  },
  {
    "url": "assets/js/15.c85b5a0f.js",
    "revision": "83cc10d90b6a8690e3f1ecd804127a1b"
  },
  {
    "url": "assets/js/16.756c697b.js",
    "revision": "41c3e738cb5682e8e545a0412559ebef"
  },
  {
    "url": "assets/js/17.93ec2e66.js",
    "revision": "1f9ed2aa5a8e2d655b89c360be33fd39"
  },
  {
    "url": "assets/js/18.caf41a32.js",
    "revision": "d6c4560232b98f8acd2cdf96473ced6e"
  },
  {
    "url": "assets/js/19.f477e63c.js",
    "revision": "7e425f2d229bf973e098442a1f1cd8ce"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.2c4b91cc.js",
    "revision": "8ddc248def8573527a8388ddc4f58ef4"
  },
  {
    "url": "assets/js/21.1d3050e8.js",
    "revision": "f9882d23b0cb49cb0c212a75814064fb"
  },
  {
    "url": "assets/js/22.01b85a60.js",
    "revision": "9272d166ea20035f45617f65966d68b9"
  },
  {
    "url": "assets/js/23.38557e43.js",
    "revision": "31e36512c084b4f7c1f7569f8454be32"
  },
  {
    "url": "assets/js/24.82661c12.js",
    "revision": "9756e8ef6b7de8b52d46d6ac3c58b938"
  },
  {
    "url": "assets/js/25.40b05688.js",
    "revision": "38fb8561cb6a7f2ef69563dbcbdabde4"
  },
  {
    "url": "assets/js/26.adb72a0b.js",
    "revision": "1b42a68e6fb1c0eb876280696250fcb2"
  },
  {
    "url": "assets/js/27.4311e20e.js",
    "revision": "3af9dc96ebaf747e89a6de57b3b7636c"
  },
  {
    "url": "assets/js/28.2f0444aa.js",
    "revision": "c12f559e30c71cbb439e32c9e70c25bb"
  },
  {
    "url": "assets/js/29.9a9e9f70.js",
    "revision": "a58f68256ce0772254a02ffaf5b1aa3a"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.6dcb8032.js",
    "revision": "7a6f8a3da66cf17d93237e3ff6aa6933"
  },
  {
    "url": "assets/js/31.c152d01e.js",
    "revision": "19625b4b3dec493a5605cc7044e4dc0f"
  },
  {
    "url": "assets/js/32.aed17756.js",
    "revision": "1d13f2ee87d4f09ff0a306c76ab7c280"
  },
  {
    "url": "assets/js/33.89da1642.js",
    "revision": "2ce25757ecc4c370d2a54dcd7d154921"
  },
  {
    "url": "assets/js/34.94ec2a3e.js",
    "revision": "29813f4d518bda82970a7fd47cb1d29f"
  },
  {
    "url": "assets/js/35.07239f79.js",
    "revision": "c8cf1f0d7fc4649cafa8255b7bf54eb7"
  },
  {
    "url": "assets/js/36.4c092e84.js",
    "revision": "4e0fb898f042b236af36daf00d73963a"
  },
  {
    "url": "assets/js/37.b55a1410.js",
    "revision": "9d25ca0d1b23891ce58f797e05736499"
  },
  {
    "url": "assets/js/38.e7d079ad.js",
    "revision": "843e731c3bb8c5a44e510330bb82eac2"
  },
  {
    "url": "assets/js/39.f1be1b3d.js",
    "revision": "3ca7d8205f15c9d272881168a9af82a3"
  },
  {
    "url": "assets/js/4.c4b05109.js",
    "revision": "9d3dde909e2c2ae69a7315a9606e37ce"
  },
  {
    "url": "assets/js/40.bb46286d.js",
    "revision": "08264dd3accaf5a25aa374e3f795d204"
  },
  {
    "url": "assets/js/41.9272b2b8.js",
    "revision": "19ad00836522ba7faf60547d400744c8"
  },
  {
    "url": "assets/js/42.267f5282.js",
    "revision": "d9bd49256af1dec5291c90ac583f456a"
  },
  {
    "url": "assets/js/43.7f1a5e0f.js",
    "revision": "9befa8aba9520501fdb940f3dffb6580"
  },
  {
    "url": "assets/js/44.d83f0a98.js",
    "revision": "f99711ec577c75ffc5809d5e8e338792"
  },
  {
    "url": "assets/js/45.c94a6804.js",
    "revision": "a711326ff7f5ea6f1e29aed4bf91b2ed"
  },
  {
    "url": "assets/js/46.0f264de7.js",
    "revision": "0f7cd217537468b3281fac2e9c00a2d4"
  },
  {
    "url": "assets/js/47.fb08c954.js",
    "revision": "8b45c42c87cf12767e83304537feb6eb"
  },
  {
    "url": "assets/js/48.8c6c3daa.js",
    "revision": "4caaa91e6b37c1d0d3c6eec0beb30eef"
  },
  {
    "url": "assets/js/49.99b767ee.js",
    "revision": "00e90e28a14f9726b2a166c4f85600cc"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.1e547832.js",
    "revision": "6f98727318813d59b27ecd7e041dc226"
  },
  {
    "url": "assets/js/51.27b72139.js",
    "revision": "061f4b66d0f0d4adf34a2420c073d37c"
  },
  {
    "url": "assets/js/52.c1afd7e2.js",
    "revision": "0e785ada296e1254998bb2860b272596"
  },
  {
    "url": "assets/js/53.6f4dab96.js",
    "revision": "1033b07ebe6f2cc6c4e9d9a7a0ef5fb3"
  },
  {
    "url": "assets/js/54.a4b9ca91.js",
    "revision": "17e9d51441a8e5c3f461d303f0d64b78"
  },
  {
    "url": "assets/js/55.129d2aa1.js",
    "revision": "aa2f4030ccc04dec5a712871c02b0578"
  },
  {
    "url": "assets/js/56.ec4e0bec.js",
    "revision": "7768b2bbb05122e5a65a1375cd7c8b16"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.95492b0c.js",
    "revision": "5c50aaa5314ff18a7f17bbcaf18f0bf1"
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
    "revision": "1dafc7903acb9b415001d5e00d254fff"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "86198fd5d2851dbf57795ea6ca5b702d"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "104dffd4df0aab0ae085140f53be3939"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "2e8af6e7dacbd5a278ca21bef29ef087"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "d9d24c218a5f98651d07752825143a67"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "96629bdf4b4e1e7e3aba7680efd9f3fa"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "7b16e975920cec3cdb491191e9974892"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "e9b3ae0965754b7b75c1a4d9d60da371"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f31f416cfc979740f1b1449bb6563604"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "97b70724956099fad992c2272a725462"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "2b1a34fbfaa9a92ad3ac8d652b7b0a60"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "dda9380e31ba6aa9fa6d62ccf731d894"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "49618cfb9813c589e89f9bcec33f3b70"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "e8ee819983626f9b4842196d01167807"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "77186893fdce84d0e850b363abe54286"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "740573557a3933e2122c4f57cf50b665"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "68831d75d4634764c42ad3a3f6262baf"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "2999c8b53c2544c494a7c2abf66f9bf4"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "fdd7be2c4eb5dbc7ec0666c06de15a54"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "f12f632c3aa7021debabb96d7cce9012"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "85916fa979685931503f6935a9215a20"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "fd830a88c4ed9c3019212abc278a611f"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "dc229bcbaf33e7d89a1c8c4f02cd336c"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "31a1a885a461fd9840b5459eedc4b203"
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
    "revision": "fa6c9abdea0243bd040391c9136e0a4c"
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
    "revision": "c699f833764e293477d067b215cbaab8"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "927c0489d7ff79609bac6d915e6ca1cf"
  },
  {
    "url": "other/index.html",
    "revision": "30f06f43fc4c85f3fe9fef7f80263b4f"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "6802f3a9ad90054178d964b5f1e3f093"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "d07dd707087c7ca81a00cbfd3c07301d"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5475c38c9da609abd3ef8ff7d12b1774"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "19de742564cd462ceaa26651d3e5e42f"
  },
  {
    "url": "source/index.html",
    "revision": "97d2562dfce9eca4fa810026c120aacc"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "bec04a36343aff5d296852e8cd756439"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "6a56ed0b81f9f4eb059a42f3feac574b"
  },
  {
    "url": "source/webGame.html",
    "revision": "2f72fb5a0b082357e77e94caebd80465"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "2f664ed8c5a924eca5d5c98080ca5a8a"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "676e314a364ed4086b36afa38818746b"
  },
  {
    "url": "subtitle/index.html",
    "revision": "6a3434f94138cb803c3d5316aefa43bc"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "b2035c05e6aed0d5dfa0233fc3bb33ba"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "678eb3935c1b07f0dcaf5a23d47e8453"
  },
  {
    "url": "subtitle/small.html",
    "revision": "66a0a37f3d73d85c759d09eccc8989a8"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "92b5812931a0d8d08bb48bd8c4fbc22d"
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
