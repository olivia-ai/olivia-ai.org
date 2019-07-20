<template>
  <div>
    <div class="field is-grouped">
      <div class="control">
        <b-tooltip
            :label="status.text"
            :type="status.color">
          <b-tag
              :type="status.color"
              rounded>
            {{ status.face }}
          </b-tag>
        </b-tooltip>
      </div>
      <div class="control" style="height: 28px">
        <div v-if="writing">
          <div class="writing-effect">
            <div></div><div></div><div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="field has-addons">
      <p class="control">
        <b-tooltip
            :label="this.speech.isMuted ? 'Make Olivia speak again' : 'Mute Olivia'"
            animated>
          <button
              class="button is-primary is-rounded"
              @click="mute()">
            <font-awesome-icon :icon="this.speech.isMuted ? 'volume-mute' : 'volume-up'" />
          </button>
        </b-tooltip>
      </p>
      <p class="control has-icons-left has-icons-right is-expanded">
        <input
            class="input"
            type="text"
            v-model="input"
            v-on:keyup.enter="validate()"
            placeholder="Message"/>
        <span class="icon is-small is-left">
          <font-awesome-icon icon="comment" />
        </span>
      </p>
      <p class="control">
        <button
            class="button is-primary"
            @click="validate()">
          <font-awesome-icon icon="paper-plane" />
        </button>
      </p>
      <p
          class="control"
          v-if="speech.recognitionEnabled">
        <b-tooltip
            label="Just click and speak"
            animated>
          <button
              class="button is-twitter is-rounded"
              @click="dictate()">
            <font-awesome-icon icon="microphone" />
          </button>
        </b-tooltip>
      </p>
    </div>
  </div>
</template>

<script>
  import chat from '../utils/chat'

  export default {
    props: {
      speech: Object,
      bubbles: Array
    },
    data() {
      return {
        input: '',
        writing: false,
        status: {
          face: '눈_눈',
          color: 'is-danger',
          text: 'Connection closed :('
        }
      }
    },
    methods: {
      validate() {
        let text = this.input
        if (text === "") {
          return
        }

        this.addBubble("me", text)
        this.input = ""

        if (this.websocket.readyState === this.websocket.CLOSED) {
          chat.sendClosedWebsocketErrorMessage(this.$toast)
          return
        }

        this.writing = true

        this.websocket.send(
          JSON.stringify({
            content: text,
            user_token: localStorage.getItem('token'),
            information: JSON.parse(localStorage.getItem('information'))
          })
        )
      },

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

      addBubble(who, content) {
        if (who === "him")
          this.speak(content)

        this.bubbles.push({
          id: this.bubbles.length,
          who,
          content
        })

        chat.sleep(100).then(() => {
          // Scroll to the last message
          const bubbleElement = document.getElementById('message-' + (this.bubbles.length - 1))
          document.getElementById('bubbles').scrollTop = bubbleElement.offsetHeight + bubbleElement.offsetTop
        })
      }
    },
    mounted() {
      // Initializes the connection with the websocket
      this.websocket = new WebSocket('wss://olivia-api.herokuapp.com/')
      // Add a bubble when the websocket receives a response
      this.websocket.addEventListener('message', e => {
        setTimeout(() => {
          let data = JSON.parse(e.data)
          this.writing = false
          this.addBubble('him', data['content'])
          localStorage.setItem('information', JSON.stringify(data['information']))
        }, Math.floor(Math.random() * 3000))
      })

      // Change the websocket status
      setInterval(() => {
        this.status = chat.getStatus(this.websocket)
      }, 1000)
    }
  }
</script>