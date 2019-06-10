<template>
  <div class="hero-body has-text-centered">
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
            <span>Enjoy the pleasure of chatting with a contextual open-source chatbot</span>
          </h5>

          <div class="columns is-centered is-vcentered">
            <div class="column">
              <div class="columns">
                <div class="column">
                  <a class="button is-medium is-primary is-rounded" href="/chat">
                    <strong>Chat online</strong>
                  </a>
                </div>

                <div class="column">
                  <a class="button is-light is-medium is-rounded paddle_download" href="https://docs.olivia-ai.org">
                    <strong>Host oliva yourself</strong>
                  </a>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>

      <div class="column is-8 is-narrow">
        <img src="img/icons/olivia-app.png" alt="Screenshot of the PWA of Olivia on macOS">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // Show a popup on the website of Olivia
      const isIOS = () => {
        const userAgent = window.navigator.userAgent.toLowerCase()
        return /iphone|ipad|ipod/.test(userAgent)
      }
      const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone)

      if (isIOS() && !isInStandaloneMode()) {
        this.$snackbar.open({
          duration: 5000,
          message: "You can add this webapp to your home screen just below.",
          type: 'is-primary',
          position: 'is-bottom',
          actionText: 'Close',
          queue: false
        })
      }
    }
  }
</script>