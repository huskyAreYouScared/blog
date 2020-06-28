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
    "revision": "53bd73edb37abd7a87ec5c40c49c3763"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "4f567e61db43927aab429a068d015733"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "1c570445be14b59fd681135054095c86"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f6bcb457eb8984ae443062f8964aff15"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "de95fa8c0c27630e4e52c87a4174e957"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "e3aff776a7ffa0f781d8405e8b150cda"
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
    "url": "assets/js/app.7f6b581a.js",
    "revision": "ec69655e1ad7b4c17ff1f40d30323a9a"
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
    "revision": "e1b8872f912e78cf8ea96d3e65a87c01"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "9b54a871928c401ea9ff0cbb888ea464"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "55fd0f9719f2b7da4bf3b630ff5bef45"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "72837332dffdde43211fce96825e80b8"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "ea20c0816143eb700d5b55f1a8ab051d"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "7ded6c35a3306efb92362e49c7c27af6"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "fab3ec5f338b877c0720317c8b86e044"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "a1af7429e4601bb3fb7fb2858e255ae0"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "838d14ce067365aa022d1f71a385181f"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "0841e08a7100a44acce7ddd455beead2"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "e5418d9b674610f8f19d00e5e6a651d0"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "32f9ce8f99b2fedd14d9b25fc94e1fc5"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "2833a7b39cb2fa756476bb11a181301c"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "a403ed98ce5ca07eec66edc81b163670"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "9efa0ace7b28df5762e359dc2a9d72e9"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "27eeb81ed5a57da12eba87b43332f9c9"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "2d65db5e66c120879f4e2921b55d5c75"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "11f167fa3b9578d8d6a44578dbec7725"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "a9a464cb44477ad9da6b0bc643caded8"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "893c318615c23dd5848a96ddb082fcc7"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "a6343d9ec1741279751b7a9ea5e79792"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "001ed626d2e1586f4d6f3bdbdc9a9b14"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "277abd0d74a20a6f1779eeb1389920c5"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "796ba8304f11113a7f2a3814c2eefb49"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "a0283408b0224e1140b45320dd7a2ac6"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "dd2b9f57b8b97017dcc9d7775804187a"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "fae8fdccda8f45c4bb31461a33a75070"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "ab046c3a48c18c1ac3aa75e6e6f91707"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "9d60a7036d98b744f5e4bfdde57e1d55"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "aab43d29be743379ae007d811a3f2526"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "69bc1573f5b3aa89667bd3c0653bbb6a"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "1392aa7d49a1d5f10b514c5fa93398c9"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "d211d12992e8896d7a8c0cd66abbd8fd"
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
    "revision": "38dd393e772c3056888635e173be60ac"
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
    "revision": "f9317adfb0e1c29fbfdcc1422670c597"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "1078b7babebfb7662573a51d43b170f7"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "0ebacb6b28fa2ee56d43b775ce2d68f4"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "fdb48e855028379144af2292bfb02d24"
  },
  {
    "url": "other/index.html",
    "revision": "638ae16d6fd0425de1d62cfd1fa93812"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "7e75dc551d3407131d9740f5fdcebab1"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "180c2821cc329ab64aadcd11d25b21fe"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "45daba985e676e316eabe53dcceef4d7"
  },
  {
    "url": "other/steam_community.html",
    "revision": "146ae4f5001931090942cd072cfc23e2"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "75c9284b360cdc6ef6db0982e38932cb"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "a9d0f1db412e5b73720b71e3a3ae6c61"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "48e830fee1868f8cdbb36b5e3de795fc"
  },
  {
    "url": "source/devOps.html",
    "revision": "2da1cb70901ba26be245bf35bcf96731"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "9b75af94462f449ddbeda9b42a974b9a"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "91313fd4293e39502eec392fba02904f"
  },
  {
    "url": "source/index.html",
    "revision": "32d6cdecd2ac78c74dee30420ff463d7"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "f31efdbb7288b88ab3c4e66142eafecb"
  },
  {
    "url": "source/interview.html",
    "revision": "ff675f53f7b1429b8fedba5c2b01240d"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "c66ebd0319d1fbc6dbc888173ad3c756"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "f2a330fc825d3bc5dfdd78b0a72cde25"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "710e5fc9791822f9ec00a6af216e9397"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "5be8d627c6f7cdbb818aa93249167a33"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "7de008f026df1e7880b3b3d24e2aee80"
  },
  {
    "url": "source/tools.html",
    "revision": "bc558f7401be89485a6d5b0a9b568990"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "03a754b583da1493561ba5d5fd69c8b1"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "0924fb9e8e48229ee6fbd9ea0ec4d8a2"
  },
  {
    "url": "source/webGame.html",
    "revision": "d8a8aa550729b3680762e547a2a2ff62"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "9e06bc3599cd242a10afa4454e57f652"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "c4564d06f8e95ee332f3d9958ccc8c04"
  },
  {
    "url": "subtitle/index.html",
    "revision": "2d42201bb62424a7755421e1a065cc29"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "8fd87a16c3253367f21b2d3ff1702e81"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "2ed265d40bce208cacacaa590fe16160"
  },
  {
    "url": "subtitle/small.html",
    "revision": "bd047151b94f9a4101dcdfb5118bacb6"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "4a88dafa98c414120d82c9fab43bd639"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "fdeaf948d6ff7632b5234a3819d8b885"
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
