const staticCasheName = 's-app-v1'

const assetUrls = [
    'index.html',
    'js/app.js',
    'css/styles.css'
]
self.addEventListener('install',  async event => {
    const cache = await caches.open(staticCasheName)
    await cache.addAll(assetUrls)
    // event.waitUntil(
    //     caches.open(staticCasheName).then(cache => cache.addAll(assetUrls))
    // )
})

self.addEventListener('activate' ,event => {
    console.log('[SW]: activate')
})
self.addEventListener('fetch', event => {
    console.log('Fetch', event.request.url)
    event.respondWith(casheFirst(event.request))
})
async function casheFirst(request) {
    const cached = await caches.match(request)
    return cached ?? await fetch(request)
}