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
    "revision": "ab834f57686d8eabc366dd02b5d77a4b"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "f2f6d42bf736ea3d1d3a929f630c16cb"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "009cf810f99fb3ddf81333c50d47b4ff"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7b25e9982947d752807a1dbf17a15c74"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "30b1b6610feaf6fc33763da7a598c590"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "51eb1be85236d5950cb0b212ac292c3b"
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
    "url": "assets/js/15.d8c4fd92.js",
    "revision": "4ff36c681868da6f24411e765a378ef1"
  },
  {
    "url": "assets/js/16.33b0c50d.js",
    "revision": "0778489b08c7e9e7d6fa39e7d1b047fa"
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
    "url": "assets/js/app.7e61c1fc.js",
    "revision": "3c22afcc0115eb212a8647fa7b359def"
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
    "url": "favicon-144-precomposed.png",
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
    "revision": "4457d359b1324558613cf0702855cca5"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "9308d1723f32ded967456328964cb994"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "86217b5b963ace6e694f40916126b0d3"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "8254133fb6895cdc2df518dff35cbc4f"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "baf3d52af873f67f76782015391333e4"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "8e5fc3c70b2aaf9bbd2fb3ef0f4734b4"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "a89021dae1f0d2e30eaef752f2e1f803"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "f2fccf6dba510d6d25550b35cc6ebd08"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "7b0693285bfbdc1d7f6287c40fec5ef9"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "1641e053115c4f88e8cceffb035902bd"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "f975bfd4147c267befe7c2ed770b1d51"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "ce0610144b061dfde6341648ea16e048"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "59449b3fcb52a7e62eb9ff00e4f7c330"
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
    "revision": "f6aabc8d99474f5224028e6af8bc1dc4"
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
    "revision": "9597c6990a0f2e8c2cd128a2d11822cf"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "d6617b7bdfcf2db6d39177d4ab959800"
  },
  {
    "url": "other/index.html",
    "revision": "cbc955b699d69acf16c4a3e880ec1832"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "4d84ed945dd7b04d335b307d75db204c"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "390ffe70f63c07f87b8c8afff10f762b"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c6dab8aa110059446afd2c0fb1cb5a32"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "2db76d6b470ae0428fd36ad68f9db8de"
  },
  {
    "url": "source/index.html",
    "revision": "a320f3dc4e29af2a061922036195eb13"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "4759fe56c6f2952028e3184c71079fce"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "44e11027545676edd08d588099ac1848"
  },
  {
    "url": "subtitle/index.html",
    "revision": "fdcb61a67fcd3b1ecd82e47374f71641"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "b1a842d140a2cc9187051971a8e44b3e"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "8e6e3ebd5694fc32ba1af82069c0939a"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "c3468c6a52e6de2c46cd8d6a372a9039"
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
