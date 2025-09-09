// @ts-ignore
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'api-logger',
    configKey: 'apiLogger'
  },
  defaults: {
    enabled: true // Just hardcode for now, or use nuxt.options.dev
  },
  setup(options, nuxt) {
    if (!options.enabled || !nuxt.options.dev) return

    // Rest stays same...
  }
})
