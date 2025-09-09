<template>
  <div class="container">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label>Email:</label>
          <input v-model="email" type="email" required>
        </div>
        <div class="mb-4">
          <label>Password:</label>
          <input v-model="password" type="password" required>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { login } = useAuth()
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    await login({ email: email.value, password: password.value })
    console.log('Login successful') // Debug log
  } catch (err: any) {
    console.error('Login failed:', err) // Debug log
    error.value = err.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>
