<template>
  <div id="app">
    <div class="nav-container">
      <div class="bar bar--sm bar--absolute visible-xs">
        <div class="container">
          <div class="row">
            <div class="col-3 col-md-2">
              <a href="/">
                <img class="logo" alt="logo" src="img/icons/olivia-text.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu1" class="bar bar--sm bar-1 hidden-xs bar--absolute">
        <div class="container">
          <div class="row">
            <div class="col-lg-1 col-md-2 hidden-xs">
              <div class="bar__module">
                <a href="/">
                  <img class="logo" alt="logo" src="img/icons/olivia-text.png" />
                </a>
              </div>
            </div>
            <div class="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
              <div class="bar__module">
                <ul class="menu-horizontal text-left">
                  <a></a>
                </ul>
              </div>
              <div class="bar__module">
                <a class="btn btn--sm type--uppercase" href="https://github.com/olivia-ai">
                  <span class="btn__text">On Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="main-container">
      <router-view></router-view>

      <footer class="text-center-xs space--xs bg--dark ">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <span class="type--fine-print">
                &copy;<span class="update-year"></span> Published under MIT License
              </span>
            </div>
          </div>
        </div>
      </footer>
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
    name: 'app'
  }
</script>