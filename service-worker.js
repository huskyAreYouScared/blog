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
    "revision": "67e78db0f64d97704edc2dc50fa1443d"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "78ca1d2819a8091c184fd841e1483a53"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "3d30a86a92c9a5b8646e3bf7e052b7f4"
  },
  {
    "url": "algorithm/index.html",
    "revision": "97ac23cd55a97c622871ce5e128fc7e2"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "75390066ff37a7dc1768c948568f2787"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "91cf3c162e92bb84ebfdb8d2ff9a4320"
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
    "url": "assets/js/16.fd01bff0.js",
    "revision": "278753208cb42155f7b844e8c8ccdd30"
  },
  {
    "url": "assets/js/17.196b696e.js",
    "revision": "ab9d1bac4c3f910051ea78047aeff260"
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
    "url": "assets/js/28.dd2104c1.js",
    "revision": "9f7e7ec4503f20cba6ab4344578f21c8"
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
    "url": "assets/js/41.1360a81a.js",
    "revision": "55bb0fabba11689d765fad63a30dd978"
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
    "url": "assets/js/app.2ee7c733.js",
    "revision": "a88fb05fd96f7e0ff920feb740397841"
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
    "revision": "f823f35f5cbb4186f9ef446b69c808e4"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "583baff6a2ca266ee3e66cf28a2a0b7e"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "13fdfbf77380271e763a1a07abd6bdaa"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "44de855f422da6cad5f2b4c7ed8d210e"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "ea85be17708a5b0f88a58fe331fa4b4d"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "fc3d2f77c39b15f4c2e11fe3226038ad"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "c2a8303e0a94b19afce475498cc188e3"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "25ff2505a8c8f92f4d53f726b0e7ce5d"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "0e1d6a14df270e206b2ffc0218e7a23a"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "eddf9bd7c260e42e51135f6085f2e906"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "703567071839b7c6a224b30f9fc37010"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "c746819a855019c3eb9d3753d42caafc"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "1e840770b3b4033987ca633957430d31"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "00cd30093508c146ad5b4749ead1289b"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "f974d4c4226ce3cdf2a25b96e261192d"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "ef71010188776eec311355c8708402d4"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "bd5cd4d9175ddd39f055ae3b8f00ce55"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "d5e461eb6b5ef25ba84c58922ee1051d"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "f1b8d7c50457aa7768bf631e686105d4"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "f18aac92444ae1dfd103fbd66fa05a6b"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "aed281bfb684e6c42f73c5a297af37ba"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "76f746dd10cdf76a036bd234c11e1765"
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
    "revision": "67b23b99136201ed7d9070214b15aec5"
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
    "revision": "91f6479bc5681458b4e16b77475ae9b0"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "a55642708fb0db5c7afd59d6df41986b"
  },
  {
    "url": "other/index.html",
    "revision": "788c9238c99656bd7b873846bcd79a0c"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b8093f98d1ee22a37ba7f63e41289775"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "f82ceda67c4d7c1b0c1be3323edd2cf6"
  },
  {
    "url": "other/steam_community.html",
    "revision": "ab608d38d72c4911ac70a350c9c35763"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "0e4af0ca040281b5f74822c75b0adb3e"
  },
  {
    "url": "source/index.html",
    "revision": "d4eb55c2e8ce040acc94efd562c3d75f"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "0f9867c54cf315db9268aa7ec00bd90e"
  },
  {
    "url": "source/webGame.html",
    "revision": "56176c164dbd0aea6275bd6dff74d9b8"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "7eff6c80935c2e1ab2a12844ca397082"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "33063ac61cd633d235abfbaf5373c112"
  },
  {
    "url": "subtitle/index.html",
    "revision": "ae3379f625fd89a3c651c8628587d958"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "0ade214719d03cd92b0723511e87144a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "45967ed966305dbc0759bab7934e5840"
  },
  {
    "url": "subtitle/small.html",
    "revision": "3559a139323382b4b84e1f976a5b2ab0"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "29b655437b77f71135d77cd899e1070a"
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
