<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">Django + Nuxt</h1>
        <p class="hero-subtitle">A full-stack boilerplate with login interface and Django API integration</p>
        <div class="status-card">
          <h3>🔗 API Connection</h3>
          <p v-if="apiLoading">Connecting to Django API...</p>
          <p v-else-if="apiError" class="text-red-500">❌ {{ apiError }}</p>
          <p v-else class="text-green-500">✅ Connected to Django successfully!</p>
        </div>

        <div class="actions">
          <NuxtLink to="/login" class="btn btn-primary">Get Started</NuxtLink>
        </div>

        <LogoutButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { get } = useApi()
const apiLoading = ref(true)
const apiError = ref('')

// Check API on page load
onMounted(async () => {
  try {
    await get('/health/')
    apiError.value = ''
  } catch (error: any) {
    apiError.value = 'Cannot connect to Django API'
  } finally {
    apiLoading.value = false
  }
})
</script>
