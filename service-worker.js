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
    "revision": "b70492b692205ce34159ebfcc98dba8e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "a7a8daadd8a37e9ec68ba6c9b06d1fa1"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c62b3c0c6060c1a360d0867187634cba"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c06770bf79c80fce7e749e72a0036088"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "98169ae8d52b084c5f9fc15bc804cf19"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "82be6634386207e578be2bf44d071ed9"
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
    "url": "assets/js/10.776c4fd1.js",
    "revision": "77aba39a9966801794e153120995029a"
  },
  {
    "url": "assets/js/11.1a29b4d5.js",
    "revision": "c5acb264afe2b28b117c340079ab47f3"
  },
  {
    "url": "assets/js/12.e348140e.js",
    "revision": "e8c8322853d0eff9d2a62e2acd12aacf"
  },
  {
    "url": "assets/js/13.b68405d0.js",
    "revision": "6929cd34090d62a1619d8afe363593a9"
  },
  {
    "url": "assets/js/14.f99e7c97.js",
    "revision": "64c71ce840334afdd26c508177d8c3d0"
  },
  {
    "url": "assets/js/15.e21e903f.js",
    "revision": "21c5808d560de3c7090a76e72d2b1318"
  },
  {
    "url": "assets/js/16.33b0c50d.js",
    "revision": "0778489b08c7e9e7d6fa39e7d1b047fa"
  },
  {
    "url": "assets/js/17.1c40a155.js",
    "revision": "28682cf839f73e1680cf11f925ec140e"
  },
  {
    "url": "assets/js/18.a4b5853d.js",
    "revision": "be5adc385122b430f2636408ed5991f1"
  },
  {
    "url": "assets/js/19.7e8af27d.js",
    "revision": "df5e854f6645eed9c0c8d85ddad533ce"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.93c2e6fe.js",
    "revision": "1fb9acd5c1810c1d1642075e4ed9aae7"
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
    "url": "assets/js/8.8006d3c9.js",
    "revision": "8baa52b2642938e997496f184d511341"
  },
  {
    "url": "assets/js/9.6d10823b.js",
    "revision": "aa020cfbffd42c55b4ce18ce08d462b5"
  },
  {
    "url": "assets/js/app.d7ba8061.js",
    "revision": "b4c3ebfc403dcd26632816bd3d06d5fe"
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
    "revision": "eb15035679d7add6d445819d58f92511"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a6988847b2791aec7ce27a2d392caa1a"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "a9811d0465c70d2cbca4c43e316bdc69"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "9405545dc7857b013f9bf4b4a3b9bc1a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "15c946a4d0881b4cf26cbd26b837dbc1"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "b03a8ecbe056877601efd5c883b61024"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "9164ff902f6684e3f553e43ef41ad334"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "9ea1f78b221f4802f5fcfbf9e3fe7c2c"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "3107d3e700b4ba46d1242f8c8032f441"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "8c6922a6794aab7cdb6b8ae2747820a5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "b4a0ca547d25485db0179da987144730"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "63560cec42d78cffb19acc80b1669131"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "b12b8f341e06ba6aa42e305be7cd776e"
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
    "revision": "0c296d457d00f393edf17fad9faeacb0"
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
    "revision": "76fe6ed9dfd79ac27e1adee0e75e9a2e"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "f743ebdb410dc6aa0cf525e413ab9cfe"
  },
  {
    "url": "other/index.html",
    "revision": "56e7a9175006e30172a9a5e24b1f9c74"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "0c53a1b5c8ee67e1205253db66d8838a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "a939ec275be495179fe0f6811ffc02ad"
  },
  {
    "url": "other/steam_community.html",
    "revision": "201cca9e2a4b21e8189aa4c20feeff20"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "30f6082071e818baa94613a840a30d99"
  },
  {
    "url": "source/index.html",
    "revision": "5be89af9450e57ad299bf34aa15480b5"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "8be12fce89acab308a145c5677e71fe4"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "8c0bd8a5ea3b3662d42e0be388cf98ba"
  },
  {
    "url": "subtitle/index.html",
    "revision": "acc098542261a9f29c62e9b0998f4799"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "8452782a9ba63da8ce2245f9e5d5bb78"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "410d658c682ca357aca263031468a4ca"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "f3ca20376695a9a6d7e47d1f0d7dafcf"
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
