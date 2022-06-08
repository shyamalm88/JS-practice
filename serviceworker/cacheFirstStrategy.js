// This strategy is where things get a little more involved. For matching requests, the process goes like this:

// The request hits the cache. If the asset is in the cache, serve it from there.
// If the request is not in the cache, go to the network.
// Once the network request finishes, add it to the cache, then return the response from the network.

// Establish a cache name
const cacheName = "MyFancyCacheName_v1";

self.addEventListener("fetch", (event) => {
  // Check if this is a request for an image
  if (event.request.destination === "image") {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        // Go to the cache first
        return cache.match(event.request.url).then((cachedResponse) => {
          // Return a cached response if we have one
          if (cachedResponse) {
            return cachedResponse;
          }

          // Otherwise, hit the network
          return fetch(event.request).then((fetchedResponse) => {
            // Add the network response to the cache for later visits
            cache.put(event.request, fetchedResponse.clone());

            // Return the network response
            return fetchedResponse;
          });
        });
      })
    );
  } else {
    return;
  }
});
