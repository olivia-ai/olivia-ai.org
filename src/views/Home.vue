<template>
  <div class="hero-body has-text-centered">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-4 is-narrow">
          <div class="columns is-vcentered">
            <div class="column is-4 is-narrow">
              <img src="img/icons/olivia.png" alt="Olivia character" height="1000" width="1000"/>
            </div>

            <h1 class="title is-1 has-text-left-tablet">
              <span>Olivia</span>
            </h1>
          </div>
          <div class="has-text-left-tablet">
            <h5 class="subtitle is-5 has-text-left-tablet">
              <span>Enjoy the pleasure of chatting with a <strong>contextual</strong>&nbsp;<span class="is-underlined">open-source chatbot</span></span>
            </h5>

            <div class="columns is-centered is-vcentered">
              <div class="column">
                <div class="columns">
                  <div class="column">
                    <router-link class="button is-medium is-primary is-rounded" to="/chat">
                      <strong>Chat online</strong>
                    </router-link>
                  </div>

                  <div class="column">
                    <a class="button is-light is-medium is-rounded paddle_download" href="https://docs.olivia-ai.org">
                      <strong>Host Olivia yourself</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-8 is-narrow">
          <img src="img/olivia-macos.png" alt="Screenshot of the PWA of Olivia on macOS">
        </div>
      </div>
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <img
              src="img/olivia-iphones.png"
              alt="Screenshot of the PWA of Olivia on an iPhone X in light theme"
          >
        </div>
        <div class="column is-6 is-narrow">
          <h1 class="title">Progressive web application</h1>
          <h2 class="subtitle">
            A fully compatible <strong>standalone</strong> website in <span class="is-underlined">iOS</span>, <span class="is-underlined">Android</span> and <span class="is-underlined">Desktop</span>
          </h2>
          <p>
            You can directly add the PWA to your homescreen from the website, and you won't remember that it is
            a website running behind this native-like app.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .is-underlined {
    border-bottom: 3px solid;
    border-color: #ff3aaf;
  }
</style>