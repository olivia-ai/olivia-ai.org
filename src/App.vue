<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // Android
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    btnAdd.style.display = 'block';
  });

  export default {
    name: 'app'
  }
</script>