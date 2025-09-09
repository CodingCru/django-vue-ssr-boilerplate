export const useAuth = () => {
  // Use Nuxt's cookie storage (works with SSR)
  const userCookie = useCookie<any>('user', {
    default: () => null,
    serializer: {
      read: (value: string) => value ? JSON.parse(value) : null,
      write: (value: any) => JSON.stringify(value)
    }
  } as any)

  const user = computed(() => userCookie.value)

  const login = async (credentials: { email: string, password: string }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))

      const userData = {
        id: 1,
        email: credentials.email,
        name: credentials.email.split('@')[0]
      }

      userCookie.value = userData
      await navigateTo('/dashboard')
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    userCookie.value = null
    await navigateTo('/login')
  }

  return {
    user: readonly(user),
    login,
    logout
  }
}
