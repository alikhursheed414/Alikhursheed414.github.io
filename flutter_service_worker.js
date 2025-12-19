'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3bbdacb38dda371661e9872f3b687881",
".git/config": "098abda41b95276400ae73132852e4ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "93902cddeea775d9a37b1882cfc1d041",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c48357c82cec49089373aa5e825a9047",
".git/logs/refs/heads/main": "9e818d6992b1c51cdf4e58485ca5377a",
".git/logs/refs/remotes/origin/main": "805e31e4fdc33e6bd47facd7edb6464c",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/f5d39e76293301dd8b9e3d1a17f6486a4f0c19": "d8cbdd4e77ea2d147ff179f9d14157ba",
".git/objects/0a/09c9e62cfb0c1011de9bf8501d5ee15baa042c": "71fb50d3c2472f69b89e55a65454abc2",
".git/objects/0a/78dde365d989728ad5fbbd19ed989bc42b2303": "8506f87cd5181087da69504a77deb785",
".git/objects/1a/18d064af7e874ce74957629719bd56265aacd4": "3fc07b520d06b870ab1a041ceb451e93",
".git/objects/1e/0224f7108016540af374c7b7439c40ea45e56d": "9460636dae840187e9e4111bfaa7d95c",
".git/objects/1f/8cc745920c575d09c4313a57139c7afab7116f": "f3842d9f696f51925219a1a7257d6937",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/c8f1ba1deaefd793df5a1f651b3faeebdeb2c2": "f2aa09e670a5c64dec9d6ed1328f7470",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/32/a64eacd035608e1316c835f34c680634754463": "fec88ebc80a505bf62c308f6ebc46209",
".git/objects/38/6aa99d07ccdc8bc71290f05d48999b32627448": "932964e7d96ea9d1dbac0d6499eb4e9c",
".git/objects/40/4fd59f49c0077e57be3ea44ad48a546de2fda2": "2a08f3c848cb8c0d52a3e9f70c231e9d",
".git/objects/40/bebf84080f161f7e463b3ee384a659e9d08368": "825990e26c4c446eaf544d77f0d0ded3",
".git/objects/40/e43d26ddaa94996bf74c10ae53e4086ad79f3f": "5857924d686a72186f78b741a2b2e864",
".git/objects/41/74a15e6e6c64aa572e54db258ca4f692768659": "8d5aafb814255b66495ac77762cc6095",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/91222e8ddc80969f97c36bc29b238489e8050f": "77a1e63bab48cecbecc6930e1c55c2dc",
".git/objects/5b/b57383fe2f19e5786adcd8b083286af5682ddf": "f58c2bed241f0b0cf13cc6172a007883",
".git/objects/64/00d26df920aab92e0eedc53d23eb9fb58160b4": "37c6199115fea2ab8942822c1c95700e",
".git/objects/64/76fbebc666628ee0203c2a2edda7133561ceed": "1ff0a3d8c1a8d7d6cc5a764b21523a1d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/77/ef4a4fd1a8068c34e5410930eb790a80b39725": "719c2f143e76c06b4458ea698cdb252c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/e2d6030adf469c3a8417007a14a2d4bec78685": "9881e0fb256e74f092e4557f9f1583ce",
".git/objects/7e/564c213301be6bef76e67452919b009d5dbaf9": "f37e6fb70042f0e41b5097d93ee57356",
".git/objects/7f/f96bcdde1e7e299bbc9a1746ba1e5d49dfc260": "6429d8ce61fe22724bd0ecd4f2cc68ba",
".git/objects/83/4cdd3bbd986c4ad26d21488468a5f7b65a1551": "9a358b79d6b716096222e4a7d34ad31a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/92/e99a945e70faf644973d1f829c594eda662a44": "74eb1dd495f69491ccec5ef49e9e9cfd",
".git/objects/96/0d52e561366812325de3e1fcfc1ceec2f77c87": "cb8e3ccd6a56e70653be05bc63c673b7",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/3b6980c913540cdacf15ee0809b2fb45f1f611": "a88aa3a0ac608d3805841bd86ba5a8bf",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/701a4b61f65ce384f1eda71c4fdeec9293bd2c": "d1e7f566432ea92d53234448d7239eeb",
".git/objects/9e/a729a1ab9d78dfe6cd5a15f18b4d4960f0fd63": "0839d948bff04f519ba8e1a68384c1af",
".git/objects/a0/d66305fae914dc96237a741a80ff051566a061": "2170f4362efc9148ba2ed6dc354fbea0",
".git/objects/a1/60ac7c2b88f0360f17e4a6a30dfa6fcedac651": "4eef44c2c5fb3f44c673887e08f40b0b",
".git/objects/a7/b3a35dc742f14cbff997a0c0c9ef082c4a1114": "4ba48d5d4269cfb98b94b71738a1b12a",
".git/objects/af/5878c6123aacca95ded75aba5bb53738931432": "69d23df21b5b90311d95289069cf8f9b",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/f4614d97a5ab3f361fc78e6e064c82ac0dfa33": "9bb8f557c23a72e0e3f95d55c93cb095",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/6be27ef12bce3bbc2a3f5d53b11db1c2c08612": "cc0ad5d4c4a175f46ea24ef595470f42",
".git/objects/c7/79ad3e66a5323b0d4a3bead6b92c8ee9cd7a02": "abfcaa8d2ccb9c87726165884d56c2fb",
".git/objects/c7/f942c1792e465c67e3a13c088ac7ea07d9263b": "a89ff89b9a6eacc3188af4659ab449ad",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7377e2b8aa2862ad2487906d02397ec5cc0422": "0c07cb58a3d1c02d689c0b679092546e",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/df/5b42a96fb87208925ecd7d275463ec8e75c5e2": "98f48f7c16625920d2f9a6313a84a1ff",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/5a3cd6a1091fab6e0078658180ecaf466265c4": "6dd4c8ee85c5de7636bdf46ca9053c27",
".git/objects/e7/af62e196a5f036ae5a01ce821123609abdf703": "c7b7c77def9f9cfef22e82f6813d3207",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "b16f23c8f2bb71b53d5cedcb6014e2c4",
".git/refs/remotes/origin/main": "b16f23c8f2bb71b53d5cedcb6014e2c4",
"assets/AssetManifest.bin": "0e4db0df831fe4fae55581c2ce62f06c",
"assets/AssetManifest.bin.json": "0c8324be5874bb2534b78cd0cadb72bc",
"assets/AssetManifest.json": "af8f3c154368e1fcb9afc7906b3420b4",
"assets/assets/images/bill.png": "ac59b7cdb54c92cdea42f4d90c1f71a8",
"assets/assets/images/logo.png": "b97dd2a2a5b8d3175026a3d386b6d525",
"assets/assets/images/logout.png": "ffdc1e2da59a2d20f312db6053513c71",
"assets/assets/images/menu-board.png": "f08b70bf761851a6cb703bb02e81cfb8",
"assets/assets/images/onboard.jpeg": "dffd1e7531d5cbe5c0dcd4940417c7be",
"assets/assets/images/onboard1.JPG": "91a36467f30740507e7990ed9191efe0",
"assets/assets/images/onboard2.jpg": "34887aa9585bef90010fbacf3df424c6",
"assets/assets/images/onboard3.jpg": "a7df862bf7517bc30f9392f25cb80450",
"assets/assets/images/shield-tick.png": "3a8e548f0917c7f273a02679f52b1c8b",
"assets/assets/questions/advanced.json": "2b94df40e8fbabbcb2725a5ca4af65b1",
"assets/assets/questions/basic.json": "95f8272fb5e33001e729abef31363225",
"assets/assets/questions/geography.json": "25d8e2f99d762c5c9074ae3e6357889d",
"assets/assets/questions/history.json": "386eff12375aa5bf8920d444ad66a80b",
"assets/assets/questions/intermediate.json": "9a701f8d8eb81532744460fbf63f9fa5",
"assets/assets/questions/landmarks.json": "0616aa3519e6220f39f14a7bb371bb0e",
"assets/assets/questions/math_logic.json": "38552b27ae438ce3d9357884b3d160ba",
"assets/assets/questions/riddles.json": "1a5cc5c2eabe4a52d163d2313f5775ea",
"assets/assets/questions/science.json": "c246e66e9ac61bf8fdcb9bc704f42af5",
"assets/assets/questions/ultra_advanced.json": "603a6acfbffc3198a24e784d113d87eb",
"assets/assets/questions/world_capitals.json": "d51b7033cab97f10490e70caa573a995",
"assets/assets/questions/world_flags.json": "77fd1adc6447687ce7affd17c09f72d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a8d435e67f366945e519ab74755cee00",
"assets/NOTICES": "ec813d8b68d8467caccb3efa338e249e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "48660386ec94bf886014287731c7861f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8c04e4864e1415ca5127c1abc0365a1",
"/": "f8c04e4864e1415ca5127c1abc0365a1",
"main.dart.js": "33435ee25c2278028a2412327ebdda4c",
"manifest.json": "dfcd67cd8b871ff1d621735ed29793b9",
"privacy-policy.html": "4cdb1f77fee20c4f82bd6ad4ecd3e5ae",
"version.json": "6a403f34603acb43ead34afca5620be5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
