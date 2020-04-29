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
    "revision": "1c28651ad29132a5354857166adf49b0"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "e82cab5c1c56a759980277541117d7e8"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "cff7849e4d25d3d0e2e72bd4d530ea7f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ea5cbab3a34ae3368c22d360c255d09a"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "8a1a1b230497bbbc9e74d829359bd6f2"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "69d42942e89f1aa8dd66323ad9172945"
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
    "url": "assets/js/12.14958f31.js",
    "revision": "c62dbdb0e47ca0e88c36c0e179ddf6a0"
  },
  {
    "url": "assets/js/13.b68405d0.js",
    "revision": "6929cd34090d62a1619d8afe363593a9"
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
    "url": "assets/js/16.2ff752b9.js",
    "revision": "ff1e449461dc6457a591168b14536497"
  },
  {
    "url": "assets/js/17.37a7a562.js",
    "revision": "0c8629db218c19c92e882fc12e74452e"
  },
  {
    "url": "assets/js/18.c12ef0a8.js",
    "revision": "afe35ac94d8ce943c02953ff5644c3e7"
  },
  {
    "url": "assets/js/19.d4576145.js",
    "revision": "8455589b335a03922d944a87deb1bd9f"
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
    "url": "assets/js/app.a54f640b.js",
    "revision": "f5f88aadf365d163295b373951632541"
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
    "revision": "60cf430d650560736efe09f7e47a198c"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "37bdc343bd2d65ba0983d32591a29631"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "103c70dbb394d104e893e9bce2658ad3"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "658e2171bd4d7abf2859c98eda10a8dc"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "ec482eb8d51757e7f9748571ab01a85f"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "17b8b1c3e1d8bb943db2fdcf71d161f9"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "54e0f7261f30f301e29be810e783f85b"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "7fbbe51382803ffe34db88a93aead52d"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "b4e29f43c382c9b01ab69c22945fbd0a"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "af6c297298d98e8bb8e64ad636dbca54"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "f01bcde295f2b30e3c2d711647b02a00"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "2a3a5a33cdf43954d7ce73567f7ac4c8"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "746b3ed252c41aa60a83edfb2fd8a736"
  },
  {
    "url": "HtmlAndCss/webpack.html",
    "revision": "2288b4db0164f45f2eed5b2afaa44e4e"
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
    "revision": "7149c941bb3c0376f26c5d99d80e6fea"
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
    "revision": "4030c443040401ef5a369ad0483f51d5"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "8ea8c9062bad76cf98d778bf5c7b821b"
  },
  {
    "url": "other/index.html",
    "revision": "4adfb899655aca75c340b23591b333bd"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "60cfdea1532366283321b24a53ca9bb7"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "5b60dec8ce94de7bb7095ddb2d27ada9"
  },
  {
    "url": "other/steam_community.html",
    "revision": "f1accaff963125227ddb2781fa3b0098"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "92dc85b04cfe1e83720c0e32eb091e68"
  },
  {
    "url": "source/index.html",
    "revision": "2a7b245504772caea4cb3429656e7622"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "72767e3008566d8ce3f7bf7a365669a6"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "4c903ed62d786060b0e368075fb027c4"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "c0c92ab922ed714897cb92f92a5bb72b"
  },
  {
    "url": "subtitle/index.html",
    "revision": "4f3d5f044ba35b73f0cf4a5cb9690eb7"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "edfc6165cf5e0ccdaabcccdca26ff97c"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "d79674f64361512d43b676cb9f72ffda"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "a6581c03988db6d1c6d2298e33f48fb1"
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
