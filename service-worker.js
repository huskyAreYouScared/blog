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
    "revision": "dc1110c4e655756d155e5cb000be105e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "7c9f30c3b266492e44e2e2e9782003cf"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "38c5bb78c5ebab742e216324faba0da5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bb0c2cff581513e6ce701d658d6271ae"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "888894e439f502be8404d98d02be2ee0"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "750ffd925d68ee8425fb8ddf789216cc"
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
    "url": "assets/js/10.dcdeeb00.js",
    "revision": "f10d0e7474727b3c6ff54b027a33f760"
  },
  {
    "url": "assets/js/11.54487ee1.js",
    "revision": "4a683e4a162b4a5fed583679329728e8"
  },
  {
    "url": "assets/js/12.f12f3c80.js",
    "revision": "31ab2afb1d546f96451339f614b1dcdb"
  },
  {
    "url": "assets/js/13.07b21ae3.js",
    "revision": "d61d4484b6398fbe4b5139c4a4fe985c"
  },
  {
    "url": "assets/js/14.852c159e.js",
    "revision": "00f8ec477672c1b2ba67fb12b918dacd"
  },
  {
    "url": "assets/js/15.33bbdd03.js",
    "revision": "a9f87005456bb225e7896cc00a673ddc"
  },
  {
    "url": "assets/js/16.f776ded9.js",
    "revision": "66c0f5de0e69ffa848bd706be1363e1f"
  },
  {
    "url": "assets/js/17.eab5efc6.js",
    "revision": "5894c9f5bf4c22e807c1f7376317b897"
  },
  {
    "url": "assets/js/18.0f11db2b.js",
    "revision": "679d11584f377985885f9bc6e45acf97"
  },
  {
    "url": "assets/js/19.90a7d098.js",
    "revision": "1df430d007726548cdd51eb91d019efd"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.2ebebd6e.js",
    "revision": "b7063a28e9aa76cd51a2e22684babc9f"
  },
  {
    "url": "assets/js/21.712ac8af.js",
    "revision": "1cce3a535f3161b44ac93081a23f468d"
  },
  {
    "url": "assets/js/22.ccc38216.js",
    "revision": "9bba8b15551b2de15f1af829e07c7538"
  },
  {
    "url": "assets/js/23.f173053b.js",
    "revision": "9152715408d54a71da499180c9847333"
  },
  {
    "url": "assets/js/24.629d135f.js",
    "revision": "988a036cd4a53a171acb38b84bd26d51"
  },
  {
    "url": "assets/js/25.2c603f9c.js",
    "revision": "5b58c7e64fb69c943f5d26c6187af290"
  },
  {
    "url": "assets/js/26.40f77317.js",
    "revision": "a7ea585614eb6cfd85d85d34fd26aeac"
  },
  {
    "url": "assets/js/27.e1e1ae23.js",
    "revision": "7e29adbef76b78b4e76397a14c165a34"
  },
  {
    "url": "assets/js/28.3f807de6.js",
    "revision": "c78bb01c189856455f148e2c170cd42f"
  },
  {
    "url": "assets/js/29.f86bbc90.js",
    "revision": "e7e766aad8bccd965505e0dd173e736c"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.0c2f2fcd.js",
    "revision": "13e7f642eaf297cc10cc09c117636508"
  },
  {
    "url": "assets/js/31.5046befa.js",
    "revision": "635fd28c7a5adc8fdf98807c40c6048f"
  },
  {
    "url": "assets/js/32.cef4a55a.js",
    "revision": "17a6c819ee2587d77c5923a95b2a508c"
  },
  {
    "url": "assets/js/33.49b63c82.js",
    "revision": "931fec8014a64dce296b720abd4fc31a"
  },
  {
    "url": "assets/js/34.dac8c5c9.js",
    "revision": "f235b8a3228a93aeee91f3c646e129de"
  },
  {
    "url": "assets/js/35.586276e8.js",
    "revision": "821894ec170fba5bac0a2c099c97ae35"
  },
  {
    "url": "assets/js/36.749d8de6.js",
    "revision": "497f3790401376a5c914a571943e189f"
  },
  {
    "url": "assets/js/37.20a89781.js",
    "revision": "89645a6331961e0348ed5d9c6c1634d3"
  },
  {
    "url": "assets/js/38.2ccfd532.js",
    "revision": "d7255918120f0e2e2595d221fb4857b4"
  },
  {
    "url": "assets/js/39.4a417278.js",
    "revision": "054218cafa415dcd6436105f3439d290"
  },
  {
    "url": "assets/js/4.d4a81966.js",
    "revision": "6c34bec20df9ed39d4ac33fcc8574d02"
  },
  {
    "url": "assets/js/40.9b56cd30.js",
    "revision": "bd649d3dc2e1d417244e57ec26866fa7"
  },
  {
    "url": "assets/js/41.03b2def3.js",
    "revision": "e2c8929c15afc1c7dc22b602474f361b"
  },
  {
    "url": "assets/js/42.b994d72d.js",
    "revision": "40e1e2c8ac1dcea89093ac4adecb1012"
  },
  {
    "url": "assets/js/43.b5e81aee.js",
    "revision": "74da4b630d2099ff35a051e4eab6abd9"
  },
  {
    "url": "assets/js/44.a868c605.js",
    "revision": "e4914a3220d386e1cd4a52751a82d44f"
  },
  {
    "url": "assets/js/45.03b0ca7a.js",
    "revision": "63dbce9f4077151f2f874689044d9a06"
  },
  {
    "url": "assets/js/46.7ad01994.js",
    "revision": "2c5875fdf729c55f7e614d19c5e8f927"
  },
  {
    "url": "assets/js/47.a2369181.js",
    "revision": "e4b5712c69b8935f5338bd63f73e39d4"
  },
  {
    "url": "assets/js/48.c93da3bb.js",
    "revision": "34f999970276a8c25fd0c07634696f97"
  },
  {
    "url": "assets/js/49.9b00844a.js",
    "revision": "e16e1e1f33ac6615f1ce0f0acbece973"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/50.c2a8995e.js",
    "revision": "1e122c7d87a49f6e6178566a1ad9bea2"
  },
  {
    "url": "assets/js/51.f701473f.js",
    "revision": "9189ccffc8c1401275a1a4aafb42161a"
  },
  {
    "url": "assets/js/52.9805d454.js",
    "revision": "806cd4533116bfb95cec16a5acc94c10"
  },
  {
    "url": "assets/js/6.8575b181.js",
    "revision": "ae21c9a144160db0364769dad7bcd020"
  },
  {
    "url": "assets/js/7.49364597.js",
    "revision": "0f901c5b0166b6ea6a72ac30183ea6c5"
  },
  {
    "url": "assets/js/8.105220eb.js",
    "revision": "1526cb6803591e15e1630a6babea2b3d"
  },
  {
    "url": "assets/js/9.a429d260.js",
    "revision": "4a426c778b8553fd403a3ad01e6c179a"
  },
  {
    "url": "assets/js/app.1e660f74.js",
    "revision": "662865c5c0b37e061815afaa77bf8b00"
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
    "revision": "2d275fa873452cbc09d6003c3acccc65"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "5c52979cd1d1718aab140b2642d15f11"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "cc0a0e83cca0988b7ea9225f0093c2fe"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "52e160233bbed34f3c81c7f006bffccf"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "fcc5f119cc3d90a246cdc5c150fa66e4"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "6fd39ba23d8ff070ce2cd2049fdb76d2"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "b6bdfaf6375fad9773e10c1e4e7ad0dd"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "9844be2d941ccac76c70c608a8e1376f"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "1a064e3e2d2ad2c01fdb1f57159ae081"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "958f64f54916cd53ebf50682e80a6e96"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "fb9926f48e4e4f48e9f3bc3e8ac87249"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "9f80c6b26614730f8d55d011d89a29e3"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "9b057e2d267d535fb414f0be5e908e0c"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "42f0c059eee6eec59b775aab0fb471e3"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "d7228c3fb47607d4c5e93416359ceb13"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "39ca4cb363e150a50176c157f9ffc8f1"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "6cb820e2009dba89143abc6b6f052a0d"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "99556a767c1201bf5e7b7a848e58c2df"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "44806398c737aa5b3a26cb36de1850a3"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "c4301c9abb81d01dadb29d2e669b7795"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "b40ac8efb35fa9b2bc023f905d4b6f16"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f952851c833fceacdc6c34ef5b735a7d"
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
    "revision": "3a71ef032d24f1631cf5e4611ea6cb9a"
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
    "revision": "910007dcc6928eb9631b5905c97fbc37"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "523c18c5cb93e0ccc7d81623ece50947"
  },
  {
    "url": "other/index.html",
    "revision": "2e2981c50ff64d35f1917544ee58d85b"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "39a7f332f5e45cadf099e49ff4a4e773"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "f4440b8229756c43fc1b2a75867ec44f"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c19cffb80477964e38f1f03f03568781"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "2cbcd33bad8a45eb2aadf00b8b79589a"
  },
  {
    "url": "source/index.html",
    "revision": "0b128651c198ba4a7cfb9e3bc7742cdd"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "d54ef4e2e9b1c74bd2c036b27cb437d3"
  },
  {
    "url": "source/webGame.html",
    "revision": "365a717090f0887fbcdce06f22e98c13"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "68244fa3e4f682d47966b0cf589858b6"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "a2a263532be72d7d1bb213977187457f"
  },
  {
    "url": "subtitle/index.html",
    "revision": "a2807792e6135e2e2e9402443e6d9f53"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "de445ad5e8b1faa15a771aa56e82d983"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "cbac5c639b4ec8732fd9b703f59a01d7"
  },
  {
    "url": "subtitle/small.html",
    "revision": "ee60742f4169dfa2e64191ef283941dc"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "685a3599364afd59384b7b3a095cb89a"
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
