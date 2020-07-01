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
    "revision": "2a1b0fa02d093dc8d132d7867298e6c1"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "37e9eab13b85c7ee6fe1d5f0a8c457b1"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "105c192481c480db521f551abd46c816"
  },
  {
    "url": "algorithm/index.html",
    "revision": "888af28edd161662387e73bdc2811fe2"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "841ca9e87d90c65674d733aee03cb15c"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "0047b1c2022b087ff2658fd2c11444d8"
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
    "url": "assets/js/27.a5d2016e.js",
    "revision": "f7bb621a76de4be2e12b8cf3f03829bc"
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
    "url": "assets/js/70.6a30a51a.js",
    "revision": "b3a721918da3adb7959662a7241579c4"
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
    "url": "assets/js/73.873be060.js",
    "revision": "af8970aced04572dffbe6e15780d9a74"
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
    "url": "assets/js/app.6849a9e8.js",
    "revision": "809d45f72e4550cc6aafb61489746db5"
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
    "revision": "87db8a286ba0f5f20e766c1cf114b387"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "56a0edb42a0f78204820ef6110b8b3db"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "5e20b9a31c16cab52b912003cb8c933c"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "02d64b304e1b2198f8f4f895a896d1ec"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "dfcb1fe6be2413d28c53eac6f88b426e"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "caeeb523be9c13e88434683a7f5518ff"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "52e2c955021b731dfe111f863b23b183"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "22c0051e71503ec3a946b1ffecd2f219"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "6b6c17e3a37b9200da306b0746ba421f"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "c0a57c105a238b5628c767e4fdccd46c"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "82536a35d343daadfb4a11239c11a48e"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "2939e3900445232f72503aaa2da93cc8"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "62598b70f00843ba8ad22bc5c244c1cf"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "9046cb19916ff6edaa05adefa477efc0"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "010e69ea091c202a4b327ecee7399e7d"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "f15217e410dd218f2f59d0f31e49ac0d"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "03bfe42ed84b98c37e942b7ef6ed3640"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "33963a1dadda55bcd4ca4494bc60b370"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "60aa714650f2f41d3c41bedd89507586"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "ae77ff4728dfc7b09f857900eae01bf1"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "64709baab77c8f771463d0b6e2f6bf97"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "69f4f9b8eb5809fb361c36a2e898ba41"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "e2c4ce9435ccc82c401fa9a2e3a7657d"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "657e7e0976c733a68ee779b15d2a297e"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "1d590153f9328ed31a97309788c5a3fc"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "082c98b81c6651c0211ea34ba30261e6"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "1b0629f56cb60f874ff5ac77b8b3a1e6"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "a72c1f76ed41d72167dfdde27ee28c7e"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "38260d9158bacc556a641c16bdd2fa18"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "562baa4208068a8f9ba335dcad44d709"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "513af57927b9476c0bfa13e8508c86d0"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "2c80444face665050b80110df7242342"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "005a989b18d6c41632f7f8ac86253a4d"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "4763666e1945a5b493af563a56545ceb"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "d4b1e55a8122cee41463e4f728799c6e"
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
    "revision": "e5b06b4f486c374c17a46e421eef173b"
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
    "revision": "37479c8797147998c6b3a4771a199d99"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "44ac591265640a78014d6a6e2415d210"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "3b71c91ccbc3a9ce7ad4d5328e28d0f1"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "b53d1ec667e351e9039addce19218d6a"
  },
  {
    "url": "other/index.html",
    "revision": "4dcc60454d6e8ce05ae075d40e62d152"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "98fc58f2f91f71b2310a10e22ca29f46"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "e07926530096006dd927b7a1a9ab9425"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "2da1f282a906b958babb275bb4cdc2b3"
  },
  {
    "url": "other/steam_community.html",
    "revision": "6a517c16216aa727f32d90d52500e26b"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "2d40cc0e1937df0259005be5ab2079ea"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "ddb26f079acbe3394bab4b136d34b981"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "8dd01740f2492bd8c85c86a758de2eb9"
  },
  {
    "url": "source/devOps.html",
    "revision": "3efcee76e68584a10dd14cb8b50cb56c"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "ff566e9f86fcf78f7dc6fd2a0002aed3"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "a75363ad9576e19ed1520b3fec78d20b"
  },
  {
    "url": "source/index.html",
    "revision": "f4c1bc28ec919a70fab4ca11cf4a3bbf"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "e7bacbb5f1abfe9c44f96a95d348d538"
  },
  {
    "url": "source/interview.html",
    "revision": "740d5be8021bcc3c8866e1d7945b14e8"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "dbd32b62b32128eb4f1c4fc40bf30777"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "fea7e485c9bedbb29a03396b291568d9"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "4941c6be7e19b6a597f1cf230c6624d1"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "72a9540bb7498a7b3ca9e878980d02d6"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "a238ed208a561c2c66a2f3cc0cb30aa3"
  },
  {
    "url": "source/tools.html",
    "revision": "d4a10e3aaeb7cc6e606be5cc36cb69ce"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "3b7e118462ad14c922ead7209ed53937"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "1b88d4406b03138b22d32749bad51448"
  },
  {
    "url": "source/webGame.html",
    "revision": "d241cfebeac78d29b989ddc663533b77"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "5b67d65f128ecb0d820738bb6887368c"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "5512483649d7a78afcb1a9b65aa2c305"
  },
  {
    "url": "subtitle/index.html",
    "revision": "1092568741adb74af3759aaed3e3ddda"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "994f2e8583d608522ad9ce50bb4fd366"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "8c4f89c65366bf4e526e975fb00ff69b"
  },
  {
    "url": "subtitle/small.html",
    "revision": "dd50733b942018d971a88e19bca7dc42"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "575001aa05b579e928adc74c67e380bb"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "337c0c28ead4b7aba69528821acb9acf"
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
