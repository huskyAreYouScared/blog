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
    "revision": "3abc443b48768bc5cb1bd0ff59dac26e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "a0f1c6cf62949c60d410e8d2dcf98dd4"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "b4599cab8d8d3998b33175e65a588ede"
  },
  {
    "url": "algorithm/index.html",
    "revision": "40422e61d902aa88f7580d38ac541ad4"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "dfbfd1ac30afa146b8c1ab7b50347bd5"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "7756890da200abceedc571d9accc4840"
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
    "url": "assets/js/19.4b4902b5.js",
    "revision": "dc1b430cac234c9b65725797caa25c05"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.8a47730b.js",
    "revision": "24c9face8574afb67ced040c91dd8a9a"
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
    "url": "assets/js/33.bcc8f772.js",
    "revision": "832318b3fcb8403927fda960ae64636c"
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
    "url": "assets/js/app.ed269402.js",
    "revision": "55047c9301d936879afb8db3f3bb504c"
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
    "revision": "7129a833b9c69c80e567705986b4f931"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "953218582e3627e032348ac04c101cc0"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "851eb9e65c968e4bb48ce269787e13bb"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "c919922084ac9f707c827e99d09c8c9a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "3866016a816dda1607ef5f1d43b87370"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "292f7f1594255996a17b5a1a59a8ce9c"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f582f6b0c4c31faa712dcec3efb26ee5"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "22babea72033d48fa00bd93fca3536df"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "1540744a04946f3bfe798aff4d1ce71d"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "7b50de6fc2b504afc30c0c791ee60787"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "96ac1be0748ef8e6c9ffa7f2495ca670"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "68f8d7e1e49c91b97f107048495d2e34"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "38d1e9a314531da92d8e235f204a4750"
  },
  {
    "url": "HtmlAndCss/webpack.html",
    "revision": "9dbe26539391f855de330a0cca3aefae"
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
    "revision": "58f432bcf2e393645df1ea7cc47ebfd0"
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
    "revision": "031bb9eeb55351274497bc16132fcb83"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "c2ea329148ac3b6f6bf6fa08a9bcb4e4"
  },
  {
    "url": "other/index.html",
    "revision": "25dce4140ef8714b7716780eb01fb0b5"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "8bce117b405cfaee8b201163847fabc9"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "f7771d1729c6f140e79f21f1cb83117c"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5ce44a0e16f773815f63186601a842d3"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "8492fc8058b9b514eb3964424cc90015"
  },
  {
    "url": "source/index.html",
    "revision": "5effc68bb65c6abc655b004b1f8d2e56"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "d7d1d7894d66290cc8affc07390702db"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "882149fcf9e27be29425ae6438d8140c"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "08eaf8ad7cc7be2269cb97e39049f46e"
  },
  {
    "url": "subtitle/index.html",
    "revision": "916f16b4b5ab38acd56c3d8f810ce461"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "202d08a681548725ac97e667efb9e38b"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "3722c0ee8c2ff846391cc2f7895dfde1"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "97c6b3aca7da856a1ecb3f75c4727c33"
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
