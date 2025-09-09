export default defineNuxtRouteMiddleware((to, from) => {
  // Skip middleware during SSR
  if (process.server) return

  const { user } = useAuth()

  // Add a small delay to ensure localStorage has been read
  nextTick(() => {
    if (!user.value) {
      return navigateTo('/login')
    }
  })
})
