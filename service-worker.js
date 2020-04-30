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
    "revision": "38d24e3f951097e3c52b9ec7172be698"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "1c9035a16f66c44d3f3ff2f70f677b03"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "efe022dd5594138739939210474e5b44"
  },
  {
    "url": "algorithm/index.html",
    "revision": "23ba2116e7a2d87e9ca7949a11ee478e"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "01c8cdb3d9e09ec50f3ed1534d9a193c"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "ca41b5e43bb059fa1c9df526a5c19b8c"
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
    "url": "assets/js/10.25af1a4b.js",
    "revision": "a86c47be2bd52747730f096f8701f5d9"
  },
  {
    "url": "assets/js/11.33c11295.js",
    "revision": "62f74d221350356ce5d7b84acd3e4097"
  },
  {
    "url": "assets/js/12.7a9ce313.js",
    "revision": "fac43ae7253d3af4b6621713f97f77ab"
  },
  {
    "url": "assets/js/13.12c3cdc1.js",
    "revision": "c253af4989500f7b6259d50efdc05d43"
  },
  {
    "url": "assets/js/14.86a9516f.js",
    "revision": "71a92d25e4b1e95f961252545d4694b0"
  },
  {
    "url": "assets/js/15.0c36955f.js",
    "revision": "92a1251d86273879a496331e298b699e"
  },
  {
    "url": "assets/js/16.102c6083.js",
    "revision": "a78422a1bc500d0d225b120b052d6996"
  },
  {
    "url": "assets/js/17.1c40a155.js",
    "revision": "28682cf839f73e1680cf11f925ec140e"
  },
  {
    "url": "assets/js/18.c12ef0a8.js",
    "revision": "afe35ac94d8ce943c02953ff5644c3e7"
  },
  {
    "url": "assets/js/19.4b4902b5.js",
    "revision": "dc1b430cac234c9b65725797caa25c05"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.2521cc29.js",
    "revision": "ddada9ad510f7b651fd23fa701df6b77"
  },
  {
    "url": "assets/js/21.3e50b95d.js",
    "revision": "b426cd403c3171d7ed91bd075e04b777"
  },
  {
    "url": "assets/js/22.f6d6af9f.js",
    "revision": "6ca3d3bc679926d06199358a71150645"
  },
  {
    "url": "assets/js/23.716a430a.js",
    "revision": "ac55bbb8e81caefff196c7d0234d4f15"
  },
  {
    "url": "assets/js/24.799a0ce1.js",
    "revision": "c7a2fb5ee7562bf4fb0aed9d654e72ca"
  },
  {
    "url": "assets/js/25.4a6982aa.js",
    "revision": "c1d75d46c41c58509c9c9194ec59cb4b"
  },
  {
    "url": "assets/js/26.2e854b7f.js",
    "revision": "089096d949bcd4e92506ce2e63737156"
  },
  {
    "url": "assets/js/27.8b94a9ae.js",
    "revision": "e25e14bf325c8f8e0b85f05a1b9cdf10"
  },
  {
    "url": "assets/js/28.940bff1a.js",
    "revision": "fea217410f467d42de28f1f31721e997"
  },
  {
    "url": "assets/js/29.22b5aba7.js",
    "revision": "d7dbc2b1431f9d89147852108e7dd080"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.a9c86781.js",
    "revision": "c8a7e2319b225737b4c91dfa973ca6a2"
  },
  {
    "url": "assets/js/31.1e7d134f.js",
    "revision": "a60c2496d8ac99026c187d00dd6789aa"
  },
  {
    "url": "assets/js/32.902b9d9d.js",
    "revision": "40ce7e00547ab81ab7f5e778a82066b9"
  },
  {
    "url": "assets/js/33.81729e5b.js",
    "revision": "09fa8ab7401e82f9705e35f36a0269de"
  },
  {
    "url": "assets/js/34.ee0768e9.js",
    "revision": "eff3fafce9546e1a91ba7e4eda05abcf"
  },
  {
    "url": "assets/js/35.00f796f8.js",
    "revision": "ae3a8711b5939fad69ec99001fd68363"
  },
  {
    "url": "assets/js/36.6a6bc57d.js",
    "revision": "806cd2f4c2d34d83dcc4080677afc342"
  },
  {
    "url": "assets/js/37.e57aeb0a.js",
    "revision": "1b0f51745c83f9ee52fcdde890cbd6ac"
  },
  {
    "url": "assets/js/38.7077b1fe.js",
    "revision": "2cdd0f389e7712b1ddb9ce99614d50f9"
  },
  {
    "url": "assets/js/39.ef3cdfd1.js",
    "revision": "62c475cc0f44d90b488cff5674825ccb"
  },
  {
    "url": "assets/js/4.7689fac0.js",
    "revision": "1d5b921401b467848ad38a9672242990"
  },
  {
    "url": "assets/js/40.09235410.js",
    "revision": "1ff47c70a2ea16626b225d1a4db31e7f"
  },
  {
    "url": "assets/js/41.320eb099.js",
    "revision": "c7bae645f979ca8219da1db51a7c47b3"
  },
  {
    "url": "assets/js/42.8a0b5daa.js",
    "revision": "37bd39326c149fcb83670db2b50bae28"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/6.cef27804.js",
    "revision": "433245759306689d300083a1193113b8"
  },
  {
    "url": "assets/js/7.214d8510.js",
    "revision": "4a002a21d2782fe02d114ba2cb69644a"
  },
  {
    "url": "assets/js/8.286fd590.js",
    "revision": "8f1e32aba69e8dfeec50b1863f02f5ef"
  },
  {
    "url": "assets/js/9.0e711eec.js",
    "revision": "533e75933c0e18c249bc7a74e0d0abe2"
  },
  {
    "url": "assets/js/app.8222c377.js",
    "revision": "277f5a7484f976893fc123ce07a71ebe"
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
    "revision": "adb0b6778763a222c510216e82237003"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "467eaec9392abc61686dec597d5a86a0"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "2bbe1e64b69de64e544070e3f64568a4"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "bbb46c389b8d9d40168a2350cbe63633"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "8c2817772001163d5efcf60f420fbe4d"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "cd853c6dd2c0e3d2cbb652f54c5a0f8a"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "37e30d4c2ff86c76a6bc21e3091a94ac"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "6281685349469a67d97759826ce46640"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "fbd5b777b8da2282cca9620f2ac49170"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "89ea293cb0218c5c1dd96aad504a1cee"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "5b7e1bde3dc06a8730d85d9e9c51dd41"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "0a391494251d88ee44a65bf00d44960a"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "a952d979399c9d62c1ae426d3f692a55"
  },
  {
    "url": "HtmlAndCss/webpack.html",
    "revision": "956d15cd0064ae171be45e1280f5bac3"
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
    "revision": "a764ae50685fdb4323a363d953d9b691"
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
    "revision": "d9b4813c5df348b1583b37ab89b7b897"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "044fc4fc11833707fd3141267cd64f2b"
  },
  {
    "url": "other/index.html",
    "revision": "591b3b62da295bff2338ba04a4e716b6"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "1cf795b922bf82a2feaf5aa67db8d701"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "afa37be46c32e5c9bd764cb0e7711e07"
  },
  {
    "url": "other/steam_community.html",
    "revision": "46448e3e68703666d7da171d0df4cc21"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "58c6c1467e9aea599e9b2f802f2b47b2"
  },
  {
    "url": "source/index.html",
    "revision": "bd4c60e6ea499aee2cf91ab848c02d5f"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "45a6765dfbe0db3b7ed85e78bb1ac208"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "86535488a52344ccd871d4cef1642679"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "8f89012be759258639f081e96caa1ead"
  },
  {
    "url": "subtitle/index.html",
    "revision": "9f3a3bb34952f8e2ba9c971f35976423"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "5488bdd7fb2a85238093d4554a6f6a5a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "292f6daea99b0c9aeb406b6b41cc1367"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "343ff8e65b3f796360f88c6beb5c0d2c"
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
