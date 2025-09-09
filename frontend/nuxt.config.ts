import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://127.0.0.1:8000'
    }
  },
  nitro: {
    devProxy: {
      '/api': `${process.env.API_BASE_URL || 'http://localhost:8000'}/api`
    }
  },

  // Modules for our modular structure
  modules: [
    '~/modules/api-logger',
  ],

  // TypeScript support
  typescript: {
    strict: true
  }
})
