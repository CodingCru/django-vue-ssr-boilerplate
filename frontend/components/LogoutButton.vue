<template>
  <button @click="handleLogout" class="btn btn-secondary">
    {{ loading ? 'Logging out...' : 'Logout' }}
  </button>
</template>

<script setup lang="ts">
const { logout } = useAuth()
const loading = ref(false)

const handleLogout = async () => {
  loading.value = true
  try {
    await logout()
  } finally {
    loading.value = false
  }
}
</script>
