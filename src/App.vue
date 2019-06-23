<template>
  <div id="app">
    <div class="container">
      <section class="hero is-fullheight">
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="https://olivia-ai.org/img/icons/olivia.png" alt="Olivia">
              Olivia
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbar" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="https://docs.olivia-ai.org">
                Documentation
              </a>
              <a class="navbar-item" href="https://olivia-ai.org/blog">
                News
              </a>
              <a class="navbar-item" href="https://github.com/olivia-ai">
                Github
              </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary" href="/chat">
                    <strong>Chat</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
  // Burger menu on mobile
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)

          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  })

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #ff3aaf;
  $primary-invert: findColorInvert($primary);
  $twitter: #d40890;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>