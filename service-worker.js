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
    "revision": "727fb59dc0f591779ebce8cb72b01fe4"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "1d36c517f471184da882ef7d82be058c"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "6f32998c1f9a34855ab7bbe901177bc2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "732e6a7465aa482d4eaa0957bb023d1f"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "2431ff1544b19c2c42114474a9292646"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "a34b4670b662a610d6aaf0572e822aa2"
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
    "url": "assets/js/14.b37a5e1f.js",
    "revision": "d9ea9fef8079454ffc2062784552f7ce"
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
    "url": "assets/js/60.89dc2c46.js",
    "revision": "6ea48d6feaf1df31cdedc47155f4e468"
  },
  {
    "url": "assets/js/61.e3af423d.js",
    "revision": "0ba72f1a72aed05010a7ce46a097e125"
  },
  {
    "url": "assets/js/62.f9e6e8d3.js",
    "revision": "32d4e0e549c751c2ea83ac691d07fcc3"
  },
  {
    "url": "assets/js/63.d562dfad.js",
    "revision": "3f96604ae8e36930d86d0a0de9ef0858"
  },
  {
    "url": "assets/js/64.a7aff519.js",
    "revision": "8a5420fe63aa4c4511529501017118ff"
  },
  {
    "url": "assets/js/65.8252989c.js",
    "revision": "04f1d2d2b0a076b30116c837afb096f3"
  },
  {
    "url": "assets/js/66.e357b5f5.js",
    "revision": "d52e57c58f1f90a74c3a8f14f7bc82d3"
  },
  {
    "url": "assets/js/67.269180a0.js",
    "revision": "17eb31cf6b99065fde757e1bef058ff8"
  },
  {
    "url": "assets/js/68.93750b95.js",
    "revision": "940a00fd6f5e89354c74d08b18e4476b"
  },
  {
    "url": "assets/js/69.89f1d356.js",
    "revision": "295a577dfd197387787ba75365544b4a"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.13d93e7b.js",
    "revision": "0f066f0b71703b563f7cadc1dd8afccf"
  },
  {
    "url": "assets/js/71.3fdc7356.js",
    "revision": "d173987ede6d71958999257f8cb79926"
  },
  {
    "url": "assets/js/72.cd1e4f90.js",
    "revision": "8fb2b79ae43fb2e186f22c7c8057b27d"
  },
  {
    "url": "assets/js/73.cb74250f.js",
    "revision": "071279677e0cf1e327a0fdee568dee7f"
  },
  {
    "url": "assets/js/74.3ac3080f.js",
    "revision": "8c9920777693210746f10b70d2d92228"
  },
  {
    "url": "assets/js/75.066d4168.js",
    "revision": "5d37a37b6694fe441434ab6a07cebf12"
  },
  {
    "url": "assets/js/76.b3684698.js",
    "revision": "8a2592ebba3935581f678c488b81ab99"
  },
  {
    "url": "assets/js/77.630cfb35.js",
    "revision": "eefe7014ece4a679c92ba60210fecfba"
  },
  {
    "url": "assets/js/78.0a390f67.js",
    "revision": "1de66d4f0792db9a31f17c499786e903"
  },
  {
    "url": "assets/js/79.6bf2f98f.js",
    "revision": "00a49aabff13ad758891562bd8bfa579"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.bd9d55ae.js",
    "revision": "b2b13d12b2cd2342f235e40219ac1e74"
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
    "url": "assets/js/app.11cd6bf0.js",
    "revision": "0e196f00770525d0a1789094d44729f4"
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
    "revision": "3b93b5e89381d960a28b166a8000ff3f"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "40c598c3a8719af54482c229b028b6a3"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "4b06eef706effcad51dfa501a36be9cf"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "846efbc5960137877e54054d4936462c"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "76ca6dbc93152eda3c44275ce37d6b57"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "b7c2ac2ba667f236bf7eb1ced7c56092"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "5019257981745266fd1419f526a2a31e"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "731185fe078b192cfa4a9ac7b3a7c7f1"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "34187a6ae67c5e72ebf689c5cae82b09"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "1d2bf1e317ff53caf2b550906c041c5f"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "ce36353ad2d1046f01ee1a2504149db0"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "ae098bcc013f84fae690c9c8b45956e8"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "03880475928a79e3a383ad6bf579f2cc"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "c94fa264955c89dc5f3ee548aa45ce72"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "0874b649d4e0fe60ee85fda6b2c158a2"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "128560eac2479fe95d01afe6b82263da"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "d6bce095d850ced3055b626a65d9b108"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "9049419cf9752bee3f99c2495c59b381"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "7f4c81066ab89d6a533c7fa1acdcc038"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "88311a9600c05af68c90088acbf7b17e"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "85d3623939bd6bad9bf569891896f0e9"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "6eb9e8ee57388e23a5ff377ce81fed1e"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "49de97cc9bc3a49f6992542138378459"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "70ed5edfc408785cde49686762f35f8f"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "0985bc52bdddfcc093448f3902aebeef"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "2074cfce2a8e6a76ec65d5ea5e3d09d8"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "0cbe7c02f7073c872adc7419b57b8e7d"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "83f4c606f59269636d6f8fd8981c9cd5"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "f1624183b90748a610530e1afa5932c9"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "ed2f095e08df55655758ce1d502a088c"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "2a848a452972aa20de3025053483f763"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "103fd27c7bd2a8cd64d609c9528723fa"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "197a9935ffe7933c46bb89f9baef619a"
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
    "revision": "b32aa77fc58e75e12586da5d23e07997"
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
    "revision": "b518ffd4ff8ba507abb386b737a8e242"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "e6b05d2f34e470f974868ee393e616bd"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "2b659f4afdadac1024187d0d0e6be98d"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "5794e06c6c8a527cfc769c45467b5cf5"
  },
  {
    "url": "other/index.html",
    "revision": "e4489bf7b1a8365da36d5b17cf11e2e1"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "d0aa404f0bdbd23044ff557e2ed987fb"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "efe3474425b825f6a56139af2b4d15d8"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "00b81d8e2f1b8147e96e83c4f91b36b5"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5dbfb580fc615c3699a4b497b065d11e"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "05ee67ae15d0cd190651c2d69691a457"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9216da6b0d9bc7bc7190820dd80fb752"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "edd85f4682165300d2f99a723eb12d3a"
  },
  {
    "url": "source/devOps.html",
    "revision": "08bd8e7442091e201b75762957f571c8"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "ef1437fffe999bbc3f3a5616ac106429"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "f72434ffffacfa4c4c20e1ba24fe7447"
  },
  {
    "url": "source/index.html",
    "revision": "e07f0fe6134ec5426ae7ab789316f5b9"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "4f5337c84e1fc03e850a4bb7f95c5770"
  },
  {
    "url": "source/interview.html",
    "revision": "07d4e4bc395fad0affabb40bffdc6ad9"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "4e8bde193836dace1969431b25a2613f"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "3f2aee1747a73822aa24afb11e6161f7"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "7f3200d9cd6ae1785b4dafbf66ebecc0"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "7162019541d5a126bb40786d6fcfc49e"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "7fe61134c4997192e1f60084eaaf534d"
  },
  {
    "url": "source/tools.html",
    "revision": "0160485c2a2dc24885c7c9b2309e4a36"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "fb089c6d6802820d9e519abf3ac38d10"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "8b3e728ac6fa7f8f4a221a8822cde42a"
  },
  {
    "url": "source/webGame.html",
    "revision": "2ae7f2a7cf65163874b162cd816acbe7"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "50b29774c6ce656a81090da45f6a789a"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "bedeef94c8573d2dbff0e759b7eda623"
  },
  {
    "url": "subtitle/index.html",
    "revision": "20dd977e1c9af2ba4e8c5edcf01fea4e"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "b265b2350c0ad31a1feff3ab53772624"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "6cb9a1c61881d44b489eefd577698993"
  },
  {
    "url": "subtitle/small.html",
    "revision": "749db08b71e52a4bf3e9694bffc211e8"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "1f2231901671f8706b7f9807952ec1d3"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "4c706a3023ec987a98e36eaf7a71a67e"
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
