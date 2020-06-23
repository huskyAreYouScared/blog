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
    "revision": "1cf2e869f588bbf9eb14c3c7485551db"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "8a0d58bddda0a7408df3cd24f1f533cf"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "2d80e88c4c9c0625871475bda83a3f79"
  },
  {
    "url": "algorithm/index.html",
    "revision": "222c4c76b6b10dbc063a0db9484b480f"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "b09107a68e6a8c8d76e8e091fc342422"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "48864bfe224b8a8ecd64326afa1eed69"
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
    "url": "assets/js/4.1ac56f35.js",
    "revision": "be4abbd5efe3c78537b0fa36ededcc60"
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
    "url": "assets/js/48.58d1cbb2.js",
    "revision": "cde86e5efbc717967cd3726a62f8951b"
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
    "url": "assets/js/58.965b5e2d.js",
    "revision": "dd343792ef9ea4c2af21e120eb60e919"
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
    "url": "assets/js/61.cf1b3236.js",
    "revision": "44284d595a3f8fbfaae6f46b3f9443a8"
  },
  {
    "url": "assets/js/62.81376e3e.js",
    "revision": "572423c9d53eace950afb342f63e9e32"
  },
  {
    "url": "assets/js/63.992b294d.js",
    "revision": "552c688d3fd794f27c982e6470d637ab"
  },
  {
    "url": "assets/js/64.466ffc2c.js",
    "revision": "add730d6e0b2dea10e2d3767dfe6f7a7"
  },
  {
    "url": "assets/js/65.100dd464.js",
    "revision": "7c6f2ab48f4fe77b37a89e8fb063f421"
  },
  {
    "url": "assets/js/66.5abcffb3.js",
    "revision": "fd5ed96d97e9ba2e3ae4b416c6a65a65"
  },
  {
    "url": "assets/js/67.f4819ff1.js",
    "revision": "53b35a218351884a315bf7ee36c5e87b"
  },
  {
    "url": "assets/js/68.2898f4b0.js",
    "revision": "3311e897c023392e391a5ce8f821e532"
  },
  {
    "url": "assets/js/69.8a0dc785.js",
    "revision": "48c1a1db344351f4b08f43ccfa8e17d6"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.e84e192b.js",
    "revision": "0a20321a8a516033c64d1b5df132bd6d"
  },
  {
    "url": "assets/js/71.20e3e211.js",
    "revision": "434cafff2dc2f94d5a6d071f97d72ec4"
  },
  {
    "url": "assets/js/72.11b95646.js",
    "revision": "8ea6bbd6fdfe8ca0d7fc838f0d24211e"
  },
  {
    "url": "assets/js/73.86afd209.js",
    "revision": "5287bba5545cd675c1146b7dbc2cdf76"
  },
  {
    "url": "assets/js/74.602bb7d7.js",
    "revision": "fafc88e8f89d1021b48513e3124d047f"
  },
  {
    "url": "assets/js/75.03c1c353.js",
    "revision": "73831ca8aa3e93514f0d602540f962e6"
  },
  {
    "url": "assets/js/76.194b8a50.js",
    "revision": "0016e4021a558a9b51a4ac7ac2b2a4e5"
  },
  {
    "url": "assets/js/77.31167710.js",
    "revision": "2d024827a6cd7ddce48726713b003c09"
  },
  {
    "url": "assets/js/78.a81b7219.js",
    "revision": "d53e8c89d3551a7c081082aa6e514414"
  },
  {
    "url": "assets/js/79.3bf8747a.js",
    "revision": "4c58d8de7ccba2cd39e2a2dcbab5e309"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.6c6c2d2b.js",
    "revision": "6eb70a4cec96f47d0234eb22e7df3010"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.32857f92.js",
    "revision": "f684381b493559d9ce9835b60c9c8e1f"
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
    "revision": "03b771dc9c947522286db4d9a7e90f1a"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "42b5b3d9b713ae1d95e1951540beaf11"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "5ea07b2a4401f8d2b615849f28961393"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "755af74ed77a9e23041cbe127342afe8"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "4b10565489fd026fb1f1c7dc1dd33dd6"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "fc2bb7cbdaa5178680097d361a7056cc"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "2fc0195192084185c974a7ddb2f356da"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "16734a083157fcebb16debf1c40076c8"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "0d8d8ef00272a7c7c94f662557bfafc4"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "7e5e723e507ad004187a91f28a8f7adc"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "743076858ee19ab58bff938e1629ea79"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "bdbd565a523e0f184f0bd20067b02ce5"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "c954c657725bc69b79ec7e298a627f6d"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "93569e6a39d47e134cbd2c88c0279456"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "460e2ab2f8c355c8123a808e61a4e49d"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "44f668837bf0f7e37e6c7d9406d6057f"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "82afe9dcf7321c10fee2648f9d19d68b"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "f1634997cb9c2e3f50a84097600a61a0"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "c7b1d87dfd5abdc4501c80c8ae89b700"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "cc7cb0073b1647b90692ea671af54d23"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "e8baeb271641e3754027692e15814212"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "78d656d4b3ba4d0d253c7874a98cea89"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "765857dc6f11e0c0003b6dfaf3d56e2d"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "d1a6f2084670c306c176b729815e3cf6"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "c9f1e855c284748ee001f58491fdba27"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "6716cbe45dc11c1af95e3066af4ab89a"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "81ca3329a2fe1a0e5473db3718dce751"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "7300e8aa981aafe1c9d685a47a976da5"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "5ddf9aa6d77df34c568b71876ff4325c"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "8714ddd8886c1239385cd9de38f8a177"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "7720554cad2698789bb19128f6ecf312"
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
    "revision": "d7fe476742519ad6054faa89dacdbcb6"
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
    "revision": "28ed5d3fcefed5b3a435fe00948664ea"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "5e6d15ce6fee7f28794722938f42f9ce"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "8a3d6b41ac6e74abdf684d717d44fa01"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "96dc98fcd3493087b50a3397c19d8280"
  },
  {
    "url": "other/index.html",
    "revision": "bb4ca8533939a8473759855d5b87b6fb"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "b78b75af0c9da8cb527ce37100afb1eb"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "6e35c11da5da70d293e2a413d763ba0b"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "f6a120fbcfa77f3f5f0966377ae77d1a"
  },
  {
    "url": "other/steam_community.html",
    "revision": "ec9f99ee97a12d958bbfa2f2d588873b"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "ca067b7aa2d600a1b68227724d821dda"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9edb01643ebff5cf90af35fae3ff1ccd"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "235e5a66ba036c2f509b64b85aa6aa2f"
  },
  {
    "url": "source/devOps.html",
    "revision": "bf9a235939a3170b3048c04bb9b9b98b"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "472f73c5c766180c0e1e43874ae1ee2a"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "9db4ab7b88a392e6a22d85385d911ab8"
  },
  {
    "url": "source/index.html",
    "revision": "5402bb5efd58f8195bbbc4175ae81933"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "dc0b77f3f913334e3e5b5f95307b94f9"
  },
  {
    "url": "source/interview.html",
    "revision": "1e7199a4bbbc40c708dcb93f71ae632c"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "1975586a1314b52c77d375eb9e9618d5"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "2e95ce7e1a56af70727919ba844706e5"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "63ff4f3e11c41564d439faa5710b5467"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "35a9de405385bf2e14c083e253f51995"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "a1f4a40699214b7f08a5587679e19497"
  },
  {
    "url": "source/tools.html",
    "revision": "199ad2d3a16741ea40a3defab93990a6"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "2ef26e2ea6f3eb4ca614439e361c92c8"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "ce5f1b5c4c51c2358414c7269f288722"
  },
  {
    "url": "source/webGame.html",
    "revision": "8f4fd842a10687e4374e404184211514"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "fb44270aabff45d713e1c897a837c436"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "59bd35a31fa77f694011b95bb2d36bf4"
  },
  {
    "url": "subtitle/index.html",
    "revision": "07ae0cfcb967a07ddaaa1de9f5ad1ae4"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "da651be166421777ca9e4a7eb791cc3b"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "55efd6798681ca164d7ac2741b77bc57"
  },
  {
    "url": "subtitle/small.html",
    "revision": "a68f11f89f5e5cb95b6dff0cd018b27e"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "36a08e576dd3683c958142dd4b14d0d3"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "47b3072112316b641e8ee62298aa811e"
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
