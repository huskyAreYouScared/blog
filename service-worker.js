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
    "revision": "5432beeb0941a55cda93c7a4f520bad6"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "ae4e977616c09f806b829a7e8d5236bc"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "31c70ce0a6dadf0e482f8409f3345ef1"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bc833c53525697de7813e1e180a926f9"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "779c675d922702b5da7cce6aa9912b39"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "557a3e955056489a114ae59d4dd3e7f9"
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
    "url": "assets/js/12.d79b6cd8.js",
    "revision": "1285c370d4d0ef4f9e1a0fa784cf3871"
  },
  {
    "url": "assets/js/13.7e9aebaa.js",
    "revision": "c7a6f17af4caf5448686f9aabe3eab06"
  },
  {
    "url": "assets/js/14.c1b87462.js",
    "revision": "36deea64426683a35d885a8e18190a82"
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
    "url": "assets/js/20.e9824e6f.js",
    "revision": "6ca27006e8afe8cc2a714015f0296090"
  },
  {
    "url": "assets/js/21.2d6570a6.js",
    "revision": "82f5b36fbfd1af60c28947d88c756733"
  },
  {
    "url": "assets/js/22.e83af017.js",
    "revision": "eea8fa24a6efed038ea83aabc1955be6"
  },
  {
    "url": "assets/js/23.34966900.js",
    "revision": "9271aa28bef7f17df78b13b97f53f342"
  },
  {
    "url": "assets/js/24.76fcbea5.js",
    "revision": "b732c432be0cc6375d6cb15df2243075"
  },
  {
    "url": "assets/js/25.9bda0167.js",
    "revision": "d6419483d8eb657ab4fe119be99baf08"
  },
  {
    "url": "assets/js/26.aeb70d89.js",
    "revision": "e9478752bac6a18c368a8cc655a42bcf"
  },
  {
    "url": "assets/js/27.62db35e1.js",
    "revision": "b7a8c2c7bc561bb1b2cce8e062e6ebd3"
  },
  {
    "url": "assets/js/28.039784de.js",
    "revision": "93add5b2536ea510d7cf0e160ad2a16f"
  },
  {
    "url": "assets/js/29.80306350.js",
    "revision": "9e54dda5ad516bbf4ef23765a7253648"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.2e450801.js",
    "revision": "cfffc10804705d76f954cfc0caf06a1f"
  },
  {
    "url": "assets/js/31.8960a1a5.js",
    "revision": "d31afafafaa7d4e2ee79c4652c189ead"
  },
  {
    "url": "assets/js/32.406ad70f.js",
    "revision": "c76ccbf1caf08108c7e0faf71d5095b5"
  },
  {
    "url": "assets/js/33.05076573.js",
    "revision": "7e2166f93523c61f228f1bb9f5c6d3d5"
  },
  {
    "url": "assets/js/34.4eac4e11.js",
    "revision": "3a393bba3916df74d9693f4f942b0341"
  },
  {
    "url": "assets/js/35.28cf52d7.js",
    "revision": "70fd1280665e5cc6db8130d58a497302"
  },
  {
    "url": "assets/js/36.5aaf0c18.js",
    "revision": "457a96996af97c07d20437dd98c8b9f4"
  },
  {
    "url": "assets/js/37.d3f7b131.js",
    "revision": "921a8b50f08e9d7184ac8ef5e1a6edab"
  },
  {
    "url": "assets/js/38.a3a520c9.js",
    "revision": "1a38c4daebfa2217e5212d98b7e009eb"
  },
  {
    "url": "assets/js/39.b694d226.js",
    "revision": "8d5453377a5d5614a55870993c350c65"
  },
  {
    "url": "assets/js/4.c8cd480e.js",
    "revision": "d7bdb3b2e7b6ad574826646379d30714"
  },
  {
    "url": "assets/js/40.d438675b.js",
    "revision": "707f993a8a378b8db0caef99c0359a58"
  },
  {
    "url": "assets/js/41.4e6a542a.js",
    "revision": "a9a4e309c9698e94c7a75ee00f209824"
  },
  {
    "url": "assets/js/42.a9c10df8.js",
    "revision": "de32dcc1ed17f88b235e7c8c715f91d5"
  },
  {
    "url": "assets/js/43.8f38b393.js",
    "revision": "30040bbc11340ca7f5184625268a0f9a"
  },
  {
    "url": "assets/js/44.51b33d06.js",
    "revision": "6eaa8581dd5786c463817e5bf76aee6e"
  },
  {
    "url": "assets/js/45.75e584ca.js",
    "revision": "85a19778a37548d05ce2dcfdb7c14b00"
  },
  {
    "url": "assets/js/46.246e7aa9.js",
    "revision": "e209c0afae73ceba74dd4c5f5c93f76e"
  },
  {
    "url": "assets/js/47.c490fc8b.js",
    "revision": "6da600265c8a65b1d3259fef54efe035"
  },
  {
    "url": "assets/js/48.e509f64c.js",
    "revision": "f825d32008096f445b2221bbb50efe72"
  },
  {
    "url": "assets/js/49.47213a63.js",
    "revision": "691b55ed8bf954489ef54a9e6e58d311"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.ade7190a.js",
    "revision": "f38a2f0e590aded0d46a90678d8d564a"
  },
  {
    "url": "assets/js/51.5dbd9594.js",
    "revision": "83783f2e5392e8c9be2da6a3c49a7da4"
  },
  {
    "url": "assets/js/52.fefc594f.js",
    "revision": "9f37333b17f76c5f1fabdc4f38267037"
  },
  {
    "url": "assets/js/53.6a7f9334.js",
    "revision": "cab85a0b10a09f39378913326a2b3c68"
  },
  {
    "url": "assets/js/54.11e8612a.js",
    "revision": "afbd4f329faf820ecea0888279c62871"
  },
  {
    "url": "assets/js/55.17ff4630.js",
    "revision": "0a13233b453b451759a9dbd5a83bc113"
  },
  {
    "url": "assets/js/56.eb669bf9.js",
    "revision": "19cab1fc5090120b55030a3e58dbafb0"
  },
  {
    "url": "assets/js/57.71a253e7.js",
    "revision": "3ab1c4580118512129193c8ccf6d7b79"
  },
  {
    "url": "assets/js/58.7cb66dd4.js",
    "revision": "e20f159048886aea90362419c1184ae5"
  },
  {
    "url": "assets/js/59.cdb878a4.js",
    "revision": "ba55938a2358fa577d551492511cd517"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.25809da9.js",
    "revision": "cc3cf10e960b229838e134d7d6b9fdde"
  },
  {
    "url": "assets/js/61.f2d2d023.js",
    "revision": "be2262504e9632d722bbb033a3edb442"
  },
  {
    "url": "assets/js/62.fa97b2f0.js",
    "revision": "dbb2fbb6b2ad08f3bf1d2bb002594095"
  },
  {
    "url": "assets/js/63.a2b6de54.js",
    "revision": "0d2c8dcc2843803b543d65c8611e0adc"
  },
  {
    "url": "assets/js/64.638a19eb.js",
    "revision": "1dbac6a5874f26a4010a49fb8457c440"
  },
  {
    "url": "assets/js/65.f87925ae.js",
    "revision": "415c9da0d1fb080f24bd4f81eb6c67df"
  },
  {
    "url": "assets/js/66.f601428d.js",
    "revision": "4df6232d8a575f1d0eaa15ce25af323c"
  },
  {
    "url": "assets/js/67.f1e260bd.js",
    "revision": "7bb7da6673d38bee68a9945ffed28cbc"
  },
  {
    "url": "assets/js/68.d0968402.js",
    "revision": "30519899f0c81c0e7a59d60db0631d9a"
  },
  {
    "url": "assets/js/69.fb30223c.js",
    "revision": "22af1438f9869d5ae324a748dbb09812"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.02534fc7.js",
    "revision": "21f6498177e28789502cab2cc09f26e9"
  },
  {
    "url": "assets/js/71.9c829f29.js",
    "revision": "06d185f999978f2555fccb52c606083f"
  },
  {
    "url": "assets/js/72.0433dedf.js",
    "revision": "d7bfe855bd2e87ff7225e31011e3cfb0"
  },
  {
    "url": "assets/js/73.f39efd4a.js",
    "revision": "cea2e9c133ebab4439dcb1e3c3ae1260"
  },
  {
    "url": "assets/js/74.22d3336c.js",
    "revision": "461656abc78f1e461052678c18a2d015"
  },
  {
    "url": "assets/js/75.53ef72b5.js",
    "revision": "bd9ea0aaa248faa8aea6581c0649bffe"
  },
  {
    "url": "assets/js/76.5ffe14d6.js",
    "revision": "3806417dc82bcfcafbec22dc7cdf0d3b"
  },
  {
    "url": "assets/js/77.cabb569b.js",
    "revision": "2261e4e694a4ec3ad800487c1a394830"
  },
  {
    "url": "assets/js/78.d6450854.js",
    "revision": "b447ba2a15fefe23b5b0ed00b4334ad0"
  },
  {
    "url": "assets/js/79.a6d2661a.js",
    "revision": "83c3e452323e3cccc0baea81b66a981d"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.d39fcd9e.js",
    "revision": "819607a8f24cf7e91c7c1096eab92ac9"
  },
  {
    "url": "assets/js/81.e167052c.js",
    "revision": "2236d7d4b0ec3c888ec0081401df875b"
  },
  {
    "url": "assets/js/82.d8f54d3e.js",
    "revision": "2aa4cebba007d7a5c58022f8f83c8f7f"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.c98d74ef.js",
    "revision": "b9f54484d7b9a0832cf8855f930fc865"
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
    "revision": "06a161e2564de7f09c7f807ae734fa5a"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "b6d33d3f2a1a22b02a7c69e546b69763"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "e8984957a13164f3ccb8233ad05b6041"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "c654edc2372cbb72622c18413e17c343"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "e918ad104674ee43b64583a52732401f"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "337ab37eb9d4f253dabef8d5b62f1273"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "e69ca8f2076e9b91a890b596eae00171"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "108a13a57b14cc4c4327162763a8a865"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "9dbb995980e17e01627d74523ac443a8"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "ee7df7b2a389fb81be1a5dae6b037298"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "1c89fb5b140d362662b1c506e5789993"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "5c74b179b0d14bf2ed3e4b15aea4dc4d"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "a6ee7e14156bc134f143f865d16ddd3c"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "8b3262b6e9b0d57b1efd45a07a6e6084"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "0181dcf880f5e51fb8e437753feaef43"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "983d8794366abac6286f1a311078627e"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "f18702ec5d8bddf1c0191214ef2a52a6"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "cac6e358dab7398f1268054d34545ae7"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "c587dce3059b8b6b0704502e1d80e4b5"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "93021554a8cc6baf1c8dd8833cd825a1"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "8aded454ad3381e91a7c396a67d228af"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "f7b0a424e944b5fd841af209bcc46b2c"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "aac9f24894f1b8db90b1691761f62d29"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "2c1117d2e65357128c80b118ab98d7bd"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "8cce846c6e648c6a0646ffa9d6099c69"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "e622c91fc5819492672be64134adec8f"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "3a9e336b9f7645c02e5e672420b59893"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "320e9091970262d9c222077be1931d7d"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "d27725f796ce7fee44bc32a17fd2843c"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "f6b082c21545d49ae90e3afeb05c5377"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "004ebb3da3f213d75a93267c0efa7493"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "b101cb9f8b813541d6902c4c2e1d963a"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "7bf50f09e8644ca3f2f8d25b75b97c59"
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
    "revision": "0efb9c3f02202878191ef76dbeaa8ddb"
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
    "revision": "2a43461c30a403ce43902b47454cbffb"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "7505b6f25f3793d96df0b1e9c0dc92c9"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "58c3d236b2f173e4505262e6c2877872"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "f60a213824b624f2944afb9806d7cf0e"
  },
  {
    "url": "other/index.html",
    "revision": "910ab4d10d3b03422615fd9f85177098"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "c71fb8ae5616b699f792cff67654767e"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "37bfb6f4da06f1cf12b571f1bb1ce461"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "22dd1928f62344358a9874861c2ca184"
  },
  {
    "url": "other/steam_community.html",
    "revision": "63b6c5898e872218f8ef7ac00f7d129e"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "74839c895bb70fbe62bbbd1d33f2007a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "c8c98be0118669b80871ca5ecdd513ac"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "db23c284d3c01ca8e029738e8986f872"
  },
  {
    "url": "source/devOps.html",
    "revision": "fb37069e825932dde7f94cfa2870fc69"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "2ae9380c728f0ebe137778b1fccf4e42"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "e1930697f5a0e588f767455c03484f94"
  },
  {
    "url": "source/index.html",
    "revision": "c6709df3b178ccdfacdf16037b5d40d5"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "fb135e8104832e28b120a8ecb0b6d05a"
  },
  {
    "url": "source/interview.html",
    "revision": "1d1978b0133ef4456ff0879853baead5"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "8d2db817bc4de62c28338e31637a1e7c"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "eee62f983d217e884bc68d3517acb326"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "7f0d4cd41db687de04030c8243ee2989"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "ed8d278f1655eae29dfa571ded87c1e0"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "0fe526f2a5a9dac47a2bfd97d49c2465"
  },
  {
    "url": "source/tools.html",
    "revision": "7b2f1b470cd3523d6c02fb99e371a524"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "1eb86e35757f0b08dc1f12500e680f20"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "0e6b6db7c364f1e208dedd58de9503fa"
  },
  {
    "url": "source/webGame.html",
    "revision": "e5d4d7603d62c44d24ca4b9574fe5690"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "f788451510ff6ddd859890b3285ea1b4"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "2f08b3501c9f39f756e126994f0db043"
  },
  {
    "url": "subtitle/index.html",
    "revision": "68245a4f6cdfb163478ad2c45ffd7807"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "af06e52b031b37800acca5bb8857be73"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "d276ed6809826e933be9b2fbb5d115f9"
  },
  {
    "url": "subtitle/small.html",
    "revision": "58e15587ebcf54814b363983533cd9de"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "d523dfc7f1d0a659d11ee64bd7cee90e"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "6ad5a906d6aa88b600702aa729490aef"
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
