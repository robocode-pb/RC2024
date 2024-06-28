self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          'index.html',
          'style.css',
          'script.js',
          'icon.png',
          'icon-512.png',
          'https://use.fontawesome.com/releases/v5.15.4/js/all.js',
          'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  