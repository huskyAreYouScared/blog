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
    "revision": "1ab4d4ae50f3dfc1a1caeb71ecd559ba"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "657cc091c7ebc3f51ad4dd1e6091074c"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "a0a4f5b3c0410aed132f5d3f42da85da"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ef3ad1a446b7ab077a726b0567907a7f"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "d7f31d88214be7a701bf86e5a9cfaa69"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "89cf9f024a311cbcd810c68a8e2c63fc"
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
    "url": "assets/js/4.8dfed189.js",
    "revision": "9d982a91e79c0593cd27790dc749fb50"
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
    "url": "assets/js/67.374d3b8c.js",
    "revision": "782486b0d6a1231c5df75ea900bdec8d"
  },
  {
    "url": "assets/js/68.8fcad178.js",
    "revision": "9a4a077ae1677ccbd855dd1c36f16718"
  },
  {
    "url": "assets/js/69.80db4876.js",
    "revision": "f2a8536a5c369301d0810ead9e640b26"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.3a0d93e8.js",
    "revision": "b5b41d74424e790bebad7b69fb9ba185"
  },
  {
    "url": "assets/js/71.35da903f.js",
    "revision": "6ba041f92aa9865d19a46460f8dd384d"
  },
  {
    "url": "assets/js/72.b3cc2303.js",
    "revision": "49e15f8765e1574f2bc4250fbb43ec05"
  },
  {
    "url": "assets/js/73.2d61fa17.js",
    "revision": "1029a81b1310ac774b38f398cb4a3611"
  },
  {
    "url": "assets/js/74.468bb054.js",
    "revision": "b651f9f80838de9fd561056708b307c0"
  },
  {
    "url": "assets/js/75.27e7390f.js",
    "revision": "24709d072983300188a38c6cf2577809"
  },
  {
    "url": "assets/js/76.31962c6b.js",
    "revision": "0f18e30acfe831a2732422d4b4de2d8b"
  },
  {
    "url": "assets/js/77.5b19432e.js",
    "revision": "077b436274db60355fef3c4644480746"
  },
  {
    "url": "assets/js/78.708902aa.js",
    "revision": "c18db5753945b93a37c11e8c2ea45302"
  },
  {
    "url": "assets/js/79.88807305.js",
    "revision": "109f43c17a8068f801387adedc9c656a"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.31df495d.js",
    "revision": "c5eda6836a0a68aa5001fe0f6f9d2727"
  },
  {
    "url": "assets/js/81.911dfb16.js",
    "revision": "cfcc24cb1ee4f4ff74df6f278e181ca4"
  },
  {
    "url": "assets/js/82.e14dac22.js",
    "revision": "6f76ef2094716dad6cba59e722db14e8"
  },
  {
    "url": "assets/js/83.269455c3.js",
    "revision": "52b2dfb0ee0905aa21247368c75394c6"
  },
  {
    "url": "assets/js/84.681b036f.js",
    "revision": "8ca299948e1718bdd6cccd23f1e14dde"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.b253b8d0.js",
    "revision": "a23322ba0ebe24e629a7b6e917d66a81"
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
    "revision": "02571bcf18c26265dc2c500b84cd2411"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "175acaaa51698780731f4124c93ddd75"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "b75ce0170dd0ba75ebdfbe9529404906"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "0e0f1a4c6d5d0154db5bb74959dd818e"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "f42c246089f3e94b93fecd2cbca8e593"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "5bf960d79371c3873f5619235206851a"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "6b6dd00b198cf19fe6ff465a01ecff64"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "9f0d31b9da74bd2e0e7f38f53052898b"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "97bb9c89f9a40b7bde3f1d799c7e3c53"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "a3ea1d4a4dfee2bb386fa26d85045d80"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "e012fae1476a9859cc7f88f41359bbe4"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "6fd0f780d2fbd5cd44439b8431eef7fb"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "63b8b081f352a44a64e4ca72fecbd691"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "4642ca26533f4eb78731498d58d18e09"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "8677c4933f1bf98ab9bb104890ca5839"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "4fb569ce84ee07b41f3db9797d2c254a"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "408f4e1cd8a5bba85b30ea4e8b0266ab"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "285ba1b7ae833753c1f750802328db2e"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "5b8f417a37869a9246abc10d57a2c2d6"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "063bb95eaacf26b0834e64831ffddb69"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "1176867ad99f962590c7308fbb3f1571"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "0bbd52b9ce39c182b1441ac6812e0ed1"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "a2f4781e39c5789214d280e77990afc5"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "cfa50f20d7574b02ef9e01c686190759"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "a17701747693119c7db5fdab6620baa4"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "55b5411c8b0d6a8134e3bd96bd6b5a8e"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "9304657c4433c9a25b807bf9f742cecf"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "421ef73ada7f502ad6f62796f20a962e"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "e57ddd034bfbc2c6a4f99c4ae5451a4e"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "84662fd173069d7f0b64ca77abae0111"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "8588cebac85059f6d4febc08bdf034c2"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "62c7979f93e6340849bd35bfbf050494"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "c5a20bf83daefba18f08de0650c169bd"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "dedc222ecf100dc4343b07a114f14985"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "aed530d9b0a40fe395c8ecb96af72340"
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
    "revision": "1efc154bc116d5ba69dfd5270990123e"
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
    "revision": "62f66ee37045d1d5eca84b0f9a3d11da"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "89066427220d851474cff21b5d007e6f"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "c1509a49bbdf46ecb90a5e2f722a0b09"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "1bcb9065aa43a88d374c8823b053de72"
  },
  {
    "url": "other/index.html",
    "revision": "b332bf931c229fc201a65053f4ce05d0"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "05e608cce09586985a6ebeb43f77386a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "fa1f988183e20b79bfca7d9231a28027"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "07f3d2054e28329ede51f5a3aed9caec"
  },
  {
    "url": "other/steam_community.html",
    "revision": "c21ced0635fb14f062286327fb57cb9d"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "38d406673bcc88406ea58cb930c4263f"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "cff6cd1ebac2f54f9aebd1eea0bc76b9"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "3ebee72527e90295a8e0a1a2ec9199a5"
  },
  {
    "url": "source/devOps.html",
    "revision": "4dc3e398ab4ff145da8080e4801575fb"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "913d7d8896a6096e4c4b95b2c79e8b09"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "22e21e52f8eec910e9c3eabf6520e29f"
  },
  {
    "url": "source/index.html",
    "revision": "c9e4b63606c7741474ac59df31535cab"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "d201d8f5582e85f33d8116294f7f7e92"
  },
  {
    "url": "source/interview.html",
    "revision": "e351802b2361f905d496d8a3c7997f88"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "5d82a38513a630af2154cf46efb0aa3f"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "70cbb647ee802c859a90ff7847d38812"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "8aebf086c016f991a50b8fb2c6109888"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "8893fc86d503deda6bc6262f639f71aa"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "0ab2282532ce8d770731d272a6a3db51"
  },
  {
    "url": "source/tools.html",
    "revision": "f67607e861a6fcf237858210c58fcb00"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "d941401a74a5f19bce3d5c64c6af3585"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "e9c23b79917ae7cad29b4ca356a6cf13"
  },
  {
    "url": "source/webGame.html",
    "revision": "23682cb2783291b69f4a6b6db14e02b0"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "e0fc4abb4ea236a5f28273cb9467345a"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "639493758e3bcf4aac5e751a9ecbfb07"
  },
  {
    "url": "subtitle/index.html",
    "revision": "eb5f1f10f06522560318b04ed47e59db"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "6097650c0125b8dca25e53ef2724476a"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "ade5616025258aebb1ca2a6c89334253"
  },
  {
    "url": "subtitle/small.html",
    "revision": "817762a6fd716d77fa5902d93ae23770"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "88b090ce5ef8fd84f94ee586042d749b"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "8e9140c97ce6773a9745f399beaf122a"
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
