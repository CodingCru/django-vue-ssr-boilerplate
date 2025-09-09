<template>
  <div class="container">
    <div class="dashboard">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <LogoutButton />
      </div>

      <div class="welcome-card" v-if="auth.user">
        <h2>Welcome back, {{ auth.user.email }}!</h2>
        <p class="user-email">{{ auth.user.email }}</p>
      </div>

      <div class="dashboard-grid">
        <div class="dashboard-card">
          <h3>🚀 Getting Started</h3>
          <p>Your dashboard.</p>
        </div>

        <div class="dashboard-card">
          <h3>📊 Quick Stats</h3>
          <p>Your Stats.</p>
        </div>

        <div class="dashboard-card">
          <h3>⚙️ Settings</h3>
          <p>Your Settings.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const auth = useAuth()
</script>
