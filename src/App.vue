<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
  }

  export default {
    name: 'app'
  }
</script>