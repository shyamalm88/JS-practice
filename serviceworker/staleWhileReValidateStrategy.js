// "Stale-while-revalidate" is the most complex.
// It's similar to the last two strategies in some ways, but the procedure prioritizes speed of access for a resource,
// while also keeping it up to date in the background. This strategy goes something like:

// On the first request for an asset, fetch it from the network, place it in the cache, and return the network response.
// On subsequent requests, serve the asset from the cache first, then "in the background," re-request it from the
// network and update the asset's cache entry.
// For requests after that, you'll receive the last version fetched from the network that
// was placed in the cache in the prior step.
// This is an excellent strategy for things that are sort of important to keep up to date,
// but are not crucial. Think of stuff like avatars for a social media site. They get updated when users get around to doing so,
// but the latest version isn't strictly necessary on every request.

// Establish a cache name
const cacheName = "MyFancyCacheName_v1";

self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchedResponse = fetch(event.request).then(
            (networkResponse) => {
              cache.put(event.request, networkResponse.clone());

              return networkResponse;
            }
          );

          return cachedResponse || fetchedResponse;
        });
      })
    );
  } else {
    return;
  }
});
