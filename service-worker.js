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
    "revision": "7fd53ec8bb0ee9db770b5ae8a201cb7e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "fb62a319b04f41a25eb44fc84afce905"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "70cf6984b282dd83eb7b2b71e638f8d5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f6ffd0763608bd14c1a7c7a8f71f5a6a"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c14f5abd7797d6815dc847af3de147e9"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "964d7c6fd36c32e96ad8dc0c24993aba"
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
    "url": "assets/js/14.f588fa92.js",
    "revision": "4e7c5fae7b60016fd96e28a77d15c0f8"
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
    "url": "assets/js/24.333f54c1.js",
    "revision": "2e27f3330a49aaeaa999cfcb831715df"
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
    "url": "assets/js/30.32e818eb.js",
    "revision": "a7f83bbd16549d79b218d7027befd88c"
  },
  {
    "url": "assets/js/31.0d6bbfa5.js",
    "revision": "e6acc31c104b89a4b94254656687ab7e"
  },
  {
    "url": "assets/js/32.a7bf9638.js",
    "revision": "0755907a76dd55c29fd88d11ab4daed9"
  },
  {
    "url": "assets/js/33.de60cc7a.js",
    "revision": "1a774b6bc15c4fa54c6b5bc1c291d6fa"
  },
  {
    "url": "assets/js/34.78cb7f89.js",
    "revision": "0c96f814d895dce3400da81871ff9ba2"
  },
  {
    "url": "assets/js/35.b65c8c0e.js",
    "revision": "fec4b1008ffbbed94731cf8472a69150"
  },
  {
    "url": "assets/js/36.5e83bd42.js",
    "revision": "76c4c2a03b289117ea7a5626e2c5d518"
  },
  {
    "url": "assets/js/37.d9adffd7.js",
    "revision": "2f61fce69b6d4cc52c88f13c60bf9577"
  },
  {
    "url": "assets/js/38.2c0e2cc1.js",
    "revision": "4a1dbf9e209fce0419c4d100277116af"
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
    "url": "assets/js/48.88b327ee.js",
    "revision": "b7412a028d2494e9d0bb8a332c9bfc8e"
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
    "url": "assets/js/7.1d0b33ad.js",
    "revision": "106a9fbdb104cef49a24e673e409ebea"
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
    "url": "assets/js/app.b3fb42f4.js",
    "revision": "25f38c811f6869914716ee4df82afd8f"
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
    "revision": "818df48a521a2cda1706e4850abd55ed"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "d8a0c2e70fb94262cd7c24cb4dc0ffc3"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "eb257b23cfeadbf7dba8d48ab550ebe1"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "269bd7a43f14be9960015c6f941d25ed"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "6ef7d5dbfcb496b388d023d4af87d8ad"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "0c55a513dea257aece96b34866eaac92"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "6ddcc2c4a2dc36c45e1acdb288f01640"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "40a6932f0cd3d24f0eac735dceea63ba"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "0b443a733d424da5fa8c79995e87e603"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f102b1ecf1eb7c75a45ca1c8a99ec4d5"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "9bb2de4526a938887d23819cbe6a415d"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "6eeccf1d02c6e5a476dca3def47323c3"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "490e15f4926a2f5ca79c9fe4f05826b3"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "3fd5f61c30ed0a4b22a7f3b2a472c719"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "e68767ab48d2340f214583a047f178fe"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "16e6b787b22a17a2d3fd01effc178870"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "12e9df1089332b4fe36880b4181d6785"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "77d7b51cc62cb1f163b8b79d85f60bf3"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "9a81b1925fe5615dcb4c693a04218cdb"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "73b072f671b60e13a0a8e6acc5b889d6"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "b3a723fe858e0d0f39dd720bd995076c"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "492c9205bb96ed7f1cec7475a00f0f7a"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "81de5c6ebcd74d218d46fb3c8d67d2c5"
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
    "revision": "eddac8322c4c3275358b8deb4649ebd6"
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
    "revision": "852859d5481b7b956e7ff4ef7255512d"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "6a35d8d3f8089738d6f16e4e8b6e3946"
  },
  {
    "url": "other/index.html",
    "revision": "1905ed71d42a378ee1459f479dae4f90"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "3ac4c00c20fb67ecbdbd7dc85a89e39b"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "000d06fc2bcbeafad1fd30f5ce332070"
  },
  {
    "url": "other/steam_community.html",
    "revision": "36c782182fa05de7251d0ee5978fd2af"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "46c1477596b1c9a6717d1398b22b49b9"
  },
  {
    "url": "source/index.html",
    "revision": "a5a21f235961ac42a17a9aa86214539e"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "9465befe6402069b6e1e74364e87201e"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "e0ddea7f46c0ca7b120feb2e67e85ffa"
  },
  {
    "url": "source/webGame.html",
    "revision": "40ddb8d78fc86171d6a7df4af76f8a9a"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "58b0af590f99dde3b6eb41b4ea21e312"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "ed89e18fa9d885b219f16a2bba1d470d"
  },
  {
    "url": "subtitle/index.html",
    "revision": "5b564d58ada48b03ac70d2cda9ca9444"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "25c27753cbb176f0e60e6b508c818764"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "8dba8ab8afff7b8144fa53e667ed0dcc"
  },
  {
    "url": "subtitle/small.html",
    "revision": "88a3090fcb906b3b723a691a223fea5f"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "ee2a4d5825341ffe663d6a0b88bc2547"
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
