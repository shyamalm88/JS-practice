// If you were to flip "Cache first, network second" on its head, you end up with the "Network first, cache second" strategy,
// which is what it sounds like:

// You go to the network first for a request, and place the response in the cache.
// If you're offline at a later point, you fall back to the latest version of that response in the cache.
// This strategy is great for HTML or API requests when, while online, you want the most recent version of a resource,
// yet want to give offline access to the most recent available version.

// Establish a cache name
const cacheName = "MyFancyCacheName_v1";

self.addEventListener("fetch", (event) => {
  // Check if this is a navigation request
  if (event.request.mode === "navigate") {
    // Open the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        // Go to the network first
        return fetch(event.request.url)
          .then((fetchedResponse) => {
            cache.put(event.request, fetchedResponse.clone());

            return fetchedResponse;
          })
          .catch(() => {
            // If the network is unavailable, get
            return cache.match(event.request.url);
          });
      })
    );
  } else {
    return;
  }
});
