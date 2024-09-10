const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './styles/main.css',
  './scripts/main.js',
  './images/icon192.png',
  './images/icon512.png'
];

// Устанавливаем сервисный рабочий и кэшируем файлы
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Обрабатываем запросы и возвращаем кэшированные данные
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
