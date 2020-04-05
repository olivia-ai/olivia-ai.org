<template>
  <div id="home">
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
                An open-source contextual chatbot built with an <strong>artificial neural network</strong>.
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

    <section class="hero">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="container">
              <div class="m-carl-notification">
                <div class="m-carl-notification-cue m-cue">
                  <div class="a-cue-voice">
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                  </div>

                  <div class="a-cue-icon"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <h1 class="title is-size-2">
              Ability to speak
            </h1>
            <h1 class="subtitle">
              Olivia can listen to you by saying <strong>“Hey Olivia”</strong> or clicking on the central button.<br>
              She speak to reply you, unless you've disabled her voice.
            </h1>
          </div>
        </div>

        <div class="columns is-centered is-vcentered">
          <div class="column is-6">
            <h1 class="title is-size-2">
              Privacy
            </h1>
            <h1 class="subtitle">
              Olivia respects your <strong>privacy</strong>. All the data used by Olivia is saved in <strong>your client</strong><br>
              You own <strong>your data</strong>, simply as that.
            </h1>
          </div>

          <div class="column is-4">
            <img src="img/olivia-privacy.png" width="350">
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body has-text-centered">
        <h1 class="title">Features</h1>
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
  </div>
</template>

<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 25px;
  }
</style>

