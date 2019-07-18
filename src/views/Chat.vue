<template>
  <div>
    <div class="hero-body" style="overflow: scroll; max-height: 82vh" id="bubbles">
      <div class="container">
        <ul v-for="bubble in bubbles" :key="bubble.id">
          <li :class="bubble.who + ' is-dark'" :id="'message-' + bubble.id">
            {{ bubble.content }}
          </li>
        </ul>
      </div>
    </div>
    <div class="hero-foot" style="padding: 0 20px 20px 20px">
      <div class="container">
        <div class="is-boxed is-fullwidth" >
          <div class="field has-addons">
            <b-tooltip :label="status.text" :type="status.color">
              <b-tag :type="status.color" rounded>{{ status.face }}</b-tag>
            </b-tooltip>
          </div>
          <div class="field has-addons">
            <p class="control">
              <b-tooltip :label="this.speech.isMuted ? 'Make Olivia speak again' : 'Mute Olivia'"
                         animated>
                <button class="button is-primary" @click="mute()">
                  <font-awesome-icon :icon="this.speech.isMuted ? 'volume-mute' : 'volume-up'" />
                </button>
              </b-tooltip>
            </p>
            <p class="control has-icons-left has-icons-right is-expanded">
              <input class="input"
                     type="text"
                     v-model="input"
                     v-on:keyup.enter="validate()"
                     placeholder="Message"/>
              <span class="icon is-small is-left">
              <font-awesome-icon icon="comment" />
            </span>
            </p>
            <p class="control">
              <button class="button is-primary" @click="validate()">
                <font-awesome-icon icon="paper-plane" />
              </button>
            </p>
            <p class="control" v-if="speech.recognitionEnabled">
              <b-tooltip label="Just click and speak"
                         animated>
                <button class="button is-twitter" @click="dictate()">
                  <font-awesome-icon icon="microphone" />
                </button>
              </b-tooltip>
            </p>
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
        input: "",
        speech: {
          voice: undefined,
          recognitionEnabled: typeof webkitSpeechRecognition !== "undefined",
          isMuted: localStorage.getItem('muted'),
        },
        status: {
          face: '눈_눈',
          color: 'is-danger',
          text: 'Connection closed :('
        },
        bubbles: [],
        information: localStorage.getItem('information')
      }
    },
    methods: {
      mute() {
        this.speech.isMuted = !this.speech.isMuted
        localStorage.setItem('muted', this.speech.isMuted)
      },
      speak(text) {
        if (this.speech.isMuted) return;

        const message = new SpeechSynthesisUtterance(text)
        message.voice = this.speech.voice
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

        recognition.onend = () => this.validate()
      },
      validate() {
        const sentence = this.input

        if (sentence === "") return

        this.addBubble("me", sentence)
        this.input = ""

        this.websocket.send(
          JSON.stringify({
              content: sentence,
              user_token: localStorage.getItem('token'),
              information: JSON.parse(localStorage.getItem('information'))
          })
        )
      },
      addBubble(who, content) {
        if (who === "him")
          this.speak(content)

        this.bubbles.push({
          id: this.bubbles.length,
          who,
          content
        })

        this.sleep(100).then(() => {
          // Scroll to the last message
          const bubbleElement = document.getElementById('message-' + (this.bubbles.length - 1))
          document.getElementById('bubbles').scrollTop = bubbleElement.offsetHeight + bubbleElement.offsetTop
        })
      },
      websocketStatus() {
        let state = this.websocket.readyState

        switch (state) {
          case 0:
            this.status = {
              face: '(ᵔᴥᵔ)',
              color: 'is-warning',
              text: 'Connecting...'
            }
            break
          case 1:
            this.status = {
              face: '•ᴗ•',
              color: 'is-success',
              text: 'Connected!'
            }
            break
          case 2:
            this.status = {
              face: '⇀_↼',
              color: 'is-warning',
              text: 'Closing :/'
            }
            break
          case 3:
            this.status = {
              face: '눈_눈',
              color: 'is-danger',
              text: 'Closed :('
            }
            break
        }
      },
      sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      },
      generateToken(n) {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_)°^¨$*£ù%=+:/;.,?-(}{[]&é@#'
        let token = ''
        for (let i = 0; i < n; i++) {
          token += chars[Math.floor(Math.random() * chars.length)]
        }

        return token
      }
    },
    mounted() {
      // Generate the token
      if (localStorage.getItem('token') == null) {
        localStorage.setItem('token', this.generateToken(200))
      }

      if (localStorage.getItem('information') == null) {
        localStorage.setItem('information', JSON.stringify({
          name: ''
        }))
      }

      // Wait that the voices are loaded to choose the right one
      window.speechSynthesis.onvoiceschanged = () => {
        this.speech.voice = speechSynthesis.getVoices().find(voice => (voice.lang === "en-GB" && voice.name.includes("Female")) || voice.name.includes("Samantha"))
      }

      // Initializes the connection with the websocket
      this.websocket = new WebSocket('wss://olivia-api.herokuapp.com/')
      // Add a bubble when the websocket receives a response
      this.websocket.addEventListener('message', e => {
        setTimeout(() => {
          let data = JSON.parse(e.data)
          this.addBubble('him', data['content'])
          localStorage.setItem('information', JSON.stringify(data['information']))
        }, Math.floor(Math.random() * (3000 - 750 + 1) + 750))
      })

      setTimeout(() => {
        this.websocketStatus()
      }, 1000)

      // If the voices didn't load send a snackbar
      this.sleep(3000).then(() => {
        if (this.speech.voice !== undefined) return;

        this.$toast.open({
          duration: 5000,
          message: `Olivia's voice cannot load, her voice is now the default english one.`,
          position: 'is-top',
          type: 'is-danger'
        })
      })
    }
  }
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    clear: both;
    padding: 20px;
    border-radius: 30px;
    margin-bottom: 2px;
  }

  .him {
    background: #ff3aaf;
    color: #fff;
    float: left;
  }

  .me {
    float: right;
    background: #eee;
    color: #363636;
  }
</style>
