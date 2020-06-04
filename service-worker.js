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
    "revision": "58682a2b7c205551742e8143bd1d432f"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "205a0c3386b65d37b644ad6f39f742a2"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "6a6ce9f781bab1082c5c0225dc1d2b73"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3766a14285ec77b20ff13aa83e7de830"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "da3a948855f26914ee9083b815734f01"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "cb54898b7428c169fd8d7aad90127b98"
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
    "url": "assets/js/16.87648487.js",
    "revision": "76fe6c44b567e902a30bcc90334561dc"
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
    "url": "assets/js/4.7a82c1c2.js",
    "revision": "374865f81a32a0072df85e733aed4e95"
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
    "url": "assets/js/44.fbeec1e2.js",
    "revision": "20b529a595eb84d06aab46fa8bb26676"
  },
  {
    "url": "assets/js/45.c94a6804.js",
    "revision": "a711326ff7f5ea6f1e29aed4bf91b2ed"
  },
  {
    "url": "assets/js/46.f7f63b53.js",
    "revision": "92742fe777b9443255ebe7acb461424d"
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
    "url": "assets/js/55.bd544bfc.js",
    "revision": "bca53f492505d6fd14ed4cde5fe9e8bd"
  },
  {
    "url": "assets/js/56.a1bf448a.js",
    "revision": "f4e8156cfb58972710ab89ca8a403d2b"
  },
  {
    "url": "assets/js/57.031c09d6.js",
    "revision": "b3662165c191d5fcc75b82644859c696"
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
    "url": "assets/js/app.f3558d2a.js",
    "revision": "24458bb555fa480c4abd20a7846fd4aa"
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
    "revision": "66172e561b93dfeae0f419baca8c6604"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "1abf802882be56818e50009f992a8efd"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "dec7b6e57beb7a8aa001d1f29751f371"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "adb2b74abb95b05a62e7ee52c23a777e"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "396b4c38745ea391f5a603165f79368e"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "22b183750e9bb3a4ec1d7c255dcab954"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "c4d03912b393c7fb69b763f741e23a1d"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "82a5160d5b463f7c559cd43b1128d8e7"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "153e5edafe523b106809e7d2161a105c"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "0327ac7accbaa967a93a17dc6dcb1405"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "e0156f3a107e442b85497a9c8cc8d613"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "f4ed6403b0f5f4aca782054070bb6c88"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "067ce9667223c6359560f2156fec5715"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "d9354291d1f384e23ef141c4add8e38f"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "ed6228ff0acb8b808baf76d73082f44b"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "538cd53d5288e03fbad9fc9a467a9073"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "3c7b23de1b70a53a42164a1d3f5429e2"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "3e2780a3891e8106a7be219e1ac9e8d9"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "480d6583a111fea04e313c24db06bf7f"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "4e7c9cef374f8495a8e97d1857266dd4"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "7d91823909bfd19fdba8b1cf64aca2cc"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "80bbe0c59ac3bf4a52401258aa105d4e"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f2cfbccbbc3e23f0c987f45f9c0e1a3d"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "baad7f61bc977fde2ea67b88f66aa9cd"
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
    "revision": "537d67148966ed054dd195be67b48c02"
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
    "revision": "a77d07b249ac319ebd2544c75732e3a2"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "22800d79bee8206cae4187e22dd6cdc4"
  },
  {
    "url": "other/index.html",
    "revision": "4de53e710b2a440849ec5e41283d1542"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c0e2418e2455f809dbedbabf116120f7"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "709ca234c5b219b9e435f1651344a4e6"
  },
  {
    "url": "other/steam_community.html",
    "revision": "41ce97a1c8563e23793f91de790361bc"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9670efee77d7e0b29db61eedb2a137b4"
  },
  {
    "url": "source/index.html",
    "revision": "065b3acd7f0427cb70013ee817ba64d7"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "56dc1be349aa627980d1840222cf0fb5"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "c39c277914ba373358f09de55f246980"
  },
  {
    "url": "source/webGame.html",
    "revision": "a4bb27e6d87843ea66f36943eb27b980"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "fe0e8f931b8adb81b61af6bb00d04d81"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "eab7ff207d1d3e2e335e880c82887318"
  },
  {
    "url": "subtitle/index.html",
    "revision": "e44b7e0a44fd8cf43a48e6a82334b019"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "eff9f4eb715e63b402076dbe9b5cdbf0"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "d708cead552e0ad8a99048903c44b052"
  },
  {
    "url": "subtitle/small.html",
    "revision": "274d8b00374363d8d1ae4c5acb770795"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "562d8a1ea49985be7a2297dad8ff945f"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "446e759d95a74795555e860eb7e2a0d8"
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
