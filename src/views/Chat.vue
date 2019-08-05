<template>
  <div class="hero is-fullheight">
    <nav class="navbar"
         role="navigation"
         aria-label="main navigation">
      <div class="navbar-brand">
        <router-link
            class="navbar-item"
            to="/">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        </router-link>
      </div>
    </nav>

    <div class="hero-head"
         style="padding-top: 10vh">
      <div class="container has-text-centered">
        <div class="m-carl-notification-caption title">
          {{ message }}
        </div>
      </div>
    </div>

    <div class="hero-body">
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

    <div class="hero-foot"
         style="padding-bottom: 10vh">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
            <input class="input is-rounded" type="text">
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
        message: 'What can I do for you?',
        input: ''
      }
    },
    methods: {
      speak(text) {
        if (!SpeechSynthesisUtterance) return;
        const message = new SpeechSynthesisUtterance(text)
        message.voice = this.voice
        message.lang = "en-US"
        window.speechSynthesis.speak(message)
      },

      dictate() {
        const SpeechRecognition = webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.lang = "en-US"
        recognition.start()
        recognition.onresult = (event) => {
          this.input = event.results[0][0].transcript
        }
        recognition.onend = () => this.send()
      },

      send() {
        this.websocket.send(
          JSON.stringify({
            type: 1,
            content: this.input,
            user_token: localStorage.getItem('token'),
            information: JSON.parse(localStorage.getItem('information'))
          })
        )

        this.input = ''
      },

      // Generate a random token
      generateToken(length) {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_)°^¨$*£ù%=+:/;.,?-(}{[]&é@#'
        let token = ''
        for (let i = 0; i < length; i++) {
          token += chars[Math.floor(Math.random() * chars.length)]
        }

        return token
      },

      createUserInformations() {
        // Generate the token
        if (localStorage.getItem('token') == null) {
          localStorage.setItem('token', this.generateToken(200))
        }

        if (localStorage.getItem('information') == null) {
          localStorage.setItem('information', JSON.stringify({
            name: ''
          }))
        }
      }
    },
    mounted() {
      this.createUserInformations()

      // Wait that the voices are loaded to choose the right one
      window.speechSynthesis.onvoiceschanged = () => {
        this.voice = speechSynthesis.getVoices().find(voice => (voice.lang === "en-GB" && voice.name.includes("Female")) || voice.name.includes("Samantha"))
      }

      // Initializes the connection with the websocket
      this.websocket = new WebSocket('wss://olivia-api.herokuapp.com/')
      // Send the informations on connection

      // Add a bubble when the websocket receives a response
      this.websocket.addEventListener('message', e => {
        setTimeout(() => {
          let data = JSON.parse(e.data)

          this.message = data['content']
          this.speak(this.message)
          localStorage.setItem('information', JSON.stringify(data['information']))
        }, Math.floor(Math.random() * 3000))
      })
    }
  }
</script>
