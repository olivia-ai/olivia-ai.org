<template>
  <div id="home">
    <!-- NAVBAR -->
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="https://olivia-ai.org/img/icons/olivia.png" alt="Olivia">
          <strong>Olivia</strong>
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="https://docs.olivia-ai.org">
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
              <router-link class="button is-rounded is-primary" to="/chat">
                <strong>
                  Chat
                </strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body container">
        <div class="columns is-vcentered">
          <!-- BODY -->
          <div class="column is-6 is-narrow">
            <div class="container">
              <h1 class="title is-size-1">
                Your new best friend.
              </h1>
              <h1 class="subtitle">
                An open-source chatbot built with an <strong>artificial neural network</strong>.
              </h1>
              <div class="buttons">
                <router-link class="button is-medium is-primary is-rounded" to="/chat">
                  <strong>Chat online</strong>
                </router-link>

                <a class="button is-medium is-rounded" href="https://github.com/olivia-ai">
                  <strong>See the GitHub</strong>
                </a>
              </div>
            </div>
          </div>

          <!-- IMAGE -->
          <div class="column is-6 is-narrow">
            <img src="img/oliviaiphone11ipadpro.jpg" alt="Mockup iPhone 11 Pro">
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body has-text-centered">
        <h1 class="title">Main features</h1>
        <div class="columns is-vcentered">
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <font-awesome-icon icon="cubes" /><br>
              <span class="is-pink">1.</span> Completely modulable
            </h1>
            <p>
              Olivia is organized in modules to facilitate the addition of new capabilities. These modules can be written in Go to execute multiple tasks.
            </p>
          </div>
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <font-awesome-icon icon="code" /><br>
              <span class="is-pink">2.</span> Fully open-source
            </h1>
            <p>
              The project is entirely open-source from the website to the backend. Thus you can build your own chatbot and contribute to Olivia.
            </p>
          </div>
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <font-awesome-icon icon="mobile-alt" /><br>
              <span class="is-pink">3.</span> Progressive web app
            </h1>
            <p>
              You can directly add the PWA to your homescreen from the website, and you won't remember that it is
              a website running behind this native-like app.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <br>
      <br>
      <br>
    </div>

    <footer>
      <div class="container is-small">
        <div class="columns">
          <div class="column is-narrow" style="width: 300px;">
            <img alt="Olivia logo" src="img/icons/olivia-with-text.png" style="max-height: 1.75rem;">
            <br>
            <div class="content is-small">
              Your new best friend<br><font-awesome-icon icon="map-pin" /> Geneva, Switzerland<br>
              <a class="has-text-dark" href="mailto:hugo.lageneste@pm.me">
                <font-awesome-icon icon="envelope" /> hugo.lageneste@pm.me
              </a>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <h6 class="title is-6">About</h6>
                <ul>
                  <li>
                    <a class="has-text-dark" href="https://docs.olivia-ai.org">Documentation</a>
                  </li>
                  <li>
                    <a class="has-text-dark" href="/changelog">Changelog</a>
                  </li>
                  <li>
                    <a class="has-text-dark" href="mailto:hugo.lageneste@pm.me">Contact</a>
                  </li>
                </ul>
              </div>
              <div class="column">
                <h6 class="title is-6">Information</h6>
                <ul>
                  <li><a class="has-text-dark" href="https://github.com/olivia-ai/olivia/blob/master/LICENSE">License</a></li>
                </ul>
              </div>
              <div class="column">
                <h6 class="title is-6">Community</h6>
                <ul>
                  <li><a rel="noopener noreferrer" target="_blank" class="has-text-dark" href="https://twitter.com/oliv_ai">Twitter</a></li>
                  <li><a rel="noopener noreferrer" target="_blank" class="has-text-dark" href="https://trello.com/b/azB6r2IC/olivia">Trello</a></li>
                  <li><a rel="noopener noreferrer" target="_blank" class="has-text-dark" href="https://github.com/olivia-ai">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="img/background-olivia.png" style="position: absolute;">
    </footer>
  </div>
</template>

<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 25px;
  }
</style>

<script>
  import GithubButton from 'vue-github-button'

  export default {
    components: {
      GithubButton
    }
  }
</script>
