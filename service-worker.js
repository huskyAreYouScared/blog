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
    "revision": "f4c67b58622b62053720118c044d2536"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "c5209610363890b5010e70de27b59d09"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "c89066ee43df0720684c2b2ab8a5d2b9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "60d7c39b9f9d78087ed1a7ffb39758ea"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "b21d65cb204ba7600c1ae02ec68c38cc"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "eee4b5f2dc4d8ae71f595907961b6b2d"
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
    "url": "assets/js/14.90dc3bd6.js",
    "revision": "de5f7d641866eeb955c829880945468c"
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
    "url": "assets/js/app.04db51b0.js",
    "revision": "36d0249211a80f6f403d93d2fb8bc053"
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
    "revision": "8c9519f82b4bfc0e979e0ce321c0ab36"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "6e9462dfaee65dad5cc272912b1f24e6"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "faceee8a896334d30455fecf56ab2abf"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "c83932961a5dc0abab9da403f2729435"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "8126c042f3ea29d72cd94bf9783b3fe1"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "3f7e623949978009507e35ad48d0ee8b"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "4d100ffd267c41a03bd310105c86babe"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "9e8b379ac1e2a097785f44a526266f72"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "187e3c8ae4a1b409392f5a0842eeee5e"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "c8bd768b00605892317784b46cd2d99a"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "9f42ca15805db4c4bf336d12d9272c7e"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "db30861d1ba4f81e65e25a41e07e324b"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "39f9ebabdb04e61f43c029d884dd1ec3"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "cc992ca19f024cdf2f81f0b46b634884"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "338bd37e9888a42464a39eba842ca2bf"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "47a379facfb21315de9d105c37707836"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "670c2d5fc0c2067e760e58074361ef6f"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "8303bb71b8bbfc97f7ffc82a17b5d162"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "d9adee00fab261ecb3a0181f5718fecb"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "dd0dcd3f0b91aa68b2362f623feb2c9d"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "baf483d4140874db3f8ae4abc2797202"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "2ac2a79f9972d5c1ae63745ad3a4ee16"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "bbda9c3f20e219ced1975c47be6fa522"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "08ecebfce88208ad00899fea31804538"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "5776f705b87199e95c8efa1882e3268f"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "fca199a43f4e8572fbec527963a2694f"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "de47e16d1ead06da474239fba5b75879"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "0aedd6f947300b76bd31d5681e177212"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "f42218319e8aac4f9f6c4f01ea328e2e"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "0e89b7ba78dcd3a9af12beb58f24b26e"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "6e3932b473cf2818a00a29e7751c0f04"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "1c06ec166cf0e21e92db2a001a54ce3e"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "d3cb3d21c8efc329c8cff92200530823"
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
    "revision": "b5e6c75cc586d82f95bc35f0936324b2"
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
    "revision": "d90663962ed938ecc850e9f66c08a9e8"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "bbd0dd378ca39bfc7f154c3d80100d99"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "8d1c0b64f9c4fd7d3d1e03227aeb82b6"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "6b6f8ce277a9187aa36cc021edaaa9c7"
  },
  {
    "url": "other/index.html",
    "revision": "0ed6ccaec3d37222360fd6dc492cc379"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "2a26ec7640e4fba491313b7fbf27e569"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "3774bcb5fdd9c14a1ef2ebe4039d0e95"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "0b8fe81be9252d65f59e4951a1e4e0b1"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c3896db64ce32ae6ff79c4612ced6495"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "5a7178766ce8199b9f63146937b652c3"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "3b72b1fa26a1ab33301322c8da693d63"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "b99b954e1b509b3f68feeadfa4ac86a3"
  },
  {
    "url": "source/devOps.html",
    "revision": "a04199a8da17b62234355a3189cd8376"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "9322f3c2f73e26b1df0ce385854dd46b"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "2ff3bf1a91101b2e41332a8c8031b06e"
  },
  {
    "url": "source/index.html",
    "revision": "1e0e332909ea24c1beef2a93a5d5deb0"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "8fc64e096cd9ab879fd517c5ee631da1"
  },
  {
    "url": "source/interview.html",
    "revision": "78da0798a3a2f5986a9f9c79598814a3"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "22a2edc2aa75926496626b005d195d90"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "c6ae09c2fa433d95132fc48ed194b173"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "8297a30c7ddac4755f3f8eb24af898c5"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "e7ccb07e5c909a68739f63aabfda7d0b"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "6a52fd50306d63ae3bbe4f69446cb04f"
  },
  {
    "url": "source/tools.html",
    "revision": "79b237408a46e18dbe92381e5da5fcf6"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "1c1dea322b48d7689432f99ba152ac0b"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "1a2ef780650d734aa2ecfdc6c92fc9fe"
  },
  {
    "url": "source/webGame.html",
    "revision": "28138a2561152a26a6ba7287efa015fc"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "407d1f869db1ef58b18047e80150c627"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "e0ccf4fb96cad34a6c89edd419dd8fb4"
  },
  {
    "url": "subtitle/index.html",
    "revision": "e706e8ae8d2c32f77ca8809a1c087ffd"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "a86b3d398a253dbba0890d2e8a3838b9"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "886551dce2d3dbeb854ee3808bbe7ee9"
  },
  {
    "url": "subtitle/small.html",
    "revision": "5a15c154d81deb406eb9dbb5efca96d5"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "a9e10f6828727237c0f94b6425dc92bb"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "866ed71381e34fe1afa0511e3d5ae011"
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
