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
    "revision": "a4df01ea08095dda98fe85a567b4d4dd"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "f669582f262c7b42cd1022dbca1e5f4d"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "897c0f74d3eac42a5b766a8d4eb5ee28"
  },
  {
    "url": "algorithm/index.html",
    "revision": "de9b02168a2e2b20c0709311479aa048"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "1ebee60bf0e919eb67aba7a0ea42df6e"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "51775b3f71db11ca80bbf14402f5916f"
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
    "url": "assets/js/14.cb0c9160.js",
    "revision": "84c9753bec6d27393dc82205ab9b1ea8"
  },
  {
    "url": "assets/js/15.c85b5a0f.js",
    "revision": "83cc10d90b6a8690e3f1ecd804127a1b"
  },
  {
    "url": "assets/js/16.87648487.js",
    "revision": "76fe6c44b567e902a30bcc90334561dc"
  },
  {
    "url": "assets/js/17.93ec2e66.js",
    "revision": "1f9ed2aa5a8e2d655b89c360be33fd39"
  },
  {
    "url": "assets/js/18.caf41a32.js",
    "revision": "d6c4560232b98f8acd2cdf96473ced6e"
  },
  {
    "url": "assets/js/19.f477e63c.js",
    "revision": "7e425f2d229bf973e098442a1f1cd8ce"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.2c4b91cc.js",
    "revision": "8ddc248def8573527a8388ddc4f58ef4"
  },
  {
    "url": "assets/js/21.1d3050e8.js",
    "revision": "f9882d23b0cb49cb0c212a75814064fb"
  },
  {
    "url": "assets/js/22.01b85a60.js",
    "revision": "9272d166ea20035f45617f65966d68b9"
  },
  {
    "url": "assets/js/23.38557e43.js",
    "revision": "31e36512c084b4f7c1f7569f8454be32"
  },
  {
    "url": "assets/js/24.82661c12.js",
    "revision": "9756e8ef6b7de8b52d46d6ac3c58b938"
  },
  {
    "url": "assets/js/25.40b05688.js",
    "revision": "38fb8561cb6a7f2ef69563dbcbdabde4"
  },
  {
    "url": "assets/js/26.adb72a0b.js",
    "revision": "1b42a68e6fb1c0eb876280696250fcb2"
  },
  {
    "url": "assets/js/27.4311e20e.js",
    "revision": "3af9dc96ebaf747e89a6de57b3b7636c"
  },
  {
    "url": "assets/js/28.2f0444aa.js",
    "revision": "c12f559e30c71cbb439e32c9e70c25bb"
  },
  {
    "url": "assets/js/29.9a9e9f70.js",
    "revision": "a58f68256ce0772254a02ffaf5b1aa3a"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.6dcb8032.js",
    "revision": "7a6f8a3da66cf17d93237e3ff6aa6933"
  },
  {
    "url": "assets/js/31.c152d01e.js",
    "revision": "19625b4b3dec493a5605cc7044e4dc0f"
  },
  {
    "url": "assets/js/32.aed17756.js",
    "revision": "1d13f2ee87d4f09ff0a306c76ab7c280"
  },
  {
    "url": "assets/js/33.89da1642.js",
    "revision": "2ce25757ecc4c370d2a54dcd7d154921"
  },
  {
    "url": "assets/js/34.94ec2a3e.js",
    "revision": "29813f4d518bda82970a7fd47cb1d29f"
  },
  {
    "url": "assets/js/35.07239f79.js",
    "revision": "c8cf1f0d7fc4649cafa8255b7bf54eb7"
  },
  {
    "url": "assets/js/36.4c092e84.js",
    "revision": "4e0fb898f042b236af36daf00d73963a"
  },
  {
    "url": "assets/js/37.b55a1410.js",
    "revision": "9d25ca0d1b23891ce58f797e05736499"
  },
  {
    "url": "assets/js/38.e7d079ad.js",
    "revision": "843e731c3bb8c5a44e510330bb82eac2"
  },
  {
    "url": "assets/js/39.f1be1b3d.js",
    "revision": "3ca7d8205f15c9d272881168a9af82a3"
  },
  {
    "url": "assets/js/4.5aa3a1c5.js",
    "revision": "c2e04d824fc554587e728f6ba4294822"
  },
  {
    "url": "assets/js/40.bb46286d.js",
    "revision": "08264dd3accaf5a25aa374e3f795d204"
  },
  {
    "url": "assets/js/41.9272b2b8.js",
    "revision": "19ad00836522ba7faf60547d400744c8"
  },
  {
    "url": "assets/js/42.267f5282.js",
    "revision": "d9bd49256af1dec5291c90ac583f456a"
  },
  {
    "url": "assets/js/43.7f1a5e0f.js",
    "revision": "9befa8aba9520501fdb940f3dffb6580"
  },
  {
    "url": "assets/js/44.8d16b446.js",
    "revision": "44d3326508d17ffd452689b63348906d"
  },
  {
    "url": "assets/js/45.84e8a998.js",
    "revision": "a680bcf62d87a6f56f69962b4b2abea3"
  },
  {
    "url": "assets/js/46.71a384fb.js",
    "revision": "d85ef47dba4479cbb223438778d6d292"
  },
  {
    "url": "assets/js/47.222188a0.js",
    "revision": "153307e525bb32c6e5fab30480626111"
  },
  {
    "url": "assets/js/48.727f13e2.js",
    "revision": "2d6b331ee9b8e1b1b2aa2cccd84087bb"
  },
  {
    "url": "assets/js/49.f8e16972.js",
    "revision": "13806d977cc02e56ac04e95875061ee1"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.25e79e80.js",
    "revision": "fbd19a1c62e1c9e5cd89cc4257db45f6"
  },
  {
    "url": "assets/js/51.ca4b1987.js",
    "revision": "6ce5e59ae0e6fa7d71352e45fdd85296"
  },
  {
    "url": "assets/js/52.fa6e8d8c.js",
    "revision": "d625ae76e6e224b6a110cc6ffc491a6e"
  },
  {
    "url": "assets/js/53.08d41505.js",
    "revision": "61257508cdbfb60b32f07c5615451ef5"
  },
  {
    "url": "assets/js/54.b6af928d.js",
    "revision": "cf71c9f9ed1f0b29181c8e8ddbd66a76"
  },
  {
    "url": "assets/js/55.f7b431f9.js",
    "revision": "c298347145cf69ac9dd01f9bd4b87e0a"
  },
  {
    "url": "assets/js/56.972f25fc.js",
    "revision": "5f5c0ae121ff39bcdee899483903925b"
  },
  {
    "url": "assets/js/57.6311acfd.js",
    "revision": "cc2d27c7b3f4d9c93ea54b68218e9c61"
  },
  {
    "url": "assets/js/58.1521115f.js",
    "revision": "b5bb69cf12dd97410cd5e3c28ba771e8"
  },
  {
    "url": "assets/js/59.6e503760.js",
    "revision": "bbb68c3890b23e95a4d1b4f0ee933994"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.3c31326e.js",
    "revision": "caca6e3b7d4a72c74efd891d43af195b"
  },
  {
    "url": "assets/js/61.ec55d39e.js",
    "revision": "ea529b64fd7cad05b6a93d947d1d973e"
  },
  {
    "url": "assets/js/62.04906939.js",
    "revision": "88da0454a34d22b404e2500a03b4a5a7"
  },
  {
    "url": "assets/js/63.83dbab8e.js",
    "revision": "cd7dd89aed162947fffcc5a5525f7a72"
  },
  {
    "url": "assets/js/64.41979ba1.js",
    "revision": "9848b1459696a4806ae2ad03c6280894"
  },
  {
    "url": "assets/js/65.cdba3bb9.js",
    "revision": "1a61f6b14bade314ae3c2716f817c372"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/8.d0154a95.js",
    "revision": "4eaa00baa4b8fec1d819fb1d29b96a0f"
  },
  {
    "url": "assets/js/9.c2f3e98f.js",
    "revision": "4b5241dbe49c623610990520f1a49871"
  },
  {
    "url": "assets/js/app.6898a6a7.js",
    "revision": "1265bb8c3fd6ffe434cbea70f15c1b8d"
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
    "revision": "adf9439ab623907d23ed1ce5f6722f08"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "6da7e35818840bb99189b9748bd117b9"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a211028a89dc1d3f714129b572a51684"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "fe5840b358e4e0dae201f30d50e83e07"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "4bce895a5a31ab92e59dbb32e433c2bb"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "1e1cc3ef19c29aeb5019ea9e23889f8f"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "6c24ed3b1c91921da2c1e5873a368afd"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "92c41e8b22a4f72662e277069ac898e3"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "0ac1e9f6ac11e3d472393c2fef9da67f"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "d8f7374bb64cef15f79e1d41b60e87ef"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "b509aeb0b3e841c1756f97d12586b92d"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "95850f273e754a5113f754a834e53556"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "b1a2fc12c90bc4d06f95507f2ecee2f6"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "f6354c490e6281e0ce1fb40761dfa37d"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "1ccca548defa25e6a5f28981e02e94c1"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "fdbeedf602918151f354b7beb02bbe28"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "16d477c3503aa9ebf6860ba03d45ac03"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "d99bea50d379f24600d2b45fd6c780e5"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "23529a3d10064f869f477d33da907adc"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "150951f9f1eb21fdd8dec007edd01032"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "95492aafccf0c5b968fe54f1c0b28867"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "2affd906793e2fbf59ea55e54544f601"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "2ad74f9689cf90a3e15503754ae20a1a"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "819eacbd016d93ea7f16ec166c75561b"
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
    "revision": "7a399c4264f7c6865ec783aa0e3f35c3"
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
    "url": "other/auto_watch_video.html",
    "revision": "2e0ddc4af7c2b71f2b8ae8fb6650bfa3"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "95462a7599ce614db4ee2270af9c6f32"
  },
  {
    "url": "other/index.html",
    "revision": "773c8e3d1bc115ccd7bb9f867976dcca"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "281c03159f3375eedc6d76c478d38d90"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "2f840d97eac465ef8808d24cdb23f26b"
  },
  {
    "url": "other/steam_community.html",
    "revision": "ced951d3bc71a6e5937fc156f8e63c92"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "e9ef814375f6854711ae114f91642b98"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "a461f8e4e0c8e484d9cf05f3f1e9a3a6"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "481736c50b0ca3a74f9f683de8ada23a"
  },
  {
    "url": "source/index.html",
    "revision": "64d368761961b86ad60487b3ed79cacf"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "30007b52038a31cbbf0ff2ece9ccb3e2"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "e910f2f65299d979c48e4464e448cb0f"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "febede539f7cdcebee5d4f4bbc595785"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "a849c8452a6f115df49270a9ae6d3b8b"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "5cd032a9a5037cd725da0b92dc9c2d80"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "b7d1216304611a274bccfd3ccbd45d9e"
  },
  {
    "url": "source/tools.html",
    "revision": "8a8b5e5841e85f886d72be4d215d086b"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "af554af5f736b7209df86e9612367f0f"
  },
  {
    "url": "source/webGame.html",
    "revision": "52cd41b0a4dbc355f366f7c3442a231a"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "63f0c540d53c8b90c416f5ef140a7c2d"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "177efd6dcf490356085c354b2734964b"
  },
  {
    "url": "subtitle/index.html",
    "revision": "dbde62135c2cc5e3b0ad82a9889039de"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "1d7e6b6f1b73ecd3b48fb2772973a5f3"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "25f0fc9a499fe31a50efc926f243984c"
  },
  {
    "url": "subtitle/small.html",
    "revision": "620d41027cc2146e881d118d2a240ee7"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "2126d283f9b6d93eee1b1eab67059a8c"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "d736ccb73eeb3c2a799e75905ac1d28a"
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
