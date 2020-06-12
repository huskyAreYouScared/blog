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
    "revision": "e7eb74d59e9feb4bbc0d6c279edc4d1d"
  },
  {
    "url": "algorithm/arraySort.html",
    "revision": "bb63d04827c632d6aedd11f2e0e6b466"
  },
  {
    "url": "algorithm/binarySearch.html",
    "revision": "e2915c870b6aed79a2134a488a39407f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0e1c570bbe5723080ebde0384c3f14c2"
  },
  {
    "url": "algorithm/quickSort.html",
    "revision": "ef27015396b863bb9006012e06110e4c"
  },
  {
    "url": "algorithm/selectionSort.html",
    "revision": "1e218b14098a5428d2b5ed03ee411212"
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
    "url": "assets/js/20.bf540747.js",
    "revision": "f8a30891bdd84f8ef36f5971d8185ff3"
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
    "url": "assets/js/24.563a94d3.js",
    "revision": "05276ddb0af83d1e279bf954a1c4fdcf"
  },
  {
    "url": "assets/js/25.4355b2b3.js",
    "revision": "3e27772d3b7ff60b1825383d0ebc32fa"
  },
  {
    "url": "assets/js/26.ad174e1f.js",
    "revision": "36e430640a41f914f7a1ca3f3221ff56"
  },
  {
    "url": "assets/js/27.cb8d88eb.js",
    "revision": "4a846447029b09c22b18a8ff9418a67a"
  },
  {
    "url": "assets/js/28.617ae0cb.js",
    "revision": "178b2565989ffc62efc1f01f176a5385"
  },
  {
    "url": "assets/js/29.5cc974a5.js",
    "revision": "4da34c134f2758c44ddf40654fa723b9"
  },
  {
    "url": "assets/js/3.1faefed4.js",
    "revision": "3517d6abbfb066684b64e3e9b7466ed4"
  },
  {
    "url": "assets/js/30.f874a657.js",
    "revision": "8a758d73eb51a82a474e144555da3c0d"
  },
  {
    "url": "assets/js/31.9de82127.js",
    "revision": "56185fbf7399358d4642218cdac8b9cb"
  },
  {
    "url": "assets/js/32.4f1ab43b.js",
    "revision": "97a29795dee11d12289f674a65349175"
  },
  {
    "url": "assets/js/33.f0d11549.js",
    "revision": "200c751f2fda482bd1585b5aa0d89da0"
  },
  {
    "url": "assets/js/34.a5059d1c.js",
    "revision": "d08bd9236bbe1570733142a820546797"
  },
  {
    "url": "assets/js/35.23d54c79.js",
    "revision": "d215f390967229a17c7863a591fdb477"
  },
  {
    "url": "assets/js/36.bd0375d4.js",
    "revision": "7e114e46dc37f3a8674656705ebc93d8"
  },
  {
    "url": "assets/js/37.750c803e.js",
    "revision": "189b3d1a4ff092ccd612bbba71354489"
  },
  {
    "url": "assets/js/38.e2bd5bd7.js",
    "revision": "bf4466d6837d1f16e7e82b5cc4d62cd9"
  },
  {
    "url": "assets/js/39.02ec3a23.js",
    "revision": "7a131919bd3ba6e1a827a7b3c66383af"
  },
  {
    "url": "assets/js/4.f113974d.js",
    "revision": "637475a2450a10b8f71256beb30f12d6"
  },
  {
    "url": "assets/js/40.babf10a9.js",
    "revision": "174e6caf60cfedadd17d9ee51a2e9c3e"
  },
  {
    "url": "assets/js/41.50e8ccd8.js",
    "revision": "21eca8957857f04191aa2a94059cefef"
  },
  {
    "url": "assets/js/42.03ec5802.js",
    "revision": "1c68076cd5ad2f351fb207ff8e7d76cd"
  },
  {
    "url": "assets/js/43.b0263bd4.js",
    "revision": "f47de9f222571ddf33d755d97305554c"
  },
  {
    "url": "assets/js/44.c4915f4c.js",
    "revision": "c22ef861a1c190ed66b57a708cc32d3a"
  },
  {
    "url": "assets/js/45.ace576df.js",
    "revision": "2fb7878b3fc9f043051f6bf31842cb11"
  },
  {
    "url": "assets/js/46.51133000.js",
    "revision": "00bea055aa7b3281c65fc079d3f78ba4"
  },
  {
    "url": "assets/js/47.490ba125.js",
    "revision": "e6f01b101b5993023b1871ca9240da56"
  },
  {
    "url": "assets/js/48.787e9f19.js",
    "revision": "07da38dcf1a82d6af1667fb9aa4eac02"
  },
  {
    "url": "assets/js/49.eb2f03c7.js",
    "revision": "69804618f8e134b13c4aa8d30a17ea96"
  },
  {
    "url": "assets/js/5.c71d2297.js",
    "revision": "af2479df65068fde60299c4f7001afa9"
  },
  {
    "url": "assets/js/50.6d1c023e.js",
    "revision": "0e931fb731309c140ba7c2f70ce760cc"
  },
  {
    "url": "assets/js/51.35e6d585.js",
    "revision": "418c0746738bb6b15f452f165047ea65"
  },
  {
    "url": "assets/js/52.889557c3.js",
    "revision": "cb7dd380d5f68fd0784b7ac9b9812215"
  },
  {
    "url": "assets/js/53.b71e1628.js",
    "revision": "f453d4644a52befdb2dd136b919ac00f"
  },
  {
    "url": "assets/js/54.2bcd6c55.js",
    "revision": "d3a8f01f49d427a949b50d7788f910dc"
  },
  {
    "url": "assets/js/55.1d626956.js",
    "revision": "f8889627a9320dfb65a4220b11dde78a"
  },
  {
    "url": "assets/js/56.11820c64.js",
    "revision": "68d9e494be01dd29ed9a368232c79575"
  },
  {
    "url": "assets/js/57.8ce06c11.js",
    "revision": "828c6abfb2d150423ad2cbb90cd70767"
  },
  {
    "url": "assets/js/58.79810120.js",
    "revision": "232828ef424813e8c4e252ca100328a2"
  },
  {
    "url": "assets/js/59.4bd1020c.js",
    "revision": "d39d56905b823e437d5699142b10ed1d"
  },
  {
    "url": "assets/js/6.d7ede57b.js",
    "revision": "597c384a9c20e3317b4b35c783d6d9a8"
  },
  {
    "url": "assets/js/60.c7b2106f.js",
    "revision": "2ff1f4c97c7471b400d87a418939d724"
  },
  {
    "url": "assets/js/61.fd1c6721.js",
    "revision": "c2d953209c0e43d2d6423a1e38c430b6"
  },
  {
    "url": "assets/js/62.0e282263.js",
    "revision": "baa43727ff6f3c7fd31653bf16a6390e"
  },
  {
    "url": "assets/js/63.9bf2e008.js",
    "revision": "aea823c1811bcb15e608901cc9f7ddaa"
  },
  {
    "url": "assets/js/64.dfe612ca.js",
    "revision": "bebe4d595f67d4e4e966d035f4cd1126"
  },
  {
    "url": "assets/js/65.4d91653c.js",
    "revision": "f68b0519cd74d2c0b788a2c125456cf9"
  },
  {
    "url": "assets/js/66.3ce309f6.js",
    "revision": "e218cc6290fef1c5ffcd251e96ac5be0"
  },
  {
    "url": "assets/js/67.badcf5e5.js",
    "revision": "c7ddd0731d1ccdaeaaf8a3b0694f89cc"
  },
  {
    "url": "assets/js/68.f80c8b79.js",
    "revision": "6b0b16b648540432f550690a1a91e5c2"
  },
  {
    "url": "assets/js/69.6b78c6fe.js",
    "revision": "8f4f94a5a0ec07de13fc185c777b5fe7"
  },
  {
    "url": "assets/js/7.7d3815a0.js",
    "revision": "c2a8c6fd30f3daaa4832115380ac54fd"
  },
  {
    "url": "assets/js/70.0415cdf6.js",
    "revision": "206c66349a0aedeb6b601ff61fa6f14f"
  },
  {
    "url": "assets/js/71.5f24af2b.js",
    "revision": "ad3ee50f3bcb911261ea24d0c3d1f616"
  },
  {
    "url": "assets/js/72.e8f4b862.js",
    "revision": "6c9c35572f2fb060363c967aa0ba12e8"
  },
  {
    "url": "assets/js/73.aeb40494.js",
    "revision": "697fdf7be5cab9a3386e449b5aacde2a"
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
    "url": "assets/js/app.147fd258.js",
    "revision": "0dff803e809dc01f23693c5f5b05618c"
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
    "revision": "c83d71acd226d3989b7dac71b4577e6e"
  },
  {
    "url": "HtmlAndCss/CLI.html",
    "revision": "de09bcabd8bbb9432ee01cd49791c587"
  },
  {
    "url": "HtmlAndCss/compatibility.html",
    "revision": "a60eb48059ec3ea33d310bd1322da9a5"
  },
  {
    "url": "HtmlAndCss/css.html",
    "revision": "d884d970b68905ca609a59799f2d99ed"
  },
  {
    "url": "HtmlAndCss/elementUISummary.html",
    "revision": "d9bdedd6d35a61d4a23712e2c24de281"
  },
  {
    "url": "HtmlAndCss/fontStyle.html",
    "revision": "a1a75a3cabcf6946b0b0134e7bbc91f3"
  },
  {
    "url": "HtmlAndCss/frontEndMonitoring.html",
    "revision": "f97a18f015bd005f8c3f33bcd75556c0"
  },
  {
    "url": "HtmlAndCss/H5Show.html",
    "revision": "086aaea71d69e926b61fa67b31b3a9c6"
  },
  {
    "url": "HtmlAndCss/imgCrossDomain.html",
    "revision": "830b6e27ef1359468c0aee5e824a39b1"
  },
  {
    "url": "HtmlAndCss/index.html",
    "revision": "6b15876ff3277edbe1d6fdaa7e0fdc3f"
  },
  {
    "url": "HtmlAndCss/inputCapture.html",
    "revision": "d5e294e01f6151067356afc2a9c4b2de"
  },
  {
    "url": "HtmlAndCss/jestSummary.html",
    "revision": "effc530ae4e36acff1097851aedddd4a"
  },
  {
    "url": "HtmlAndCss/microAndMacro.html",
    "revision": "659b3d63e1b0ec7af240b2484fdbd0f6"
  },
  {
    "url": "HtmlAndCss/moduleSummary.html",
    "revision": "d7bb7d91eefa76b69978e42b8fd81431"
  },
  {
    "url": "HtmlAndCss/playFavicon.html",
    "revision": "6ab1b1997876c1408391c3a36180f932"
  },
  {
    "url": "HtmlAndCss/proton.html",
    "revision": "9b6f76b1ada23948bde53024f99a2110"
  },
  {
    "url": "HtmlAndCss/qrcodeDemo.html",
    "revision": "7bb32a92659adc81e7270b04d80ac611"
  },
  {
    "url": "HtmlAndCss/regExpSummary.html",
    "revision": "918228aaac120826c87a137c8bca3d48"
  },
  {
    "url": "HtmlAndCss/stringSummary.html",
    "revision": "2b3d785a91d1e044d3f9841a27310de0"
  },
  {
    "url": "HtmlAndCss/tapable.html",
    "revision": "0f6e2599b408bce89f5be2ce683b179b"
  },
  {
    "url": "HtmlAndCss/templateLiterals.html",
    "revision": "e78c3fbf259c0dff07dabe50d08729d9"
  },
  {
    "url": "HtmlAndCss/unixTimeStamp.html",
    "revision": "08421b0084d582c2630f3dc2a456a71c"
  },
  {
    "url": "HtmlAndCss/vueTsSummary.html",
    "revision": "d98fee993ddec0ee59bdafa0e5cd9d12"
  },
  {
    "url": "HtmlAndCss/webpackConfig.html",
    "revision": "f655c0192bb1c4a22396c44f4068b96a"
  },
  {
    "url": "HtmlAndCss/webpackLoader.html",
    "revision": "9226564130db8b529654e2c062f0ed4d"
  },
  {
    "url": "HtmlAndCss/webpackPrinciple.html",
    "revision": "b7e7d934c8c54cc3929695852d42bc0c"
  },
  {
    "url": "HtmlAndCss/writePromise.html",
    "revision": "142a23da5ef0624a7a14a1e42855f24b"
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
    "revision": "e962dc53944b57b29cdb9d3a29b5f88e"
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
    "revision": "0b8b1a8e58ae95bdfeac00be08eb1f9c"
  },
  {
    "url": "other/conventional_changelog.html",
    "revision": "ce162394fe1fb5199741a4b43a92efe0"
  },
  {
    "url": "other/dockerSummary.html",
    "revision": "17328701833dd1d84f4a664b3e4844d6"
  },
  {
    "url": "other/index.html",
    "revision": "40b84927030d75dac4e63150cf6ff5e9"
  },
  {
    "url": "other/mac_npm_error.html",
    "revision": "09ec3350f5af6409c15610ce737cc268"
  },
  {
    "url": "other/mac_terminal.html",
    "revision": "1eda7218ce468cfbb7506e92ad893e66"
  },
  {
    "url": "other/nginxSummary.html",
    "revision": "0a6a4639a33a36398531c156439930e5"
  },
  {
    "url": "other/steam_community.html",
    "revision": "5dcaa18eb9697e9bceafd9382ec56d76"
  },
  {
    "url": "other/travisSummary.html",
    "revision": "3bffa65cf44f512e434cb4c75bb2655a"
  },
  {
    "url": "other/vuepress_build.html",
    "revision": "2acf19d7a10e42d4763efede36f6e59e"
  },
  {
    "url": "source/autoCodeing.html",
    "revision": "aa7a7a849e74f0f27d700018f6e3a607"
  },
  {
    "url": "source/devOps.html",
    "revision": "5d8d36d41cdf24ff7b9dcd16d65903cc"
  },
  {
    "url": "source/frontDocument.html",
    "revision": "457657ded09579c81c9d9e60ef6e14d2"
  },
  {
    "url": "source/httpProtol.html",
    "revision": "d4a71c965c7f20ccd0906e6ee3f57fa5"
  },
  {
    "url": "source/index.html",
    "revision": "02e32a5668243ef475d39ee3e43e3d3f"
  },
  {
    "url": "source/interestingSite.html",
    "revision": "c108be7b76ca5768ee0c65d62f22af31"
  },
  {
    "url": "source/jsPlugins.html",
    "revision": "df00cabc73e3c1428aa3058986666d22"
  },
  {
    "url": "source/musicSummary.html",
    "revision": "94b5f9204500f2e10f845c8ec7c5cb35"
  },
  {
    "url": "source/npmPlugins.html",
    "revision": "f3c3bb52dc468ce3468e6989e677a1d7"
  },
  {
    "url": "source/operationTutorial.html",
    "revision": "67c8e374f5c16e22e71b3c759b93632e"
  },
  {
    "url": "source/sourceSummary.html",
    "revision": "e04c00145106c2b1ebd05b5f17cc735b"
  },
  {
    "url": "source/tools.html",
    "revision": "0b7fff7deefd2649359eff84f079728f"
  },
  {
    "url": "source/vueEcosphere.html",
    "revision": "bfb3788dd95129f87c2dbf2a2c6aa8a2"
  },
  {
    "url": "source/webGame.html",
    "revision": "5a3a4839030cb63996f06e92b23b1e9e"
  },
  {
    "url": "subtitle/according-platform-build.html",
    "revision": "d858c6801926e64a1e3a5e38a8166306"
  },
  {
    "url": "subtitle/electronDialog.html",
    "revision": "86760fc9a81000c19bd9f3d7890dd6a8"
  },
  {
    "url": "subtitle/index.html",
    "revision": "77146385529fb0e4c79fb987a482af5b"
  },
  {
    "url": "subtitle/InitProject.html",
    "revision": "e0c855ace3cfeb0ec0fc4cf22fc4a9b3"
  },
  {
    "url": "subtitle/mac_windows.html",
    "revision": "4ebaa98e623536e90a87ce452dc64e11"
  },
  {
    "url": "subtitle/small.html",
    "revision": "a4cf0f9d01648cf74ea6462b57f401ed"
  },
  {
    "url": "subtitle/user-custom-install.html",
    "revision": "7a2c63f713cc40a83ab8d0c363a67d87"
  },
  {
    "url": "subtitle/vueElectronInitSummary.html",
    "revision": "2ff0c07d335edfbfbcfba6d2b942fc1e"
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
