'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6c4b881e6332c84e4696cfc0f4eba148",
"bryansongwebsite_prod/version.json": "6c4b881e6332c84e4696cfc0f4eba148",
"bryansongwebsite_prod/index.html": "f1c07d809b6eb816ce8c18526f52fcfa",
"bryansongwebsite_prod/CNAME": "844a3ecd03b2f5b57db782ba2abce60c",
"bryansongwebsite_prod/main.dart.js": "b54c41e4b0a8d3cbc6cc3978ce8cfbf2",
"bryansongwebsite_prod/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"bryansongwebsite_prod/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"bryansongwebsite_prod/icons/version.json": "6c4b881e6332c84e4696cfc0f4eba148",
"bryansongwebsite_prod/icons/index.html": "d7d3b2d9b657e9a8350ba2c78cc3a0ec",
"bryansongwebsite_prod/icons/main.dart.js": "98e57d79fecefc5d44a62bb9d7eb677a",
"bryansongwebsite_prod/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"bryansongwebsite_prod/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"bryansongwebsite_prod/icons/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"bryansongwebsite_prod/icons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"bryansongwebsite_prod/icons/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"bryansongwebsite_prod/icons/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"bryansongwebsite_prod/icons/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"bryansongwebsite_prod/icons/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"bryansongwebsite_prod/icons/manifest.json": "83fc19775dbb847cbd1dbff70e3372eb",
"bryansongwebsite_prod/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"bryansongwebsite_prod/icons/assets/AssetManifest.json": "9d8eb9ca3dd85f5750ce343f673f2369",
"bryansongwebsite_prod/icons/assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"bryansongwebsite_prod/icons/assets/FontManifest.json": "24818ffa5b47001c3a5dd89c0f408e5d",
"bryansongwebsite_prod/icons/assets/AssetManifest.bin.json": "375974e74919b420716e6d83cff6f726",
"bryansongwebsite_prod/icons/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"bryansongwebsite_prod/icons/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"bryansongwebsite_prod/icons/assets/AssetManifest.bin": "188822fa061f72f855433f9b6532e2f3",
"bryansongwebsite_prod/icons/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"bryansongwebsite_prod/icons/assets/fonts/CourierPrime-Regular.ttf": "fba4686ed1d1b4ef05ab14db78805dbe",
"bryansongwebsite_prod/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"bryansongwebsite_prod/icons/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"bryansongwebsite_prod/icons/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"bryansongwebsite_prod/icons/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"bryansongwebsite_prod/icons/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"bryansongwebsite_prod/icons/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"bryansongwebsite_prod/icons/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"bryansongwebsite_prod/icons/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"bryansongwebsite_prod/icons/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"bryansongwebsite_prod/icons/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"bryansongwebsite_prod/icons/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"bryansongwebsite_prod/manifest.json": "83fc19775dbb847cbd1dbff70e3372eb",
"bryansongwebsite_prod/.git/ORIG_HEAD": "f97a585b0a95538526301f46bc45a2dc",
"bryansongwebsite_prod/.git/config": "4074d63bb610b2592bebc91ea45e7503",
"bryansongwebsite_prod/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"bryansongwebsite_prod/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"bryansongwebsite_prod/.git/objects/58/98499ee6d8121336b687f6dca89f741ddd3f17": "4921f4cb877bfa5baba96bfb17414658",
"bryansongwebsite_prod/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"bryansongwebsite_prod/.git/objects/9d/fea92fdd6694a924194027f47d6554fb75c333": "4e7286c58515ee308c0f41edf0c8b0ea",
"bryansongwebsite_prod/.git/objects/02/58e9ec9443281f8df43876a549443495b96d80": "ec2ce7f651572133996a54aca05b7af8",
"bryansongwebsite_prod/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"bryansongwebsite_prod/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"bryansongwebsite_prod/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"bryansongwebsite_prod/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"bryansongwebsite_prod/.git/objects/bd/cf236fada418d9645e1e714bd502d1feab566b": "8ae627794e2f2426821932cedee8db74",
"bryansongwebsite_prod/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"bryansongwebsite_prod/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"bryansongwebsite_prod/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"bryansongwebsite_prod/.git/objects/f2/bbf824f047fbfaa6470225afa201024e1bfe46": "e1a229a45a09c3e51b4c19e6e60dc770",
"bryansongwebsite_prod/.git/objects/f2/34ee7b3f7f9d18cfe456582649a0645cc1d1ac": "0ccac709f0223328efc256f2db308fe3",
"bryansongwebsite_prod/.git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
"bryansongwebsite_prod/.git/objects/ec/82c930ac68522b972b20e34257c6fe4b50da32": "3cb22131e6d3b11ed845165d04a57482",
"bryansongwebsite_prod/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"bryansongwebsite_prod/.git/objects/27/091e2d46df48c1f446d7f79ca394e1b8cb877f": "25204033a39418d0f32f9373f149f484",
"bryansongwebsite_prod/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"bryansongwebsite_prod/.git/objects/74/e3cfd944b3bb19edf6ea4864b6bab4e7133d04": "2deb45e91cd837eb376cbb656398dfd7",
"bryansongwebsite_prod/.git/objects/17/1b2b23e0a2c09868f231009e23506270c7d0cd": "606282cea304022c8a2c86f73752d27e",
"bryansongwebsite_prod/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"bryansongwebsite_prod/.git/objects/21/6c779f98c7b4dd4b8425f709f17324e5cfe8a2": "4a4d70a22012529bd0c8fc873fcde2c8",
"bryansongwebsite_prod/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"bryansongwebsite_prod/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"bryansongwebsite_prod/.git/objects/6e/06781865a33f841ed47602dbee535201948712": "5a8711b30f574bf70c10ab84673ac07f",
"bryansongwebsite_prod/.git/objects/36/eb79eb9f40923f98bd559cb20e3632b228f684": "3b7a31ebaf6c5b3829c0928a1c191282",
"bryansongwebsite_prod/.git/objects/98/09c5800e9964ea244dd2f5f53eba20404d4991": "8e6ec6929fd68a6137a351f573874dd1",
"bryansongwebsite_prod/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"bryansongwebsite_prod/.git/objects/30/ff1ba5f47590f25bec2126a30028f87025fa8c": "e1d1bc5ebfde26dcafbfa6b5bb3197a6",
"bryansongwebsite_prod/.git/objects/39/dc869729534cc7e6d122d9e4c9c3533d2f6065": "f193f7fc70f7dfdd66ef3a027ce6fdc4",
"bryansongwebsite_prod/.git/objects/d3/4b684ae034a71688ade417599fae3163dedc0a": "fa4002365d3f609aac587ee5c9d79f34",
"bryansongwebsite_prod/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"bryansongwebsite_prod/.git/objects/a7/632ee63cf1814d5369c6ed4f71422e46aa1621": "1a051088deb7b405c2e687b5565c1b84",
"bryansongwebsite_prod/.git/objects/b6/c3fff44f120e88904a0fe9c08c4061a31adefb": "86fc308d46319c2fbe850f1fb752fbf5",
"bryansongwebsite_prod/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"bryansongwebsite_prod/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"bryansongwebsite_prod/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"bryansongwebsite_prod/.git/objects/a1/4a0df7922591a21ca2f92cfc370f08bfa34b46": "8fa9662275193d44f546d1e511a753df",
"bryansongwebsite_prod/.git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
"bryansongwebsite_prod/.git/objects/cc/c00396c4b8f4cfe808d3c5aa63df66899e65ff": "8fbbdc4fa2cc444bc4cc2854d65a57c0",
"bryansongwebsite_prod/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"bryansongwebsite_prod/.git/objects/f9/c8e93c241765f1a67286183936f58121a4661e": "4c19545f690f1e2a247e1300662a9f07",
"bryansongwebsite_prod/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"bryansongwebsite_prod/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"bryansongwebsite_prod/.git/objects/2d/049da944fa7fc3ba887329669f8dcd5735e66b": "0067c18ed8a4e46e2e461258a258e07b",
"bryansongwebsite_prod/.git/objects/2d/f5203a22821c6b1fb173991214738e54171247": "450a355f7c7bf6695133b4fac258ec2b",
"bryansongwebsite_prod/.git/objects/4a/f1ff54c5e2f54238a0e2013cb9a37e3130e4ca": "6fd4c8c141185bfa714642c0e64ead8d",
"bryansongwebsite_prod/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"bryansongwebsite_prod/.git/objects/24/bb6e0c83e5bef905b2138b291b5e85fd5bccef": "d2da08bd3c8065f877aaae4087a363ff",
"bryansongwebsite_prod/.git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
"bryansongwebsite_prod/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"bryansongwebsite_prod/.git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
"bryansongwebsite_prod/.git/objects/1c/630e8891b43c520e365b7329156b6c4b9d6b9a": "3754891b2a785f72fc3f35e78a1aaa40",
"bryansongwebsite_prod/.git/objects/82/a159118144b4123a5728da3c5241e520687400": "e4c2506cc3cb0ab778b544d30170faa5",
"bryansongwebsite_prod/.git/objects/82/d174c8d3cdffc819f4c9e1f398a065fdca9175": "440e1c1dff2fdf75af55ceeecec6e1a9",
"bryansongwebsite_prod/.git/objects/2b/aa7f9b79f7f01aae0527401f911952ad62ac35": "ed5ade37b61942bb1d40ec3ba99f2607",
"bryansongwebsite_prod/.git/objects/7a/ccb344fe2e9bb11a57590d8217e0532f31c3ae": "bec6332aa1a063c87537bb3f3020b54e",
"bryansongwebsite_prod/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"bryansongwebsite_prod/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"bryansongwebsite_prod/.git/logs/HEAD": "24b5cd727a04c931019717ef68097e5f",
"bryansongwebsite_prod/.git/logs/refs/heads/main": "24b5cd727a04c931019717ef68097e5f",
"bryansongwebsite_prod/.git/logs/refs/remotes/origin/HEAD": "1275bd5b69702138eb5bb4b2250193c1",
"bryansongwebsite_prod/.git/logs/refs/remotes/origin/main": "18ebd3961cca96fb91bda4f2211d0069",
"bryansongwebsite_prod/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"bryansongwebsite_prod/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"bryansongwebsite_prod/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"bryansongwebsite_prod/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"bryansongwebsite_prod/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"bryansongwebsite_prod/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"bryansongwebsite_prod/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"bryansongwebsite_prod/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"bryansongwebsite_prod/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"bryansongwebsite_prod/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"bryansongwebsite_prod/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"bryansongwebsite_prod/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"bryansongwebsite_prod/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"bryansongwebsite_prod/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"bryansongwebsite_prod/.git/refs/heads/main": "c98e8abaf9053adb425c852cc316f6f6",
"bryansongwebsite_prod/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"bryansongwebsite_prod/.git/refs/remotes/origin/main": "c98e8abaf9053adb425c852cc316f6f6",
"bryansongwebsite_prod/.git/index": "1fd098b5cb8302d1e6b5943e3e99cc8e",
"bryansongwebsite_prod/.git/COMMIT_EDITMSG": "29962ef369a640b2f0efa29a45f85bda",
"bryansongwebsite_prod/.git/FETCH_HEAD": "2d5e1c872716978da36ae259c4b6ce5a",
"bryansongwebsite_prod/assets/AssetManifest.json": "9d8eb9ca3dd85f5750ce343f673f2369",
"bryansongwebsite_prod/assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"bryansongwebsite_prod/assets/FontManifest.json": "24818ffa5b47001c3a5dd89c0f408e5d",
"bryansongwebsite_prod/assets/AssetManifest.bin.json": "375974e74919b420716e6d83cff6f726",
"bryansongwebsite_prod/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"bryansongwebsite_prod/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"bryansongwebsite_prod/assets/AssetManifest.bin": "188822fa061f72f855433f9b6532e2f3",
"bryansongwebsite_prod/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"bryansongwebsite_prod/assets/fonts/CourierPrime-Regular.ttf": "fba4686ed1d1b4ef05ab14db78805dbe",
"bryansongwebsite_prod/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"bryansongwebsite_prod/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"bryansongwebsite_prod/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"bryansongwebsite_prod/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"bryansongwebsite_prod/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"bryansongwebsite_prod/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"bryansongwebsite_prod/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"bryansongwebsite_prod/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"bryansongwebsite_prod/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"bryansongwebsite_prod/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"index.html": "9750c4cd1d5e9418f87e10df0993f9e0",
"/": "9750c4cd1d5e9418f87e10df0993f9e0",
"main.dart.js": "966fa91312f4e4ff995e068ae416aa4a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83fc19775dbb847cbd1dbff70e3372eb",
".git/config": "08249b263aad03f1afa4418a08c63b7f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/58/98499ee6d8121336b687f6dca89f741ddd3f17": "4921f4cb877bfa5baba96bfb17414658",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/b3688c4026c838d2898a406cdd4adaebfac762": "00e1bb79100fe828600b620e3fe88225",
".git/objects/02/58e9ec9443281f8df43876a549443495b96d80": "ec2ce7f651572133996a54aca05b7af8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ec/82c930ac68522b972b20e34257c6fe4b50da32": "3cb22131e6d3b11ed845165d04a57482",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/091e2d46df48c1f446d7f79ca394e1b8cb877f": "25204033a39418d0f32f9373f149f484",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/6e/06781865a33f841ed47602dbee535201948712": "5a8711b30f574bf70c10ab84673ac07f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/ff1ba5f47590f25bec2126a30028f87025fa8c": "e1d1bc5ebfde26dcafbfa6b5bb3197a6",
".git/objects/39/dc869729534cc7e6d122d9e4c9c3533d2f6065": "f193f7fc70f7dfdd66ef3a027ce6fdc4",
".git/objects/0a/3b8fc47bf7e8b4543dc03fef70db54a7950441": "4c46e4a79e4592d7b253c353073926e8",
".git/objects/d3/4b684ae034a71688ade417599fae3163dedc0a": "fa4002365d3f609aac587ee5c9d79f34",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/632ee63cf1814d5369c6ed4f71422e46aa1621": "1a051088deb7b405c2e687b5565c1b84",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/2d/f5203a22821c6b1fb173991214738e54171247": "450a355f7c7bf6695133b4fac258ec2b",
".git/objects/4a/f1ff54c5e2f54238a0e2013cb9a37e3130e4ca": "6fd4c8c141185bfa714642c0e64ead8d",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/7a/ccb344fe2e9bb11a57590d8217e0532f31c3ae": "bec6332aa1a063c87537bb3f3020b54e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc602d985d040f930f5e7d05f7a693da",
".git/logs/refs/heads/main": "bc602d985d040f930f5e7d05f7a693da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "655c3f313cb4d7f9248696ad9daebf64",
".git/index": "0ec2059179fdb45cf544e5139b139886",
".git/COMMIT_EDITMSG": "d068d928e1bba4d5d1880c427d1bb76a",
"assets/AssetManifest.json": "9d8eb9ca3dd85f5750ce343f673f2369",
"assets/NOTICES": "8539aef9e49060c3744b203446dbdcd2",
"assets/FontManifest.json": "24818ffa5b47001c3a5dd89c0f408e5d",
"assets/AssetManifest.bin.json": "375974e74919b420716e6d83cff6f726",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "188822fa061f72f855433f9b6532e2f3",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/CourierPrime-Regular.ttf": "fba4686ed1d1b4ef05ab14db78805dbe",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
