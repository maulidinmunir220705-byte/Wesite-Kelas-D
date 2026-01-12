const CACHE_NAME = 'class-d-v1';
const assets = [
  '/',
  '/index.html',
  '/tentang.html',
  '/Kontak.html',
  // Tambahkan path foto Anda di sini agar bisa dibuka offline
  '/Aset/Ikon/partner.png',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
];

// Install Service Worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Ambil aset dari cache jika offline
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(rec => {
      return rec || fetch(evt.request);
    })
  );
});