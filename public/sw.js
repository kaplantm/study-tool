const CACHE_NAME = "review-offline-v2";
const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
  "/courses/nutrition",
  "/courses/chemistry",
  "/courses/bio110",
  "/courses/bio121",
  "/courses/bio160",
  "/courses/nutrition/study",
  "/courses/chemistry/study",
  "/courses/bio110/study",
  "/courses/bio121/study",
  "/courses/bio160/study",
  "/diagram-builder",
];

function withBasePath(path) {
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  return new URL(relativePath, self.registration.scope).toString();
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        APP_SHELL.map(async (path) => {
          const cleanUrl = withBasePath(path);
          const candidates =
            path === "/" || path === "/manifest.webmanifest"
              ? [cleanUrl]
              : [cleanUrl, cleanUrl + ".html"];

          for (const candidate of candidates) {
            try {
              const response = await fetch(candidate);
              if (response.ok) {
                // Store the response under the clean URL used by client-side navigation.
                await cache.put(cleanUrl, response.clone());
                await cache.put(candidate, response);
                break;
              }
            } catch {
              // Try the next export form.
            }
          }
        }),
      );
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then((networkResponse) => {
        if (
          networkResponse.ok &&
          new URL(event.request.url).origin === self.location.origin
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) =>
            cache.put(event.request, responseToCache),
          );
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === "navigate") {
          return caches.match(withBasePath("/"));
        }
        return Response.error();
      });
    }),
  );
});
