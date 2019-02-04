<template>
  <div id="app" class="main container">
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
    name: 'app',
    data: () => ({
      links: [
        { name: 'À propos', link: '' },
        { name: 'Code source', link: 'https://github.com/olivia-ai' }
      ]
    })
  }
</script>