<template>
  <div id="app">
    <navbar v-if="$route.path !== '/chat'"/>

    <router-view/>

    <app-footer v-if="$route.path !== '/chat'"/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import AppFooter from '@/components/Footer'

  export default {
    name: 'App',
    components: {
      Navbar,
      AppFooter
    }
  }
</script>
