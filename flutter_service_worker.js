'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5d0313a8773235ff08f1ba63d2b51581",
"index.html": "88c6b43c3e26cf7601f45f4af70f5444",
"/": "88c6b43c3e26cf7601f45f4af70f5444",
"main.dart.js": "c4d8e453aac117adc8301e2c3fdaaff7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "fd2b22fbb01720f762673f9c57b1ae52",
"icons/Icon-192.png": "8eb03f33a8e0db6c324326d6afcac788",
"icons/Icon-maskable-192.png": "8eb03f33a8e0db6c324326d6afcac788",
"icons/Icon-maskable-512.png": "fd2b22fbb01720f762673f9c57b1ae52",
"icons/Icon-512.png": "fd2b22fbb01720f762673f9c57b1ae52",
"manifest.json": "31dc1edab666ff039179a0466a4276f5",
"assets/dotenv": "1ecaa36cb52b815700a0d6743dd3b034",
"assets/AssetManifest.json": "2e01f4cfc51423d077f9c632e5a31a18",
"assets/NOTICES": "8b0111792a344175247ea50c212f31f8",
"assets/FontManifest.json": "ff0f2f11bd8e5fa00238fd2ccdac7082",
"assets/AssetManifest.bin.json": "46e1aa8df2ee15a144cf0b216422dfb1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "af942df25b6d2ccf90413b855a0985c2",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "bcba045acba2759faf8fff9c45d03db0",
"assets/fonts/TypoGraphica_demo.otf": "4dacb160fc05b069f93fd5ed5b09b0be",
"assets/fonts/TypoGraphica.otf": "4dacb160fc05b069f93fd5ed5b09b0be",
"assets/fonts/MaterialIcons-Regular.otf": "c4c6b66400e24705829d232f8caf6742",
"assets/assets/images/market_research.jpg": "1b721e78bc148047c80132787c398ccd",
"assets/assets/images/mugs_side_bw_w1080.jpg": "7ac1959d3b134bbcef006780161606f7",
"assets/assets/images/newsletter.jpg": "365566bd4172c23f8fd5d194201a8b0e",
"assets/assets/images/avatar_default.png": "6d7a8d509be59100ec749b9ea8ab81e7",
"assets/assets/images/transgenerational-love.jpg": "9f1e998dfe648f7d613a28d9f9d6da39",
"assets/assets/images/refresh_icon.png": "721a7fc04afd6c7dc5513c6b83fde0fd",
"assets/assets/images/loading2.json": "4802a81baa0498bd960df7c0919741d6",
"assets/assets/images/newsletter2_large.jpg": "3019793a7eb4247f0850091894e685e6",
"assets/assets/images/Titis.jpg": "b120f9fe2e6251f3a057a98a445debca",
"assets/assets/images/newsletter2.jpg": "3da0aee9c10a963c7b16cf8bb7a0e68c",
"assets/assets/images/logo.png": "08773af73ec937bced3a53a10a62cb14",
"assets/assets/images/tip_icon.png": "0822925bdde1c5919decf79e8424923b",
"assets/assets/images/user_icon.png": "90c4563b861137e87db78c321350be33",
"assets/assets/images/submit_icon.png": "cf7150655cd081d796876eb0bd6d80b8",
"assets/assets/images/voice_icon.png": "413fc877afcc95807494c3f44080e2ad",
"assets/assets/images/paper_flower_overhead_bw_w1080.jpg": "1bed4aefd73a600a585112a77c250a6c",
"assets/assets/images/share_message_icon.png": "fdcdc7a191dc7206bcfe971035f62f95",
"assets/assets/images/chat_copy_icon.png": "22d7561f5fa021718ad5e8161b78247b",
"assets/assets/images/submit_active_icon.png": "c45baa90c4329a88e03de21868f4ba7b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
