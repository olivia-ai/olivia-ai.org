<template>
  <div class="hero is-fullheight">
    <b-navbar class="is-spaced">
      <template slot="brand">
        <router-link
            class="navbar-item"
            to="/">
          <b-icon icon="arrow-left"></b-icon>
        </router-link>
      </template>
    </b-navbar>

    <audio id="sound-on">
      <source src="../../public/sounds/on.mp3" type="audio/mpeg">
    </audio>

    <audio id="sound-off">
      <source src="../../public/sounds/off.mp3" type="audio/mpeg">
    </audio>

    <!-- Olivia's answer -->
    <div id="message" class="hero-head"
         style="padding-top: 10vh">
      <div class="container has-text-centered">
        <div class="m-carl-notification-caption title" v-html="writing ? writing_text : message">
        </div>
      </div>
    </div>

    <!-- Animation -->
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

            <div class="a-cue-icon" @click="dictate()"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot"
         style="padding-bottom: 10vh">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-two-thirds">
            <!-- Input -->
            <div class="field is-grouped">
              <!-- Mute control -->
              <p class="control">
                <b-tooltip
                    :label="muted ? 'Make Olivia speak again' : 'Mute Olivia'"
                    animated>
                  <button
                      class="button is-primary is-rounded"
                      @click="mute()">

                    <b-icon icon="volume-off" v-if="muted"></b-icon>
                    <b-icon icon="volume-high" v-else></b-icon>
                  </button>
                </b-tooltip>
              </p>

              <!-- Field -->
              <p class="control is-expanded">
                <input
                    class="input is-rounded"
                    type="text"
                    v-model="input"
                    v-on:keyup.enter="send()"
                    placeholder="Write your message"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  });

  export default {
    data() {
      return {
        message: 'What can I do for you?',
        input: '',
        muted: localStorage.getItem('muted') === 'true',
        writing: false,
        writing_text: '...',
        url: null,
        hotwordAppeared: false
      }
    },
    methods: {
      speak(text) {
        if (this.muted || !SpeechSynthesisUtterance) {
          return
        }

        const message = new SpeechSynthesisUtterance(text.replace(/<.+>/, ""))

        message.voice = this.voice
        message.lang = "en-US"
        window.speechSynthesis.speak(message)
      },

      mute() {
        this.muted = !this.muted
        localStorage.setItem('muted', this.muted)
      },

      dictate() {
        this.hotwordAppeared = true
        document.getElementById("sound-on").play()
      },

      send() {
        this.writing = true
        this.writing_text = '.'
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
          this.$buefy.snackbar.open({
            message: `Hey, I'm Olivia. You can talk with me by writing in the field below, saying the hotword “Hey Olivia” or clicking the main circle and speak.`,
            duration: 5000,
            position: 'is-top'
          })
          localStorage.setItem('token', this.generateToken(200))
        }

        if (localStorage.getItem('information') == null) {
          localStorage.setItem('information', JSON.stringify({
            name: ''
          }))
        }
      },

      initSocket() {
        // Initializes the connection with the websocket
        this.websocket = new WebSocket(this.url)

        // Add a bubble when the websocket receives a response
        this.websocket.addEventListener('message', e => {
          setTimeout(() => {
            let data = JSON.parse(e.data)

            this.writing = false
            this.message = data['content']
            this.speak(this.message)
            localStorage.setItem('information', JSON.stringify(data['information']))
          }, Math.floor(Math.random() * 1500))
        })

        // Send the information on connection
        this.websocket.addEventListener('open', _ => {
          console.log("Websocket connection opened.")
          this.websocket.send(
            JSON.stringify({
              type: 0,
              user_token: localStorage.getItem('token'),
              information: JSON.parse(localStorage.getItem('information'))
            })
          )
        })

        this.websocket.onclose = this.initSocket
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = "wss://olivia-api.herokuapp.com"
      }
      this.url += "/websocket"

      this.createUserInformations()

      // Wait that the voices are loaded to choose the right one
      window.speechSynthesis.onvoiceschanged = () => {
        this.voice = speechSynthesis.getVoices().find(voice => (voice.lang === "en-GB" && voice.name.includes("Female")) || voice.name.includes("Samantha"))
      }

      this.initSocket()

      if (typeof webkitSpeechRecognition !== "undefined") {
        const SpeechRecognition = webkitSpeechRecognition
        const recognition = new SpeechRecognition()

        recognition.lang = "en-US"
        recognition.start()
        recognition.onresult = (event) => {
          let input = event.results[0][0].transcript

          if (this.hotwordAppeared) {
            this.hotwordAppeared = false
            document.getElementById("sound-off").play()
            this.input = input
            this.send()
          }

          if ((input === "hi Olivia" || input === "hey Olivia") && !this.hotwordAppeared) {
            this.hotwordAppeared = true
            document.getElementById("sound-on").play()
          }
        }

        recognition.onend = function() {
          recognition.start();
        };
      }

      setInterval(() => {
        this.writing_text += '.'
        if (this.writing_text.length === 4) {
          this.writing_text = '.'
        }
      }, 300)
    }
  }
</script>
