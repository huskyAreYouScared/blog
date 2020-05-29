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
    "revision": "0ccb4e677585455e3560cd2a09bdd2df"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "3604e292a5b90f17ac345b07c3a66e41"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "7d81c0fc51f5685d2f992bf55a1d61cf"
  },
  {
    "url": "algorithm/index.html",
    "revision": "85619ad3eef2e174852eed3b027ba29e"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "7badab8140aa2d11fa81bb08a0e95810"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "81cd930503399802b0b8e2c66265205a"
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
    "url": "assets/js/14.42f18544.js",
    "revision": "c2c1fb270630002710c0f175c6cac523"
  },
  {
    "url": "assets/js/15.a4a2dd63.js",
    "revision": "196f4e4af0bf8b50fc274dea0c47b3c3"
  },
  {
    "url": "assets/js/16.bdb37c2e.js",
    "revision": "aa0021dc35e945f338433b8eab3a2844"
  },
  {
    "url": "assets/js/17.afead2c4.js",
    "revision": "829c52e63d0b0ca6aef6effcb15545a6"
  },
  {
    "url": "assets/js/18.80470f71.js",
    "revision": "1a66e7d1fa065612b47b4240e76ee172"
  },
  {
    "url": "assets/js/19.1be421dc.js",
    "revision": "1c714e28fb2cd466b63752c5d225502a"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.18436299.js",
    "revision": "c271ba99dd7197081cc500c88e5a8a39"
  },
  {
    "url": "assets/js/21.66fed98f.js",
    "revision": "ecf49acd552f21c7638ea2147fa3638d"
  },
  {
    "url": "assets/js/22.95d3b460.js",
    "revision": "793fc356531405654a77a9dc98ab9625"
  },
  {
    "url": "assets/js/23.9ac4b423.js",
    "revision": "5dc7cc1b53a6f4fe0ef181c7ff6b4caa"
  },
  {
    "url": "assets/js/24.4b701a3d.js",
    "revision": "2f6a62ab5abd84ed36cac1dc07c4d352"
  },
  {
    "url": "assets/js/25.1c869641.js",
    "revision": "bf3ecb3cb88ffae135bb12bf29480dcb"
  },
  {
    "url": "assets/js/26.93b76644.js",
    "revision": "708114831e8c72612764f35a20cef89d"
  },
  {
    "url": "assets/js/27.7ce0e157.js",
    "revision": "eb11609ba7b87ebfb6bdb54c638a565d"
  },
  {
    "url": "assets/js/28.4ff3576b.js",
    "revision": "389b6d059978405b66c363b5d414e9a8"
  },
  {
    "url": "assets/js/29.b3bea998.js",
    "revision": "751a2aec4aed8e4ecdefec554a426821"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.39fcf343.js",
    "revision": "a9585bdb0074b3df4456f297803bd385"
  },
  {
    "url": "assets/js/31.471e3e5f.js",
    "revision": "83fb8eb4d5d32ae2a61a0ef7a649d66d"
  },
  {
    "url": "assets/js/32.e003a38a.js",
    "revision": "1d1e30dc9799f22265e8a33107a09266"
  },
  {
    "url": "assets/js/33.3081cd60.js",
    "revision": "86419d337eecf82324e53f4c0026cff2"
  },
  {
    "url": "assets/js/34.9ddd978f.js",
    "revision": "840f57340f7a2d89d6cb7c2cbdb08ffc"
  },
  {
    "url": "assets/js/35.4055f89f.js",
    "revision": "83b95756edea88ca8123006b7a25b39c"
  },
  {
    "url": "assets/js/36.dca46034.js",
    "revision": "667be03e641fdac7b8d21986b703faef"
  },
  {
    "url": "assets/js/37.b53e996c.js",
    "revision": "74c3f61d704b548ea8f02dc058d561b4"
  },
  {
    "url": "assets/js/38.57ba252d.js",
    "revision": "c1da7c4294a5b2ad0099e0de7e59c618"
  },
  {
    "url": "assets/js/39.61e5cbd0.js",
    "revision": "d36a85b244b26f7128df3136f87c18ce"
  },
  {
    "url": "assets/js/4.9bde3c5b.js",
    "revision": "c9d3301379f9cac1acb48fb2d7d20106"
  },
  {
    "url": "assets/js/40.f72f9bea.js",
    "revision": "add2f6c05ef5ef06993ecdf2b0427dda"
  },
  {
    "url": "assets/js/41.82eceab9.js",
    "revision": "1182774ad1563f54b082c406be592a86"
  },
  {
    "url": "assets/js/42.03f271fb.js",
    "revision": "93fc66c65c4cb24a01af4ee938469f3f"
  },
  {
    "url": "assets/js/43.a09300d5.js",
    "revision": "268c69b86bd7cbb5df92e12822c67f24"
  },
  {
    "url": "assets/js/44.590ac496.js",
    "revision": "de2be5a738c9b073f157d236d134e656"
  },
  {
    "url": "assets/js/45.41f066dd.js",
    "revision": "ae8a91ecf16bd0cc7569c26ec1377664"
  },
  {
    "url": "assets/js/46.568f3af0.js",
    "revision": "1982944f67a8a6b235c37b60d1347d8a"
  },
  {
    "url": "assets/js/47.a8ed2e74.js",
    "revision": "e09558e965574ec9c49c073bf8be9bd0"
  },
  {
    "url": "assets/js/48.471385f9.js",
    "revision": "79774121f6e5c5658c5fd340c9d37dd4"
  },
  {
    "url": "assets/js/49.6b137422.js",
    "revision": "735c181be134b8df33b09eb83e0ee9f0"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/50.f82f5bc9.js",
    "revision": "2f5283c315d1976c4c1e667cd02752af"
  },
  {
    "url": "assets/js/51.17977ffe.js",
    "revision": "551024bd837183a789ef05695baa76f9"
  },
  {
    "url": "assets/js/52.c2f9c8f8.js",
    "revision": "2bc9931688d0f9828478c1c7e2637f16"
  },
  {
    "url": "assets/js/53.5dbc5108.js",
    "revision": "e3b70fab3485c609cb2b11adcfa84620"
  },
  {
    "url": "assets/js/54.2deb1625.js",
    "revision": "b87a3eb68d3471b9cee4433ad2a62596"
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
    "url": "assets/js/app.7d3143cc.js",
    "revision": "e44869d94a5d91d4d9235f763cc3eef6"
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
    "revision": "c8d899cff6751396ef3788f817d00fca"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "6266e170ccce011962eb6a6ee1b4faf0"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "15f5e807933ad779d188574b656aff3c"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "4b864dbeb4ee541b398facfa00e03693"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "c302acc1f276efe7c3e8c92a7d80ad5e"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "51e7617b25e64327f6f5e52887626489"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "377fcc208a699f538365fc2fee6d8a0e"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "6afe7b5338dc3c21881713d0b31e4957"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "615da56a8b84cc3a00c96c2c4dd72b1a"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "be1c8642ea3137e468c7805d77d27e90"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "cfe9d666cd54d70ffc94dc79ddf7ca7d"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "dfc53cbe2463f8ce85ed3d32e4e59051"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "693147e6428e4cfda88c6b692c3e95b1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "b2fbfcf31273e67fad36e56ac01e9535"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "83242d06601020d29d3ca6b8da8efe33"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "afe704eaa43fcaf5aa665c1b7b84a4b5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "b182a9172d4080faab365c650c39ead8"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "64c1ada42ff14d35dac873b9e462ff46"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "af7ea111d65a8fd26684fa16595f8f4a"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "d5dcb327c1c28d3d61cef5bc643e1324"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "9a1da5a5bbf5de857def3dc996b8e169"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "fa59dd38cb3b40ffcda5cbbc6269c74d"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "15ed4e6e367eb1b1d9cb225619f46229"
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
    "revision": "f754acc290b43a393e9ff5b250955a27"
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
    "revision": "51574631b7703e5451826f1e96bfe804"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "5c5d88fa26f8fc2c3dd45264829a3eb2"
  },
  {
    "url": "other/index.html",
    "revision": "eafb145cb13d32f577195e155db3f56a"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "3711d3ca4deaa5d0953667d808c09ef4"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "dfe4751809697ed7fce0dfbee7971660"
  },
  {
    "url": "other/steam_community.html",
    "revision": "8fa627a34b174924a95dc28dd81b680a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "e380091ebd1d38850f23f64ac124c2f6"
  },
  {
    "url": "source/index.html",
    "revision": "fd8c42171bb22634ddd8b857177bcddd"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "49e4e78ca21bf2f6e8eb890f7f9932f2"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "095373089a472de85bbf860054436230"
  },
  {
    "url": "source/webGame.html",
    "revision": "dc4d03f1d57f7a79e6775f63c8a26137"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "2c046c431c3885b71e897509ece468e4"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "73be15bb2c1ce69c607e255107283a1f"
  },
  {
    "url": "subtitle/index.html",
    "revision": "34c41131cf454b8a9be920c435d14849"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "3c7fd884a44c5581bcb4ff0ef857e4f8"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "77fdf98c3537446ece9fa8209a5e454d"
  },
  {
    "url": "subtitle/small.html",
    "revision": "fda512075cfae37294bc9d7a569e0085"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "c82a68cc055b41627d49915310a5df2f"
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
