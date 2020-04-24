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
    "revision": "18352da8aa91390e8a7df6b8d0200d85"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "f5034b60874856d68b54251a995fe828"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "896c5a27a4973e60d2176ace8f57b70a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7031818a3479e0aa9bcc9a98cedb16d3"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "313393f0fe4ecba9cecb4f919a78ae61"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "7c4b2b5ec33694d098f8be2d4d14f549"
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
    "url": "assets/js/10.c6c9d8e8.js",
    "revision": "4f3846d22077ddfa41b71e5968ec25de"
  },
  {
    "url": "assets/js/11.1a29b4d5.js",
    "revision": "c5acb264afe2b28b117c340079ab47f3"
  },
  {
    "url": "assets/js/12.de2f9f17.js",
    "revision": "997dd5808460208b68a48ae5a8fb8784"
  },
  {
    "url": "assets/js/13.b68405d0.js",
    "revision": "6929cd34090d62a1619d8afe363593a9"
  },
  {
    "url": "assets/js/14.a07e7dd1.js",
    "revision": "d7d37f37684b593330878fbe0e7ec5ab"
  },
  {
    "url": "assets/js/15.7ebf13da.js",
    "revision": "2d9362f35c629021da50957afd4f9fb7"
  },
  {
    "url": "assets/js/16.dda8ca70.js",
    "revision": "32eaf46ca3b47bd5a0c168ba2f4eb2ed"
  },
  {
    "url": "assets/js/17.6a1131f4.js",
    "revision": "4142932d9503e30ecbe2d0daafeaa7f3"
  },
  {
    "url": "assets/js/18.d290e2c4.js",
    "revision": "e9cab4d99d7550e882fd8843a1d15bf6"
  },
  {
    "url": "assets/js/19.980fee17.js",
    "revision": "b75b3e13de40d26f86f980c22732af97"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.51b14c58.js",
    "revision": "86dba8cee2e7e5feae6f625e01fe6df9"
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
    "url": "assets/js/7.f92d5f6c.js",
    "revision": "c6313401c944e5e17ac6501ad0592abf"
  },
  {
    "url": "assets/js/8.8006d3c9.js",
    "revision": "8baa52b2642938e997496f184d511341"
  },
  {
    "url": "assets/js/9.8ac5eda1.js",
    "revision": "943471cd8e4865d5aa0101b354b8a406"
  },
  {
    "url": "assets/js/app.907cef4c.js",
    "revision": "f0d9545aaee4240993351f25f4faf478"
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
    "revision": "c0876c98e6954ed33003a5da07f77831"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a812db5aea04e4bab3bb11ed6fb54591"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "4f28414fe30124f2da0a68fd15ae1709"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "51827ccfa8001dc84e46374e2ee64e6a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "1f500454cec43d6591f2026628c12c51"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "cc0baf4646c76852a170f4047806a6a2"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "002f89fc031d149962f240a75cc179cb"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f1104f8b2995ede623ee7b8ea2fed1c0"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "de2e0fc7199eb3b3615aaacef73cfe52"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "9c9fee92741191b349293a4d6045316d"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "53f8593d5c3ce7cc1a19a97b3c466b7f"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "4434f70019a2cdf1c5b9600dfa45a270"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "c405a4997ebed73857654ba27a6d6b69"
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
    "revision": "530107ced604ec028ab7b040359d8be4"
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
    "revision": "ef636768eba5a96fc4591658db23300a"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "dcbbeb5f815e60f13a1515629d9a8355"
  },
  {
    "url": "other/index.html",
    "revision": "a3176da9833dc2b36b886ca19b9e528e"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "2639a2910e9a846233fdd447eb4a6b33"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "4b437e1cebf51d8d641c7d7f66088634"
  },
  {
    "url": "other/steam_community.html",
    "revision": "925f874457ee3540c8000fcc468687e4"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "709f6f76d373d8e2a8097221a80e2bab"
  },
  {
    "url": "source/index.html",
    "revision": "efaac6b3db9b1bcaabeb64a7846ec662"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "f4b6fe58e059cfea90d3a5b99cd39704"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "c53d15820eb0afcf4e5709b45bc97357"
  },
  {
    "url": "subtitle/index.html",
    "revision": "edf61b73a3b7ab2897acf35034747760"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "a1c946205b16a5e2c219c89f5c635082"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "e68bb304fd16587cda9e4d0319f48753"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "aa58d35f5bfda2eb9c7f14b61e91028c"
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
