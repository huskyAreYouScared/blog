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
    "revision": "a8396baee6c55d9c77a60a57cf8596db"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "62e31f4f7702eba6071a6b7516b58b12"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c2102cfcc7bd96aa1352688db350b186"
  },
  {
    "url": "algorithm/index.html",
    "revision": "64fa21d0f0e3e2beee37ce088b0e845b"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "19896dd486d242ba29baecc231b88d61"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "e0aeebc15dca1ab756618f8841ea492c"
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
    "url": "assets/js/12.0ee2041a.js",
    "revision": "aa279f98962dfeb53f46355c4f9ed424"
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
    "url": "assets/js/16.a2382aef.js",
    "revision": "a59864a5407dee9b253949e56e618e37"
  },
  {
    "url": "assets/js/17.9bf91004.js",
    "revision": "067f02068cb89109ababc59dc9783e8a"
  },
  {
    "url": "assets/js/18.ebdbb6e5.js",
    "revision": "7a4ea7076b642657c256f2ba5ccac5ff"
  },
  {
    "url": "assets/js/19.04592305.js",
    "revision": "334518584f7bf70ad18769f6ae0da515"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.ab5325ec.js",
    "revision": "84d6325577fd70f487cf0e67be6248df"
  },
  {
    "url": "assets/js/21.a95647bd.js",
    "revision": "2e51b4314ca654ee41e79d5e97a00d41"
  },
  {
    "url": "assets/js/22.e134ab4e.js",
    "revision": "da069fff4335dc70cdbe19e7de920258"
  },
  {
    "url": "assets/js/23.f8df5bf6.js",
    "revision": "353589867fc588a49b949ff93f8e79c6"
  },
  {
    "url": "assets/js/24.0443544a.js",
    "revision": "835aa6d1259b907b96b68568bb08bef3"
  },
  {
    "url": "assets/js/25.ef5a7bbe.js",
    "revision": "148988e77d6cba59520b8063570dc700"
  },
  {
    "url": "assets/js/26.34f6fdf9.js",
    "revision": "d979e1b8b5df1b8ee009e5c16be28530"
  },
  {
    "url": "assets/js/27.f3f89270.js",
    "revision": "31b34c8596b20a96f8011781dac11ab7"
  },
  {
    "url": "assets/js/28.87feb650.js",
    "revision": "a586e97728d59123ee883911d94a404a"
  },
  {
    "url": "assets/js/29.ef888b9b.js",
    "revision": "d208587fe78306401043153d27b34e8d"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.54d7ad27.js",
    "revision": "d9090c686291ef5d28eabf7e7d16de61"
  },
  {
    "url": "assets/js/31.58ef5530.js",
    "revision": "d16bb326230293bb302826d410e3effd"
  },
  {
    "url": "assets/js/32.d3e690a1.js",
    "revision": "d0bbb4aaaa78e1a268a2dbb9f48d3206"
  },
  {
    "url": "assets/js/33.6a31eb7e.js",
    "revision": "9a97124ec23f37c879ca7c87b07c497c"
  },
  {
    "url": "assets/js/34.36d91c77.js",
    "revision": "ac75391e962dc5aee083965b4535f5de"
  },
  {
    "url": "assets/js/35.c5ce8e85.js",
    "revision": "0c9a5e42be7d487eaf322d0dcba8d4f1"
  },
  {
    "url": "assets/js/36.87ef0ab8.js",
    "revision": "a33ad6fb282c5c47cfccaf97ec79fe34"
  },
  {
    "url": "assets/js/37.e5f449b4.js",
    "revision": "6ad71019515696889522526c1052b5db"
  },
  {
    "url": "assets/js/38.dbc98a83.js",
    "revision": "4e72103e6aebf0c81ee6f6771857012c"
  },
  {
    "url": "assets/js/39.15ca97d0.js",
    "revision": "31719acc98ca3ff963aad367e4f3d55a"
  },
  {
    "url": "assets/js/4.580051b8.js",
    "revision": "15e717bca7559e9699dbd7001e99b137"
  },
  {
    "url": "assets/js/40.fd475432.js",
    "revision": "7267df0faf03e51d60e0cf5f4eca275d"
  },
  {
    "url": "assets/js/41.c2095e1a.js",
    "revision": "bf7bd4f24e9788a40ab4c8907dccde75"
  },
  {
    "url": "assets/js/42.822bdf5e.js",
    "revision": "c02aa3fdef5030d343c20a6d4d18f482"
  },
  {
    "url": "assets/js/43.5b28f5c9.js",
    "revision": "566f851ad3ecbbc294572d75da72e438"
  },
  {
    "url": "assets/js/44.1bae58fc.js",
    "revision": "592e60c7ad43781b614ffb7edcd143cc"
  },
  {
    "url": "assets/js/45.baddb654.js",
    "revision": "df3e34757c3f41e5f29836381016cf19"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
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
    "url": "assets/js/app.7050b8a4.js",
    "revision": "42453d08002aea76504aa7ba936e8845"
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
    "revision": "bb920fcbc54de7a54fed42a870278156"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "739002d715aa60343ba77cb83e1b233c"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "febf46ed3e0cc33d3d0795cea294106c"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "80823cf2e5ce6ac66591fcf53fc03f5c"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "eedaf01c1d630ae1dc309a7e46123690"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "68e0c0e0c5a09a2d1dcbe1ca40b1f790"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "fd7a1d0a96aeabcbb328578296b9b454"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "4cd2d231e4905eb1442a2e1d3926afa2"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "d7e61b9656178339f4d9c2a1ca823416"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "f987e781131ff5d78db659ecaa6d43f4"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "70182ecae2565f249a5e2403ff5e1dae"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "c7523d2e0a9775e3481e81b947c4787b"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "a042aee523b0b431684c954d5b252c08"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "19d8359390bce2ce17ae1de8728c4c32"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "b88d336a5b00291abe58d7553373deaf"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "88dbb46834c1ab43310dd96a7d6134df"
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
    "revision": "d02482043a51f8065bcb3d81cde9dc4b"
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
    "revision": "b3ea5b594b017f272299b69f8dcf0adc"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "a4c7f0ae17273beb7cc93473e9389b44"
  },
  {
    "url": "other/index.html",
    "revision": "b8df82c944ba91468b1c8c723e6d5ee9"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "4b469a7660b32354500905b60b7f5139"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "6c72e937c6073c59f7d57373128cd9f3"
  },
  {
    "url": "other/steam_community.html",
    "revision": "3b678ed95cf68f1874c10789b8d7ea33"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "614f55ea442698e0963eaa591e786b34"
  },
  {
    "url": "source/index.html",
    "revision": "d5e9e7a27676f3549c3e82ecf88ab6e2"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "64c2cada98d5f8a007d960070b484110"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "d0462c73e4fce014a2d8aca467c1af91"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "63c789a01448aa4d25bc724bbbfbdbd7"
  },
  {
    "url": "subtitle/index.html",
    "revision": "41e36c2e5a52362e1056846c7fefa568"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "01886f382d9bfe4f2f86c0b83960366a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "00555cf6a09c098196f9602dbad58cd7"
  },
  {
    "url": "subtitle/small.html",
    "revision": "a7cf93894cb5d7b5f6db76da8505b4e3"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "58db96b6e3a4da89cc38c1fa81692ae4"
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
