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
    "revision": "4e57e4bb92a9fef4a6f8ed1bbd1420e7"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "7e9589c33a50ba99b9b70eddc42563db"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "39c62957e21fd93eb7488391f7d91c48"
  },
  {
    "url": "algorithm/index.html",
    "revision": "88c3e9c20d9255e8d2df497b12e03079"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "fbbb96b3ae04303d17fc8344aa217803"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "527e1c26fda3197378fa911388529931"
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
    "url": "assets/js/10.11cf69db.js",
    "revision": "911b83e1822211d576906ededd3a851d"
  },
  {
    "url": "assets/js/11.d6a96ff0.js",
    "revision": "36d580f5cc656d237de49bf11b7082a9"
  },
  {
    "url": "assets/js/12.d5eee066.js",
    "revision": "834eb91a19051e17b420d3249316f06b"
  },
  {
    "url": "assets/js/13.7e9aebaa.js",
    "revision": "c7a6f17af4caf5448686f9aabe3eab06"
  },
  {
    "url": "assets/js/14.b0ac1ad6.js",
    "revision": "d4a44f2ea676ffcb7744bded3cdd1789"
  },
  {
    "url": "assets/js/15.32ec292e.js",
    "revision": "6b0f240c3c679e5db44b6e9e67b89dce"
  },
  {
    "url": "assets/js/16.5af6fdac.js",
    "revision": "819be679736a2ff6c776e66484ad6c4f"
  },
  {
    "url": "assets/js/17.cce138d8.js",
    "revision": "d9480fde8883ccceeb00ebd6f7996d70"
  },
  {
    "url": "assets/js/18.fa7a9aa6.js",
    "revision": "ed326b2753eb69f1980c67fe884ba8f9"
  },
  {
    "url": "assets/js/19.d9ff8d94.js",
    "revision": "1275ac8022bc0bae3fd65b736621d996"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.c30bf6c5.js",
    "revision": "04df8c32144dadcaa51d9c5f474788ec"
  },
  {
    "url": "assets/js/21.111a94a4.js",
    "revision": "871694cb579e30cb7ff855316b352e6d"
  },
  {
    "url": "assets/js/22.eed37eda.js",
    "revision": "661d3c53f936337f794af90659c55268"
  },
  {
    "url": "assets/js/23.7dfb6bea.js",
    "revision": "696f2bae0a2ac0530893e7a51d159484"
  },
  {
    "url": "assets/js/24.052a693f.js",
    "revision": "59e530f58720a4afadd004485e89438a"
  },
  {
    "url": "assets/js/25.e135cb79.js",
    "revision": "3e10e97ab6c32e928fdb6827eb4c85f4"
  },
  {
    "url": "assets/js/26.96501fbf.js",
    "revision": "736697aa2d62136289b65115f317d266"
  },
  {
    "url": "assets/js/27.b7939d47.js",
    "revision": "f0822e5f19215038f12771ecf38c1ecb"
  },
  {
    "url": "assets/js/28.4c04949c.js",
    "revision": "ee49158136defa7ab891e765697a9eec"
  },
  {
    "url": "assets/js/29.82d6a9ad.js",
    "revision": "2ecaac6d4d22e3fb39af083b3a68160e"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.4485022a.js",
    "revision": "579a2d4090e02e8502e157e3a844c13e"
  },
  {
    "url": "assets/js/31.873ceaec.js",
    "revision": "b4dfe38131142c982473a178c08d80a1"
  },
  {
    "url": "assets/js/32.38eaf3cd.js",
    "revision": "93af409ed14ed937ba4f07127b4b01dd"
  },
  {
    "url": "assets/js/33.a8d0e705.js",
    "revision": "3d215d76b88d3ba74cf3fe1231c82cff"
  },
  {
    "url": "assets/js/34.3c1e6e12.js",
    "revision": "5ec40e5deacc8c27498b763d9a1f8000"
  },
  {
    "url": "assets/js/35.4fb4478e.js",
    "revision": "535372a8a9c6a5baa4911c99fc2f87ff"
  },
  {
    "url": "assets/js/36.39c368b9.js",
    "revision": "b75278bce44a2c4c99a129867232c8ca"
  },
  {
    "url": "assets/js/37.c21cfd42.js",
    "revision": "7feb18df67780ace248aed368854d122"
  },
  {
    "url": "assets/js/38.2fce3942.js",
    "revision": "9750ae4d68b180aa015e4750bd2c5c10"
  },
  {
    "url": "assets/js/39.fdf5b750.js",
    "revision": "bc7246df9a1473d57ccdc654d762b5e3"
  },
  {
    "url": "assets/js/4.d226f7a5.js",
    "revision": "e5b1c10a2c62b806e95548ab3bbf37d0"
  },
  {
    "url": "assets/js/40.24cf94aa.js",
    "revision": "5fba30cef8fa13fd571227b1b43a5d64"
  },
  {
    "url": "assets/js/41.483c0dbf.js",
    "revision": "070a195386b8b874480aefc7b30776a8"
  },
  {
    "url": "assets/js/42.4b882a8a.js",
    "revision": "6c78e318151ff1acdd0ec7f4ba0c2697"
  },
  {
    "url": "assets/js/43.81e84b29.js",
    "revision": "74357e3299617352b6362e1c28a7cc7d"
  },
  {
    "url": "assets/js/44.9dd0993d.js",
    "revision": "58681d1c79788534a05b21d7e8c07538"
  },
  {
    "url": "assets/js/45.8b97a3eb.js",
    "revision": "c7b6f39729a7daf87ffedfcd5753418b"
  },
  {
    "url": "assets/js/46.f0b4e78b.js",
    "revision": "47b8b417bc2fe04d944ed90313c4490c"
  },
  {
    "url": "assets/js/47.31b75082.js",
    "revision": "88aaac694ea2acd14ffaf00508f087e0"
  },
  {
    "url": "assets/js/48.893aac45.js",
    "revision": "12d7e6f3f5625dd85f7e0a5d5ac07870"
  },
  {
    "url": "assets/js/49.9a88437f.js",
    "revision": "db60368c067cae1bffe3d5f5bbb649ca"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.b3cd8bc4.js",
    "revision": "c5be57140b19999ff955b45565c440fc"
  },
  {
    "url": "assets/js/51.fc561d23.js",
    "revision": "7a4e6679ede75b1cb1defd32328529bf"
  },
  {
    "url": "assets/js/52.31cf5799.js",
    "revision": "ddf2ac5c1452553c35e2409bbdb60bf4"
  },
  {
    "url": "assets/js/53.8afb748c.js",
    "revision": "304af0f781d9a6525885083047da4a8c"
  },
  {
    "url": "assets/js/54.6d5fff2c.js",
    "revision": "efb448f34a79a4445a355fec2b32feef"
  },
  {
    "url": "assets/js/55.68da9e20.js",
    "revision": "c4a76342b84dfb4e131db4c6d35130c2"
  },
  {
    "url": "assets/js/56.c95bd9aa.js",
    "revision": "f8467662a4280b4d5f2f497588f88d65"
  },
  {
    "url": "assets/js/57.c0d56fba.js",
    "revision": "b060f0a45e1ef9b2f433ab3c7dae7a46"
  },
  {
    "url": "assets/js/58.c069bb91.js",
    "revision": "311404f834fc2667b4436a8edcc25ef4"
  },
  {
    "url": "assets/js/59.676c651b.js",
    "revision": "dd3c2e51568679f96ba65ff1ea0c7e08"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.2d9b83f3.js",
    "revision": "75911a7d03bdeac92919904f37d3898f"
  },
  {
    "url": "assets/js/61.2e7e8192.js",
    "revision": "510dcf2c799e70c79bb37251690c94ee"
  },
  {
    "url": "assets/js/62.4350be1b.js",
    "revision": "cc8afd788c2f794eeeaec2d715d30027"
  },
  {
    "url": "assets/js/63.e7e9f3fa.js",
    "revision": "86dd509d53c03380aed511d8d88b7931"
  },
  {
    "url": "assets/js/64.a217b52a.js",
    "revision": "42ce5f37d92be502a1404803d34d76ea"
  },
  {
    "url": "assets/js/65.0b5ff20e.js",
    "revision": "5a8ac9f2d64b8d4c8f5b4bc4a44753a5"
  },
  {
    "url": "assets/js/66.58c9aaae.js",
    "revision": "77eb11c4c9e930dd6c42eee8ca18ebe4"
  },
  {
    "url": "assets/js/67.342e629c.js",
    "revision": "823e39763ce7f05b67afc0bd19d6d236"
  },
  {
    "url": "assets/js/68.7730bd9b.js",
    "revision": "e614b18f0c72e3a7fed8919ab3ed8fb3"
  },
  {
    "url": "assets/js/69.b5b5b40e.js",
    "revision": "e824c4432b7c89e7fa4f10c63270ec3d"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.68ec3c68.js",
    "revision": "114a5d742dd9ade8cc3d00df1beffdd3"
  },
  {
    "url": "assets/js/71.acc37bab.js",
    "revision": "b188acf80d6c87386097ff6ff06b9a18"
  },
  {
    "url": "assets/js/72.41d1f6a5.js",
    "revision": "a6077c00c4eca29216e9da2c16d74e2d"
  },
  {
    "url": "assets/js/73.8e45d759.js",
    "revision": "609ea790a0e6d854c44642d386dcd90b"
  },
  {
    "url": "assets/js/74.b439d783.js",
    "revision": "09a3ba4e03af3edd53d9e9ec0f2abc34"
  },
  {
    "url": "assets/js/75.7db0116f.js",
    "revision": "394fe6efd9ef8c617bb6848e1d60659f"
  },
  {
    "url": "assets/js/76.97e754d6.js",
    "revision": "5a1c5a192e55b07ae51d344b8091856b"
  },
  {
    "url": "assets/js/77.6a9c8c6c.js",
    "revision": "d7b2d9c867e9c984d7a40b7c1d311e75"
  },
  {
    "url": "assets/js/78.5a777ef0.js",
    "revision": "7f75d9ee50706e76be517c7c07a61c73"
  },
  {
    "url": "assets/js/79.e0779247.js",
    "revision": "84d82eda80aa1e851da965eb7a49097a"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.18c28b67.js",
    "revision": "8f4bb1c90d09d7ecb3e233df85fc9698"
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
    "revision": "7e1921bc976e97904512992b1ad18e28"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "5825e973fcfacd721a07e87afbf35a06"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "79e59284fcab1344d023e688340ffe52"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "6ad673605162c11cb51a73af8240d1b0"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "01dd429af51c932bf0d0cdf20cfb8c36"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "34df5e0f9781766b898bc418fe723a72"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "d64db02c8f86c05d9c2e442459c6b133"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "083ab8ef78aa60b69f227f90c58f7caa"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "0a0b3f12ae9e26c07a4058b1a9deb7b9"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "9ded7c470e3651410194c45311ac5c09"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "0133d22a435d3a54b1459721ab7fcb73"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "818b0d4076af180d2eb9655f1196b0e5"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "f1391452eabeab07419f95f72cbe8011"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "0983cf7269d622b6c6ce7178f47cd187"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "2b6218d517a4c5ec61f3fef205d857cb"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "e871e08052b325256039ce4c59a0e803"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "eb71c8db23010bc82a58fae024e6c476"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "30a2023081f8e223d0e035f851fd54a9"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "f35e2c6bc097a672f75d99483cc038d2"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "daed725c53b8cb3b5765282d1784e802"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "4ed8fc1786fbf3008fd2cd92bb5be553"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "be1117ac35ff176f39ae14ded848d323"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "5961b6f4a15e1671536676e27fcf9587"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "9c1b6e34d2d42b43895ff98ed7cba653"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "d9c489185ac0d053fdda8b40bd359ebf"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "32abe6de9fbb8b73c6e8921eefceaa18"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "11a0ef2b30e6d6e34e9d41d5fd2cb058"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "63fb1bc058100a81a76a9cc41528b9ce"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "3bce1609430d673fd113d79ea9bb9dfe"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "e55a4a8f58a968d43766e0e842d3d204"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "359e168f103b021fe1f2ca83bf401788"
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
    "revision": "d60cf8c816b13c68ed3fe46a1b2038dc"
  },
  {
    "url": "logo.jpg",
    "revision": "bdd6739c82213d4c79d9d98ef173f70a"
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
    "url": "other/authorization.html",
    "revision": "3b8a21bdd36dbbdf2c36aa9076c92c6d"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "29e0bb2a5267deb6271a4b82858322b6"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "ab8c3add70eb170344e2525681e2b08a"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "262067ede7ca9b99a411a25e70c7f2c8"
  },
  {
    "url": "other/index.html",
    "revision": "47783478f6386480b5daaf27d3893936"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "57f518f3d4c30595ff502afb40636a6d"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "2148e62a48aef81eb957b50c82f0b83e"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "897909ab60ca8917550bd33b46eb5f41"
  },
  {
    "url": "other/steam_community.html",
    "revision": "04034af283b900fcf4c3ef160a391521"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "af4c77de0a67936ec93f2249b83c914e"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "330f76eeb13067cad3fb896392e57b1a"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "f1dca2539be19ed7a80cd2e05df215d0"
  },
  {
    "url": "source/devOps.html",
    "revision": "bb4baa17532d00e289438e8623507ba9"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "3abc77bb947c84aac30ff7f51ccf1fde"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "ec815ac8e1e318bedf19c3df3cbabd58"
  },
  {
    "url": "source/index.html",
    "revision": "c2beaa94c81eafc685617e7e43e9d0b4"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "629258ff4fca69adf9ca4f9ad0e78299"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "d12bfc8b0e2b24e75df40d9437740a3e"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "7d0ebf1cc6e4d63044882392c688ef7a"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "7802836a850e808c3c3033a468a0885b"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "c244422c7fc0756e1e594661f51b3389"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "f872fed5a20893d3fe7517e24517b768"
  },
  {
    "url": "source/tools.html",
    "revision": "7046b64c2f4320ca27c5b74f0fe16231"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "445a6162b0037ec3dee4d98d8248cbfd"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "bbd1e068c2eb0115d76121fd1efff2f2"
  },
  {
    "url": "source/webGame.html",
    "revision": "058c744b4c5e2bd655697cc8d3e69ebd"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "8fa0ce350094d608dccfba7c3b939653"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "1c9a235cf93eebd9c7e5ddd4bd71b89c"
  },
  {
    "url": "subtitle/index.html",
    "revision": "16b051fd09af4f096f2d9566c6dc6651"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "c9f7846f61b61de9e23f7f46491f1ac6"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "5034866e197261e2184b006b2dff404d"
  },
  {
    "url": "subtitle/small.html",
    "revision": "fda2561c6a5e54035f9d20e0b7c534f5"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "bf883d7dc3cef15047ffc4a112c87143"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "fe8663d3f16b5f098c25dce4df81b14a"
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
