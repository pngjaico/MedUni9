// MedGrad+ Service Worker v4.0 — Security Hardened
const CACHE_NAME = 'medgradplus-v12';

// Files to cache (NEVER cache sensitive files)
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/data/materias.json',
  '/data/flashcards.json',
  '/data/questoes.json',
  '/data/questoes_ineditas.json',
  '/data/questoes_antigas.json',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap'
];

// Files that should NEVER be cached (security-sensitive)
const NEVER_CACHE = [
  '/data/codigos.json',
  '/admin.html',
  '/data/feedback/',
  '/materiais/'
];

function isNeverCache(url) {
  return NEVER_CACHE.some(path => url.includes(path));
}

// Install - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(err => {
        console.warn('SW: Some assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate - clean old caches AND remove sensitive files from any cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all([
        // Delete old cache versions
        ...keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)),
        // Remove sensitive files from current cache
        caches.open(CACHE_NAME).then(cache => {
          return Promise.all(NEVER_CACHE.map(path => cache.delete(path)));
        })
      ]);
    })
  );
  self.clients.claim();
});

// Fetch handler
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // NEVER cache sensitive files — always fetch from network
  if (isNeverCache(event.request.url)) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network-First strategy for everything to avoid Ctrl+F5
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a requisição foi bem-sucedida, atualize o cache
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Se a rede falhar (offline), busca no cache
        return caches.match(event.request);
      })
  );
});
