const staticCacheName = 'v2';
/*
self.addEventListener('install', (event) => {
  console.log('The service worker is installing.');
  event.waitUntil(
    caches.open(cacheName)
      .then((staticCache) => {
        // cache here
        // return staticCache.match()
      }),
  );
});
*/
self.addEventListener('activate', (activateEvent) => {
  activateEvent.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== staticCacheName) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        return clients.claim();
      }),
  );
});

// listen to each request
self.addEventListener('fetch', (fetchEvent) => {
  const { request } = fetchEvent;
  fetchEvent.respondWith(
    // look in cache
    caches.match(request)
      .then((response) => {
        if (response) {
          // return match from cache
          return response;
        }

        // else: go fetch
        return fetch(request)
          .then((response2) => {
            // open cache
            return caches.open(staticCacheName)
              .then((cache) => {
                // put (cloned) response in cache
                cache.put(request, response2.clone());
                // return response
                return response2;
              });
          });
      }),
  );
});
