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
    "revision": "4e4dcd29343c15bfb895556420311091"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "fdd251fe7f3cf9f7b972bbc3f7002583"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "4883e0ce9955a2e45bc7ffe29e4eaf21"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4bc3e77074bdfbfc2d55474d132e2a7f"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c61103cb25ff0c6d5284b28d0e8fd87a"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "352c0fd8335774e3ea29789d620aebbf"
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
    "url": "assets/js/19.41e03c31.js",
    "revision": "c623ec9112b90e0abbf7bf38ddab7810"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.79d5f43f.js",
    "revision": "795d5882475d94f118b196a5f083e536"
  },
  {
    "url": "assets/js/21.6bbb8a7f.js",
    "revision": "e8ef6a87581774d50f33e8da23f088e7"
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
    "url": "assets/js/34.8a017ba6.js",
    "revision": "ebf38d4ba49d8a3385de087f65fbc661"
  },
  {
    "url": "assets/js/35.c7b522ea.js",
    "revision": "6cbc00d065413c8cd51d59a2a498ff9e"
  },
  {
    "url": "assets/js/36.1d58e9c2.js",
    "revision": "53dafebbd404e0b61af23e3dad00ae8d"
  },
  {
    "url": "assets/js/37.16ceadf5.js",
    "revision": "cf6edb2af7234c4a420315906aa0c896"
  },
  {
    "url": "assets/js/38.3020c436.js",
    "revision": "fdd79fff0e5b17d4e93a832931165b7a"
  },
  {
    "url": "assets/js/39.65448491.js",
    "revision": "ced213976bcdb8861b59a91c3f090dc1"
  },
  {
    "url": "assets/js/4.2b91e1c8.js",
    "revision": "4d3f8794620a425a47405c52ce37c1a4"
  },
  {
    "url": "assets/js/40.8da86c7c.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/41.3d82d9bc.js",
    "revision": "6e7350e76d0bdab2ffd741b93eb433e6"
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
    "url": "assets/js/app.f55a7552.js",
    "revision": "c4b1019e6e952d96b83e5e84e28ef6c7"
  },
  {
    "url": "favicon-114-precomposed.png",
    "revision": "c63bdfbb7baad8bacf7eeadc36d0b05e"
  },
  {
    "url": "favicon-120-precomposed.png",
    "revision": "bb521ab493b93f640d1119f709a0fd2c"
  },
  {
    "url": "favicon-144.png",
    "revision": "04f1603cefeecf8933c631ecfe50e2fc"
  },
  {
    "url": "favicon-152-precomposed.png",
    "revision": "9589b55f927f8f606ff4a5f002c3017c"
  },
  {
    "url": "favicon-180-precomposed.png",
    "revision": "ba62629a78ec5c65f1595549c9bc7268"
  },
  {
    "url": "favicon-192.png",
    "revision": "5618579b118377ca96e099130cb59a94"
  },
  {
    "url": "favicon-32.png",
    "revision": "5d8dbc6fc4798718eee8623cdd90137b"
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
    "url": "favicon-57.png",
    "revision": "49ca4d5c8850017deeb49e0ae40752b6"
  },
  {
    "url": "favicon-60.png",
    "revision": "5ac5eee8d3e0ab5b13b6e4839127d909"
  },
  {
    "url": "favicon-72-precomposed.png",
    "revision": "aa514169450e8ce3aa603a880a9d7e7d"
  },
  {
    "url": "favicon-72.png",
    "revision": "aa514169450e8ce3aa603a880a9d7e7d"
  },
  {
    "url": "favicon-76.png",
    "revision": "dde31738126007566925d7d5ae6037aa"
  },
  {
    "url": "favicon-96.png",
    "revision": "40d03531e70d17244aee549e064a2634"
  },
  {
    "url": "HtmlAndCss/babelLoaderError.html",
    "revision": "b833985c115a7623c64e14673e032f4a"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "5a07417ddfc0f8ee9262bf681791afe9"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "232ceec934fe58e5ae203776836b202e"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "7d30605774ec6a1457973556b589a409"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "d7444a7586a6508e9f42671a219727d2"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "c392668e293616b9a770e27d8897993a"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "bfb3e94c180e0ff9b85990abb7142572"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f79d3de18d55e26643a65faaf1ab4029"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "0eae08fca83505b62d097dd9720995c4"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "fb54c488b2bc30585e72318d37a229aa"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "2659096bdfabe780806d5f38550b9f95"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "804f913eafbdf1cf3ec594b84beb1df7"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "2e442870da0b0db020321b9540bb865f"
  },
  {
    "url": "HtmlAndCss/webpack.html",
    "revision": "0612d57e3b9a57cb2ef63116cbf5db59"
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
    "revision": "3fb35a9589e818c38419b9d2a679f5d1"
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
    "revision": "461abda936ed64e4142b029c9bc88aba"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "45eb773ded0375527e6bec9ff20d242d"
  },
  {
    "url": "other/index.html",
    "revision": "5efe7020c07f14d7f0f9ba2d3ebd82d1"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c37006f7574de9b0f195708f84c2e7db"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "3b14497916db7fae1afef9042d543282"
  },
  {
    "url": "other/steam_community.html",
    "revision": "fdecda7bed0f097ae4735ea002c3d55d"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "624dd6992875cfbfb3ee8b55c014d44d"
  },
  {
    "url": "source/index.html",
    "revision": "c3a3fbed4c651c9e1f279d9efc7c23e2"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "432d7c3cc50b5d0fe64a6563f10b9aa6"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "30437e2bc070f1170a49554f81e3ed2d"
  },
  {
    "url": "subtitle/index.html",
    "revision": "9d4db824ae4bc6ba6c5a8edb326afd70"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "1cb4e714340183848bef5e9c820a4625"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "c716b9aea439dfb5cca9cb24251ca1ce"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "6c6497b9f3d739290ccada39d2d54bec"
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
