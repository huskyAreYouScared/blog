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
    "revision": "30febc80079f07ceee4948cc3db6e956"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "5eccfe5eff913389d5c7a4708af84970"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "57bb4d1f1bb43c0f5867081868a564fd"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bb9dbe086b6844afc7d53dfe6b743bf0"
  },
  {
    "url": "algorithm/insertSort.html",
    "revision": "958f475b3c9c2d745ded5c29f61cfd1b"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "d8ac426edf41727050a0fb81e4f96daf"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "2cec780184de8c0db5226e69fabc12c9"
  },
  {
    "url": "algorithm/shellSort.html",
    "revision": "8872281c5c26d2914ab6ac7c0605927c"
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
    "url": "assets/js/4.2bfbe071.js",
    "revision": "50390314445ec9d11fd05171075da8fa"
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
    "url": "assets/js/43.255faf10.js",
    "revision": "fb6ecf296b05a7ce00edb428cc19fa91"
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
    "url": "assets/js/46.7957b24d.js",
    "revision": "f335562e066288ca9acec6e3ee78db7b"
  },
  {
    "url": "assets/js/47.8be71d1f.js",
    "revision": "888492030f7321b8619313e47d08f474"
  },
  {
    "url": "assets/js/48.bfbf3880.js",
    "revision": "05032eb45570838cfcfd67909d940fe6"
  },
  {
    "url": "assets/js/49.575ee00e.js",
    "revision": "e8c70efb13bae8e5bb74edffbb13de97"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.11fa70f9.js",
    "revision": "1f3d34793406c8b6198f3ffa25b0ff6b"
  },
  {
    "url": "assets/js/51.b28e22b1.js",
    "revision": "47fafac039563c26cbaef7fcd12a861b"
  },
  {
    "url": "assets/js/52.6e9f988f.js",
    "revision": "5ba958c9db4c76e85bcd8c0840d0828b"
  },
  {
    "url": "assets/js/53.44f30ac9.js",
    "revision": "8474977417950c29979f57be7b5be818"
  },
  {
    "url": "assets/js/54.efd300b4.js",
    "revision": "84317588d4036859c046c40ade7eae55"
  },
  {
    "url": "assets/js/55.5d18d2d2.js",
    "revision": "ea1bdee4714423c56499f68e96961b6b"
  },
  {
    "url": "assets/js/56.aa283492.js",
    "revision": "21cd1062ca4cbbce13d7cf5a42d84b74"
  },
  {
    "url": "assets/js/57.f371b6aa.js",
    "revision": "d996209c1faa89275746ab6f312be285"
  },
  {
    "url": "assets/js/58.7c32135b.js",
    "revision": "bba66225a967ca47d34eb2d3dc8ddd82"
  },
  {
    "url": "assets/js/59.b05ab791.js",
    "revision": "90289ab9378bef376c60425b10b20055"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.9ee4cebe.js",
    "revision": "1b2d9e74688551691e8994c8661dc837"
  },
  {
    "url": "assets/js/61.09dd1441.js",
    "revision": "6b841a0e7c4986c4736bfec69e6bf696"
  },
  {
    "url": "assets/js/62.253ab9e8.js",
    "revision": "c078d248456e0cb780fab82764112215"
  },
  {
    "url": "assets/js/63.f5665c54.js",
    "revision": "5693dd7d55d63cfcf58246733417d2a7"
  },
  {
    "url": "assets/js/64.61ac8908.js",
    "revision": "bf7226eceb648f7eacb7481f36d146ea"
  },
  {
    "url": "assets/js/65.fe458601.js",
    "revision": "9b994281ca9d07d703de405b8ad19288"
  },
  {
    "url": "assets/js/66.37f249bc.js",
    "revision": "ccf3a7e4deb47e11139341a232a3a6b9"
  },
  {
    "url": "assets/js/67.0361a6de.js",
    "revision": "f59633e3a49d7a427d98198ca1927525"
  },
  {
    "url": "assets/js/68.409a6e49.js",
    "revision": "6a4a2f7be8f0ba1d505133f85e0c5ddf"
  },
  {
    "url": "assets/js/69.dc2319b6.js",
    "revision": "91773269bb20ca02dee8ec03230293bd"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.15731469.js",
    "revision": "3536f5ab3f4038135fe578d96c965cf0"
  },
  {
    "url": "assets/js/71.5499851f.js",
    "revision": "008cc8677b010914e0d3b804a17f0215"
  },
  {
    "url": "assets/js/72.8b3848d6.js",
    "revision": "16249d2ff0859e709fc834f19efa0ec6"
  },
  {
    "url": "assets/js/73.2e4b9841.js",
    "revision": "dc2c61834d958b4fad64082581371ac3"
  },
  {
    "url": "assets/js/74.25913d9a.js",
    "revision": "87d327997b4c83ac19760a1ac6c708be"
  },
  {
    "url": "assets/js/75.3e735aa8.js",
    "revision": "0c5eb8568b3a1b52b57d083186e0ac70"
  },
  {
    "url": "assets/js/76.513706ad.js",
    "revision": "38f5bf07031c07a5a9a827b42cd0c634"
  },
  {
    "url": "assets/js/77.e03581ce.js",
    "revision": "b4a2dafb28e952ec95455a35fda3ee88"
  },
  {
    "url": "assets/js/78.3a484186.js",
    "revision": "d77f01da070c3435bd5225674f81292b"
  },
  {
    "url": "assets/js/79.7dd85ebc.js",
    "revision": "a3899d5702281a569fe24a82ae905ea8"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.634f9cd9.js",
    "revision": "18b30ce506b02f477cc02997ce2c8138"
  },
  {
    "url": "assets/js/81.5dcead7c.js",
    "revision": "99647d1a42af62607973bec58349e851"
  },
  {
    "url": "assets/js/82.62bfddb7.js",
    "revision": "63f629288aed8050eda218084000fe52"
  },
  {
    "url": "assets/js/83.45d62991.js",
    "revision": "b7c019ed33dc3080dcbc7f8dfa585d41"
  },
  {
    "url": "assets/js/84.82e6d629.js",
    "revision": "4c1cf4ff217a9101da20ef4499ae1723"
  },
  {
    "url": "assets/js/85.e785583b.js",
    "revision": "37028f45a80e12c94429d6dde8ed41dc"
  },
  {
    "url": "assets/js/86.6228c623.js",
    "revision": "192bcb620efed1dfcf623955f55b06a4"
  },
  {
    "url": "assets/js/87.0a43e486.js",
    "revision": "6cf13465c8d58ccb2394115949adf9f7"
  },
  {
    "url": "assets/js/88.c15d519f.js",
    "revision": "b3908c8359e78965b9afaf1204f06b5e"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.414c4263.js",
    "revision": "18b1b6de07dae4d92af1d3f71dec8dd1"
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
    "revision": "3384011318008fc9556dd57969e84cc8"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "8603c922eff32177f20554f0b3465c5e"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "fca70e1bccdde2696f9b7a44d6a25e02"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "15fbefed108e9fdf3dcdb455c2825702"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "fc2f0cb58198bc8eb7edcf02f25bce8c"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "26252d09bf4550b3856414fe4b319ed0"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "d9ced02c2a55f4bad3ceddc1a4544426"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "e623ce8fa27b641ce1aaec8800cb884b"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "0c9bf75acad73470a70ac121aac72fff"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "01e34f5b19cad18e233ed8fdcd65a4fc"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "9f0296657d776c53374544fd5b336dd3"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "9078f87d2fb9db91a8c2072b2665400c"
  },
  {
    "url": "HtmlAndCss/interview.html",
    "revision": "d8437855cb36f07b1b1c51aaba323a24"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "6f378854ad82e6634b99c450bdf60a53"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "95bbf5d362692f974634eaef63982189"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "26b4f79adbf8aed4342ae98a14a01140"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "67d8c9c6a0f1400b93a421d4e75b5abb"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "db620842b2f868cdd9d6bf35da795128"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "91d9c19961423d238e67ef8031e363df"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "08f1ea9531d104467734818a15ff6527"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "fe8e903a910926d7e61ca1d2677466d0"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "3a309afbfd8dff8fba4f54db8bd5ace4"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "98352ec92e9d59b613e3244f452d551b"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "baccbe698c5c34c7356beb6637a2320d"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "72b43f8c6af94f15cd2ad5b762f7191e"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "5e8610b5af17a49d263b9d174624ed51"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "2f88eb0daf6c910eafee7a544944904c"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "5059c2fc321c7c8437f305c5c6e960a0"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "f056dcdef42a4bb5e69eac0249dc513f"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "43748707570188b93caaa28ea7f15e5e"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "68a76a062c4eb734042e70eb221604ce"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "5cd3cded6a2d7de8a05dbcbdab10adfc"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "944ab270a96ced4fd986be5b613b486a"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "3807616adf214996819d9ff62419823e"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "6ed4ec735c4e2979af4909665a036750"
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
    "revision": "5e6414b4a1ec01ab1ab1c7048e3917c4"
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
    "revision": "63badcfc12c638b6cbcafab05e6e86ec"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "c8636d97026a26130a340713b82d949f"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "eb057168bcbcca97ccdc7c35dab0ebc3"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "09bd35f7746573a6801459dc6d203187"
  },
  {
    "url": "other/index.html",
    "revision": "e35b8bdf235d4363cdfc10bafae167cc"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "27cc56dfbb7b1cfbfabbc217e22cc58a"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "dd2e181f86ab7c08a18b20aa28b0cfc5"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "e2e958cceee80fdffeffb71415a1c9b7"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5791e0415b27ea6a80d186878854e7c4"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "f205bfb15551270ddd9ac507a78680aa"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "9b861c5bb02359bd41835ff0ce1ec8b8"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "48202db5f252b32c5a36a2cf63862d67"
  },
  {
    "url": "source/devOps.html",
    "revision": "ab9bdc9567bdbb8885466e07c114e06e"
  },
  {
    "url": "source/framework.html",
    "revision": "2184cb4d0928b1519d31ec9de8181d1a"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "f90e0334a4c718d8437419d062ed7e09"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "dad88fb1eed86ecdf5cdb09ab53cc70a"
  },
  {
    "url": "source/index.html",
    "revision": "354046d762ec09125ccef7db01472160"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "f7d1ae9c959a0586134544558c82c229"
  },
  {
    "url": "source/interview.html",
    "revision": "4505a09465e373473e032db9bacae15d"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "0e23491c9d831f6521ce0edef15883fd"
  },
  {
    "url": "source/money.html",
    "revision": "4821792b5774e18509c09eee243d27a0"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "75c46d0f75976995024a02ca8528aef5"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "a020150e27b2980e9c9c2e54a5f2d366"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "fc3d1959c6ca432609e03b8ba5e7f30c"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "ff7959bde3e4ee03ecb5bcaa5bc4ebe7"
  },
  {
    "url": "source/tools.html",
    "revision": "a8822d655266da8cf6e7ea443f050bbe"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "6076edba78ac615957ed531791bad634"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "72d4e2cd1b924e25cf3fa232e14eb91d"
  },
  {
    "url": "source/webGame.html",
    "revision": "b4fd58ff597f27db1816c09d55921f48"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "921c84183ea4e9d0daee38faa42819c6"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "ac30de13e9bf8b8daeb244dd285cd453"
  },
  {
    "url": "subtitle/index.html",
    "revision": "e1dfe6297b113662a8df0247ef909eec"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "b0eb739d9c0adbe686589c011578a633"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "f9500618244527c1696f0ac5d38db804"
  },
  {
    "url": "subtitle/small.html",
    "revision": "940dccf64414888c7aa2707642aac48e"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "38f4ba89133531fe4ad631c4b1d93b9e"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "fec220814c436a2206603a1471133f95"
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
