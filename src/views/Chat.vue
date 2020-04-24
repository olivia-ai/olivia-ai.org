<template>
  <div class="hero is-fullheight">
    <b-navbar class="is-spaced">
      <template slot="brand">
        <router-link
            class="navbar-item"
            to="/">
          <b-icon icon="arrow-left"></b-icon>
        </router-link>

        <locale-switch navbar @change="() => { loadSpeechApi(); }"/>
      </template>

      <template slot="end">
        <b-icon class="navbar-item" icon="volume-high"></b-icon>

        <p class="navbar-item">
          <b-field expanded style="width: 100px">
            <b-slider
                size="is-small"
                rounded
                v-model="volume"
                lazy
                :custom-formatter="val => val + '%'">
            </b-slider>
          </b-field>
        </p>
      </template>
    </b-navbar>

    <audio id="sound-on">
      <source src="/sounds/on.mp3" type="audio/mpeg">
    </audio>

    <audio id="sound-off">
      <source src="/sounds/off.mp3" type="audio/mpeg">
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
                    :placeholder="$t('chat.fieldPlaceholder')"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LocaleSwitch from '@/components/LocaleSwitch'

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
    components: { LocaleSwitch },
    data() {
      return {
        volume: 50,
        message: this.$t('chat.defaultMessage'),
        input: '',
        muted: localStorage.getItem('muted') === 'true',
        writing: false,
        writing_text: '...',
        url: null,
        hotwordAppeared: false,
        voicesLoaded: false,
        languages: {
          "en": {
            lang: "en-GB",
            name: "Samantha"
          },
          "ca": {
            lang: "es-ES",
            name: "Monica"
          },
          "fr": {
            lang: "fr",
            name: "Amelie"
          },
          "es": {
            lang: "es-ES",
            name: "Monica"
          }
        }
      }
    },
    methods: {
      speak(text) {
        if (this.muted || !SpeechSynthesisUtterance) {
          return
        }

        const message = new SpeechSynthesisUtterance(text.replace(/<.+>/, ""))

        message.voice = this.voice
        message.volume = this.volume / 100

        window.speechSynthesis.speak(message)
      },

      mute() {
        let locale = this.$i18n.locale
        let availableInLang = this.languages[locale].lang.startsWith(locale)
        if (!availableInLang) {
          this.alertNotAvailable()
          return
        }

        this.muted = !this.muted
        localStorage.setItem('muted', this.muted)
      },

      dictate() {
        let locale = this.$i18n.locale
        let availableInLang = this.languages[locale].lang.startsWith(locale)
        if (!availableInLang) {
          this.alertNotAvailable()
          return
        }

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
            information: JSON.parse(localStorage.getItem('information')),
            locale: this.$i18n.locale
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
            message: this.$t('chat.welcome'),
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
      },

      loadSpeechApi() {
        this.message = this.$t('chat.defaultMessage')

        let locale = this.$i18n.locale
        let availableInLang = this.languages[locale].lang.startsWith(locale)
        if (!availableInLang) {
          // Mute Olivia
          this.muted = true
          localStorage.setItem('muted', this.muted)

          // Send an alert to tell the user that this lang isn't available
          this.$buefy.snackbar.open({
            message: this.$t('chat.voiceNotAvailable'),
            duration: 5000,
            position: 'is-top',
            type: 'is-warning',
          })

          return
        }

        this.loadVoice()
        this.loadRecognition()
      },

      alertNotAvailable() {
        // Send an alert to tell the user that this lang isn't available
        this.$buefy.snackbar.open({
          message: this.$t('chat.voiceNotAvailable'),
          duration: 5000,
          position: 'is-top',
          type: 'is-warning',
        })
      },

      loadVoice() {
        this.voice = speechSynthesis.getVoices().find((voice) => {
          let locale = this.$i18n.locale
          let language = this.languages[locale]

          return (voice.lang.startsWith(language.lang) && voice.name.includes("Female")) || voice.name.includes(language.name)
        })

        if (this.voice === undefined) {
          this.voice = speechSynthesis.getVoices().find(voice => {
            return (voice.lang.startsWith("en") && voice.name.includes("Female")) || voice.name.includes("Samantha")
          })
        }

        console.log(this.voice.lang + ' voice loaded.')
      },

      loadRecognition() {
        if (typeof webkitSpeechRecognition !== "undefined") {
          const SpeechRecognition = webkitSpeechRecognition
          const recognition = new SpeechRecognition()

          recognition.lang = this.languages[localStorage.getItem('language')].lang
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
      }
    },
    mounted() {
      let loader = this.$buefy.loading.open()

      if (localStorage.getItem("volume") === undefined) {
        localStorage.setItem("volume", "50")
        this.volume = 50
      }

      this.url = process.env.VUE_APP_URL
      if (this.url === undefined) {
        this.url = "wss://olivia-api.herokuapp.com"
      }
      this.url += "/websocket"

      this.createUserInformations()
      this.initSocket()

      let oldVolume
      setInterval(() => {
        this.writing_text += '.'
        if (this.writing_text.length === 4) {
          this.writing_text = '.'
        }

        // Save the volume in localStorage
        if (oldVolume !== this.volume) {
          localStorage.setItem("volume", this.volume)
        }
        oldVolume = this.volume

        if (speechSynthesis.getVoices().length !== 0 && !this.voicesLoaded) {
          this.voicesLoaded = true
          loader.close()
          this.loadSpeechApi()
        }
      }, 300)
    }
  }
</script>
