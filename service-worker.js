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
    "revision": "e4b266db2bbe5648105e245db5b680b3"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "0b36ce71ee1aac705f0e879afb22a13a"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "93fc8a50709318436665025008911cab"
  },
  {
    "url": "algorithm/index.html",
    "revision": "29fb308b93bc20e9848103fd42e10879"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "0721dd30c7f88bdbe44d012fc4d13c78"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "f42eb7298dfbdde6ac923cdbbb321e2b"
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
    "url": "assets/js/31.43180c8b.js",
    "revision": "36375dbcf41ceb4943046c5aa48ff618"
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
    "url": "assets/js/44.b304a862.js",
    "revision": "bfda3377f96182a4e345b30e2f7f4aae"
  },
  {
    "url": "assets/js/45.c94a6804.js",
    "revision": "a711326ff7f5ea6f1e29aed4bf91b2ed"
  },
  {
    "url": "assets/js/46.ea2ac109.js",
    "revision": "7da1ad554ce8f1528c8f1b1a7b915830"
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
    "url": "assets/js/49.bcdb4fba.js",
    "revision": "bd28f512c503195a38e2b5a59ee49c3c"
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
    "url": "assets/js/7.f452d37d.js",
    "revision": "2f02a12a813610e6e005e7877e654bbb"
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
    "url": "assets/js/app.fe85d41b.js",
    "revision": "8cdf3ddefe509a1565c9b0eb2108744b"
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
    "revision": "c2b87a7b8a346e7ea8b8588114176277"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "2d4cd838e74fcef7fd9f11098c0ce395"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "9c370f9fba1a24bb0529672d1307167e"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "8ee102b2ff6faf6aace67829174a4a17"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "32a2c6d444289c6ee07fa7de1b8d339b"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "7363a3f250a3f7eb9c3c7de2b35ae3c6"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "b7975322ba789ca3ce9a46a4dcec6711"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "7c89ddfac3a0753eaef76b254b3b9c68"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "1150a21eb83313539161d14866b347ea"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "c9b5491fef87e3f96f23900734e1ae99"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "417a4d74062397e7155a642b271ddfc1"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "70c7a710dcb5aff920872c35cbdf49eb"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "f53ad5a1b4f4b172e74e845a1cc49a5f"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "ca12d3292cb2837792ca432bc431ef78"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "d0f9e0e5c5067237fef0df1c8edd6cdd"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "067479eeb20e210546db4530759bb68d"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "bc35349ddcb0eeb39c2aeaa94f11d89e"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "5b8dc2a98e883ff2d8d5dde954da86e2"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "31d66700d60f63c641cd688fbfd99c3e"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "2a80f1d3e890848500cfce57ead8cea2"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "986abe10e48fda73e80af85f8f67c83b"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "008337a6c2ddac65a13e1192eb491ff3"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "e10e01d2fa03d55bd42556aed49e9da7"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "c26bca7d6194f98bdf5408e213aa2405"
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
    "revision": "8f83036756cbe03b2131d06115510fe4"
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
    "revision": "c3e0d96b2f92ca7bdea9df7c591f8e5b"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "f0179022eabc602aeabb742bc40dc662"
  },
  {
    "url": "other/index.html",
    "revision": "1486e8a336e42ec14d126ff8149e74bc"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "a7ac8a0f59a70f433cf7c9d79bca1a5e"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "696e7eeba6205bf1279c9ccecbd2395c"
  },
  {
    "url": "other/steam_community.html",
    "revision": "938ea348b6e7667e5bf393c0cdfd00c0"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "f8e4a12e9920bde9d717ffc353a72830"
  },
  {
    "url": "source/index.html",
    "revision": "61317f9a42d0cf3fa6caefa67e28db57"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "c8f40fdc9ae0dd880044704e2a4c9e7c"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "3d8e683fa126dfeeeddccc4710be2d66"
  },
  {
    "url": "source/webGame.html",
    "revision": "6ccd9c8cc0f6424211bb98f5db9cbdfc"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "c4d8ec511c0723a432907ad2a9745875"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "f82523f77ba9ebda24cd50dfe48434b9"
  },
  {
    "url": "subtitle/index.html",
    "revision": "a120d7ce5125f27348127667c1913db1"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "83c900173f21349a1977715d61b4fd8a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "092929f3a0eb11a65a24a5334d8d7405"
  },
  {
    "url": "subtitle/small.html",
    "revision": "ee8fefd0a0bc6f134c504343e94c9125"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "33004823971d3385ff679b912a37b922"
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
