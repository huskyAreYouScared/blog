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
    "revision": "af8a393cbf68d815d9a8766707910ff2"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "feae3998160d69e443a45b9cae7a43c4"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "8dbabc117118d47492d5b8ee153bbb72"
  },
  {
    "url": "algorithm/index.html",
    "revision": "adaf1469dcede7d993cb74ae41e73e0f"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "23121e1d23a6439934ad8daf530f20de"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "40cefbac5980b829e63170830e63a43a"
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
    "url": "assets/js/10.4f4964e4.js",
    "revision": "43ae01f1be0677b4349676170fcc05e1"
  },
  {
    "url": "assets/js/11.b1d14358.js",
    "revision": "57aac691662f029b5c327fb3d7aee6e6"
  },
  {
    "url": "assets/js/12.5dd1b70a.js",
    "revision": "849cfac3114f9e46a599eee955164461"
  },
  {
    "url": "assets/js/13.7dc2c203.js",
    "revision": "de00564f905bf3996087459252e0f292"
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
    "url": "assets/js/16.50eb075c.js",
    "revision": "74bbc5e91d3c574ce6ee299766645ff9"
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
    "url": "assets/js/22.442785b3.js",
    "revision": "7b4d5d24bb38ba7fd0a30a2963606c0f"
  },
  {
    "url": "assets/js/23.c81ed027.js",
    "revision": "498118ee49788da09b6c1a924c0244b1"
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
    "url": "assets/js/27.e1e1ae23.js",
    "revision": "7e29adbef76b78b4e76397a14c165a34"
  },
  {
    "url": "assets/js/28.3f807de6.js",
    "revision": "c78bb01c189856455f148e2c170cd42f"
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
    "url": "assets/js/41.03b2def3.js",
    "revision": "e2c8929c15afc1c7dc22b602474f361b"
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
    "url": "assets/js/9.5a6fdb71.js",
    "revision": "3a700cded82d11797d7fc5c4cc399f65"
  },
  {
    "url": "assets/js/app.5d2628fd.js",
    "revision": "b2a12cbead3cdd65fcd763e85fe698f0"
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
    "revision": "2b8524d85d3530610a158463b77dfc91"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "51e80bfc6d74a8f3754d13184c601fd1"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "22fd382117fe3e604fff06ca3e6f84cc"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "adaf78cc1d50d209828321049efb937a"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "0dd7f1d383ed525bb6914cad8c2b2624"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "5b62259cd6fa1e4aac6b69aed38be436"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "f496027f8cb583c19f0f3eb031a28fff"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "602d4bf0fe986f3a2b38ae2b7cf07731"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "047b67f89f768e32d29c6e5e528fcb0c"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "9d32178e00a2831a668ac3625eba30d3"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "7897ab01705c7b72112579895d7d6771"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "7cbe1cb393e5baf1e32a420c76a4c631"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "e99f193c18c7a25d9268e10e4ee79da6"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "804fb7c3680a9b60ea75a72651859f31"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "8677fe1e9455a3c6fb62c45e84610d6e"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "5ff9efcad206a4553428a78cfc772cd2"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "f479b8900ced0313ffb38caeca32fc0c"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "a03b37bd7904f4ff8c72e5193244a633"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "56b9a26e77e6bbfa1129bccfb619e24b"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "44c9932dd83b0c6126b0e1c58a00f4a5"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "f006c799db4ead265e6acd1dfeafabb0"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "15aa5cdc2e47260c4626ab0d6602ac2a"
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
    "revision": "4cfd1331e5254743d6b9f471b0039cfd"
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
    "revision": "1df9c28991b25d6b2e2dc4d17493ac90"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "f8e3be94b68d0194c7b1ac1f958caaba"
  },
  {
    "url": "other/index.html",
    "revision": "7cc020c4b69eaa1e1315901d524e2d6d"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "04860bf9f3516054202ae5fbfbaae694"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "5102cf793cd30a5694ab51fef3b0410f"
  },
  {
    "url": "other/steam_community.html",
    "revision": "d3af457bd0f88ffe777f6f74a008deea"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "e7c5e9d63d41e96953809076f4370ef1"
  },
  {
    "url": "source/index.html",
    "revision": "0e033ab1a56b1470545ef806857d8d54"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "0a0153529afdfde5ee535396766d3563"
  },
  {
    "url": "source/webGame.html",
    "revision": "c53e6efd104dbbd32a910878c02777aa"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "356e3dd273a12c5455bf32a351b29a25"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "4fb5a6942938d5f470552cf1530bd4cb"
  },
  {
    "url": "subtitle/index.html",
    "revision": "fb402794f2e3594c65869e4043ce144a"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "702d0c6e35d343defbe05420d2ec2df2"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "286bde639b91e556d70f47a9b2182cec"
  },
  {
    "url": "subtitle/small.html",
    "revision": "857d51b159d23f6118890070eb62e591"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "78a7b6a2a937c2918bee1bc874241371"
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
