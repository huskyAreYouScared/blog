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
    "revision": "44fd77104400c0fb1050ac78d5ad200e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "e40c247a65756119f1b24684ed358bde"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "3a4461ae12aec3708665e68adb916942"
  },
  {
    "url": "algorithm/index.html",
    "revision": "35047f6a01fe81bf0b1affa150566fe8"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "c9ba68d430d874496ce92500727e75c3"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "8f9e99c4a0fef25d8beec600051c1235"
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
    "url": "assets/js/10.9ec1d9e8.js",
    "revision": "f0a246f17fadf8dfc3390cd2757a1143"
  },
  {
    "url": "assets/js/11.cc3f8fcf.js",
    "revision": "08320be8a1a82d2d40dcb1735619be88"
  },
  {
    "url": "assets/js/12.2f821b0d.js",
    "revision": "d3ce8fcbb5320e4a5f2e3bec50439e5f"
  },
  {
    "url": "assets/js/13.da724597.js",
    "revision": "8737073abd475a61745d054258f07e3b"
  },
  {
    "url": "assets/js/14.639e71b6.js",
    "revision": "bc19a70e3f46bf87d6e60fa3e8c55e58"
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
    "url": "assets/js/18.7d460bb0.js",
    "revision": "1fb8b17ef6add80fabe6d953dd6b54e8"
  },
  {
    "url": "assets/js/19.c5529c8d.js",
    "revision": "34c8de179e55cddc5a6cd01185fdd451"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.7c4398e8.js",
    "revision": "296de7676afa711c2fb866b36ae95922"
  },
  {
    "url": "assets/js/21.d2a1e1ae.js",
    "revision": "a131eb87b7ae6847693534fe4e9c67f3"
  },
  {
    "url": "assets/js/22.3c03930d.js",
    "revision": "143d8638a05560d994db2f0b8a767370"
  },
  {
    "url": "assets/js/23.fbed2a4b.js",
    "revision": "31834190adf01b914e9041ea769688a1"
  },
  {
    "url": "assets/js/24.ad110f9d.js",
    "revision": "df90fdc351ab4a842dd1af187c91ba30"
  },
  {
    "url": "assets/js/25.930948e4.js",
    "revision": "0887e84b4bd7ec30f947830c2b5059fa"
  },
  {
    "url": "assets/js/26.3c0acf0f.js",
    "revision": "dc3ac644c97c6a5e8b4811c9156b561b"
  },
  {
    "url": "assets/js/27.e4b51696.js",
    "revision": "89ce383c149b5f7ed6187ee66afd7e94"
  },
  {
    "url": "assets/js/28.d0d22abb.js",
    "revision": "092ce996c9a57c7a7a7f0f52d2a893dc"
  },
  {
    "url": "assets/js/29.cd31311c.js",
    "revision": "a56d171b5abc511a05e74caec0747777"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.0764e796.js",
    "revision": "d63b1bffc180f70fd50294db642b1c73"
  },
  {
    "url": "assets/js/31.8fa58706.js",
    "revision": "83411540afc8f3a16ee18c26d4357887"
  },
  {
    "url": "assets/js/32.7048e007.js",
    "revision": "d17e39452713effcdddfab43c5ef8104"
  },
  {
    "url": "assets/js/33.a07c6c2a.js",
    "revision": "b8f6c5b0deb8205b5804a4efbfe3c43e"
  },
  {
    "url": "assets/js/34.d92a975f.js",
    "revision": "8f15943cab5d01fae283855ab94888e9"
  },
  {
    "url": "assets/js/35.c3dd557b.js",
    "revision": "5b4c1fb73b322b0d697fcace33d90e7c"
  },
  {
    "url": "assets/js/36.bf8f12cb.js",
    "revision": "f508ef32be1905d3749bd0d35c77c7ed"
  },
  {
    "url": "assets/js/37.c46dec78.js",
    "revision": "8da44264d20de467357f8de19ad5e5f8"
  },
  {
    "url": "assets/js/38.41c63b28.js",
    "revision": "a6059fafcc22b29bd9119595e24af25c"
  },
  {
    "url": "assets/js/39.5be8cd07.js",
    "revision": "c7420b9fafb8dfcc4bff91b4c94ad98b"
  },
  {
    "url": "assets/js/4.532e4909.js",
    "revision": "ce2ca7d2622a9098e4208192832f921e"
  },
  {
    "url": "assets/js/40.cc1f672e.js",
    "revision": "0d81a471934ec3cfed13d3fa8fb7bc3c"
  },
  {
    "url": "assets/js/41.3b405b32.js",
    "revision": "01510ed78bc41b3d29e581b0dc698088"
  },
  {
    "url": "assets/js/42.726fbbb4.js",
    "revision": "7c181cc291c45d8c88903ac6a345e141"
  },
  {
    "url": "assets/js/43.5aab7574.js",
    "revision": "a089bfe96e172d90d4f15d61bfcfc211"
  },
  {
    "url": "assets/js/44.be5fb2b0.js",
    "revision": "c5161b01042beefd9d64b2748f4bf78a"
  },
  {
    "url": "assets/js/45.a1da24fc.js",
    "revision": "b8b3a9632a30c57e07bb74649a58dfde"
  },
  {
    "url": "assets/js/46.4101b862.js",
    "revision": "27533fbd591505cc7d43d9591d70f4dc"
  },
  {
    "url": "assets/js/47.8f6f224c.js",
    "revision": "570751a96aa0ce5e6257c1e753a469d8"
  },
  {
    "url": "assets/js/48.cd53ba91.js",
    "revision": "790f2b5be1aff69f78c41794309d3140"
  },
  {
    "url": "assets/js/49.8fc6f21e.js",
    "revision": "dae91ed46881f8dd6c57bee55adc95a3"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.71146e9d.js",
    "revision": "c4f187a2397078e86ad5052066d4b1d4"
  },
  {
    "url": "assets/js/51.c3ff464c.js",
    "revision": "8e167997d85e8b7e6903f35e84feb4ec"
  },
  {
    "url": "assets/js/52.14621414.js",
    "revision": "35e7da5a3da32488b528cc4ed0014b15"
  },
  {
    "url": "assets/js/53.4fa6942c.js",
    "revision": "5076ff6e679d121370faa77cef584108"
  },
  {
    "url": "assets/js/54.91f2528b.js",
    "revision": "78dbbd602bd2c94e4ab1688c72053e23"
  },
  {
    "url": "assets/js/55.b8d357a0.js",
    "revision": "aea09b3e6cd053099e36bb688c15b944"
  },
  {
    "url": "assets/js/56.e4f6684d.js",
    "revision": "5b2f60e570d8e03e79096b2775ad4d54"
  },
  {
    "url": "assets/js/57.04faf3e1.js",
    "revision": "93b9c8dbfd1aec509b54529cd010fb98"
  },
  {
    "url": "assets/js/58.81691e69.js",
    "revision": "d31cf500c45a491a88218cb31e3c97f4"
  },
  {
    "url": "assets/js/59.7a84531d.js",
    "revision": "6dd2616365017be1574698e58d74b73e"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.f2cb0b3b.js",
    "revision": "c0782a1ae4219821f40eb18118cd3588"
  },
  {
    "url": "assets/js/61.3da0f42a.js",
    "revision": "0b2574ec7e43ad1ab0b396dec8fcdca9"
  },
  {
    "url": "assets/js/62.b0bd6b9e.js",
    "revision": "6a7f7c501c65d0b6917e4fcaba9ac4a6"
  },
  {
    "url": "assets/js/63.ffd9e351.js",
    "revision": "3c83a7a9c0e276a98644fa5b90b6eaae"
  },
  {
    "url": "assets/js/64.5b9c5fbd.js",
    "revision": "a0e8400d96d2a2001a5ada51860c8469"
  },
  {
    "url": "assets/js/65.c943c226.js",
    "revision": "ccdf61ee67e7607338a2786c9fda135e"
  },
  {
    "url": "assets/js/66.8dfe5599.js",
    "revision": "610e51093bbd8b913b248fc62c1c438a"
  },
  {
    "url": "assets/js/67.cedc8142.js",
    "revision": "bbd2c750bae97457b31a13a39af89086"
  },
  {
    "url": "assets/js/68.f3693742.js",
    "revision": "03e492f64679993b0ad1d882c915a932"
  },
  {
    "url": "assets/js/69.573ee51a.js",
    "revision": "092fb641ea6a1d2818942fc55eb72ad4"
  },
  {
    "url": "assets/js/7.4e02d914.js",
    "revision": "cf206a74c2b8a0c099cdbf20ce7db9f8"
  },
  {
    "url": "assets/js/70.cf7547a5.js",
    "revision": "1f82a2993c7a89715fdec6dc7ef5e20e"
  },
  {
    "url": "assets/js/71.bafd20e0.js",
    "revision": "c7976bdcc21c45969423972bdbb01e7e"
  },
  {
    "url": "assets/js/72.df8ed8fe.js",
    "revision": "13396043aaf16641ca94f846680080a5"
  },
  {
    "url": "assets/js/73.1148870c.js",
    "revision": "070573a1ba154fef4b3ad86409e445e0"
  },
  {
    "url": "assets/js/74.7427f2af.js",
    "revision": "a9c1c59b120b9539b1023145f4817bb7"
  },
  {
    "url": "assets/js/75.aaef5727.js",
    "revision": "a9bd58fd433746d31bd33ee1ef948925"
  },
  {
    "url": "assets/js/76.b54de915.js",
    "revision": "48f126c4372e48aa7e25e4232b24dda7"
  },
  {
    "url": "assets/js/77.f841f8c7.js",
    "revision": "6e5f114ea96ae1f1badab1122d9add75"
  },
  {
    "url": "assets/js/78.1610450e.js",
    "revision": "7694bd4a3f91a9503c921eb0af8d179e"
  },
  {
    "url": "assets/js/79.e434c70d.js",
    "revision": "9c8139b9958e1b8c0fa030ed91b39ebc"
  },
  {
    "url": "assets/js/8.0d19dcea.js",
    "revision": "07a185bed727e766d8e2c60e29d224dd"
  },
  {
    "url": "assets/js/80.bbfe7f12.js",
    "revision": "a217c5303ec582b0714994f2c265e119"
  },
  {
    "url": "assets/js/81.e912dd91.js",
    "revision": "ca668a547111912cf9e8ae1878baf3d9"
  },
  {
    "url": "assets/js/82.545dbf12.js",
    "revision": "fbbcca36980e66fed819f7d7b5dbf86a"
  },
  {
    "url": "assets/js/83.f2f87849.js",
    "revision": "9f4cb1f41b2afc3e155e71f0051fcfa1"
  },
  {
    "url": "assets/js/84.5297cbfe.js",
    "revision": "f710bb0620ec23fb125a9f9faf499048"
  },
  {
    "url": "assets/js/85.16d5b574.js",
    "revision": "7ba8625adf2e2206fe0f92d9dfa4b73b"
  },
  {
    "url": "assets/js/86.bb42b02c.js",
    "revision": "752fc8f4e5f7c4d882b4ffb5eb2b016b"
  },
  {
    "url": "assets/js/9.c7ac3354.js",
    "revision": "006bc3b28d7c0524e5ca88d649c4a180"
  },
  {
    "url": "assets/js/app.5e79daaf.js",
    "revision": "7e643b4ca87678b53c2a739df56285fe"
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
    "revision": "7c0b8f4a168d8e74241a787dc0223df4"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "3d09f33027ade9f3b6c1b841e20c7994"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "5c7ef766489e16da82657e633db02c74"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "26c0ad9abe1dbbe475a42ee2a87ba8d0"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "82280deababe404e913f4f5b1d10265c"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "d55ad615c14161a3a5405093d5ea9c44"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "1eadde9d25a5fc1edc1571df6225da55"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "6cbb8ab1c9b4063eb33cab92232c0494"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "29d58f7a5135f1c3d57bcc591ad98150"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "cc7533563a14010b0f24f677e1b56aee"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "e44f913207e9dda1e9f26e37523273ff"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "a8b4a68c7d67820e2ad3bb0b9562f14a"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "4fb1827e5bdb8a924bd4bf6787acfd6a"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "03851a90258d7f656d96a9f78a087ce6"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "494f13d21ac9b2bd29cc7f7d344b98b0"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "640be1c348469cbaa13258719c024a48"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "9cb6076b36329a4f1c2e48b29cfe7c78"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "829f05070f8b3fa248070772a6995adb"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "a7d3e027c11145b8dd3fc677ef993ae5"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "3ee50b1e3ffb08e4838603b35eed265f"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "9dde5b5ce6de85df605aa843bf3dc7c5"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "9ca9cd279e61442c732a911c4e6a7ba0"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "fa01a93c4e0fa2fafcf6d06f8b39b439"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "dbb5a5319a63fe428634d75d8189da14"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "707ab3aa8b284ca005909e1b612d9668"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "55731b4516b44584fad89ef3a320fbcf"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "d878b6e3efb14a4d5e7d3d8800d88b97"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "387c2cbbeedbb4dbd15ecec60cf06577"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "0dc34f5a9827e85dcfcee534fb70fcd6"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "402738260b40a5b2f0f713d8e4f636da"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "a50575365da0f28c645c1f7b15b585fc"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "4a77d2292cb11c12785cf777a73aa663"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "5e77f454f820f65ce6bb4f39f0f54f0d"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "5df8827fba6d9d021b181ce4015c8d30"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "76a076108c3ba95c35ce683a8c84b369"
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
    "revision": "24e6a38655251ba83620f6712f75a68b"
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
    "revision": "17396b6445761ef29a96591fb30ac7db"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "56d02299309ad5e64b7b347705f0b1d6"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "9f2e0b9326490b260ab102678fb3518e"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "f910c7785bcc880e0d994d63bffa066c"
  },
  {
    "url": "other/index.html",
    "revision": "63dbff89ad871bec5b3bfb430781fdfb"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "6cbad1ce99dcfd8a27cb302f29ca37a6"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "b386ab20a0665a5f9c78a41087dc8670"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "9a1db86c2e3c2d3d0c948b38f302bcc1"
  },
  {
    "url": "other/steam_community.html",
    "revision": "8ec6afb52011aedd2a8b8914775f17a7"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "b1dc7d8707b48c9b66b5909fd6d86d14"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "4b9e32833a87ae017b7ff5460f262470"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "5e9c7e5a7a97873b64e0500b42b95f74"
  },
  {
    "url": "source/devOps.html",
    "revision": "626ae824ea6285bf2bf635791b94ecce"
  },
  {
    "url": "source/framework.html",
    "revision": "815da34e668b4b17f8948ab8b14dcb1f"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "457717504f9b06db3d0920c9ac5e8e7c"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "32bc3c0b24490de35f0ce77af68fe83e"
  },
  {
    "url": "source/index.html",
    "revision": "da67e2d5e914afc09a46177310494f56"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "c3df3921673b4a339301ca65f939dda0"
  },
  {
    "url": "source/interview.html",
    "revision": "2f966d0fdd3c2f1b4fb376df84487ce0"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "48dfaf63a917ba7228ffc3cd5adc7065"
  },
  {
    "url": "source/money.html",
    "revision": "de0c2fbfac4a430d821abba07b3706d1"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "6196a29469cc488ac23db83ea1aa4c6b"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "7dd7d6acd1987a457342f5307ebe570b"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "25d8b40507c93f5beded4c64c3d35337"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "1c9a57854426a7b5bfa21a11fb1e1599"
  },
  {
    "url": "source/tools.html",
    "revision": "0ff0eab8298a5ae85953996142f139d0"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "bce787d69e4ece0de782afb5aa406ba0"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "f0149703185844fc4b9603e68150b006"
  },
  {
    "url": "source/webGame.html",
    "revision": "db0bbec0fb15c2dfcf332560eaa431f1"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "4a74217bd2eae0d024682f1a97065547"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "c3dc0edede9ffd813816d35440d2fa5d"
  },
  {
    "url": "subtitle/index.html",
    "revision": "1030a765a0fc9b490b16b365bde2116c"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "f5d4d2cd5fe86b57be68adf7f6fdb1b7"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "063943f973754c4473d75cd4dcd674ae"
  },
  {
    "url": "subtitle/small.html",
    "revision": "37ce8243135bd0e9825eb5986c836e8e"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "22f9620313e83c9102535d43e7238bf7"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "9499cef172795ae0da26dde2ad05cd8a"
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
