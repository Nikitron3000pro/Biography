self.addEventListener('install', event => {
    console.log('[SW]: install')
})

self.addEventListener('active', event => {
    console.log('[SW]: activate')
})