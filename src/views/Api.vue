<template>
  <div :class="(dark ? 'dark ' : '') + 'main'">
    <div class="container">
      <div class="top">
        <span><span class="name">API</span></span>
        <div class="dark">
          <span @click="changeTheme" style="cursor: pointer">Thème {{ dark ? 'clair' : 'sombre' }}</span>
          <span> | </span>
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dark: localStorage.getItem('dark') === 'true'
      }
    },
    methods: {
      changeTheme() {
        this.dark = !this.dark
        localStorage.setItem('dark', this.dark)
      }
    }
  }
</script>