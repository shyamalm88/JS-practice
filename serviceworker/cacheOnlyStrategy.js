// Establish a cache name
const cacheName = "MyFancyCacheName_v1";

// Assets to precache
const preCachedAssets = [
  "/possum1.jpg",
  "/possum2.jpg",
  "/possum3.jpg",
  "/possum4.jpg",
];

self.addEventListener("install", (event) => {
  // Precache assets on install
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(preCachedAssets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Is this one of our precached assets?
  const url = new URL(event.request.url);
  const isPreCachedRequest = preCachedAssets.includes(url.pathname);

  if (isPreCachedRequest) {
    // Grab the preCached asset from the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      })
    );
  } else {
    // Go to the network
    return;
  }
});
