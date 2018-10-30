workbox.clientsClaim();
workbox.skipWaiting();

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerNavigationRoute("/index.html", {
  blacklist: [/img/, /manifest\.json/]
})

workbox.routing.registerRoute(
  new RegExp("^https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst()
)