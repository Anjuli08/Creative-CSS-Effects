self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches
      .open('meditative-breathing')
      .then(function(cache) {
        return cache.addAll([
          '../',
          '192.png',
          '512.png',
          'all.css',
          'favicon.ico',
          'index.js',
          'manifest.json'
        ]);
      })
  );
});
