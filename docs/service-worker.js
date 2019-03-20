
self.addEventListener('install', (event) => {
  console.log('ServiceWorker: install event');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  console.log('ServiceWorker: activate event');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  //
});

