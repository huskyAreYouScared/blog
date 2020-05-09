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
    "revision": "81e5531722dd360f18aaf7328012177c"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "4596cba87c33a8c521d7b21b77953870"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "822b4f740f2db83558ebbf10f807cc51"
  },
  {
    "url": "algorithm/index.html",
    "revision": "9323d3e8b9b7c7287a0086dda2766a41"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "ad8ceb8670c4ef913bb70a61871fb2c3"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "39137e829d55614c590e633600a0c87d"
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
    "url": "assets/js/16.a2382aef.js",
    "revision": "a59864a5407dee9b253949e56e618e37"
  },
  {
    "url": "assets/js/17.de0b142c.js",
    "revision": "870bf4e99e952184b3531e459f5460e1"
  },
  {
    "url": "assets/js/18.bf6556fd.js",
    "revision": "a39e846dd41dbde58e92c94d266c8987"
  },
  {
    "url": "assets/js/19.b5477915.js",
    "revision": "300260472bb50994cf10b47fa13a0f82"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.d5ca659a.js",
    "revision": "d9bfa20343702721a0835efe2859c956"
  },
  {
    "url": "assets/js/21.9e8adda0.js",
    "revision": "6fc48576edfa2569954699c1811e128d"
  },
  {
    "url": "assets/js/22.9aa4f9fd.js",
    "revision": "1cd925b35a91cda6ca2a8f8dbea82ea4"
  },
  {
    "url": "assets/js/23.503b2a1f.js",
    "revision": "9aa659a9c75d3e7f136e02f95ec58558"
  },
  {
    "url": "assets/js/24.bafda4f3.js",
    "revision": "da5d1548b2031cced97289d9ec68f1a5"
  },
  {
    "url": "assets/js/25.0513d8d2.js",
    "revision": "61d798874b3e83fb126f5407e6c03103"
  },
  {
    "url": "assets/js/26.408272fa.js",
    "revision": "ca3d71f502e81899e0de79d590c8a8e6"
  },
  {
    "url": "assets/js/27.8f641715.js",
    "revision": "7801952d84b5d47ad3760e23149e8acf"
  },
  {
    "url": "assets/js/28.d07a8ee5.js",
    "revision": "b6a1cef629d6a1d08bfe1cdaf8f3cb87"
  },
  {
    "url": "assets/js/29.63dad9d1.js",
    "revision": "fca0dce164ff2f6a237aacafda5404d2"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.5a64392b.js",
    "revision": "10286c029a4bd87c2f9fb567ec4e12f9"
  },
  {
    "url": "assets/js/31.725d266b.js",
    "revision": "2ca1201a429e53d0a97bab566c2400e8"
  },
  {
    "url": "assets/js/32.92b9c19d.js",
    "revision": "419e9bd75b16f24e590021fdaed12b2b"
  },
  {
    "url": "assets/js/33.69563bd8.js",
    "revision": "2833f432dfb39841682b4773ee145219"
  },
  {
    "url": "assets/js/34.bed3a307.js",
    "revision": "d8584a232aa4772c27da63005b2eea2c"
  },
  {
    "url": "assets/js/35.e2cadebf.js",
    "revision": "8a70dd48305ab395680be5579a762e76"
  },
  {
    "url": "assets/js/36.e86bf1d9.js",
    "revision": "71aa007f84b96a924957ab0034687951"
  },
  {
    "url": "assets/js/37.a36de7b9.js",
    "revision": "8c16cad49dce7b5c22b8e9a2403d9df2"
  },
  {
    "url": "assets/js/38.30ec25f0.js",
    "revision": "14de483d661b12fe60b9a507fa940679"
  },
  {
    "url": "assets/js/39.0387b127.js",
    "revision": "15dbe817148f84583bd3c0d6cd22865f"
  },
  {
    "url": "assets/js/4.03b0f592.js",
    "revision": "6c271b9f945e5952591a4f18b2950d72"
  },
  {
    "url": "assets/js/40.5236fd6c.js",
    "revision": "92d94d41d312ae2dcf089b5c037e8b5c"
  },
  {
    "url": "assets/js/41.ec2bcd22.js",
    "revision": "5042bec7f2ad63e86970d84f23e9d2f6"
  },
  {
    "url": "assets/js/42.3dcafc1a.js",
    "revision": "ae4d967f252623f8498bb8763cf39cf1"
  },
  {
    "url": "assets/js/43.854a286c.js",
    "revision": "3cc1003ee3c6e6a451c54e08ef37d733"
  },
  {
    "url": "assets/js/44.499d1926.js",
    "revision": "570eb481ed242bf7896dbb7e96ebdc08"
  },
  {
    "url": "assets/js/45.33bb5504.js",
    "revision": "e5b2f204e428fe0fae0dcd97c5362583"
  },
  {
    "url": "assets/js/46.5211afbc.js",
    "revision": "1135edc0597537026609450f9a6e8ada"
  },
  {
    "url": "assets/js/47.386f90cf.js",
    "revision": "750bfc66b132676552b3f2ecc27fe28d"
  },
  {
    "url": "assets/js/48.d11b5963.js",
    "revision": "2c4d1919845137d51c5b02f8189c2dc3"
  },
  {
    "url": "assets/js/49.cafa7de3.js",
    "revision": "ccfde6a2a71907f45dba27a1a55cca49"
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
    "url": "assets/js/app.f08035be.js",
    "revision": "3eb776a40912d0c4f05a5d498e5be89e"
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
    "revision": "88f4842aa6d9dade6d0f55b2e48c384e"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "3230fde01b6253884cbad0f9d71badf2"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "39eb4a2d9c927c85b32c30108c1324d5"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "c779b26e65c9f6de853d11cf066ae8d2"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "6f9b54249b839e0f11da3db29e18d249"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "2996ec36178520116e95c359d2f9ee31"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "c8ffbb3c951a637b39ad564e38acf706"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "eb8406f350aff72b0b45c8e727cd9d79"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "4f6c86846d5783c72e2109149203c783"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "74d39b1e4f933fa6a1bd4ea852e9ca1d"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "6a6f83a5c80f775a7f932d51e824ccad"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "9d3010b48c039d961b9e49d875c75456"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "5afdcc2ab7c80fa6797dd28e947efd36"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "42237e908b2c2aa550292d2ce5119b47"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "a5b46b69d66fba2eda303171b16bb384"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "ad114ded49a18ee5e352c08096620f9b"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "efa34016f25e62b198f4f5831cb629c1"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "170dcde4efd13a728418f539dfb093fa"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "31c1f289f8d1473ee92b5fca6641bc99"
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
    "revision": "9cdf667635817ecc066d793fffafecdd"
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
    "revision": "603e81ac97281eb73a716e45d6051452"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "62529ad4afcad1a8de8ebc49ce394b9e"
  },
  {
    "url": "other/index.html",
    "revision": "bd2d23a567ef6b3083a43e968bab4e58"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "0f8e96f0f2f2a76cce15126ac5bc9a2b"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "04ae8e9d04c4aee4c8dbb1d7846e2caa"
  },
  {
    "url": "other/steam_community.html",
    "revision": "4d6ee992fb75f3ec5b7f529387bb735a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "c0f65db38cd2a8f1d836807f58789ec2"
  },
  {
    "url": "source/index.html",
    "revision": "5fb89694bcf3a4198db912d28d4c909a"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "69fd296cbaf9e5d64480bd3c275e6e7f"
  },
  {
    "url": "source/webGame.html",
    "revision": "25258887eb550bd531cb8dbfc7717c90"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "baf1263cd8ab04f711de0a1ee349d807"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "130427a0497308b0c2b87b3d44d7f782"
  },
  {
    "url": "subtitle/index.html",
    "revision": "cc1cbba825306cea94ae7618271725c8"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "11a661f5421dfee52e6d7d75a7fcec82"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "28351fd88310cbacc6a2439925fcb167"
  },
  {
    "url": "subtitle/small.html",
    "revision": "acf9ff1b23896c86c2b07df366f2f42a"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "aa1f8cac04941cf42348f948d226a9a9"
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
