const CACHE_NAME = "dosecare-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./drugs.js",
  "./lang.js",
  "./manifest.json",
  "./favicon.svg"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => response || fetch(event.request))

  );

});
