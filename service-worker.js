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
    "revision": "c021290e6869748d2e6f8117379a9b0a"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "8248ba647f22365aef9db087f738f4c8"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "038cb5345297ed1d34427f2941dd6008"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f3e7ae19ebf8a9376bd6d8ab3eaf8655"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "941181505c15801f07aff8cf9de8fea4"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "12099c4df972a4fe3498c16cb3b2602d"
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
    "url": "assets/js/21.5bba606a.js",
    "revision": "306776656e5fd0d1241a4b738222ab45"
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
    "url": "assets/js/app.242d7ffc.js",
    "revision": "68dfa533121fe9bffc7f482a74ab0044"
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
    "revision": "9718a7642104f633e8b0dcf22106184a"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "7523e9a15a490a11b729349de3b78498"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "d79a022339cc812d2fe889ac2ae605b4"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "b7a1a68d459b6bb088e9caf0a4307df7"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "c55cdc67e8788b065421dc2b3213fdaf"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "fcab3e9dd2e2cf9b91a9ffe9ed919be1"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "4c50febe7dbf7f198b1d18b455f81acd"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "ddc77079dfbbb87b961b581f53a32627"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "eaffc3db377a028d61319673db199626"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "8aec2c8e7ddd0c8feae9fd396916fc69"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "077419d424ac7875fc3d1ebff324d092"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "f80012c4238d22ad0823124d75482cb3"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "d66de667c591fca8eafa536202218684"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "616f421fd974cc4b125ef8fe8cdfc566"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "3d991b6ac87684f0adbb83ae9f24fdc9"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "fa0273b1274d463f707fc83daffe4189"
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
    "revision": "49425cd075926341a7618c498480e319"
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
    "revision": "314ceec52d26d825ffb21f798585be67"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "8437500c71627459baa1bcdcf51509e8"
  },
  {
    "url": "other/index.html",
    "revision": "7a37a869c17443b2d7d363d59b1fc459"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "aa505eee5acf602fa0c2f307a8dcc823"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "a8004e025100f7969a77e1a8ee4d3e4d"
  },
  {
    "url": "other/steam_community.html",
    "revision": "e28ea3a993bf2246a8bab361918bb9b8"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "edc87d50fc4d67770e1f0a5caf8621b5"
  },
  {
    "url": "source/index.html",
    "revision": "41cb420a36bd9af8ba25d07a0a237254"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "78d9f74b057cd22f2d2c787470099544"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "156d9df07e9a6384ff257fbeec361887"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "200fbcf51a885fb8849d5fafc08c6f4a"
  },
  {
    "url": "subtitle/index.html",
    "revision": "3b1c9e02f20a09bbe1910e680a2f15ba"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "7da4cd71a3c34278840575d27b6cd6cf"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "339175157dc83e16fde12496862bb4e8"
  },
  {
    "url": "subtitle/small.html",
    "revision": "932252c9140c3698afaeff6de2ed91ab"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "9dc14163c999d5a3b3980eba22d9132f"
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
