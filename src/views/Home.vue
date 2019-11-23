<template>
  <div>
    <section class="hero">
      <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="https://olivia-ai.org/img/icons/olivia.png" alt="Olivia">
            <strong>
              Olivia
            </strong>
          </router-link>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu">
          <div class="navbar-end">
            <a
                class="navbar-item"
                href="https://docs.olivia-ai.org">
              <strong>
                Documentation
              </strong>
            </a>
            <router-link to="/changelog" class="navbar-item">
              <strong>
                Changelog
              </strong>
            </router-link>
            <a class="navbar-item" href="https://github.com/olivia-ai">
              <strong>
                GitHub
              </strong>
            </a>
            <div class="navbar-item">
              <div class="buttons">
                <router-link
                    class="button is-rounded is-primary"
                    to="/chat">
                  <strong>
                    Chat
                  </strong>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-6 is-narrow">
              <h1 class="title">
                <div class="columns is-centered">
                  <div class="column is-6 is-narrow">
                    <img src="img/icons/olivia-with-text.jpg" alt="Olivia character with the text written in white" height="200"/>
                  </div>
                </div>
              </h1>
              <h1 class="title">
                Your new <span class="is-underlined">best friend</span>
              </h1>
              <h2 class="subtitle">
                An <span class="is-underlined">open-source</span> chatbot built with an <strong>artificial neural network</strong>
              </h2>
              <div class="columns is-centered">
                <div class="column is-4 is-narrow">
                  <router-link class="button is-medium is-primary is-rounded" to="/chat">
                    <strong>Chat online</strong>
                  </router-link>
                </div>
                <div class="column is-4 is-narrow">
                  <a class="button is-medium is-rounded" href="https://github.com/olivia-ai">
                    <strong>See the GitHub</strong>
                  </a>
                </div>
              </div>
            </div>
            <div class="column is-6 is-narrow">
              <img
                  src="img/oliviaiphone11.jpg"
                  alt="Mockup iPhone 11 Pro"
              >
            </div>
          </div>
        </div>

        <div class="columns is-vcentered">
          <div class="column is-6 is-narrow">
            <img
                src="img/oliviaiphone11ipadpro.jpg"
                alt="Mockup iPhone 11 Pro + iPad Pro"
            >
          </div>
          <div class="column is-6 is-narrow">
            <h1 class="title">Progressive web application</h1>
            <h2 class="subtitle">
              A fully compatible <strong>standalone</strong> website in iOS, Android and Desktop
            </h2>
            <p>
              You can directly add the PWA to your homescreen from the website, and you won't remember that it is
              a website running behind this native-like app.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="has-text-centered">
        <p>Made with ❤️ by <strong><a href="https://github.com/ananagame">Hugo Lageneste</a></strong></p>
        <p>Licensed under <strong><a href="http://opensource.org/licenses/mit-license.php">MIT</a></strong></p>
      </div>
      <img src="img/background-olivia.png" style="position: absolute;">
    </footer>
  </div>
</template>

<script>
  import GithubButton from 'vue-github-button'

  export default {
    components: {
      GithubButton
    }
  }
</script>
