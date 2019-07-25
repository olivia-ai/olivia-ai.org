<template>
  <div class="hero-body has-text-centered">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-narrow">
          <h1 class="title">
            <div class="columns is-centered">
              <div class="column is-6 is-narrow">
                <img src="img/icons/olivia-with-text.png" alt="Olivia character with the text written in black" height="200" v-if="!darkTheme"/>
                <img src="img/icons/olivia-with-white-text.png" alt="Olivia character with the text written in white" height="200" v-else/>
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
              src="img/olivia-iphones.png"
              alt="Two iPhone X where the Olivia app is launched"
          >
        </div>
      </div>
      <div class="columns is-vcentered">
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
        <div class="column is-6 is-narrow">
          <h1 class="title">An open-source project</h1>
          <h2 class="subtitle">
            The core of <strong>Olivia</strong>, which is written in <span class="is-underlined">Golang</span> is entirely <strong>open-source</strong> so you can make contribute to it!
          </h2>
          <div class="columns is-centered">
            <div class="column is-4 is-narrow">
              <a class="button is-medium is-rounded" href="https://github.com/olivia-ai/olivia">
                <strong>The repository</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        darkTheme: localStorage.getItem('darkTheme') === 'true'
      }
    },
    mounted() {
      setInterval(() => {
        this.darkTheme = localStorage.getItem('darkTheme') === 'true'
      }, 10)
    }
  }
</script>