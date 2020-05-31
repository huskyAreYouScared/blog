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
    "revision": "f5bda08b88a0b6f7587281ccd2ea1b87"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "807d3a5a3b266297e3a6721d5dd0c9e4"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c36e26d939f9bb938678a65f23398aab"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0178ab1e7b094841b32b6caba819582e"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "4bc89c53b395ecdade996ab240eca3a4"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "3715d6827d29781f40f7149e366e45af"
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
    "url": "assets/js/21.e5db7552.js",
    "revision": "9f255eeb7c16ccc990f8a72350e81c69"
  },
  {
    "url": "assets/js/22.01b85a60.js",
    "revision": "9272d166ea20035f45617f65966d68b9"
  },
  {
    "url": "assets/js/23.b686ae74.js",
    "revision": "3ebad2d73ca4643038925a5975d4dfc0"
  },
  {
    "url": "assets/js/24.df9b9463.js",
    "revision": "8847d7d3ffc76397365d7064d65dec05"
  },
  {
    "url": "assets/js/25.06a80608.js",
    "revision": "d9351d8d8f407975d46c90e763d5e52d"
  },
  {
    "url": "assets/js/26.ed16a7db.js",
    "revision": "6bbed28df5cc78493eae0e77f4541388"
  },
  {
    "url": "assets/js/27.4226627a.js",
    "revision": "a314e32dd0a692101edf2d99f585c8ec"
  },
  {
    "url": "assets/js/28.8b4f32af.js",
    "revision": "0aa16332e287c4c8a52c0510e8d1bd2a"
  },
  {
    "url": "assets/js/29.47c2a509.js",
    "revision": "4f63f878e31e8b400b50322a20cd15fa"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.fbd04cb8.js",
    "revision": "8ce0f71532c238e128c96a8c626e0746"
  },
  {
    "url": "assets/js/31.06305125.js",
    "revision": "e747ad0501c982cdba6b0e090eac93bf"
  },
  {
    "url": "assets/js/32.5747c293.js",
    "revision": "054ca5bc23950f924c2278b9715df97f"
  },
  {
    "url": "assets/js/33.1112e3ec.js",
    "revision": "a6b471c5c7437d4394fc6bd0190f0f8f"
  },
  {
    "url": "assets/js/34.1811131f.js",
    "revision": "6cc20c50000aeb9541f1dd7e267ffd5e"
  },
  {
    "url": "assets/js/35.db527904.js",
    "revision": "0863c2c8e172cf1d2b24a03d3bdb4bab"
  },
  {
    "url": "assets/js/36.6822c19f.js",
    "revision": "c61c15b1d72a95fb6d07e9c5c3f2e98e"
  },
  {
    "url": "assets/js/37.fe734309.js",
    "revision": "05939ed84471d5a735ae97d372a9f492"
  },
  {
    "url": "assets/js/38.edd7d7bc.js",
    "revision": "282b65a0bf97bafdd63188db59ccde8e"
  },
  {
    "url": "assets/js/39.2141cc2d.js",
    "revision": "75101d4fae8993896e2ee3f635d2f492"
  },
  {
    "url": "assets/js/4.366bf8d3.js",
    "revision": "b6096fd17b3929bce3eef9ef817a14b3"
  },
  {
    "url": "assets/js/40.8e5ada1c.js",
    "revision": "eb680767df1cf407f04853a4a35d6c29"
  },
  {
    "url": "assets/js/41.6fc2bf7b.js",
    "revision": "d951c7a179ad70384f54a93875d883d7"
  },
  {
    "url": "assets/js/42.66af17bd.js",
    "revision": "721facaa16da5d4059c2b123ff18c27d"
  },
  {
    "url": "assets/js/43.b11ac3e6.js",
    "revision": "221d8bc9a26d486b22336fafb97c625d"
  },
  {
    "url": "assets/js/44.3ad9b1ee.js",
    "revision": "fbbf017360e599c658336ac3584eb3af"
  },
  {
    "url": "assets/js/45.4f1ba6b9.js",
    "revision": "5c34dfea83c303e2bfeeafb653ac2a2e"
  },
  {
    "url": "assets/js/46.fb6f92cb.js",
    "revision": "fff70490a8315307dd57120edd1ded9b"
  },
  {
    "url": "assets/js/47.64824c83.js",
    "revision": "44447fb4e9c0623149622f77dcf24502"
  },
  {
    "url": "assets/js/48.7a1f0e40.js",
    "revision": "39e1677d36d2a78522d08d69ea1a3af6"
  },
  {
    "url": "assets/js/49.1c6af1f5.js",
    "revision": "9448cb7d4efd5f8fcdebcf573fb55864"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.ca6c5f0c.js",
    "revision": "c7d2e3ec3681d707a6bbe5c686e5abe6"
  },
  {
    "url": "assets/js/51.3ef91949.js",
    "revision": "f2ddcea833e596534aeb497b8f34d5ba"
  },
  {
    "url": "assets/js/52.ef199542.js",
    "revision": "4c7509e4b34c3d1bdde8446c958c4c09"
  },
  {
    "url": "assets/js/53.0c123d7f.js",
    "revision": "42f943396011694a0a0841bf6f6bb8ab"
  },
  {
    "url": "assets/js/54.5587ff84.js",
    "revision": "099c3c280d6cf36be8482bc8c8ead3ad"
  },
  {
    "url": "assets/js/55.33d76bcc.js",
    "revision": "edfe3a2b1afe080615eeba273366d953"
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
    "url": "assets/js/app.cb34b3e0.js",
    "revision": "9ad2a0f0e584c7d00b349183bfbc79a4"
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
    "revision": "fd2b14505cf3152abc05314c564317b1"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "adc3e3555c0482079f675aa9b2e0abb2"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "c0003c777617e2fab02ead5da9fe7d30"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "478c161436aac72ddb4d0686109b7d4e"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "c813b3362bd84409153c235d33728412"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "f024e708bd7102a0d0d0859842596a62"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "18908ca121c2012c199dc0f02acbe693"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "6de8bba887de4940c8cbab99714d64b6"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "b228b272ecf62d2c3ac035188dc78586"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "2f99d2ac86a3e7c1a08379dd6f4adc96"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "4a0e2178fe45bdb3f8c4f2028b42abc9"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "13470f8a4e94d5bd39ee7272a946356b"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "56435dcbc9625e3414ef657989353889"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "29af0572c29bd8ee98780424b9ca9520"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "746c9552f20198ed7e5ac0b1ea710ba1"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "546bdb4988e5958fd558023d2f515a7f"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "c0b613d27d190ffc087ed86def148edb"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "93d851ff414e88d2ca3abbbcbff77b4d"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "e8b4bbd97a634f94883487dae8216e48"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "e81ea5be61980933dcc604a0de35b56a"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "d85f84784f89c2001e9cc2bec38bb920"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "9d6bfad0956356acb1c3ec0ad641ebc0"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f52c90feff8c3d46290a823a80086486"
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
    "revision": "df3d25eae5bad49afcff49174edecdad"
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
    "revision": "938a3c2f67997cda0cca2cf1995c1208"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "614852bd202dab3046697346482a6043"
  },
  {
    "url": "other/index.html",
    "revision": "b7115d34c11c6b652210f24747863e36"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c9ff83b7f7ffc15002baf6ce85b04dcc"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "fd31ddb91fe4bb8b468d9ec63e8d64b7"
  },
  {
    "url": "other/steam_community.html",
    "revision": "f50701edf2c330d2c993dc65f5a3653a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "09539f9cdd5deecf28ae4112e4e6a7ad"
  },
  {
    "url": "source/index.html",
    "revision": "3281895427f636bd617c8d8ee6787952"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "56c0f723413276f8c19b4ad6860b49fc"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "a7c18ebb712ae30cf2d8b4bf0cdfd7a5"
  },
  {
    "url": "source/webGame.html",
    "revision": "0b85af1adcd74aaf8e8a2550a81cea72"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "bd32582760eecafd767b808f7f745d94"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "4b3d815944534b5cb97175e079dccff7"
  },
  {
    "url": "subtitle/index.html",
    "revision": "cbe48b9c39a01e503fae9d2b76c19c01"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "89db9c841ac7bf190aa63edb589bab8c"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "0c31b659a52c2649d39ba0310e63b55b"
  },
  {
    "url": "subtitle/small.html",
    "revision": "6c0089a140964f29f34fe61f7d63c0e0"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "e3ea057da63a99eb2b3ffa5b77cb945b"
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
