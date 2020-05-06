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
    "revision": "efdfe7c43ca0242a83066c010b312288"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "1f2f28844b8daf8aa28346ec889e2a9f"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "8ec53f7ff7259b98328e9a3d25a8115b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bcb82d9d3905a423166058e2981099cb"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "5b905a9183a1bd5762614c46d75bfaa4"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "0d887201a2e1615bb5aa6dec7304a9d8"
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
    "url": "assets/js/18.5a3e7c9b.js",
    "revision": "e62c30fe917f4e5107dd15136f30cb91"
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
    "url": "assets/js/21.bfcffa7d.js",
    "revision": "201820f2ef97b30e17381a0e4bd4ad1c"
  },
  {
    "url": "assets/js/22.043323a4.js",
    "revision": "d1126985ddd0f108aef1e4743eaea953"
  },
  {
    "url": "assets/js/23.4e439274.js",
    "revision": "73c27d8f359c17b485733094de8a6927"
  },
  {
    "url": "assets/js/24.e9408f2f.js",
    "revision": "db9dc1ea01dff1d9b1e0ca699820f264"
  },
  {
    "url": "assets/js/25.92ee0482.js",
    "revision": "887a464dfc5ebde461bd8d78b0a97752"
  },
  {
    "url": "assets/js/26.10b580e2.js",
    "revision": "b77f78fc2d0358883fdbc0c7a8d88594"
  },
  {
    "url": "assets/js/27.c04b031f.js",
    "revision": "631c3e3db4b98451fd67434483c2d337"
  },
  {
    "url": "assets/js/28.1f14e79f.js",
    "revision": "5a20d138d0542c6b6bcd0e17c95ff876"
  },
  {
    "url": "assets/js/29.0ac356ff.js",
    "revision": "097c07845dfa05be8690bccbaf206305"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.dea4fed6.js",
    "revision": "691918c0e48edc19edac9af349462dfa"
  },
  {
    "url": "assets/js/31.2b63e41d.js",
    "revision": "b29672f12b82eb57ae1b78ff1664378e"
  },
  {
    "url": "assets/js/32.ffaca9ec.js",
    "revision": "e3536b1868275d0f1421acd02a4c054c"
  },
  {
    "url": "assets/js/33.8449b70e.js",
    "revision": "682730b6797e2fc3b3c0111f82382f9a"
  },
  {
    "url": "assets/js/34.738161e2.js",
    "revision": "060ba4d31755db33def22867f570a2f9"
  },
  {
    "url": "assets/js/35.83ff7696.js",
    "revision": "c302f6aa28c7a68f08f510f3f5f61ff1"
  },
  {
    "url": "assets/js/36.d30e9acd.js",
    "revision": "3c02dc85389776f157eeb8e512c50ed6"
  },
  {
    "url": "assets/js/37.0695a2b8.js",
    "revision": "640ef1e446aa47293a2b6cce38718dd5"
  },
  {
    "url": "assets/js/38.ad19f0fc.js",
    "revision": "c806cae62cfc2a104c08eba0e3bcf1da"
  },
  {
    "url": "assets/js/39.c4aef61f.js",
    "revision": "32c3cc521e4cdf85e5ec0341e9a0eea6"
  },
  {
    "url": "assets/js/4.bf101a11.js",
    "revision": "d9a9c75f8ff8cdc9ee6ffc6a83b580cc"
  },
  {
    "url": "assets/js/40.6ecc2f07.js",
    "revision": "35e5ba087e50235004fc2a7a94ea7d20"
  },
  {
    "url": "assets/js/41.dfdc1ca5.js",
    "revision": "9f5e6ecd4823c13db1fc81fa2eed705b"
  },
  {
    "url": "assets/js/42.9decbde5.js",
    "revision": "1b85a621b746668c27bfdcf7eb564eb5"
  },
  {
    "url": "assets/js/43.9cd905c2.js",
    "revision": "0701d8cb80a7bb830421fba23ed7ae19"
  },
  {
    "url": "assets/js/44.06ee85b9.js",
    "revision": "46c50ed60060ef51ffee364de3f7ed1e"
  },
  {
    "url": "assets/js/45.fc092f89.js",
    "revision": "d1c2dad39d747133cc3804b43f947b7a"
  },
  {
    "url": "assets/js/46.339b8a8e.js",
    "revision": "e9c108040dec4f02bf1d96c165b4ca05"
  },
  {
    "url": "assets/js/47.8b7d0ea4.js",
    "revision": "9f8180ce5116d6402e589e151ba60f34"
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
    "url": "assets/js/app.c5804323.js",
    "revision": "13d47e623d9743d49bc00555032d240a"
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
    "revision": "38f691c0cf8a96086c41cb49b5a138a4"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "bc21e28a8228a0a89854b2908327b11f"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "daaa089faa1724725d00fd4bbc190014"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "858f14bbfaaa3a4363c836116c13fcb5"
  },
  {
    "url": "HtmlAndCss/elementUIUpload.html",
    "revision": "99889b601879b34181b63d0f7507c576"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "bb6bffa60b1b5065ec55c8adff45ed56"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "cbc2eb3f50957e934d935071c1fa124b"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "9a1e0456fcaffbb9696a6713efca00d9"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "48baccb2b417704d06016924a85733a6"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "36cfc45f73a9df75eb1200dcb87c811c"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "5bec34d6eb3c678750da4cd9d03b9790"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "7f744b321e8a78eb881722a516a36208"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "2d99b65681f252d138e89e98a452cf0a"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "8853c189fa6974264b021f8f3f66ce5d"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "3ce82371e2b2c5abe6cea7b0b158155f"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "754f95077c7108fdb7a4a6b484dfafa5"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f179902fdc28d4fa488c5ae0273048cc"
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
    "revision": "3398b4f68c2999b904ccd32e87803679"
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
    "revision": "79b38fad2092f83ab84de31ba39fc240"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "1449821ca3ac00cf269d9133735be559"
  },
  {
    "url": "other/index.html",
    "revision": "35397eeceb6d0ef109b11ba325a2fd53"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "1e9ba0c4e1e57be91c816257e012bd09"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "957316fe4e335d70f6172eb888860535"
  },
  {
    "url": "other/steam_community.html",
    "revision": "01b368c2727b604b518211c91f60dcdf"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "41d8f05fdb4402dd79b3e782b9c1a3c1"
  },
  {
    "url": "source/index.html",
    "revision": "3db41d50615c20d69e16e393c443864b"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "f7a1c614abaaa8a20e24a7d187ba0c71"
  },
  {
    "url": "source/webGame.html",
    "revision": "543814c40e0119c34608a6266d6acf43"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "f05eb60e74b3eeb3c4845ade0b2a0f50"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "d058f5fe279863d0c06eafa0c43836b9"
  },
  {
    "url": "subtitle/index.html",
    "revision": "be33a58914c61c52283f4118d0c0ceef"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "47ee7b755f51999919671d2ee0fd3d48"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "eba0c76855806a1cc6813fc47f22d04f"
  },
  {
    "url": "subtitle/small.html",
    "revision": "d72b182fcd450d9941d1c912ff46f359"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "45bd5bb971bd73e90528ed6c3f8e2fe0"
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
