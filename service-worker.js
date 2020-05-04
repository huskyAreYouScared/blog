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
    "revision": "c0b74c9ccf80daf69d2fb004ebc96ffb"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "c3d36d26c889bd51e35b254a78c1773f"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "8a3d90dd54e794627b3e766aed2c3683"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1a21626cc62ee9cd90871fce7ec26283"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "92f2c3b542e4267124f3175469705a5c"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "b8fd75437c13a5be9b6f118f053930d2"
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
    "url": "assets/js/17.dd32ee0d.js",
    "revision": "85843345a0ec13bc2e568db747e83acb"
  },
  {
    "url": "assets/js/18.a4b5853d.js",
    "revision": "be5adc385122b430f2636408ed5991f1"
  },
  {
    "url": "assets/js/19.e805c7fd.js",
    "revision": "2e0ae9df88937137cc89afc212df41fb"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.622c6a61.js",
    "revision": "a63a54036ca06b8c0286d3e9e4f0aa79"
  },
  {
    "url": "assets/js/21.3e50b95d.js",
    "revision": "b426cd403c3171d7ed91bd075e04b777"
  },
  {
    "url": "assets/js/22.43828beb.js",
    "revision": "74cda124a4ca4c1edb160bc2837cd036"
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
    "url": "assets/js/4.3f88b085.js",
    "revision": "69ed2edf9f17704a71149b48c4b7a889"
  },
  {
    "url": "assets/js/40.69d6f0e3.js",
    "revision": "4b381fbae3cbe5afe65a5d639374ad34"
  },
  {
    "url": "assets/js/41.460a9b43.js",
    "revision": "a3d2e7c21a9b68383d9f8f14858835e5"
  },
  {
    "url": "assets/js/42.920300b5.js",
    "revision": "b87df823f0043dfc3e3c70f56b37a8a2"
  },
  {
    "url": "assets/js/43.1adae357.js",
    "revision": "01fd9616f573d4c593b25551e00ae7da"
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
    "url": "assets/js/app.daa68958.js",
    "revision": "8a3c0107c1e855154ac09602a9957021"
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
    "revision": "431e96bdd2ca8b45ef98247cd9bec427"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "3f0079cef5e079d5f6301bbd674335b9"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "3d23b994ec2ed93eb9f49aeff7c5acd6"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "9756efa24a1b0c71983fc85298eab62a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "8562ab4fc7d95cff0dfe81494336071c"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "1f25cd370d43f34226094ac456fb239f"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "fa06888312693f43e54aba9616ce0101"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "16a24bbab4a675770351b729a45a5254"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "fb60088c71c2a7ee0f13d4a2a28d6a2b"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "2053d79f8a768b84057018e2d56baa47"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "3a01530e2e5b148ea6e3ed39fbc7ab10"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "1574d8406a33017cb821618eadb1be46"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "a85e9c35da64f045c5be1a36b845b9c4"
  },
  {
    "url": "HtmlAndCss/webpack.html",
    "revision": "23a381bf7c6ccf3bc8d3b8b1a8f7c057"
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
    "revision": "a098720a95ed9b106740942b3774fe6c"
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
    "revision": "6ae2191dc39fb02fd0efb4f00476101c"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "8d9e873689e4005bedd96a48bb2c64ab"
  },
  {
    "url": "other/index.html",
    "revision": "ab2bc4d88af0a9b5a9d762255fa5c480"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "1b8ed4f28ad072e2b37189f3ca4d457c"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "8243d7e214f8e6ca0cd348e8dec0e03e"
  },
  {
    "url": "other/steam_community.html",
    "revision": "9d13545b0f17a98669595016ade1fe0b"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "44a992ac3bbd489077c42909c9e68532"
  },
  {
    "url": "source/index.html",
    "revision": "9bdd619100eff923854ef0aa53e05c4f"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "49c4bcfdda29fce671150c8af2e14f60"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "dcb6053c2c3eeca22463e0431474ec70"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "a88cb7dabcfce8ac878b00dc153a2838"
  },
  {
    "url": "subtitle/index.html",
    "revision": "adf5bfae46973f4393d52366c36d76e1"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "200313621e0e9d24cbbe7a4ee6b165fa"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "b5e921c68b0a726204adb5873c704a5d"
  },
  {
    "url": "subtitle/small.html",
    "revision": "89b4a743f37deacdd83300b095aac862"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "7fd0fd7313daa87bb51a2a3393939082"
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
