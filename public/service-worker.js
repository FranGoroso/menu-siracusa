// service-worker.js
const CACHE_NAME = 'el-rincon-gourmet-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
];

// Instalación del service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación del service worker - limpia caches antiguos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => {
          return name !== CACHE_NAME;
        }).map(name => {
          return caches.delete(name);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia de caché: stale-while-revalidate
self.addEventListener('fetch', event => {
  // Ignorar peticiones a la API
  if (event.request.url.includes('/api/')) {
    return;
  }
  
  // Estrategia para assets
  if (
    event.request.destination === 'style' ||
    event.request.destination === 'script' ||
    event.request.destination === 'image'
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => {
              // Si la red falla, devolver lo que tengamos en caché
              return cachedResponse;
            });
          
          // Devolver de la caché mientras se actualiza en segundo plano
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }
  
  // Para solicitudes HTML, intentar la red primero y caer de vuelta a la caché
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              // Si existe en caché, devolverlo, si no, devolver la página offline
              return cachedResponse || caches.match('/');
            });
        })
    );
    return;
  }
  
  // Comportamiento por defecto - network first con fallback a caché
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

// Mensaje para actualizar la caché cuando hay nuevos contenidos
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
