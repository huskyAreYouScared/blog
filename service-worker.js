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
    "revision": "2fa0067ae3167938549bc5e2284bff6a"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "4fd66726c794fe6e45feff1c909b5ad6"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "93f3b23593566f7adb41f0006c763e56"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b61ef889f720a0ae7fefedbb4afb23e9"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "7665a0323b59dd15bed24b5c66b45e1b"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "05ad8e59c784c1c542b2b37475e22279"
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
    "url": "assets/js/14.944a137c.js",
    "revision": "a7b8417e5f3c5544e78f5240593d23e0"
  },
  {
    "url": "assets/js/15.32ec292e.js",
    "revision": "6b0f240c3c679e5db44b6e9e67b89dce"
  },
  {
    "url": "assets/js/16.f0d94e66.js",
    "revision": "fd2c54b117edc49a63c7809828f503cc"
  },
  {
    "url": "assets/js/17.5d225b24.js",
    "revision": "06ba8fd6884045e251078e25cdc84f26"
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
    "url": "assets/js/21.4b8ed51f.js",
    "revision": "acc260cbadb8bc58037e8b3f7041936d"
  },
  {
    "url": "assets/js/22.34109222.js",
    "revision": "e00fc3f74186fbe07d817c2dbddaf226"
  },
  {
    "url": "assets/js/23.8eeea84d.js",
    "revision": "b45582a333a8da2c6788327d3d96f176"
  },
  {
    "url": "assets/js/24.a7eb4b8a.js",
    "revision": "099d0fbebfff11c311da808f6fda7623"
  },
  {
    "url": "assets/js/25.96cf41d3.js",
    "revision": "d9100e60d14aa82b3d8f89af7bc48eaf"
  },
  {
    "url": "assets/js/26.e385ead8.js",
    "revision": "935c0dda7001ec5ceeca97e0241f138d"
  },
  {
    "url": "assets/js/27.b07c28bb.js",
    "revision": "235b1d990c45d0023ffa741bc20ba18f"
  },
  {
    "url": "assets/js/28.5af02db6.js",
    "revision": "1744e3658c70825c081e7cb2f31123f4"
  },
  {
    "url": "assets/js/29.d8c8b07c.js",
    "revision": "9f22603b8f91e16828eb57714f6cbd22"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.c0e6e721.js",
    "revision": "a2656308db917b8f14f870052ad25320"
  },
  {
    "url": "assets/js/31.3616f9a8.js",
    "revision": "6527d142ecca8807aecd3b164a350b76"
  },
  {
    "url": "assets/js/32.4f9a4e3e.js",
    "revision": "106f9d16e108bc04714587e780e7cf6e"
  },
  {
    "url": "assets/js/33.984a9759.js",
    "revision": "2dc0ffc5d819d410509b474181e4b9dc"
  },
  {
    "url": "assets/js/34.d847e90e.js",
    "revision": "ed23489b291ee39bd1912635e878b13d"
  },
  {
    "url": "assets/js/35.d9415604.js",
    "revision": "7dde49deb535ba7cde5aefbba0f723cf"
  },
  {
    "url": "assets/js/36.3b5d20bc.js",
    "revision": "fd870a5aafc90f349ace9af5ba4b4ed0"
  },
  {
    "url": "assets/js/37.f0c4cb99.js",
    "revision": "4648f4c05f112457ac5ed2dd1093ac0a"
  },
  {
    "url": "assets/js/38.ccb99205.js",
    "revision": "91e9eaad702f16b4209ea7d96b223ed8"
  },
  {
    "url": "assets/js/39.07fcb5de.js",
    "revision": "badaac930a8e846397fc699386ad6e5e"
  },
  {
    "url": "assets/js/4.a7b9db79.js",
    "revision": "520e90abc682abf116842e2496155795"
  },
  {
    "url": "assets/js/40.1c8e501f.js",
    "revision": "72eb986186ca0f5577e119ee211b8888"
  },
  {
    "url": "assets/js/41.cd9633e4.js",
    "revision": "62114508ed0c2fcc16d40ae8a47dd48d"
  },
  {
    "url": "assets/js/42.81afa44a.js",
    "revision": "53eab113e8718ece314292660b835585"
  },
  {
    "url": "assets/js/43.32aecc80.js",
    "revision": "30b489f007eebef2a286f9098370053f"
  },
  {
    "url": "assets/js/44.483db971.js",
    "revision": "753c2a3a818a2b61ec904ca3dca24da3"
  },
  {
    "url": "assets/js/45.b82fbfac.js",
    "revision": "c99130efb8ac0c9218bcdaa197684938"
  },
  {
    "url": "assets/js/46.d5eb428e.js",
    "revision": "83816ecf9c017aecdb6bdb97063f01a9"
  },
  {
    "url": "assets/js/47.ba1591bd.js",
    "revision": "d0531c00dfe21841ffba90ed67f654e5"
  },
  {
    "url": "assets/js/48.ea801974.js",
    "revision": "13ee09dec8c15ef059f9bccf96c9f1a7"
  },
  {
    "url": "assets/js/49.2a260867.js",
    "revision": "efcf94030905e9fb48122b0088326b72"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.baebc21f.js",
    "revision": "e946857d4a0065ff3446b1de9a0666fd"
  },
  {
    "url": "assets/js/51.7e03bf4c.js",
    "revision": "62d4ac4219dba3a74e6e72ddda7e951f"
  },
  {
    "url": "assets/js/52.a9c4bc26.js",
    "revision": "d2b5ee4cd14b595c970b33f6878c259a"
  },
  {
    "url": "assets/js/53.aaa73d88.js",
    "revision": "7bfd03a5d4196f355ce290865fcb228e"
  },
  {
    "url": "assets/js/54.0ac3d84d.js",
    "revision": "4e66897fc26375df580e1acae37c6cee"
  },
  {
    "url": "assets/js/55.f0741e04.js",
    "revision": "e61eaf65c19499a996c1aaa1aad84552"
  },
  {
    "url": "assets/js/56.34fdadf9.js",
    "revision": "3a71ee5e1fdc0bc7fcb4756cc714ac05"
  },
  {
    "url": "assets/js/57.f9a7b0ea.js",
    "revision": "9dcda5685b2af4456dee137818b77622"
  },
  {
    "url": "assets/js/58.32b03257.js",
    "revision": "f86c538bc8407318b04ec62dd1bfa8dd"
  },
  {
    "url": "assets/js/59.7dde0991.js",
    "revision": "04abf01e0ac5118c89deacbc79c9e636"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.1203b733.js",
    "revision": "bd739eba98d43a5e8c3a1704e7047cab"
  },
  {
    "url": "assets/js/61.52f0d762.js",
    "revision": "c661c7b93e9dc7f90e51139bf86823bd"
  },
  {
    "url": "assets/js/62.e2e0f085.js",
    "revision": "b9dff88d398545108d624575abd08dc5"
  },
  {
    "url": "assets/js/63.be5639a8.js",
    "revision": "46b12ae550185cdcdc595f3b83e09620"
  },
  {
    "url": "assets/js/64.e75a799c.js",
    "revision": "082196095c4d49ef5dec4b117e93a692"
  },
  {
    "url": "assets/js/65.32886e64.js",
    "revision": "c4a8f23f5f0133274b97070b5793406e"
  },
  {
    "url": "assets/js/66.76952fc2.js",
    "revision": "22804c208f8e6fdf9513bc137aed113a"
  },
  {
    "url": "assets/js/67.ad420293.js",
    "revision": "7eedb883dfa86e383f99110a41eb67e0"
  },
  {
    "url": "assets/js/68.23387751.js",
    "revision": "a339c3ccaa8d62c219c2b02e79835322"
  },
  {
    "url": "assets/js/69.c0e410b8.js",
    "revision": "2731c81186a713032b9e3ef5395b6cf8"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.1f17e195.js",
    "revision": "52c4f57b5773bc4294a7af2bebcdf0b8"
  },
  {
    "url": "assets/js/71.a2055950.js",
    "revision": "b7b20ff1cdbcf1157c82ccef17ab8096"
  },
  {
    "url": "assets/js/72.006f437c.js",
    "revision": "4cae1069d803a8fb14ae961240be5109"
  },
  {
    "url": "assets/js/73.0e6d365a.js",
    "revision": "783e75a7d06140e16e6a1b9bf918b67a"
  },
  {
    "url": "assets/js/74.aa53d5b1.js",
    "revision": "bd61943cdab6ad85fddfb8b01dbc8687"
  },
  {
    "url": "assets/js/75.c95ace1d.js",
    "revision": "82a3f06da893ed35957b080d50e0e217"
  },
  {
    "url": "assets/js/76.3a9672f8.js",
    "revision": "3bf0ba58f07c7ada200f9aa2b570e7d8"
  },
  {
    "url": "assets/js/77.99fedf10.js",
    "revision": "eceb9a1f505f8efb2a0e3d2e72939c57"
  },
  {
    "url": "assets/js/78.0fd3eea6.js",
    "revision": "2aac69330b6a2960a6ea3274a563ce34"
  },
  {
    "url": "assets/js/79.4877ccde.js",
    "revision": "ee0eb8e695c2c559713babff442ba968"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/80.50f2f85d.js",
    "revision": "acf44469d4f9cbfda943d3ef50caba5e"
  },
  {
    "url": "assets/js/81.c9e4eed9.js",
    "revision": "1d0ccae46bacf90e458370a9ebaa1ef3"
  },
  {
    "url": "assets/js/82.5613735e.js",
    "revision": "cc1ab8af32fdfea8538c6bf7992ea699"
  },
  {
    "url": "assets/js/83.643d0188.js",
    "revision": "da115ebbcfc5641f5e61292c2a7c0cb4"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.caaecf48.js",
    "revision": "3bdc0ddcadda17e520716b9c0631206e"
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
    "revision": "f809e26d981928e09da9df3c1613c8d7"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "53462d92edce4a9e3bc6d93e8b3badb6"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "72fa0bc2afe7f419da7a181e14fbddef"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "6a88f4c3c47b59f976033c2f4ba35e3a"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "a722a01e2c909e3bab21918e3efec247"
  },
  {
    "url": "HtmlAndCss/es6Summary.html",
    "revision": "b76fff9f6adc96b49aaf9e6741abe951"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "35650a58aabb785852b2af8e558c5bf7"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "02835ef9124f1b8f8f9be08a26dda80c"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "35646aa5f53b2a5215df5818b4a89e0e"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "f3227a24ab73e830c30661ec30b36f3c"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "83c521c63d3f5a3fa2a1c64ddfdc5916"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "b86e478d316d83e8ba9387b97371b371"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "cf6255801dd7aeb6d1a39217a2907026"
  },
  {
    "url": "HtmlAndCss/jsBridgeSummary.html",
    "revision": "8a9f8e2a0e45a267574a5d747e700fab"
  },
  {
    "url": "HtmlAndCss/jsClosure.html",
    "revision": "08c00f0b1de423f7f2ef4d4b07a5c66f"
  },
  {
    "url": "HtmlAndCss/jsPrototype.html",
    "revision": "884e6ed3163205a97e15026ae9da909c"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "24b4bd91690a0721a75adee2ac3faf3c"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "66255decda3f1208ff42a84134935212"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "61312d919d663ec985dc03fd27cc2ed7"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "2f4a6c9717f3adcac7e101c492192079"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "5e201c6b59987b3541741e3b23f40c6e"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "c8fb6ad2716dbcda1cb2eede390542fc"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "93b059415905e11e36ca0192b6d5552f"
  },
  {
    "url": "HtmlAndCss/richTextSummary.html",
    "revision": "9de90929f973d24c17a1184eca4468ec"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "960148e174359af440810019b5fa0484"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "5cf81afacfd88af61da47b5ef27450c2"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "b8af194f2b7177f28ca3eb32fc540e1b"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "c0ad203055bff7c15b999447bc3e5d9b"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "d47f2ee7f65dd90bf10be8f9c2b70a61"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "456e75850cb1849a140603a2f2543d9d"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "9f65543c1939f6e4dd4937981046e82f"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "85367f2173da6ad8805dc73f12b1b53c"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "ee493117a731a8bdf022138cafa29c0d"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "d92a621bbcf0cf00bd91266648492680"
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
    "revision": "004f0fb8810171ee0fc6c9fd8ac8e7e5"
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
    "revision": "9714b950c5e1a5949d6e86d5b70bfe5a"
  },
  {
    "url": "other/auto_watch_video.html",
    "revision": "967b5b852f33c4dac6bc2a59a04c8419"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "d61f104963e0f85aea6f9c7ca2fbe40a"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "575f3a4d74edee85cd403f0214352d57"
  },
  {
    "url": "other/index.html",
    "revision": "08028d667fee60c6fec3035cd47bdcc7"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "2a42bd0987d22ece19b67e1d2acf74f7"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "e5819dd8694c45ecb9220402f14196cf"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "031ff8864a1a23dbf57178d26992653e"
  },
  {
    "url": "other/steam_community.html",
    "revision": "2f43c7e9c9b928c33b7b3a70a2223df8"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "7ef0bf319e06004c6c6f93a1e52a0b61"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "bc12b719d5f62bfe3035a73bcc0205b1"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "51d801bfcf41ec07b916ae120881fc68"
  },
  {
    "url": "source/devOps.html",
    "revision": "e953b913d55045d7856bb81d6f21cdc9"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "70368ea2d6a3d9a7180363f279053d7c"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "a9c1c394b8eae4643cd2144bda5ca5f0"
  },
  {
    "url": "source/index.html",
    "revision": "a7a2b8d456e379f4d49194c50e8e7f26"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "63b831f6952ea0b5b4219033c4d4d53e"
  },
  {
    "url": "source/interview.html",
    "revision": "2bfd408dc35ea9e3ead40a805096bb1b"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "ddbf5e3527862cc4df662cb545cd3783"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "850629835026c2782af8d3adf01dff3e"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "60fc5c9dc063e79d0f399c9cff08faa7"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "78b1f1a042267a33300dbfb72e532375"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "c86dce54daec8d943ca68c86b67e9dff"
  },
  {
    "url": "source/tools.html",
    "revision": "4d83d46bdc07276c579c7bbfcd31daf4"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "de3ffb01c618df5830ac25954c4d0f7b"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "63ce4f865f52e8ecc1096089117ffb26"
  },
  {
    "url": "source/webGame.html",
    "revision": "ebe1527a19fd3c103df180282d989764"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "93f278afaf0d2d60853578c8ecb52be2"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "fa86baff512f1f512dd425054ce73d18"
  },
  {
    "url": "subtitle/index.html",
    "revision": "c025616b379fc5611377e07e46eece5a"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "3d06d507dd880eaf2da6c25baf3c46bf"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "7eecc98b1957e4213f1ac79f82ec8d6d"
  },
  {
    "url": "subtitle/small.html",
    "revision": "970c9783580c1a0d2dc7dee702fee4dc"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "12042b4c543feb97d5a7dd21b770b556"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "facfd5a45e2f4363ec36c3073ee86c98"
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
