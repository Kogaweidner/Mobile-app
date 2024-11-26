var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'service-worker.js',
    'images/catfood.jpg',
    'images/catball.jpg',
    'images/cathouse.jpg',
    'images/dogfood.jpg',
    'images/dogball.jpg',
    'images/doghouse.jpg',
    'images/icon-store512.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            //Download the file if it is not in the cache
            return r || fetch(e.request).then(function (response) {
                return caches.open(cacheName).then(function (cache) {
                    //add the new file to cache
                    cache.put(e.request, response.clone());
                    return response;
                });
            });
        })
    );
}); 