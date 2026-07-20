const CACHE_NAME = 'apnea-cc-v2';

// Get the base path dynamically so it works on any domain/subfolder
const BASE = self.location.pathname.replace(/sw\.js$/, '') || './';

const STATIC_ASSETS = [
  BASE + 'index.html',
  BASE + 'manifest.json',
  BASE + 'favicon.ico',
  BASE + 'apple-touch-icon.png',
  BASE + 'icon-32x32.png',
  BASE + 'icon-72x72.png',
  BASE + 'icon-96x96.png',
  BASE + 'icon-128x128.png',
  BASE + 'icon-144x144.png',
  BASE + 'icon-152x152.png',
  BASE + 'icon-192x192.png',
  BASE + 'icon-384x384.png',
  BASE + 'icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Only handle same-origin requests
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        // Background update
        fetch(request).then((response) => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, response));
          }
        }).catch(() => {});
        return cached;
      }

      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
        return response;
      });
    }).catch(() => {
      // Offline fallback for HTML
      if (request.headers.get('accept')?.includes('text/html')) {
        return caches.match(BASE + 'index.html');
      }
    })
  );
});
