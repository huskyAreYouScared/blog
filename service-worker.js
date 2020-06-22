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
    "revision": "b64ee203d5df3001ab4b29388b88bcf4"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "52f8e47828e3bdd2bbaf3ab60ac2ccd4"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "08fda07aff994f1db1d751d2b6ae5bbd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b9f91e962dcdd5f62f026b14c56377c8"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "bdc699f6b844c5907d6acac7772e976d"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "fe6ccc5ddd905f7fa98ac2d8976cb794"
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
    "url": "assets/js/14.27eec615.js",
    "revision": "4c46ef85f7ef564a169caf3db3d6050c"
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
    "url": "assets/js/61.cf1b3236.js",
    "revision": "44284d595a3f8fbfaae6f46b3f9443a8"
  },
  {
    "url": "assets/js/62.2b904b9d.js",
    "revision": "a82f2d97965d8d3f845dcb4808379ccc"
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
    "url": "assets/js/66.58a17e74.js",
    "revision": "4d5a774afa64264cd3a30cbde0ea3e68"
  },
  {
    "url": "assets/js/67.10b15a5b.js",
    "revision": "2166d4b545719d12c833498cda2cda89"
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
    "url": "assets/js/app.4087a841.js",
    "revision": "47c9140de194cd6209d42ce90e17ca47"
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
    "revision": "18ecf844c11aff80db92668f5bbdab59"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "705e4087470f505091c0a47f2b2c2cec"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "da2ca6d2bcbc7260d269a05f877031bc"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "090a0f5b4042885c6a859366952a3ddf"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "dad07e17ea94144a1caded354d805fe6"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "d629707d3f4f4c68faa5c79266da8f1a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "cb5c56c9e9e278ce99b7bcd0cc3b02d9"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "a9e52ea2159d7bd375562e9107910b30"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "991ba7fdeec7dcac3da7072d537b20b2"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "37f686f6919d4b7a321ea25d5c59b09f"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "9b537b639c4900c925b50f71c13b2e30"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "aadb7d3ee2716ab80b58d6fc4b8c4760"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "8cfc399644c87709c4f6048fc80d5aca"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "244c7a479aec92a120dad216a8d2f1af"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "1c4ef958c498ce7bd47024b2945df3d2"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "fd7734ff2411f70faf0bfb2eaccc74a9"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "11dfda6cbcd80e71a2fe9a9d64a0a9fb"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "00bc3f1f2df5cfa9ef6749e4bcce4dad"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "5503dbdf3517e297db556b2a8d34518a"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "02353eb6a33fa7dad5d0d0eb47e907b2"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "5ed82c6afbfb9aa00c53882e20a94861"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "9271aa989ee701cd66c81719b7bbc0b6"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "19788bafca1ae6c2cbb4b0a494d4defd"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "6e6bdb1104dac5a9dbcc6f4a42839c32"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "844840d2a6224c22026bbe3217433e12"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "77943de5ee532d91a673a63da35fceec"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "438a3ea2b192932c2eb435eabed01b00"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "ba15c20efc9d0e8fbc1b2d7a077e2c09"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "265d90ff868e5b4907287b70ef21827e"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "562ad9c3c29d7facc7542da9d6091bc9"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "21f3fc42edde37d9c8b30396bf07f15d"
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
    "revision": "a718957f8f62711c68d71e1224437b1d"
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
    "revision": "100179bd99ea9499b0fc4d615e3cb65c"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "77205f63310033070ad9df282938a48c"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "a46cb695cf00cedbb09e40d1819203ea"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "1de9784e780eaad0d9734dae6026065c"
  },
  {
    "url": "other/index.html",
    "revision": "fd5cac521261c9fbe26eb047ea4dfee6"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "be82ead3ccb159146f583565a4f7211a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "eb0392cc273f6d5325a3f2e39ca17b03"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "192618ecfc432e949806e1bc5a2ca48d"
  },
  {
    "url": "other/steam_community.html",
    "revision": "210d68315851a801a429b4326dc301e8"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "c8404cc27b2eec35b26a3809cf0f20fb"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "0681468738c512c58262a8e8c380ee5f"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "52e9cd19d6f1fe65916f38312f12a86b"
  },
  {
    "url": "source/devOps.html",
    "revision": "114f197e8a692c25e6536d7360ec9813"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "99fc16c941aa93d0d33a8b49070041eb"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "3ba5950574eed2dca6fcc6eeb8f66f96"
  },
  {
    "url": "source/index.html",
    "revision": "81b0768b4e29ae5790279fe612679cbc"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "13bb42007d77a4cac0fa47496331ea3f"
  },
  {
    "url": "source/interview.html",
    "revision": "64564c8033a3996d830772145f2c1b23"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "9d8a4e75acea7dee1c76a67a267b9916"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "2a2c208d7165b3d92c224904d5e36197"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "57121e488d48c1c7706f93c5c38e495e"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "e230ae58631f493ef943afd63a92c1ae"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "f5d1f2e2bcffbea447c363176d9b9153"
  },
  {
    "url": "source/tools.html",
    "revision": "faf8f67fdf7b6282a808d0195da76d63"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "ccf40bee26c0fecbb694e1e1999c6ace"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "23a8d2a198e8e833daeb5fbe5d71d4fd"
  },
  {
    "url": "source/webGame.html",
    "revision": "a67fb9822dc1bc8ceb5280ad9284b89c"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "54b03014f3a11366c5ab5bc95feabd3d"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "1dddb7f62faaceeb5c2600ec62b91dc6"
  },
  {
    "url": "subtitle/index.html",
    "revision": "b8e9abca250e68e3d12241ddcd96fd46"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "4b7912fdace7a6840c434541d0c33e64"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "61628a0364a39fc1037ca9b0abf7fadb"
  },
  {
    "url": "subtitle/small.html",
    "revision": "eeabe3a92dc2f9e8573ebe4d02942adf"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "a2efb3187c62683d92531f01c0b875f2"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "7ab0c597520a23e8e290d4499572b768"
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
