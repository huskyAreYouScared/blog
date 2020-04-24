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
    "revision": "1d27aed58750bf8d6145f6c1e0913f80"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "a24d7281c76bd1d03e9e8263995c66bb"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "52c31d7091c0d4832c44e43f8be8f86b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a042e1864996d2694c181c5878057e97"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "77c558454c258b1a5c73c400327f1488"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "b02b10fc48796dd028e2db2bab7c6856"
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
    "url": "assets/js/19.f8439280.js",
    "revision": "574598082461a8f38b551f2b73545ccb"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.23c6c219.js",
    "revision": "e480b51902c78f158e7db84f7f92d8a1"
  },
  {
    "url": "assets/js/21.c05cf019.js",
    "revision": "4d85fc764fb9b1b872fc58d8f1348df8"
  },
  {
    "url": "assets/js/22.0a032457.js",
    "revision": "acfa694c867748e47d2d0c186b03333b"
  },
  {
    "url": "assets/js/23.40dcfc44.js",
    "revision": "36a8c7dea10880ee8f71eb585b48385d"
  },
  {
    "url": "assets/js/24.5f8b780b.js",
    "revision": "35bddab06917a750d7c9607cf5b18616"
  },
  {
    "url": "assets/js/25.26ef4b21.js",
    "revision": "b6500607b8c5652704e56864d78f7e78"
  },
  {
    "url": "assets/js/26.53cf77bb.js",
    "revision": "f8f19ff4c56e853a0f471a9af7fee577"
  },
  {
    "url": "assets/js/27.90e0b5c9.js",
    "revision": "9ba60ffcaead1e2703f2f9d80e6faf8e"
  },
  {
    "url": "assets/js/28.75112ec1.js",
    "revision": "43b6016a8765ed82a83aa34efb4daf6c"
  },
  {
    "url": "assets/js/29.7300f5c1.js",
    "revision": "a711c067fe802b83c15a12ec4e754f31"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.24a5b31b.js",
    "revision": "1fcf66f5043b552d5cd74dfc6b304002"
  },
  {
    "url": "assets/js/31.ac643294.js",
    "revision": "eb7251210848681dc83444ce2f24fe85"
  },
  {
    "url": "assets/js/32.a57880fb.js",
    "revision": "ffb491570c8dcbe07a61e626b205455d"
  },
  {
    "url": "assets/js/33.1d0522cb.js",
    "revision": "dbad679dcbb972ee388cebff0772da6e"
  },
  {
    "url": "assets/js/34.1c551ecb.js",
    "revision": "1544d7cdf999bae1ca24c1dd344aafaa"
  },
  {
    "url": "assets/js/35.a72b0b83.js",
    "revision": "354811d5103f183c78abc54b12f452aa"
  },
  {
    "url": "assets/js/36.228cbade.js",
    "revision": "d897f8ce3101bab511450de67eccd5f1"
  },
  {
    "url": "assets/js/37.5f8d90fd.js",
    "revision": "540d6faa04b99c939654f1ac50e52e10"
  },
  {
    "url": "assets/js/38.2c152a17.js",
    "revision": "263ade6f8da3dc7e06f24829b42ec7a6"
  },
  {
    "url": "assets/js/39.27724bd7.js",
    "revision": "3c1d9792f109913b20874d3853ff5392"
  },
  {
    "url": "assets/js/4.e64859be.js",
    "revision": "9f858807045dd473eb7ad80784bc9cfb"
  },
  {
    "url": "assets/js/40.4d59cbbc.js",
    "revision": "d05f7c8d6e369028993033d75dd0a068"
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
    "url": "assets/js/app.7bdb477a.js",
    "revision": "3b1139f35e0c1f091ad5aa9db0a90e44"
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
    "revision": "c25e786ca83679e99ac961de882662b2"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "e3b289a1e7b5ff7204b79b7b4400eb15"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "f80595ccaee332153c43006afee0fbe5"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "9eb6bb64c2c5298f572c6f1a6c0bed1f"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "6261d7db9ca542970165e80d58cfa5dc"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "2b90df3dfbc9b556cd2165f3599fc021"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "93fd34c370d227b996d216010547db09"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f13ba07bc0fff67cc2a803f019dfce37"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "0aa98d3706f9cf7290853d9e8192ee31"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "2a49de91cca260ce1aae7e05231a6ba9"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "90691a722fe8ebbfbdac53410a32eaf1"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "b839b2b17e436ff40dd0da6035469442"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "f5c5383e73c4da86959dad28dcafaf88"
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
    "revision": "3d586faa02bc25372c47fa626457f156"
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
    "revision": "70ef6fbdd10f047b7865559feb8a0634"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "79210f376ff157ca3854f04a7a7b5c07"
  },
  {
    "url": "other/index.html",
    "revision": "bca65d7c31f21a2111f151c06872ba16"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "0654146069695c65c5f277986de0d6a1"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "bae4e4d1b6ca2b5130c446bcaa884b09"
  },
  {
    "url": "other/steam_community.html",
    "revision": "41ce349794e97742698c38cc4c54a62e"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "b903cfe1661ecec48eb2c0855d2411e8"
  },
  {
    "url": "source/index.html",
    "revision": "b2bfefc4d5fdd7f8a98ca45f80c8d396"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "bc33d84c56ed50d15804dc095324a78a"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "bda57907810ad4e91274ffc5e55753ec"
  },
  {
    "url": "subtitle/index.html",
    "revision": "4c0dff4035a6c5451a9c51f9a5b0e74b"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "859b68e4a9d03e739c1f4118e7eb25d1"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "6c9da62625f2ffd4793ed919c7cfb845"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "b6972136d6351c0d9eb6dfd6da88e9f7"
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
