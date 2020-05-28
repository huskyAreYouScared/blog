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
    "revision": "49af8d5392b5c82f4ed4164337d68e8c"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "82ba8c77400d8c698decb68abe7469c2"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "ff59d753aca289fea0c36f3142ec51bd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "dcf9065ade126320bd84db6b8f677a03"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "4266effa750c6024cd1d68dd4c145dfa"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "d457e96f922bd19d64bd43ea39f24f16"
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
    "url": "assets/js/44.6c4ecfe3.js",
    "revision": "3aafb4a1b967e7ca250791ce8e81df7a"
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
    "url": "assets/js/app.46d372fe.js",
    "revision": "382bba4235932e1cb9bb0b77dac7320a"
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
    "revision": "3b0f75e84012a2436e37c7455b213794"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "a69775487beb966ba2f5c71ea284d0d0"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "164b3ee0a76892e3e54a8d4d7f100c7a"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "f7c5046f43874ec04d9efead78bc93a2"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "1a34ec130c9257247a364be824ef92c7"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "b64203ffe221b25f2596809b11178790"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "21be0b9f4a43f78ae21c80320cf713c4"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "52a32ec883c9278ef875efbd104aa43e"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "40ae28c59ecf4d42e8f4b0947c9b6448"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "77e6cf3b885639cb89359c10cf3f7c13"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "d5fef6e57af3fec45bd0d3ad479c8ac5"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "901356b1f278f66013ba82193af9675f"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "45317e2aa91d91f043f9161c31de1410"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "bbe39caeadd00175adb75248414ee25a"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "d5005dc875d5b50e672b80a6cad3236d"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "7e83a372100fb9b8863a97292861bf53"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "556dcc4662cfd6f3da116d6fe96e0c68"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "998b02cfa4db9111b9069f59a3b58211"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "dda9acfdd46f9c537d8beaa641b38893"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "dce4022cf2282a09c458648613a1dc56"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "def456a1ce6aae71c0ba4adb35b10f9a"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "8e85a99949e3a25e3eaddd8582ec8523"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "a685d8aabc43b83954df370d587f606b"
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
    "revision": "82ebe271a2733f201db610b5d8f3347e"
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
    "revision": "e579a79c40d0b019b94db0e0ae703dd9"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "33092603bf4fee04266595098eac68f1"
  },
  {
    "url": "other/index.html",
    "revision": "0a1112af2e633cacb075de2a2066ab1d"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c10428e0ac72b3385cad637f0ef15192"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "e391d0220cebb6f7d21422d65979e439"
  },
  {
    "url": "other/steam_community.html",
    "revision": "9e4030c10ade7c231c9494975a3d7958"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "73a9900a847b74b0673b52fdf9833977"
  },
  {
    "url": "source/index.html",
    "revision": "5db45b16210cc967aee87c3ca2c9a973"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "c16266ddf60121ea66b4a637b0635102"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "104e949a5e8b65e760763fe04f6cf805"
  },
  {
    "url": "source/webGame.html",
    "revision": "759fe99c9f9180f99f10a8e82dbb3e06"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "a0d711dc74e0e849660e3cdc7fea47fa"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "9da8489cebb8520aecc7ace17520be75"
  },
  {
    "url": "subtitle/index.html",
    "revision": "dd7e42b68d5744d18d406288357ffbc1"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "06deabf40a2d2b451730cc1cb4573ce9"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "124b1949b44a3de1c9b9ceb254d63415"
  },
  {
    "url": "subtitle/small.html",
    "revision": "ceb367c5b7bdc4c44c3fcdca753cdadb"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "65ecdd2dff634734e88758a07fe4d49b"
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
