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
    "revision": "95706cd999f1e44d1a31b6699b87bc80"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "f610d80516c6a5efd93c5168eac06ef1"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "3794b285f8966ae87061224f1732808d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4c9b4a14b4c732d70900933dff5ab0a5"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "906aedd8f4f8e0b48409f5dceb9686b4"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "d0ab4d6abdfc70a70198a6dc154eb69c"
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
    "url": "assets/js/64.53d81e89.js",
    "revision": "06ca9597244a27436d5977b6d7689f57"
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
    "url": "assets/js/69.16614b1e.js",
    "revision": "5ac7c028aa0256825e52e033cf0a85c7"
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
    "url": "assets/js/72.28a3129c.js",
    "revision": "a13a03f0fe6d5bf59ce241af0c29eba4"
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
    "url": "assets/js/app.90c26e94.js",
    "revision": "41f3fd7e670286aafca0197e0c2ae132"
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
    "revision": "3123f88f1d43bb5c277053af8bffc28a"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "06f9e26290e98185b2fdb0e4dee0e57d"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "f9e2cd55d03486824cf121f2da6d7b24"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "7c183856c8f58d1a81677611ea91533b"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "a8d0e3d59698e17f5ce515ce9f6c614b"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "e42cb2c09266b9be30aaba4d44a05fd0"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "5cd76df77ccd7826c15fd554505bf70c"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "d17104b290dc5b1046bd0f41f2b49b0c"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "c5bb9fc4e1bfb3b28f9eed720684c68c"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "70efa22682aacdb0b7ac20268878b3c6"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "00f34b09717077577d5cf163426f080c"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "3723b5576dcf40b142a63fdd5724b4e0"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "1acadc3ab785b2aaa794c251d5e394b9"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "61b3a8df84bcda536b122840c70f129f"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "46ca3af91fdffb3f100576ad55c8c707"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "f28e84f9efa90b395bf1f7ec65326e9f"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "d4643d53d6263b366946c0b0eae80fb1"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "83aa9b71e54c25993c597e839c46aa4a"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "7474e5f6d386ea7208d0c5aa0f5b0dc2"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "a0a9ad499723892da02ba477ae4afac3"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "3da7d3e0c423a51f6adc4a64a5453f48"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "7ff0223481f0a4654d8431f87513b654"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "1ad6ac429c4deaf52dd8b7b7fdf8eefc"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "0be76d18d2cc0db4f689cfc6f6081816"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "cdf84ed48aa652ee15ff001dbceff9b8"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "37d98c6d0a2cdb3fb7b80d6de2543c84"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "8d0ee92e171fa832d3943c45f6e22d2e"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "0522b36a14ce54c582a6a69208210d2b"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "5ba956fab681883013b1bea80b884522"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "89ac138aa18f895e7f91cc87e13d8544"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "970033ce78959688969c416698a17e7d"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "f983039803ac99b0cd025b133b20fd08"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "6b14f1259464114fe868afb57b4c53c0"
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
    "revision": "3374dfb7947c13575bc0f9390dd1d775"
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
    "revision": "da8d83ac77a84e75ada1bf7133ba8473"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "6de13c7fee2023f6e2f24bc3204d5f39"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "704cc0d15065fbf08a79140bbee12cbc"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "2a491d374f08652f9fb65cf9010751b8"
  },
  {
    "url": "other/index.html",
    "revision": "1415fe6da848185f1e1eff676eab6786"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "5d39a64055080d3c58b0f0704a1a8310"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "679c65c5f0bea8fc0d007204b40eea98"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "41fc1bcd5bf2b8ca1ab620f6b0e2e555"
  },
  {
    "url": "other/steam_community.html",
    "revision": "675674780a8de2dfc1d0a4db5ebae1b4"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "a522fe72591574c3df63badc1195e189"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "8bd493681cb55bbc2d6ac52ddfac6aae"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "028d4c1348bdf6c05e2ea3c4d2ffe0b1"
  },
  {
    "url": "source/devOps.html",
    "revision": "0a4445bcdefebfa7f161e7ae7d59e715"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "5b94e53f6d2abaa8f6c992437a80bb85"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "e6fe29ec082cdaaf1afaea05c2217797"
  },
  {
    "url": "source/index.html",
    "revision": "9f3ba9b045bb740b27206a0805c51248"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "1704b9a90095c4c1be12b9f7188e0c82"
  },
  {
    "url": "source/interview.html",
    "revision": "f5391353ade251f5d8a71d58f248a17b"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "b95a364214841586c98e1ea33ae83ad1"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "bca98f65edf9e8898f4520441064d91d"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "da6d20deb96893fb89aaee5d08cf7f3d"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "ac3e55492b87672e8556f0c80b1fccaf"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "c7e2b4248537c1a2290d1c8c64f27e31"
  },
  {
    "url": "source/tools.html",
    "revision": "b433cd66a964b9a6d335186fe7290ac7"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "25c1dcd57d9823603580e7573a2dd409"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "2d279bb7c7b2d21147b56985d7461b13"
  },
  {
    "url": "source/webGame.html",
    "revision": "a01ea2dd6bda445be3b51367ef551748"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "48562fb7bf17f986e46d51d67498a06b"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "d6bee39dfe4a87f39099dc8a515073ff"
  },
  {
    "url": "subtitle/index.html",
    "revision": "65c22e2ad8a2c98634671f691b0af9dc"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "e056061878c28499dad077e4dc9aed9a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "860f75eda9c12cb0e644ec9ed08ec762"
  },
  {
    "url": "subtitle/small.html",
    "revision": "bf1f2a5d6b567c03107c73b353e87371"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "bb673d5f23c1265af7b95d9072ad9571"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "c196261afbfafcae28927ffae556837e"
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
