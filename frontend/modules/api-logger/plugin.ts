export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('request', (event) => {
    if (event.node.req.url?.startsWith('/api')) {
      console.log(`🔄 API: ${event.node.req.method} ${event.node.req.url}`)
    }
  })
})
