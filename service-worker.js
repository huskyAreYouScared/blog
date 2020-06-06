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
    "revision": "416e500d7f26fd57b49b499d4273c4e1"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "1b85b567f1e7893a97b1671cd8a401f8"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "df251c4e5f6c106a3df458cd8ef88890"
  },
  {
    "url": "algorithm/index.html",
    "revision": "998b26cb2c9cb9b0b268412bce7e5d35"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "4e454aeb3c22c939d9c5be8516087146"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "c79f98e80796189d5d278e37bf60e5eb"
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
    "url": "assets/js/20.c95fb431.js",
    "revision": "213ef1d8bead5e0d0deda14755945378"
  },
  {
    "url": "assets/js/21.9e4f7d80.js",
    "revision": "c868abc1f099e4b576c2a3e3ad8d9f7f"
  },
  {
    "url": "assets/js/22.1b4a7812.js",
    "revision": "54258e620ce0d66cd7139db372de7076"
  },
  {
    "url": "assets/js/23.da50aeb4.js",
    "revision": "f20e651567ea73183c88ebc758ace752"
  },
  {
    "url": "assets/js/24.b978c613.js",
    "revision": "4744d2984560592d138538aa18de7cf3"
  },
  {
    "url": "assets/js/25.480f9287.js",
    "revision": "5461206d0d0ca7c4cc410bf591a63c7c"
  },
  {
    "url": "assets/js/26.c9f93c32.js",
    "revision": "37cc78b41f6ed40d6eccdb1169d02469"
  },
  {
    "url": "assets/js/27.af1ff22d.js",
    "revision": "f2ad984888ad608879dae4e34ee9e8ff"
  },
  {
    "url": "assets/js/28.62d2fb41.js",
    "revision": "909609a0c363fb16f8bfa15e24f846e1"
  },
  {
    "url": "assets/js/29.0290f701.js",
    "revision": "a27c786da9e515e02393f9216d40e947"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.346dbf54.js",
    "revision": "4a97f9b9f5fbed14a6e554540b335e99"
  },
  {
    "url": "assets/js/31.bf30805b.js",
    "revision": "dc2a89a59d3a9cd5b659642122685330"
  },
  {
    "url": "assets/js/32.65ed3470.js",
    "revision": "338ab4ade672469704a244ab83eddf00"
  },
  {
    "url": "assets/js/33.88bf3064.js",
    "revision": "2816165109cf7a6406f1437aee497c4a"
  },
  {
    "url": "assets/js/34.90461ad4.js",
    "revision": "6f9c55c36c211024d9383e9fd3ab0e89"
  },
  {
    "url": "assets/js/35.226c57cd.js",
    "revision": "ab8a7d52e4a4f0ca446b98fc8f364038"
  },
  {
    "url": "assets/js/36.9a6968ae.js",
    "revision": "d23431a5e6d4c730353059b82589b7db"
  },
  {
    "url": "assets/js/37.30cab2d5.js",
    "revision": "002f95d761ef0adb36f777cecbe166b8"
  },
  {
    "url": "assets/js/38.35a7e254.js",
    "revision": "9c1e74633f5895c50e30074875b5ac75"
  },
  {
    "url": "assets/js/39.b9ded95c.js",
    "revision": "f3f928c0ceca7ec26e58e3fec5078f84"
  },
  {
    "url": "assets/js/4.57c482fc.js",
    "revision": "fabfbbeacc34f8745b1c3bb1673f32db"
  },
  {
    "url": "assets/js/40.de056cfb.js",
    "revision": "9a390f13262339517d7598130eb2fd4a"
  },
  {
    "url": "assets/js/41.73b72f7a.js",
    "revision": "2fe8659f2a933b03dba85e6acb8c5661"
  },
  {
    "url": "assets/js/42.616391f3.js",
    "revision": "c82d50c3b2b5be8b0cf711a8d0242124"
  },
  {
    "url": "assets/js/43.1ecaabf8.js",
    "revision": "ffa26251c72a1a8b569cd88eff0b90bc"
  },
  {
    "url": "assets/js/44.3eae90f2.js",
    "revision": "092496d299641f7487aa057956894f02"
  },
  {
    "url": "assets/js/45.59d77b9a.js",
    "revision": "b6a369fe6c646cdd420f1added8d1ab1"
  },
  {
    "url": "assets/js/46.2eb501c2.js",
    "revision": "b90eb4fd6f19f319d2fcb9caf7188b08"
  },
  {
    "url": "assets/js/47.b8332e7f.js",
    "revision": "c406cd543c5d6305c7b52631039faa0c"
  },
  {
    "url": "assets/js/48.43071420.js",
    "revision": "2f8d5f3105c52ca258019f8154e54316"
  },
  {
    "url": "assets/js/49.16bd51f2.js",
    "revision": "3e944910b0ac05d0707e9d0c79c7dc4a"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.bebffd28.js",
    "revision": "f657dec6f9af6378911119ad1ef87a8a"
  },
  {
    "url": "assets/js/51.f0444372.js",
    "revision": "96b1dbee130a08539a132db93a87cd52"
  },
  {
    "url": "assets/js/52.c7595ff7.js",
    "revision": "881ba9ff1f722b7b0f2b18ee3598d9e6"
  },
  {
    "url": "assets/js/53.24cc6ed1.js",
    "revision": "0f0730baff1b0bf4329fde0834b9811c"
  },
  {
    "url": "assets/js/54.801d15f8.js",
    "revision": "076209c0973ea16fdda0d4cdc2072527"
  },
  {
    "url": "assets/js/55.1457a2ef.js",
    "revision": "4728a93101f27979a77797d703e7fa33"
  },
  {
    "url": "assets/js/56.87b977c1.js",
    "revision": "5034e0ca0336d6b7eb80417822327d0a"
  },
  {
    "url": "assets/js/57.8826bbee.js",
    "revision": "73451fbeb00719a3110a61fac8c544db"
  },
  {
    "url": "assets/js/58.1fa8ab05.js",
    "revision": "f56088217832667cda6220acc53fbaf2"
  },
  {
    "url": "assets/js/59.a7c0c704.js",
    "revision": "8928ddbc0d1d3b27616df7e0cf862e85"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.42b76618.js",
    "revision": "6c59c386a9229bfadf2f347e1df46328"
  },
  {
    "url": "assets/js/61.19301c71.js",
    "revision": "5260c59f2bad31f22490c675f90ff3e5"
  },
  {
    "url": "assets/js/62.684126c2.js",
    "revision": "a0f26717f8a537ea3e8414dc71bcd2b4"
  },
  {
    "url": "assets/js/63.830348e9.js",
    "revision": "7da65141dd42c73a6c41e3e0e7ff6647"
  },
  {
    "url": "assets/js/64.43585385.js",
    "revision": "041feb92ae33a09824b5fbd61dd76940"
  },
  {
    "url": "assets/js/65.1c5afd3b.js",
    "revision": "0a3007d1dfd24f340a729b29d35ad1e5"
  },
  {
    "url": "assets/js/66.b17e26f0.js",
    "revision": "a416bb76946eff74a18fbea8e18b53dd"
  },
  {
    "url": "assets/js/67.ba7a97bd.js",
    "revision": "04f23b8ec4f3ea1a6a08844eeaa85bbc"
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
    "url": "assets/js/app.162793f2.js",
    "revision": "6feaf28766a259c5ad86eb22f882e3de"
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
    "revision": "adde4c8eabd5bab32c3fc20ec6432fce"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "5b1de5869a1018f7b73f0787138e6dbf"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "1d87960cd70adc13f711c6e75021ba59"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "0af978565a78055ab36a33a8e32a3c72"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "bf72e2857e9474de645e7ae7db7c487d"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "7bfa1bf5a6dda12e14339c4c243e35d1"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "203de52e2d6b7bb354fbeea90c030fa3"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "b30f859ee20034ac69cd095e3dbf1961"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "c3a66626f240b0d215db8f4dd74a1b0c"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "aa9f02639526fe57a69f626d3d9f1ac9"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "98e7e7169b27d851e298050f753855b4"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "5feeb70245038141e9a027eac4689afc"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "1d316ac9fcf6e647a3b0e606c6d95287"
  },
  {
    "url": "HtmlAndCss/nginxSummary.html",
    "revision": "af0d75745d2fd7e4ad6b591e6a7696a9"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "fa417cb8917a8603c597607bd8d3547e"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "032cc8dc73061d224279fe299361b29c"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "872c6a8c61c5411e979944123ef40dae"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "03600bc327e78f17ae7a6b3cbf1d7530"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "a66197c4ab163bf34f1fce1a603968dc"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "152cfc52f7dde24e0cd5254281448641"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "7f450b7c61f3051ac216dcebb19ff907"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "31705b8f696738073159358bbcad45d6"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "61fb4db92a9e20a4cc42ee09a47eae8a"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "7f4250f03dcb2468c79bd0b4d099ba9c"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "05d8abe17559f13e8ac69b2b06b08110"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "3bcabf446bbdc7cd701ca2b4728bb116"
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
    "revision": "ccee3a3fff5edb33f482ca74f1aaec94"
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
    "revision": "7c5899c4ace63ed1c835bb8accd7652f"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "f7a6a59318bca96b9de2e112e13df711"
  },
  {
    "url": "other/index.html",
    "revision": "c3a87e9d1b9b8b2d9147b0483c0744b8"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "ce23adbba9f7046d3c6cd6805615d235"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "d018b78f6d7d7f894a06741f4e923671"
  },
  {
    "url": "other/steam_community.html",
    "revision": "ca767e27be4b3b28d17db39a09bae8fe"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "d6a41ee5de8f7001bfac2a36c403ad43"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "8a09e9376413c9dfabf65e6d8b7e7116"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "7a0eb0dde13c7ddd02615206ab889154"
  },
  {
    "url": "source/index.html",
    "revision": "cb07fa16d1c6666da04fb0e3e6c27dd3"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "9b67ea3bf5eb57aca9e06f9a46afea9f"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "baf1b8d5dd0ec32a8627420762a223f1"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "71f604f837e0522ded67f3b5b14079c0"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "0381919baa8777541a113330686d7042"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "c0d14c09e43a5d28d3e08606701a3680"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "15bf9ac49f9eb4de937c5fab5e6d75d2"
  },
  {
    "url": "source/tools.html",
    "revision": "4bcc677f5ec480e4c934bb3b9cdcf6f6"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "1ef7dacd25db2e487ebc15f4a220b7c6"
  },
  {
    "url": "source/webGame.html",
    "revision": "2b7d4f262d5fd34218bc84c16e724ecd"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "5677fe3387296c6a28013ad31e3098ad"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "e46cda109f917cc1d4dfb170ddc81bf2"
  },
  {
    "url": "subtitle/index.html",
    "revision": "2c33cf6142cd16b10fe9696412ac4e36"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "0afd2702539746d0885da4a5eefdf9f9"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "0721ea8f2616e4261161c27ba460dd2f"
  },
  {
    "url": "subtitle/small.html",
    "revision": "67659a2b1e845eaf1789b51d886b1338"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "dc00e4656dbf76d5447ac65d68daac90"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "d180d1ef4c61763a3cc590cb943f8a60"
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
