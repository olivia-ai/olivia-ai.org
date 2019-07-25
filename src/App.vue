<template>
  <div id="app">
    <div>
      <section :class="'hero is-fullheight ' + (darkTheme ? 'is-dark' : '')">
        <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
              <img src="https://olivia-ai.org/img/icons/olivia.png" alt="Olivia">
              Olivia
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbar" class="navbar-menu">
            <div class="navbar-end">
              <router-link
                  class="navbar-item"
                  to="/docs/getting-started">
                Documentation
              </router-link>
              <router-link
                  class="navbar-item"
                  to="/blog">
                Blog
              </router-link>
              <a class="navbar-item" href="https://github.com/olivia-ai">
                Github
              </a>
              <div class="navbar-item">
                <b-tooltip
                    :label="darkTheme ? 'Move to light theme' : 'Move to dark theme'"
                    :type="darkTheme ? 'is-light' : 'is-dark'"
                    position="is-bottom"
                    animated>
                  <a
                      class="button is-rounded is-light"
                      @click="setTheme(!darkTheme)">
                    <font-awesome-icon icon="adjust" />
                  </a>
                </b-tooltip>
              </div>
              <div class="navbar-item">
                <div class="buttons">
                  <router-link
                      class="button is-primary is-rounded"
                      to="/chat">
                    <strong>Chat</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <router-view></router-view>
      </section>
      <footer v-if="this.$route.path === '/'">
        <div :class="'has-text-centered ' + (this.darkTheme ? 'is-dark' : '')">
          <p>Made with ❤️ by <strong><a href="https://github.com/ananagame">Hugo Lageneste</a></strong></p>
          <p>Licensed under <strong><a href="http://opensource.org/licenses/mit-license.php">MIT</a></strong></p>
        </div>
        <img src="img/background-olivia.png" style="position: absolute;">
      </footer>
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
    name: 'app',
    data() {
      return {
        darkTheme: localStorage.getItem('darkTheme') === 'true'
      }
    },
    methods: {
      setTheme(isDark) {
        this.darkTheme = isDark
        localStorage.setItem('darkTheme', this.darkTheme.toString())
        let color = this.darkTheme ? '#363636' : '#fff'
        document.getElementById('html').style = 'background-color: ' + color
      }
    },
    mounted() {
      this.setTheme(localStorage.getItem('darkTheme') === 'true')
    }
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  $family-sans-serif: "Segoe UI";

  $primary: #ff3aaf;
  $primary-invert: findColorInvert($primary);
  $twitter: #d40890;
  $twitter-invert: findColorInvert($twitter);
  $input-background-color: $light;
  $input-border-color: transparent;
  $input-shadow: none;
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

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>