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
    "revision": "8ac84e52a50bc3ef1e49d9bdba1c6367"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "c3d880723893bf213ce39ec2d290934b"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "fe818138b50cfc63c039456c2ef9cdb2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b977da08f95d11bd358ac6ffde7b6874"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "b6aedb8a2f92ab418bfecdfb9e61c440"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "760307db98a6651c355c5de48bbde331"
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
    "url": "assets/js/43.842e6661.js",
    "revision": "a84b74c0a5f8c9a91b79a98ea3e9ebfe"
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
    "url": "assets/js/7.12da4bac.js",
    "revision": "d937c45a0caa78bb5f709ae3a2d19eab"
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
    "url": "assets/js/app.32bd1588.js",
    "revision": "2ff6c30707cc4ddbcfb4451b8c7a456f"
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
    "revision": "6756a2b23a33bd1e6333a68f2f250c08"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "ff40ca45e49d52479d7bc99b3ecd428c"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a134e3ca5baf06889a1b1aad1e71b9d8"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "fa4c17da427623d093efafacb5bcee10"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "434828323fb727fff31a728e204ed3a2"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "a2646099767c0edce475b7fc526e5b09"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "50cd5b1f612b7c1b46f451a58c948613"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "daffa89d949c7c2589e57261a8709ef1"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "c5b6e1991722ee53a5d21b480d761e6a"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "4020e9e6beee280eef64b2045043fd00"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "ea07ff599c32d757972ce45b4fb29695"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "6f72c33efab1ca795d5a01c404d688b8"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "d3dfd4a20c93f348d258f5b37d9d4191"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "034ad9cf0bca652cac2c69abe51f68b6"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "f124d04b8823b66d61b968851168ee62"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "bdeede0421e0b0244a5065008af40239"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "bb639c3d4d916b627fe41df03d7bc43b"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "63d64ad5dfd657b64ba6d29dffe75f32"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "37fb08a3b8a5fcf6d297bc7aa5f1c752"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "c53cce35e9a42172f14c8c5486cfdeec"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "9dab5a61a69267e0318c5840e41db04c"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "6a0b0042361f8ffe85cf608bba7ca6dd"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "707746adbeb8bbaa50dc7035daa8579e"
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
    "revision": "702c70beda1000bb3451ef4f3573e809"
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
    "revision": "90a9bf9c3bb61503b4046566e0d7c852"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "593dde9140e604fef88902475c088bcf"
  },
  {
    "url": "other/index.html",
    "revision": "a9a437484e6d54e5647588c89fc14085"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "d3edf5bf9279310d3dbe96a1d2433e59"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "a73258079162403c1b8ce2c838887f15"
  },
  {
    "url": "other/steam_community.html",
    "revision": "48386078e5c0fb07c1f38c58c1b855bf"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "cf429ede550051189204521562905179"
  },
  {
    "url": "source/index.html",
    "revision": "f1e2624d0bfdd57778dbe72c90ff56d8"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "d588b3d8506c9bdcb8647cf842d73e93"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "e522f23fa164851b3dce4d6ffa412393"
  },
  {
    "url": "source/webGame.html",
    "revision": "58e308c83c9d17544420838bf7e67314"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "dee7a7c9c06245390d2bb682db38e772"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "8eab5d424c18f2886f353b75ce7e9105"
  },
  {
    "url": "subtitle/index.html",
    "revision": "4d8ca58be3012f6e364ccd9cb3707542"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "7356b49c720b47fb5d365fae7ee8dce2"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "5de0567097f18709e998638340ee8042"
  },
  {
    "url": "subtitle/small.html",
    "revision": "e793b25df75c31f253cd0f27a84e6322"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "c33617c1f60dfa9014ea8e9ace92ef4d"
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
