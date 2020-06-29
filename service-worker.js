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
    "revision": "9418afd4ec162c16d797eb4d26d77c57"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "1bc56c51ce878a0ea4effd7cd8ab8757"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "3d14ffa767f12c5ac0ddee3f4320dd30"
  },
  {
    "url": "algorithm/index.html",
    "revision": "20fe1d9cef1c71999acc353f89822740"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "ad8d35f637323cbea22cf06c02f24581"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "7baad51fc8b8c300ce63e7c1cd76a60c"
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
    "url": "assets/js/14.62ce1a28.js",
    "revision": "6f30d7446e2b32c3697322c91ac2bda6"
  },
  {
    "url": "assets/js/15.019c63a0.js",
    "revision": "a542348f3c06c8863dc64af576cc76c9"
  },
  {
    "url": "assets/js/16.5af6fdac.js",
    "revision": "819be679736a2ff6c776e66484ad6c4f"
  },
  {
    "url": "assets/js/17.00df757d.js",
    "revision": "c0a374d8f4f0d006f4eb144b9df30486"
  },
  {
    "url": "assets/js/18.7379f05b.js",
    "revision": "e9cd6ad4c783635d30083835da4aef2f"
  },
  {
    "url": "assets/js/19.86d36cf1.js",
    "revision": "ec6faa0063bfea793d75bcf12e6ecb10"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.987bdc99.js",
    "revision": "82b1c6eb76c4e1d2b2e9084ac0e4b9ed"
  },
  {
    "url": "assets/js/21.2d6570a6.js",
    "revision": "82f5b36fbfd1af60c28947d88c756733"
  },
  {
    "url": "assets/js/22.8443052c.js",
    "revision": "3eced38018085a9378839afdc5df6f7f"
  },
  {
    "url": "assets/js/23.13a8d949.js",
    "revision": "a3e2bf920e3a6688c0687acaaa2df996"
  },
  {
    "url": "assets/js/24.6bf8af1d.js",
    "revision": "52ffa587d8816c01ae3aa415804295cd"
  },
  {
    "url": "assets/js/25.ac642561.js",
    "revision": "ef3e96474ddffbd64be2dd6358ef0a06"
  },
  {
    "url": "assets/js/26.22c5e569.js",
    "revision": "ba9f1a92c9acc2ac98ecc5f8a07a738e"
  },
  {
    "url": "assets/js/27.9863bc6c.js",
    "revision": "095a89785103f238d30bd1418f896fdf"
  },
  {
    "url": "assets/js/28.3d5616e7.js",
    "revision": "af67b716f5578b65da85add6bfcd56e7"
  },
  {
    "url": "assets/js/29.0424cd0b.js",
    "revision": "c9659598eca70e6a7e737770608c2349"
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
    "url": "assets/js/31.5295f006.js",
    "revision": "f905e30116410c1a9c8941563a4ecc15"
  },
  {
    "url": "assets/js/32.587df453.js",
    "revision": "873e64fa92cb05c3bb56134cd450b031"
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
    "url": "assets/js/36.fab25ea7.js",
    "revision": "d8a596dc83e52efbecc7872da1732a88"
  },
  {
    "url": "assets/js/37.e345041e.js",
    "revision": "545e3a53953b93f5ebe117797e4e6379"
  },
  {
    "url": "assets/js/38.f3e560e3.js",
    "revision": "78a70824684adf7983c87abaaa43d543"
  },
  {
    "url": "assets/js/39.6627b9f6.js",
    "revision": "1986ea0a09b238bbf2f1b915658ea0b3"
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
    "url": "assets/js/52.b4f76bea.js",
    "revision": "bc7136efc8ea182523953eda15dbfb28"
  },
  {
    "url": "assets/js/53.340d08bb.js",
    "revision": "e54ad5342d1e1847ec34e144d9723b2b"
  },
  {
    "url": "assets/js/54.74bad87f.js",
    "revision": "058a3b48cd5ca01636feadff447e1ddb"
  },
  {
    "url": "assets/js/55.51a5f3fa.js",
    "revision": "cdc4fe52a1f2e477c4522f31c7abc59f"
  },
  {
    "url": "assets/js/56.d5d6a015.js",
    "revision": "3a2dd501d9501896b35688cc92b5be60"
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
    "url": "assets/js/app.49f7df77.js",
    "revision": "8b3a07bb7168bf98d744f525a7326997"
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
    "revision": "ddb0b6b40a29a25b2441383f362d41fc"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "d4221241cdb925ef4fcb828392f85081"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "328b2b625e8da600c0543845c9315a8a"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "50c48804697562cf8b742652269c9ba7"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "b3702e040c6c33696185a3971e156065"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "cc10997f5ca771116998af7034a297e3"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "6f1c7cbf0063385e30b7ab5cb8496b2c"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "35fa037299ddff49e18848f19d45948e"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "df058f4bf38f6187e461cffe141354f5"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f6bb297a11583e09d8ebc1014edb47bf"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "987275ba078c532cdc70c52602f21695"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "4cffa45e7bdee71200f9fd601cc2d815"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "7487d81c478e0f542ba4473b9b279c5f"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "155dbe00d8ff781d943a6bf59dd8d21c"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "73e6509349559c441c9da8afc951fe0f"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "5b16bba9d19c34ff7d0a1357a6502c55"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "781f99df8995b880086ce7024c44fa94"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "b5a31c90db83824e8acbef7fe43c5edf"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "2b053dbcc4c4e1341220af6a0cb0606b"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "aab793cc8d960f7d3b2c6faa43e624ef"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "0b447689b3d642d9da6614b747ef99e5"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "dd63c09810f56de35dc88cba11c1b784"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "d07f376adae5e1396dda5a02cc510a01"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "552c7996ecc0298f4d141023793d6bbc"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "0decfcbc99dd4ddf95c9849452464306"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "5a7b6b38a528bd4a48068256f9f201e2"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "f29a7fd7e8506f2191d528fc53b49813"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "4deda664cb65f99f540ee7a7400639de"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "9344905515867bf3e954ac336d957eb1"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "1bd8023e4d0f299d815bbd523ad548af"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "86b21d9a02ea753719989877bdb48a01"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "652f854cb754622029d47a3739ed2ee1"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "2d834616373373105f419bb7bc011fa0"
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
    "revision": "01f70d53447f6614ebf65f062f9aa069"
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
    "revision": "d3c42819543fdc5e19d23a1da86a2753"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "abe03368d05e4d6d9e0cc92f928416e7"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "d7dc4bda678cc8567e0f1f8e05ef2916"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "93e9e0b36379aa62b6dfb1599ff73d2e"
  },
  {
    "url": "other/index.html",
    "revision": "46b184d777371afd48fc10837ba5acec"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "9e791bc1005bbf4be89e9209e98be695"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "1b2fbd718e496d754fdde253175720a7"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "9a85e525cdfbdc25a3fece3cdf3e1b4f"
  },
  {
    "url": "other/steam_community.html",
    "revision": "0229b98bb921f093c0d73d28113cd261"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "3b20d4b1ac828146d2294bdbacf8b1f0"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "50572cde81acd0aad540ff16aeac5061"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "2e31231acf043411dd81bcd0ee21b155"
  },
  {
    "url": "source/devOps.html",
    "revision": "a8e803a64cd0e234bb2598d36ecdc6ae"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "f9ef193dac33b156d8f19b61312b3ef2"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "a13cf4aa7cbfed8237e7498015a06bcb"
  },
  {
    "url": "source/index.html",
    "revision": "5011bfee9dd5b0de12035e4f1fc65099"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "8b99fe45fb8103212fc5860e8675384d"
  },
  {
    "url": "source/interview.html",
    "revision": "cdb487685188a9377a7efe8d3eb1d941"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "7c8f0ff31904f407c0b1abe5a6ccd42c"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "782ee2e253384bd4d70572c76f59641d"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "c36665293dc20de9b864ec4c7d228dd6"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "3ae4340ba68b40d0c42adce0e8b2bd3a"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "52d04837378e4db8e6c94cff73b2e19d"
  },
  {
    "url": "source/tools.html",
    "revision": "32572700011c9cc42355b1bd8d39ffe0"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "ac6092d1e86a9d2260393b1f72195180"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "747bfee8bcd71e9fac6511955a7c3189"
  },
  {
    "url": "source/webGame.html",
    "revision": "fde3b1923ce86d9372f77d6f843a30f7"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "7d034023933d874c5eaf232203f9ef47"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "2f170545989e3032567df222ce59377e"
  },
  {
    "url": "subtitle/index.html",
    "revision": "45023d36a2b29b5ef78475a3b55566ce"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "7f2c062e004d7828ca0da44d1e9fc515"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "d7391dc543e96de0763ddcc6e0add0d6"
  },
  {
    "url": "subtitle/small.html",
    "revision": "79a59161ab91c2d67dc834d3e19aa121"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "111c4cf8eda3ceddb95c33f8dcc1cf27"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "477ae258d05d035213642de6f1f21aed"
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
