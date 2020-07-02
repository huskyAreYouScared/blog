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
    "revision": "8bf2e147bc55bcf45d40c4d6d9c3d38e"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "b62e0477c7f21df094baee456a3a463a"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "ab53d5228065685e02bc15115485285c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "e84bd4982991d7fbec1a3bc0c3347ed7"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "b46149e425ee6ac60d5367f43c8598d8"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "cb468013c6d686dc6d45f2632cf25391"
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
    "url": "assets/js/app.bde94b1f.js",
    "revision": "f28bd3c2935ed8503ca596905676d131"
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
    "revision": "7ea67f0d632b6b2302112e22742e2c57"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "26e2465699e5bfee72009f8935217029"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "7273f07d998f4b0c139ed64daf7d34be"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "0ad726276a26526757b348f517e9ff3d"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "e1dca1e452b56943335baf34f65b6322"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "0f71822473023ef11e15750c1762daee"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "14af8e4d3f76e7ee3384a5ca7b276cf5"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "d2ac27487ffe2ce307d6471076e3f64b"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "44119eb718d468e86f229d3426582d4b"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "d9906a171deabd09ab0e1677b6547c3e"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "66ed9bf57eff6829f953e85212116c7b"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "6381208bac16dce32b2ecaac9a0451f6"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "54bbf1e70f098cf71b08c85adba11985"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "25d54c21a313e6149269a57b8e21e7ed"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "bafae9291715182f7549e936e2593a7d"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "b37e1560487215cc2b212359ca15a514"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "ac05e699acccb81c88b33e57d6601b42"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "7038180b246b43411f05f54e9719a5d6"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "51fa392b12c55d569973c61fd10a2a79"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "9fac67b313b5a7df4dbb571acb80c2e6"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "0dcac976f8758a544191820c41b492b1"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "83aef511586b117003de9685aaac610e"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "7b0c2c0909c4aafc7c898e46fd7099cb"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "9eb1ff4c9606b2838dd63784185e5419"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "3e8821efbfc4562bf073b7d2fd569ebf"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "ac569bd8d8953d86225f3e61633af8ea"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "b5b3d64d7a1cb22909bdc4e7beb57573"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "0909aac880d0cefdf6833634ea39c6f8"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "08a98803fb419520c10129bec3404a92"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "7224e1e1ed233efe42c461cef655cead"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "9e624117d92ff7940c31fc90841e8592"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "70b81c9cf965b40ab94d4406d31c15bc"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "7a17a02997f9581014f3cdb77866e538"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "dfab8868471ce1a89efd494c1157c4f1"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "197115407b1eed063b639c2dda8ddf1e"
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
    "revision": "667cd3a65112f4e7c7bf68b44a9d2261"
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
    "revision": "200545ced5617d92665dc96dc8a21765"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "66ea170f1e485f2e1f88a011ec0b6368"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "2bc868f098cbec41df82960afd1516ad"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "870d08835cae40a50daa6162946756ea"
  },
  {
    "url": "other/index.html",
    "revision": "7748c8a8eccd4f1c8415ce823f28076f"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "5c72e202aa9d1d209a3359cdd7791cf5"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "c93b40ff1a18b2d80e06b4093d486b19"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "7b26c3af81ace906aa32ab1dfd5df395"
  },
  {
    "url": "other/steam_community.html",
    "revision": "1d30e398a5547f073f62b905f2cc227e"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "e645b1865e166204020eff552a327afa"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9f998eefbb845d38576178d552a88b80"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "2683365cb04ee123440275e68a78384a"
  },
  {
    "url": "source/devOps.html",
    "revision": "010651313b91eea48e1ce0a122d813b3"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "aacf8a6235a2045c054f0390f17ae919"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "96be0b3654fdc27c5824ddeca7cf7621"
  },
  {
    "url": "source/index.html",
    "revision": "a5517700c755e40a83269178badd59eb"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "4d411f68d1907f60faf661439e445d32"
  },
  {
    "url": "source/interview.html",
    "revision": "50d03f4ee547c66bd5d81c7a4286dfec"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "6f422ffbbfc7dc4d49f508fc7ba20ad9"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "021bce206da494754d64aebd386b34b2"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "61645eb1cf9a32df766fe729309cfade"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "c3c492b8d60a6026667f9ac8c2a2d85f"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "cf3c87c152e34dcddfb7e83e3be774ab"
  },
  {
    "url": "source/tools.html",
    "revision": "ca680643199c0acc19307afd4d6b62d0"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "c950d2eb4467ec1cc06a4e4f083e9380"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "64144e9b3f0563e7a7f2e67e1c942fe9"
  },
  {
    "url": "source/webGame.html",
    "revision": "3e4a6116ee4900b5b282547b7676ce1f"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "2251a5d8384f83cd140aed45df3ad973"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "420828a2f4e54856b03d2f1c715c0766"
  },
  {
    "url": "subtitle/index.html",
    "revision": "1e36a0e81c6273dafe1b8aef6d059ac7"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "126122d131a00dcf33cfad6dd6e11d75"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "2ee4414a9a6b4740fec55b434b074d5e"
  },
  {
    "url": "subtitle/small.html",
    "revision": "a37056de66abaad7423354ee97bfd92e"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "d27156005b1e866e99ea12cbb52d5665"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "33af15d2bdcafa065f838530ed3ff3b3"
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
