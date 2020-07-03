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
    "revision": "c8ebcd95d5e3c975dd2840145adf1e63"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "229d877c15657ae74e24656e1f2aa165"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "62959f493b6bf0c5d5c8f4c234d708af"
  },
  {
    "url": "algorithm/index.html",
    "revision": "6da0442073bad0af10c157ca6d0695ea"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "60828b026c8c5e42d7e65801cf619383"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "c76c36143f43dc85af5588841b84a4af"
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
    "url": "assets/js/12.128176e4.js",
    "revision": "9a1b5c33b02ee99ef557955337eb555d"
  },
  {
    "url": "assets/js/13.7e9aebaa.js",
    "revision": "c7a6f17af4caf5448686f9aabe3eab06"
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
    "url": "assets/js/18.fa7a9aa6.js",
    "revision": "ed326b2753eb69f1980c67fe884ba8f9"
  },
  {
    "url": "assets/js/19.8397ddb9.js",
    "revision": "e504e1381f72b8080d3e146fc074b93f"
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
    "url": "assets/js/39.35ae963b.js",
    "revision": "778acfae0ccb7e28b55905e05da13304"
  },
  {
    "url": "assets/js/4.431b192c.js",
    "revision": "95ae970847bd7845a90f5f224c4a015a"
  },
  {
    "url": "assets/js/40.61390819.js",
    "revision": "df38a9cbba58e15696209b22931ac618"
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
    "url": "assets/js/62.929e3030.js",
    "revision": "4d3062b3912eb820b5e23338109822aa"
  },
  {
    "url": "assets/js/63.3b583b19.js",
    "revision": "037c3098e3aa124f6ab6faf698ed1462"
  },
  {
    "url": "assets/js/64.154f6767.js",
    "revision": "6218f617e7b9bd093ce7260fb33d33c4"
  },
  {
    "url": "assets/js/65.accd23c9.js",
    "revision": "165790277cca510aec53204b7b01b112"
  },
  {
    "url": "assets/js/66.da868dd0.js",
    "revision": "fb87a80f1b54ad96bcf7f873cf91d509"
  },
  {
    "url": "assets/js/67.255e30d4.js",
    "revision": "dc811e3937f2d6a1d92e0030b1d9d4c5"
  },
  {
    "url": "assets/js/68.be738f0b.js",
    "revision": "fd9798bfaf0bb0cfa78233bc62a006bf"
  },
  {
    "url": "assets/js/69.89c1453b.js",
    "revision": "e40d65ef6e66d98f0392b74b7552f2b7"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.ccd268f7.js",
    "revision": "f584e8f075c2a0ca8514949cd84ae206"
  },
  {
    "url": "assets/js/71.f2b57a51.js",
    "revision": "037f51b7d6b1c563496837214f5c19fb"
  },
  {
    "url": "assets/js/72.68cc0329.js",
    "revision": "1407cda1c9d1eea2edc798041ff55d0f"
  },
  {
    "url": "assets/js/73.45fe5005.js",
    "revision": "3ea159adc38475e3b2a64c439ae2b16b"
  },
  {
    "url": "assets/js/74.bf913472.js",
    "revision": "7fa3dbbb5b231f40279d6a6f77538514"
  },
  {
    "url": "assets/js/75.cfcf0caf.js",
    "revision": "21d43e8d33fcad44f9ddacc993e2b4a4"
  },
  {
    "url": "assets/js/76.a22f389e.js",
    "revision": "2c4c190fcd0f8c333a31b6513f089c02"
  },
  {
    "url": "assets/js/77.c98b158b.js",
    "revision": "8c2bc51c5ec3ea0be8b8a043357f533d"
  },
  {
    "url": "assets/js/78.998f93b9.js",
    "revision": "b962da256500a703d197eca70ab21610"
  },
  {
    "url": "assets/js/79.aa6eaed1.js",
    "revision": "2207f7210eb5ee827c3115ebe1b51425"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.cdc704d5.js",
    "revision": "47c46d48ad442d0a9bcca75833a3f93d"
  },
  {
    "url": "assets/js/81.de10fc97.js",
    "revision": "3b01fbbfcc6199d6de172e360fc131a5"
  },
  {
    "url": "assets/js/82.d2b5c1f6.js",
    "revision": "6b7627aa1c8f7e9df492ed736125c242"
  },
  {
    "url": "assets/js/83.b5704ca5.js",
    "revision": "f6a6e595b5d2a44e4e7dcbd11e450798"
  },
  {
    "url": "assets/js/84.339af8ba.js",
    "revision": "e17f61732af29672864345818f2a0f74"
  },
  {
    "url": "assets/js/85.330795be.js",
    "revision": "d03d8c215b0b49f09e690f9ad41c55fc"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.03ce5a3c.js",
    "revision": "83e79da4230d73625edfcc93abd10a33"
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
    "revision": "893211eaebfeb013d2bf4ab6ae080562"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "fe3c54dc591b333e7101c6432d6f8598"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "8296512f0435643feeecb9b50855f8d8"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "680b05c91f832e721b69be8530cdda0a"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "a9a1a4c553b57c331b86a6c0bdcc647b"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "0406b2abcd2ca862079f435dcd4b93d2"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "120c32565b8a23f4c0843dfb457f461c"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "3626f8ab03fb8c38fcbab9ff1ea238b0"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "e4884613f027943d6dc76ce5ab485571"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "021f6cd43c77a7a23e06e02fcf7c679a"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "63d4989668dc8a122122d8da12499368"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "07f8990e67db4e12c630d8cd26ea4431"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "70701158855553c639b5f84aa1dae238"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "d34baf8301a043a3d929bb46e242519f"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "95c464cd662af6a49a198879e04c51e9"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "824036987195d2740018a78a3c70f40d"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "fac0c8b7e0c44e30e9a1068537c87a8b"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "98d61ddc742e75adfedabe4fd6d5a114"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "7774955697c0a55f43a1309e2700ff8c"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "803600eec77ec1454726f2143c808fd6"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "8832443c0364c2f25a4445a4dde254aa"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "20019aa42286bb0fc377f23dfd61197e"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "acbe870e484bc68e269bd834ad081cf6"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "3051a8155d3aa2b012588b08954518bc"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "8c120587ca0212a29f1383ce044d5987"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "644bef78a4b6bf1308cd973e3cae1c9b"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "e2ea6ff8da44a4d9f162488d9fc3954a"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "b4aff1a1a416ad2fcd64741f452b1ee0"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "854685576dd74096d2360479a70e7e21"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "06396b444f17af53ee0679ae15916019"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "b20e4fc50eb44661f271dab206f4c598"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "8f1423aa0edc8baa2c74941ec08b140e"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "0d633c35a660a07b514c63914856f15c"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "d1efabd1d6c9a64688c45a32e4fba06c"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "587f6055483a61fd32ed02a9ec292139"
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
    "revision": "ff8ec6278aaf458252ffc90c5a0a61f8"
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
    "revision": "34c227bc87a886d80004585afade5ec8"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "5af6d7e7312371b2e40c9027173579dc"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "e21ac85875c9a26785eb363081c1ff87"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "eb86a9a1d78c086637619238584816a0"
  },
  {
    "url": "other/index.html",
    "revision": "7bce6e1c4f9869cd0b16250a785d807b"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "7dfb1281bcd255edb9f5995f4c5f022c"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "1f21d7f387165f3bdf665ed2d6504561"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "1e8147622031804f502351795d2810d1"
  },
  {
    "url": "other/steam_community.html",
    "revision": "cff2ae14bac1d1518f83246fd7b72fb2"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "a00300d7d7756c3b5b796529a6d7e3ae"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9c2f7c11e3bb85b3a530f03479e60baa"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "ae2c9fe80a3868fd75d863041e97e447"
  },
  {
    "url": "source/devOps.html",
    "revision": "881ef7c8ed00012f9ae62c9a9497c1cd"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "5924a4a59811ba2880dce519623a06d9"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "58731f492a32b63bee3fbbb4c48cb151"
  },
  {
    "url": "source/index.html",
    "revision": "08fcc3bbf32b8903e8130a10de88b105"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "9ff072e306e46e7902eae6fe0842c589"
  },
  {
    "url": "source/interview.html",
    "revision": "fece16d66c2561dc9763ded464fb704c"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "47102ca2cdec67d1b32fbca057a6847d"
  },
  {
    "url": "source/money.html",
    "revision": "3694e5f2d8c029056436ea51306b9d82"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "e24c8dfab6c582659d1cc8c39386917c"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "6a3e545d3a521380ca44f577227516ff"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "20d2c8c9ddb8e93bcddadbe92eb30670"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "ea1e9920909e3454ca0ee6e9f79196ea"
  },
  {
    "url": "source/tools.html",
    "revision": "e2db04498d114e660d1f829000484e8d"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "22179ce1292f5a54ec7bc562956e84f6"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "82b64cfd29e04f46816cedcb1737bb5a"
  },
  {
    "url": "source/webGame.html",
    "revision": "35f7a40350a0de38c366c8d22b167843"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "d5fb55d175d2760ab2881a5b741a4a6b"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "bb5ccd21a2ac591d59772dafdd19287b"
  },
  {
    "url": "subtitle/index.html",
    "revision": "ac74548c141c0a7dbef20a092cae208f"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "f793fae8ebdf47fdffed6c861466c6fb"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "9e453a2575de25880118dba73688a50b"
  },
  {
    "url": "subtitle/small.html",
    "revision": "f510c480ff17c4b965b942afd1a2bf9a"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "3c2f62595371dae1f0ae92cd7df70386"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "486dfb267bce8a2476e9139cba15d3f9"
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
