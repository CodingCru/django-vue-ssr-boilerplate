export const useApi = () => {
  const config = useRuntimeConfig()

  const apiCall = async (endpoint: string, options = {}) => {
    const url = process.env.NODE_ENV === 'development'
      ? `/api${endpoint}`                      // goes through devProxy
      : `${config.public.apiBaseUrl}/api${endpoint}` // prod / SSR
    return await $fetch(url, options)
  }

  return {
    get: (endpoint: string) => apiCall(endpoint),
    post: (endpoint: string, body: any) =>
      apiCall(endpoint, { method: 'POST', body })
  }
}
