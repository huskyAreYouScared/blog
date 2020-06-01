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
    "revision": "c38f78b27e3cb3f981aa5f08b1940113"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "79819ecc0e59e8cb5c92d5ac8c306af0"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "877de56633136c3559bcd019e82b3146"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b390698b5274464b7b9fa9a95d498511"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "af10b2c627de4ff14e8ba2afa8521ef7"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "3002e5dc6d1d39a63d1a2190f83955ae"
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
    "url": "assets/js/46.fe128722.js",
    "revision": "44dcf9c5d5383c451a641f2df1eb181e"
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
    "url": "assets/js/app.ddadf400.js",
    "revision": "cb3b6e078bbe934f2a1a4b16484aba28"
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
    "revision": "cb817aa55044dc1d5d6e0591d2ba3767"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "d5683e553e28615bf56732edf08deec3"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "aaac3f3cec853d3faab5be21b70bbb31"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "ad702a17c86dff951d5ca3618c3e6948"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "2f4976548900f3272fe71909d3967ac5"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "cc5b013c911316cbcfd5a2b0e2b0bf78"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "ef3cd50a803f381eaa950da569258f3c"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "b74bb52aab0ee3cd1084e6848e084a30"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "ce5e151ded84c567addb275a0e0a6e87"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "83958e7eee5c6dc12e6daca80628f443"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "f9ef282f0aee611d009fd3dc20358711"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "e9e8b0014e5b885dffd3796d43639c94"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "010dfb8e921e4fcfeec6167ad1b77a35"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "564430227b4212587af15e4f97b338ec"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "56789327c27295782bb9210bcee6fc15"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "bd0f740b0427f73216b43e5eb2d97303"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "7e16d6ab8ee865ad828eca650322d284"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "fab0173404a24e6f3d8dfe1511902efb"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "64e9d280134bc2e35c0e403a2a5288b1"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "7a71bf2df2076c0c0ba42ab87a388793"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "593bd403eb8e8e039a2baefb8a29af44"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "6e3c607b1f1eea2a0052d4c01699208e"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "a0161b361f2c08682fb7e7739edcc27e"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "1a3889f15c3122d8e4f647c851c51b9b"
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
    "revision": "aa42a1063924b3ac464b6d9cd6956081"
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
    "revision": "80b50e18cbcdc3f5d47deac0fec54941"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "c7d77d8667c7c629334c61140463cb3a"
  },
  {
    "url": "other/index.html",
    "revision": "bcfc973ab6f7e3fc5f657133d3bc582c"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "34641c42f1b68e7d8186e86ad0044574"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "2f0051026394381ef6f6bb2989de5565"
  },
  {
    "url": "other/steam_community.html",
    "revision": "1dcba5082a49135b985001aca6c6b948"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "fb49c73b92187e8ffb46d070db5ef61c"
  },
  {
    "url": "source/index.html",
    "revision": "d06a3b3913322401b582e6fb2a0cb2c0"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "d10caf504303bedec2df756883377145"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "40bb49197acff56e495f3d67cb8ba709"
  },
  {
    "url": "source/webGame.html",
    "revision": "a47fd1a4dd25422766d06da023b83ac2"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "31dd3346364e415a67ff7b2638d0a48a"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "dadab3b73cbb3a04a94d4d05b86ccf73"
  },
  {
    "url": "subtitle/index.html",
    "revision": "08fdaa05213290919d4225aacbb236f9"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "280a5000f250f063d164a006ff707edd"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "613ec5cad557aee3b4018d01123c2770"
  },
  {
    "url": "subtitle/small.html",
    "revision": "e1f143262302bd969f133f07de473a57"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "ec3f40c1c15d00f4ae3cd5a0dc71bfb8"
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
