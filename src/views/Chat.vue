<template>
  <div class="hero is-fullheight">
    <b-navbar class="is-spaced">
      <template slot="brand">
        <router-link
          class="navbar-item"
          to="/">
          <b-icon icon="arrow-left"/>
        </router-link>

        <locale-switch
          navbar
          @change="() => { loadSpeechApi() }"/>
      </template>

      <template slot="end">
        <b-icon
          class="navbar-item"
          icon="volume-high"/>

        <p class="navbar-item">
          <b-field
            expanded
            style="width: 100px">
            <b-slider
              v-model="volume"
              size="is-small"
              rounded
              lazy
              :custom-formatter="val => val + '%'"/>
          </b-field>
        </p>
      </template>
    </b-navbar>

    <audio id="sound-on">
      <source
        src="/sounds/on.mp3"
        type="audio/mpeg">
    </audio>

    <audio id="sound-off">
      <source
        src="/sounds/off.mp3"
        type="audio/mpeg">
    </audio>

    <!-- Olivia's answer -->
    <div
      id="message"
      class="hero-head"
      style="padding-top: 10vh">
      <div class="container has-text-centered">
        <div
          class="m-carl-notification-caption title"
          v-html="writing ? writing_text : message"/>
      </div>
    </div>

    <!-- Animation -->
    <div class="hero-body">
      <div class="container">
        <div class="m-carl-notification">
          <div class="m-carl-notification-cue m-cue">
            <div class="a-cue-voice">
              <div class="a-cue-voice-el"/>
              <div class="a-cue-voice-el"/>
              <div class="a-cue-voice-el"/>
              <div class="a-cue-voice-el"/>
              <div class="a-cue-voice-el"/>
            </div>

            <div
              class="a-cue-icon"
              @click="dictate()"/>
          </div>
        </div>
      </div>
    </div>

    <div
      class="hero-foot"
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

                    <b-icon
                      v-if="muted"
                      icon="volume-off"></b-icon>
                    <b-icon
                      v-else
                      icon="volume-high"></b-icon>
                  </button>
                </b-tooltip>
              </p>

              <!-- Field -->
              <p class="control is-expanded">
                <input
                  v-model="input"
                  class="input is-rounded"
                  type="text"
                  :placeholder="$t('chat.fieldPlaceholder')"
                  @keyup.enter="send()">
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
  import { createUserInformation } from '../utils/user'

  export default {
    components: { LocaleSwitch },
    data() {
      return {
        volume: 50,
        muted: localStorage.getItem('muted') === 'true',
        hotwordAppeared: false,
        voicesLoaded: false,
        languages: {
          en: {
            lang: 'en-GB',
            name: 'Samantha'
          },
          de: {
            lang: 'de-DE',
            name: 'Anna'
          },
          ca: {
            lang: 'es-ES',
            name: 'Monica'
          },
          fr: {
            lang: 'fr',
            name: 'Amelie'
          },
          es: {
            lang: 'es-ES',
            name: 'Monica'
          },
          it: {
            lang: 'it-IT',
            name: 'Alice'
          },
          'pt-br': {
            lang: 'pt',
            name: 'Joana'
          },
          'tr': {
            lang: 'tr',
            name: 'Yelda'
          }
        },

        writing: false,
        writing_text: '...',
        message: this.$t('chat.defaultMessage'),
        input: '',

        url: null
      }
    },
    mounted() {
      let loader = this.$buefy.loading.open()

      if (localStorage.getItem('volume') === undefined) {
        localStorage.setItem('volume', '50')
        this.volume = 50
      }

      this.url = process.env.VUE_APP_URL
      if (this.url === undefined) {
        this.url = 'wss://olivia-api.herokuapp.com'
      }
      this.url += '/websocket'

      createUserInformation(this)
      this.initSocket()

      let oldVolume
      setInterval(() => {
        this.writing_text += '.'
        if (this.writing_text.length === 4) {
          this.writing_text = '.'
        }

        // Save the volume in localStorage
        if (oldVolume !== this.volume) {
          localStorage.setItem('volume', this.volume)
        }
        oldVolume = this.volume

        if (speechSynthesis.getVoices().length !== 0 && !this.voicesLoaded) {
          this.voicesLoaded = true
          loader.close()
          this.loadSpeechApi()
        }
      }, 300)
    },
    methods: {
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
        this.websocket.addEventListener('open', () => {
          console.log('Websocket connection opened.')
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

      loadRecognition() {
        if (typeof webkitSpeechRecognition !== 'undefined') {
          // eslint-disable-next-line no-undef
          const SpeechRecognition = webkitSpeechRecognition
          const recognition = new SpeechRecognition()

          recognition.lang = this.languages[localStorage.getItem('language')].lang
          recognition.start()
          recognition.onresult = (event) => {
            let input = event.results[0][0].transcript

            if (this.hotwordAppeared) {
              this.hotwordAppeared = false
              document.getElementById('sound-off').play()
              this.input = input
              this.send()
            }

            if ((input === 'hi Olivia' || input === 'hey Olivia') && !this.hotwordAppeared) {
              this.hotwordAppeared = true
              document.getElementById('sound-on').play()
            }
          }

          recognition.onend = function() {
            recognition.start()
          }
        }
      },

      dictate() {
        let locale = this.$i18n.locale
        let availableInLang = this.languages[locale].lang.startsWith(locale)
        if (!availableInLang) {
          this.alertNotAvailable()
          return
        }

        this.hotwordAppeared = true
        document.getElementById('sound-on').play()
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

      loadSpeechApi() {
        this.message = this.$t('chat.defaultMessage')

        let locale = this.$i18n.locale
        let availableInLang = this.languages[locale].lang.substring(0,2) === locale.substring(0,2)
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

          return voice.name.includes(language.name)
        })

        if (this.voice === undefined) {
          this.voice = speechSynthesis.getVoices().find(voice => {
            return voice.lang.startsWith(this.$i18n.locale)
          })
        }

        console.log(this.voice.lang + ' voice loaded.')
      },

      speak(text) {
        if (this.muted || !SpeechSynthesisUtterance) {
          return
        }

        const message = new SpeechSynthesisUtterance(text.replace(/<.+>/, ''))

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
      }
    }
  }
</script>
