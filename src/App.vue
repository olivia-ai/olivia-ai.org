<template>
  <div id="app" class="main container">
    <h1>Olivia</h1>

    <div class="grid -between">
      <div class="cell -3of12">
        <div class="card">
          <header class="card-header">menu</header>
          <div class="card-content">
            <div class="inner">
              <div class="menu">
                <a class="menu-item" href="/">
                  boîte de chat<div class="pull-right">»</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="cell -8of12">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
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