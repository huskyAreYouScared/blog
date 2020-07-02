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
    "revision": "3899f565ae7cec59f8cb53697639b104"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "72c33248413414da91581f2253d8499f"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "bf17a49a07eae2855c363b8e49dcaa4e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "7c46fafa65042a1ca34a44cc07f0cd15"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "ade51021b7d9197fd6bc01250146c3d6"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "f20078ebb898f40183145ac3c02bd3ad"
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
    "url": "assets/js/44.abab4931.js",
    "revision": "28b93b62bd2327d45d33e03bf441d3a1"
  },
  {
    "url": "assets/js/45.d7fc536d.js",
    "revision": "d2ad575b32bc07bfb749213a37c55387"
  },
  {
    "url": "assets/js/46.6b04eb7f.js",
    "revision": "8b3b7f8a976c60f3381b8a7e34bfb440"
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
    "url": "assets/js/app.41037a05.js",
    "revision": "3c54cb81e4bcc21781744d920224b7f7"
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
    "revision": "e2537b2ef745f0a5569a96fd260433a5"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "19d341d474dee7ae73e984aa42dc4b97"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "f2675fa2477f9877643de8762331a8b4"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "12ca5e0b603931982f4ecb19bf8253e6"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "179101a5916edd9235a4d2488b493e35"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "8f0df3bf89c9190b5b6bdaba66adaf02"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "b681973775721923cae0bbbb892200f4"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "47ff8d5890154182a04f8be9b5a07a1d"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "a2a4ce84f15386fe7114a13760a75933"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f51da835ae694fea98258eb7c76dbb3f"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "225a216e19612d2040e6ef4523344767"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "f9028abc9c1be8234e28c2ee7d478015"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "954e0f9f7223826b023af6633c02a4df"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "9432b9e3b7d2b9cca444b16bb1f4e0b9"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "e247332c5db4f89e7e1b1cd57d07e1f9"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "cd3ef1db6fbb97f2d8d13d4c1003fa9e"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "be0e3c1b82a3ba4c121c42566877083d"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "31aa2be8690d4f845c83b57b38fb11c0"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "faf3d909dfe57bcf78edf79670f0b23e"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "52f2a1aed0e82e62612eb39ae28aea6a"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "91cda1bf17677600f38795d2d1e139f8"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "76916f62ab4c1a981e57fbcfb333b7ad"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "be612dc195a3fdd3beac6c31dac5d616"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "7d25ea9c9a4463e78c961209a27562f5"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "77b0bf17ab430672d8e661e4498490f4"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "da038c56f9d8c1c9abc3d511d9d6d453"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "64753152c40cfe0fbd10d7bca525f1bb"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "5ba588e95da76ca3855ec1ac30c0ec0f"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "5f053484dd44346a3ce792f7abac45d2"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "e748fe463a4f7949b0e04722c5dfe80c"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "d2bae935f462a748b933dfd9ed520de4"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "11f3f4288e51554f2e45d5f9695bd9ed"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "8866e909687395f825d420533b7a475b"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "57179cceeedea72d949aa3304df7f70c"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "8cf779a25da2769c94a76ff12b5d2321"
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
    "revision": "f1aa57b77afd6937d1db8fcf7d6c3075"
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
    "revision": "3db9bf0eddf5ad65a133ea26b176669f"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "558b89f14028708527f5e852cc5dd4c8"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "720b5cfa488daffdf003ecec8303801d"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "44d882da040765f7a16e72c0f4f82bc4"
  },
  {
    "url": "other/index.html",
    "revision": "a3ec76619c8f3be5ce27192d1b2633ff"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "03081d7316e3c8ac94ddd86b92cb5a8a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "a9d98433a742efed46e1fdbadd787fdf"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "7c630a3f4ee64266eeaa2c2452d3156c"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5155feb41fe6a95bd8fcc17a613f5068"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "56ebee6b2c41c131e43e20817b958189"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "63f98fd09f052c3e89e79a95fa651314"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "e4f3bea9a6b63d691c77dc644924ff57"
  },
  {
    "url": "source/devOps.html",
    "revision": "dceabd983d743e109ddd621e1959ebc9"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "a52f8b070654760bb53aa4329abc74f1"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "9568c2c6d39d96bcc589c45d17585a11"
  },
  {
    "url": "source/index.html",
    "revision": "791455a4fa2d3cfad7eaccd3092ef003"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "95430fd7e288501efedfc59068950b02"
  },
  {
    "url": "source/interview.html",
    "revision": "6d540ab49351a6eceb65cac8a84b83b4"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "9eed6ef44ceb22a6adf232d438594b64"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "38fbf410c2d070c804daa95bd8fc5eb9"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "de86d6052cb6d09f90fbf5c5a3501bcf"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "40290d44f476d533ea27784808c3118b"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "aec77fcc8b8e48023b3e04d1a5fd1162"
  },
  {
    "url": "source/tools.html",
    "revision": "144febe1875b5f5663b9cc2a34732690"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "576ba3ad6d071f0c45ea0e4ed3cf64d3"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "95bea217e5c1a5bb8912ea5308239546"
  },
  {
    "url": "source/webGame.html",
    "revision": "31e2b9541fbe84ee81c3530b3baad463"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "7d7ad874e602e4d5d42d755bd60be158"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "5c63fd836c3a0f82131ed8cea899bce9"
  },
  {
    "url": "subtitle/index.html",
    "revision": "e08b1fc595853646cd0a2af37a378e5e"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "63ea5dfc1c3ddaa90354b6d0858a1527"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "1bdfe3aca36554baab2e233cc541a7b2"
  },
  {
    "url": "subtitle/small.html",
    "revision": "a3b286420e2db7abc227dca6e5d32653"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "d2b6fe470ca2e81e4256af6bd8cb9a56"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "148263a50402e3e64ad9089d0b36c4d7"
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
