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
    "revision": "4474048434b6d6fd10724916b8277088"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "c3ef932cec9ee08c3e576035a4676309"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "5c199b2909b447defae7cabcdf80b154"
  },
  {
    "url": "algorithm/index.html",
    "revision": "650cc3b5a77708dc9145efe22e1ff19c"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "64050b91fecc8f52d20323fe3a1e5c84"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "23b8441980a3d1a161d248bf8362f099"
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
    "url": "assets/js/19.f41f9428.js",
    "revision": "e51308734ef3353d2249735668b4797e"
  },
  {
    "url": "assets/js/2.f0d7d4dd.js",
    "revision": "ebd869933af8ee7b84e1c279429c9d7f"
  },
  {
    "url": "assets/js/20.a5bb4229.js",
    "revision": "6241dcd1c5ff0249cd96c2b707d2a3ca"
  },
  {
    "url": "assets/js/21.9e4f7d80.js",
    "revision": "c868abc1f099e4b576c2a3e3ad8d9f7f"
  },
  {
    "url": "assets/js/22.eee8dee0.js",
    "revision": "ef3137c35be9f51a28935371c7318682"
  },
  {
    "url": "assets/js/23.abe83d9b.js",
    "revision": "8ad4babd4a265d5f48c0cc0cf1f1ddc6"
  },
  {
    "url": "assets/js/24.0df277df.js",
    "revision": "ee30cc249cc1927aa7bbcf291fd31e3c"
  },
  {
    "url": "assets/js/25.b57c9d5c.js",
    "revision": "74a7c012ea4a948b23e0ec8b171dae67"
  },
  {
    "url": "assets/js/26.5e1d55a5.js",
    "revision": "90d4ccca4e77decd337c3add68c862f4"
  },
  {
    "url": "assets/js/27.ec988566.js",
    "revision": "267f9ea7809eaa883be297c0467a70fb"
  },
  {
    "url": "assets/js/28.839936e3.js",
    "revision": "a0725501008226b9b9b087cb127d7bdd"
  },
  {
    "url": "assets/js/29.fd27cc81.js",
    "revision": "bdd9caecd014d70dda82c9f3c1dca28b"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.8a016fcc.js",
    "revision": "6e787240f3b661c2afffebbcba7eb9de"
  },
  {
    "url": "assets/js/31.e09ed317.js",
    "revision": "beb4fa41a517258056cbe2f3f3a31edd"
  },
  {
    "url": "assets/js/32.eb421889.js",
    "revision": "b51d4e574c4477f3433c8882a2544e43"
  },
  {
    "url": "assets/js/33.03d8c69d.js",
    "revision": "b8a11b8e2ccb469a2c58fa1c560fd8c8"
  },
  {
    "url": "assets/js/34.44c5c9a7.js",
    "revision": "d55fb44db4d37655ea99f18736a151ca"
  },
  {
    "url": "assets/js/35.980530c5.js",
    "revision": "0f8a1bd39b9e36b3b54ea94c178e33cf"
  },
  {
    "url": "assets/js/36.0c2cac14.js",
    "revision": "a9996928d354c2c551ad9aaf496b980b"
  },
  {
    "url": "assets/js/37.b24d8296.js",
    "revision": "dc6c3c89478bbab80d2dcd15a59a9936"
  },
  {
    "url": "assets/js/38.ff88fe6f.js",
    "revision": "374a7b92be2d0ca24c1e6e5d1f2456e7"
  },
  {
    "url": "assets/js/39.2e154937.js",
    "revision": "687b4fb80520a6acc9d24dd31ec306f9"
  },
  {
    "url": "assets/js/4.1e2987ea.js",
    "revision": "1e44e2db1ecdfe886d087613381d0c3e"
  },
  {
    "url": "assets/js/40.6e3f107c.js",
    "revision": "28f8fe9520126c0c4d25d11464f0d5b6"
  },
  {
    "url": "assets/js/41.2540835b.js",
    "revision": "0cbcbccc9b1bafc027ec78708c4e44f8"
  },
  {
    "url": "assets/js/42.46dbbd7c.js",
    "revision": "d6456721354b9a67346ea6cf0752aed5"
  },
  {
    "url": "assets/js/43.27f1ab8e.js",
    "revision": "9c6935ed0d081844ae61f7425c3b3631"
  },
  {
    "url": "assets/js/44.a80c1ffa.js",
    "revision": "5462ea292108217796e1b15625ad4ea2"
  },
  {
    "url": "assets/js/45.2b12d1ae.js",
    "revision": "1d3cb334f55fcbcf21e1b23d3bec1b71"
  },
  {
    "url": "assets/js/46.a2ea004e.js",
    "revision": "b1b00cf16bb9d27a85d40a6e3aca80ba"
  },
  {
    "url": "assets/js/47.9f3144ff.js",
    "revision": "f2887dfcde70bcd9a3e8e18327fdd16d"
  },
  {
    "url": "assets/js/48.f41a4483.js",
    "revision": "f44016b2761ce137caa0e454e3b4e09c"
  },
  {
    "url": "assets/js/49.7762aa66.js",
    "revision": "6239ee6f60ca6a617b57a152519fbb4d"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.0fdb11ad.js",
    "revision": "74488e8e1a9fc68b5addd18b44650ece"
  },
  {
    "url": "assets/js/51.8a294e6f.js",
    "revision": "929f582be917e1c450076b7db63b432b"
  },
  {
    "url": "assets/js/52.4dbda1af.js",
    "revision": "0a3f2afbc12dd9db198a6687cf4e8866"
  },
  {
    "url": "assets/js/53.ef28be23.js",
    "revision": "90e65ddbfc26b853c16e26de480c6c97"
  },
  {
    "url": "assets/js/54.f35080be.js",
    "revision": "b12f30d80fa70774a90df62588f83917"
  },
  {
    "url": "assets/js/55.b692fb70.js",
    "revision": "c00288076cfa664f80f756cb77b3886e"
  },
  {
    "url": "assets/js/56.f22e7c87.js",
    "revision": "6eefc4b92181485128b0d13505824cc6"
  },
  {
    "url": "assets/js/57.e86b1418.js",
    "revision": "f1b3e89adc9aa1695a7c095efbf0e38a"
  },
  {
    "url": "assets/js/58.95f03fe3.js",
    "revision": "290277bbe5f86449b5876bef5bab3a13"
  },
  {
    "url": "assets/js/59.87f157d4.js",
    "revision": "beb952b3fd479dcceceb75136dab5917"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.c2fffaba.js",
    "revision": "7b1b180bade7c9bcf5fc5013c8c4b277"
  },
  {
    "url": "assets/js/61.294f348c.js",
    "revision": "d0a40ef42db948b1ddd9eff38ca4230e"
  },
  {
    "url": "assets/js/62.b72821b8.js",
    "revision": "2cf7e1ed09c5d15c514d0bbfb583643a"
  },
  {
    "url": "assets/js/63.db97f343.js",
    "revision": "a4819db9684fbcab10cc39e98e1abb34"
  },
  {
    "url": "assets/js/64.e9efcdee.js",
    "revision": "cdfe69f5d6b6bb7523fa9d766a64395c"
  },
  {
    "url": "assets/js/65.8bc90804.js",
    "revision": "454a22c8d0e237f669e1a0e49b2a786b"
  },
  {
    "url": "assets/js/66.db26f537.js",
    "revision": "e79d1e35f2e20793fa8c3bc7eb891e52"
  },
  {
    "url": "assets/js/67.f6fdcb71.js",
    "revision": "b5d35873978e15715d885f04c3451bbc"
  },
  {
    "url": "assets/js/68.3d5f8112.js",
    "revision": "4960e61c568a3dbcdf4a444e125bc9e5"
  },
  {
    "url": "assets/js/69.0c9bbaad.js",
    "revision": "628423ddd74f2082f77207404bb26aa7"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.9af51536.js",
    "revision": "1de197743252e65ecdd8c1511a79a826"
  },
  {
    "url": "assets/js/71.0d455c35.js",
    "revision": "3440510ca677a67a7a57e15d48b7fdfb"
  },
  {
    "url": "assets/js/72.cbdf55dd.js",
    "revision": "78579f8a8ae55ebf3e94aa207132b4d4"
  },
  {
    "url": "assets/js/73.426d94d6.js",
    "revision": "11d7dd43fe2609ee940ba2b4a40eb716"
  },
  {
    "url": "assets/js/74.f77cf0a4.js",
    "revision": "a9cbdbc37328bf801b14ad0ec9722511"
  },
  {
    "url": "assets/js/75.c0088303.js",
    "revision": "49444353b64e80150d5ec71c285cf091"
  },
  {
    "url": "assets/js/76.813c47f0.js",
    "revision": "4de9efb019602a868d9ca611ee8ecc54"
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
    "url": "assets/js/app.db5d33a9.js",
    "revision": "99cd1b6b2c40ef9246c9433148fb1437"
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
    "revision": "2f2c9b45e0009bfcb32465a3e2c68c86"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "e215209c08fd8a31d403835aac3abbda"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "78a1eeb757312d5f98536fd3672566e7"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "26d7f6622befcf0d2128bfd031c05216"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "c011d0982ce3b006cdc6197887c2edec"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "ef20b7482d0637ab8927cd55f095dfbe"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "0ca4ede4c63997d2c5b835175f4d9d06"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "22187c3f8020058f4651ba4bb5bcf749"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "fb1df11cc49417ff374c16090f81e951"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "cd2daeffeeb96ceca2a55669224fbe86"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "1f5169e2b3d381e26cd06b58a040eebd"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "0181b216a28f3bcc6db2c9ca13210616"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "ca9629f9577dcfc0650a3bc83c23503e"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "e68108feb8bccdfce05796c719e8d464"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "3823a1dddb864b65e6b1ce8c6fcada2c"
  },
  {
    "url": "HtmlAndCss/pointSummary.html",
    "revision": "4efc0b252458c9db9709a3070c3cce79"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "673fc444740db340c251b0b288c7547a"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "1640d1a363929d1ef819cbb6314d8f19"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "4b151edd3ca6d3a07614d9fddc197048"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "d7def3c323518e590f5738f4688061a9"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "721df0451af71c234f69a5b840b13709"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "dd36cab9f02cc617ec892b2a0551fb92"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "5e3113eb9806fb97ce0eb8612aa0f637"
  },
  {
    "url": "HtmlAndCss/veeValidateSummary.html",
    "revision": "68f902639b6aa1a178885f6ac8a03ea8"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "b4a79842527ce6c115192e846455e9d0"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "4292286cb4ee718447c2172d464095a6"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "db0dce6ddaa6836d83d3e7758121f536"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "131f7703b31984011c8454cb2f8f13d1"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "47cc95c0587409b295947ca3d5f2b698"
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
    "revision": "e7731fa601e18ae83f3768b4c7601b00"
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
    "url": "other/auto_watch_video.html",
    "revision": "7efb5220817ce68c115ecf88a4c88264"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "2de12243f9b4c52484989008b00e39a7"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "a3c3fd4c2f08b7f76e5027600c7ae1e6"
  },
  {
    "url": "other/index.html",
    "revision": "aa26eca52fd699cdb8674a695b689637"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "2c73f99658104f3b55af7b0cc2937154"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "b9f0947f98fdd3decb95c8a024c8429a"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "cf7cae3912ec858137dba18d11abcf8a"
  },
  {
    "url": "other/steam_community.html",
    "revision": "7c6fe9a306cb4be0dd4ef9545fc4c102"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "e25480925b9bb013c0bc0d3c695ae87a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "133f18274dd84e7ec6798f553758aa1a"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "bd80af633d5867cc222d73fcac9d2ba2"
  },
  {
    "url": "source/devOps.html",
    "revision": "1bb8bb898ff36bece0709f60a8ce4f7a"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "0d914415f7fee568b87990b4972289bd"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "72167f3e155a794db1938c4d44447cd9"
  },
  {
    "url": "source/index.html",
    "revision": "b7ea960dddc935d3ce4af784a4e86781"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "1511616551fbe687486dad295cb9a4df"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "c095263094f0dab5825f93a48ec0a7b0"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "6e11175b231032b8e332199015c6b919"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "ed5d5efc9ac211e33e425cf02f35cbbf"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "912293658d8bbe60e79f25212e3324a2"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "ebb0cdc81e2a55fbd6a5541520d39e5c"
  },
  {
    "url": "source/tools.html",
    "revision": "1fea67818dce5d4e87eef2798850921a"
  },
  {
    "url": "source/vscodePlugins.html",
    "revision": "184ffdd2ac84d7d2548f6f229ed9e6fd"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "bbbc1480b3c63ba4942ca6e2b8811d81"
  },
  {
    "url": "source/webGame.html",
    "revision": "c821f8a54cd7ffd6cecb9a0bf0b149c9"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "0ce794c8d418f769f0e4beeaa8064f67"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "e3a5d3c6e51dece1f35c7827cd7eaea6"
  },
  {
    "url": "subtitle/index.html",
    "revision": "4e4957d3835244835f9e4c73d07cba9a"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "e66ef07f579a0b92f7ca51562786ab2f"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "e0754e7ed5336c8b0a8bfd1406e01213"
  },
  {
    "url": "subtitle/small.html",
    "revision": "10e67a3b79f018f0d1a8dec27ad4d5ed"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "aec8f45370fc714a93ed023ae671599b"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "96afe4b1ad9be9910b58b7dc2b0d84d7"
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
