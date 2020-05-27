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
    "revision": "cba77d79ddb204b8f17f2cdaeb94dea3"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "bfc7afa30a0aacffa66e67300f5d51d8"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "0b70cb5b596ab6970fdb7e06ddceec3e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3d51867b61d576284f577f808a8d1d52"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "19b909cb65cf062215f1aabdb2381343"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "5e8b0260d001b29fa8ff0316b059c157"
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
    "url": "assets/js/10.dcdeeb00.js",
    "revision": "f10d0e7474727b3c6ff54b027a33f760"
  },
  {
    "url": "assets/js/11.54487ee1.js",
    "revision": "4a683e4a162b4a5fed583679329728e8"
  },
  {
    "url": "assets/js/12.f12f3c80.js",
    "revision": "31ab2afb1d546f96451339f614b1dcdb"
  },
  {
    "url": "assets/js/13.07b21ae3.js",
    "revision": "d61d4484b6398fbe4b5139c4a4fe985c"
  },
  {
    "url": "assets/js/14.852c159e.js",
    "revision": "00f8ec477672c1b2ba67fb12b918dacd"
  },
  {
    "url": "assets/js/15.33bbdd03.js",
    "revision": "a9f87005456bb225e7896cc00a673ddc"
  },
  {
    "url": "assets/js/16.f7ee8d9a.js",
    "revision": "be8b0f781b1d9759b49b379ee41bd4fa"
  },
  {
    "url": "assets/js/17.eab5efc6.js",
    "revision": "5894c9f5bf4c22e807c1f7376317b897"
  },
  {
    "url": "assets/js/18.0f11db2b.js",
    "revision": "679d11584f377985885f9bc6e45acf97"
  },
  {
    "url": "assets/js/19.90a7d098.js",
    "revision": "1df430d007726548cdd51eb91d019efd"
  },
  {
    "url": "assets/js/2.1734932f.js",
    "revision": "5b8291810882c4cd1075eafb5143c229"
  },
  {
    "url": "assets/js/20.2ebebd6e.js",
    "revision": "b7063a28e9aa76cd51a2e22684babc9f"
  },
  {
    "url": "assets/js/21.712ac8af.js",
    "revision": "1cce3a535f3161b44ac93081a23f468d"
  },
  {
    "url": "assets/js/22.ccc38216.js",
    "revision": "9bba8b15551b2de15f1af829e07c7538"
  },
  {
    "url": "assets/js/23.f173053b.js",
    "revision": "9152715408d54a71da499180c9847333"
  },
  {
    "url": "assets/js/24.629d135f.js",
    "revision": "988a036cd4a53a171acb38b84bd26d51"
  },
  {
    "url": "assets/js/25.2c603f9c.js",
    "revision": "5b58c7e64fb69c943f5d26c6187af290"
  },
  {
    "url": "assets/js/26.40f77317.js",
    "revision": "a7ea585614eb6cfd85d85d34fd26aeac"
  },
  {
    "url": "assets/js/27.5f277880.js",
    "revision": "f7edb108649a61bd1b807c891443473b"
  },
  {
    "url": "assets/js/28.77b5ebf6.js",
    "revision": "90888c091a8586ac22fad173721d6e22"
  },
  {
    "url": "assets/js/29.f86bbc90.js",
    "revision": "e7e766aad8bccd965505e0dd173e736c"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.0c2f2fcd.js",
    "revision": "13e7f642eaf297cc10cc09c117636508"
  },
  {
    "url": "assets/js/31.5046befa.js",
    "revision": "635fd28c7a5adc8fdf98807c40c6048f"
  },
  {
    "url": "assets/js/32.cef4a55a.js",
    "revision": "17a6c819ee2587d77c5923a95b2a508c"
  },
  {
    "url": "assets/js/33.49b63c82.js",
    "revision": "931fec8014a64dce296b720abd4fc31a"
  },
  {
    "url": "assets/js/34.dac8c5c9.js",
    "revision": "f235b8a3228a93aeee91f3c646e129de"
  },
  {
    "url": "assets/js/35.586276e8.js",
    "revision": "821894ec170fba5bac0a2c099c97ae35"
  },
  {
    "url": "assets/js/36.749d8de6.js",
    "revision": "497f3790401376a5c914a571943e189f"
  },
  {
    "url": "assets/js/37.20a89781.js",
    "revision": "89645a6331961e0348ed5d9c6c1634d3"
  },
  {
    "url": "assets/js/38.2ccfd532.js",
    "revision": "d7255918120f0e2e2595d221fb4857b4"
  },
  {
    "url": "assets/js/39.4a417278.js",
    "revision": "054218cafa415dcd6436105f3439d290"
  },
  {
    "url": "assets/js/4.d4a81966.js",
    "revision": "6c34bec20df9ed39d4ac33fcc8574d02"
  },
  {
    "url": "assets/js/40.9b56cd30.js",
    "revision": "bd649d3dc2e1d417244e57ec26866fa7"
  },
  {
    "url": "assets/js/41.1360a81a.js",
    "revision": "55bb0fabba11689d765fad63a30dd978"
  },
  {
    "url": "assets/js/42.b994d72d.js",
    "revision": "40e1e2c8ac1dcea89093ac4adecb1012"
  },
  {
    "url": "assets/js/43.b5e81aee.js",
    "revision": "74da4b630d2099ff35a051e4eab6abd9"
  },
  {
    "url": "assets/js/44.a868c605.js",
    "revision": "e4914a3220d386e1cd4a52751a82d44f"
  },
  {
    "url": "assets/js/45.03b0ca7a.js",
    "revision": "63dbce9f4077151f2f874689044d9a06"
  },
  {
    "url": "assets/js/46.7ad01994.js",
    "revision": "2c5875fdf729c55f7e614d19c5e8f927"
  },
  {
    "url": "assets/js/47.a2369181.js",
    "revision": "e4b5712c69b8935f5338bd63f73e39d4"
  },
  {
    "url": "assets/js/48.c93da3bb.js",
    "revision": "34f999970276a8c25fd0c07634696f97"
  },
  {
    "url": "assets/js/49.9b00844a.js",
    "revision": "e16e1e1f33ac6615f1ce0f0acbece973"
  },
  {
    "url": "assets/js/5.2e1ebca4.js",
    "revision": "1e29b328955555619eef364612737dda"
  },
  {
    "url": "assets/js/50.c2a8995e.js",
    "revision": "1e122c7d87a49f6e6178566a1ad9bea2"
  },
  {
    "url": "assets/js/51.f701473f.js",
    "revision": "9189ccffc8c1401275a1a4aafb42161a"
  },
  {
    "url": "assets/js/52.9805d454.js",
    "revision": "806cd4533116bfb95cec16a5acc94c10"
  },
  {
    "url": "assets/js/6.8575b181.js",
    "revision": "ae21c9a144160db0364769dad7bcd020"
  },
  {
    "url": "assets/js/7.49364597.js",
    "revision": "0f901c5b0166b6ea6a72ac30183ea6c5"
  },
  {
    "url": "assets/js/8.105220eb.js",
    "revision": "1526cb6803591e15e1630a6babea2b3d"
  },
  {
    "url": "assets/js/9.a429d260.js",
    "revision": "4a426c778b8553fd403a3ad01e6c179a"
  },
  {
    "url": "assets/js/app.63c5f349.js",
    "revision": "b077657e738786f2a5a7f41784ffaf36"
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
    "revision": "1344dda2681dba718fbea14c83bb9197"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "02f830c941164a3fc55204c06e62fd58"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "6a4a3f612cadd62abcd263bf779bdcc3"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "7e6198421b662444bbd1ef6af21e0e39"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "d21e35441160bcfc45cb5d5a701408c8"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "ad3e5f4304245770affa5f2511d3bfcc"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "f0d18c6357b595d081a8200b6035403f"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "d41bf820fa67f9f5aa99059a25bf84d5"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "0a8d051085f0789a091aff5f4c5847b5"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "72474e2caffcffcccd8c8c61695c8005"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "4a3023efa2bd744d6b471d848fc7af2e"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "0622a404fd41ff4d23f4c803b7ce1d42"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "18a7031bf43a71e2e58af7fb2d06fd80"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "8e72d6d3bc1ddd4476a0a9c90b35db1b"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "828b15e17aab8354060f5dc9b589d835"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "eacf77d677abc3740e843794e1deaeac"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "c4075dd6a367ccf461cedf720f4addd9"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "fc853f7030a22263b7507beb9c8f2629"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "129a926c31a872afd47abf79b4232ec7"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "4e876b786aa0eb900f61e39503f6e0a4"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "fbb15501dfc7d42ccad24c7d9c8089c5"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "6ee21fbcf90e70d7d9f7cc0d28047bca"
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
    "revision": "037f89e97b481940a02c164107126d92"
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
    "revision": "8aa5180ff5f2bb1fb11deae5ecbdc0b9"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "f5dc8f443ddf8d7564ee467b8ab80b7c"
  },
  {
    "url": "other/index.html",
    "revision": "04a13712cc6c3305a9fea756c26aee00"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "358fcf406f0c1b2d9107b367b5b651f1"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "62bc40a37c22bb0fc5eae736b4649bc3"
  },
  {
    "url": "other/steam_community.html",
    "revision": "3e444da662e52d403b614c1b79c9de31"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "06a87ff57732752042220b86741bc4c4"
  },
  {
    "url": "source/index.html",
    "revision": "5e02e9cbefac317ba867ef1ca74ab9a7"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "50c7afbe3dbefb9d67024423b137c718"
  },
  {
    "url": "source/webGame.html",
    "revision": "440cfb685692b5088ce277ad279dabf3"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "ef9619d8b9741431d60f28d6761d2689"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "af5a5c60910c389269b0dd728a013da2"
  },
  {
    "url": "subtitle/index.html",
    "revision": "6e84d0213e3bf6283aaf4eecb37d4687"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "cab39c708f425d2be39e1d285d8655e7"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "ee51d1578900713f0921166726696250"
  },
  {
    "url": "subtitle/small.html",
    "revision": "328e0eb68caeb1698b91f98351fa0685"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "722dfac0627c8bad86fd63ac22689ca5"
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
