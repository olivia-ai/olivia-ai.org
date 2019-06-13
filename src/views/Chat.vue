<template>
  <div>
    <div class="hero-body" style="overflow: scroll; max-height: 82vh" id="bubbles">
      <div class="container">
        <ul v-for="bubble in bubbles" :key="bubble.id">
          <li :class="bubble.who" :id="'message-' + bubble.id">
            {{ bubble.content }}
          </li>
        </ul>
      </div>
    </div>
    <div class="hero-foot" style="padding: 0 20px 20px 20px">
      <div class="is-boxed is-fullwidth" >
        <div class="field has-addons">
          <p class="control">
            <b-tooltip :label="this.isMuted ? 'Make Olivia speak again' : 'Mute Olivia'"
                       animated>
              <button class="button is-primary" @click="mute()">
                <font-awesome-icon :icon="this.isMuted ? 'volume-mute' : 'volume-up'" />
              </button>
            </b-tooltip>
          </p>
          <p class="control has-icons-left has-icons-right is-expanded">
            <input class="input" type="text" v-model="input" v-on:keyup.enter="validate()" placeholder="Message">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="comment" />
            </span>
          </p>
          <p class="control">
            <button class="button is-primary" @click="validate()">
              <font-awesome-icon icon="paper-plane" />
            </button>
          </p>
          <p class="control" v-if="recorgnitionEnabled">
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
</template>
<script>
  export default {
    data() {
      return {
        input: "",
        voice: undefined,
        recorgnitionEnabled: typeof webkitSpeechRecognition !== "undefined",
        bubbles: [],
        isMuted: localStorage.getItem('muted')
      }
    },
    methods: {
      mute() {
        this.isMuted = !this.isMuted
        localStorage.setItem('muted', this.isMuted)
      },
      speak(text) {
        if (this.isMuted) return;

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
          const speechToText = event.results[0][0].transcript
          this.input = speechToText
        }

        recognition.onend = () => this.validate()
      },
      validate() {
        const sentence = this.input

        if (sentence == "") {
          return
        }

        this.addBubble("me", sentence)
        this.input = ""

        let formData = new FormData()
        formData.append('sentence', sentence)
        formData.append('authorId', localStorage.getItem("authorId"))

        this.$http.post('https://olivia-api.herokuapp.com/api/response', formData).then(
          data => {
            const response = data.body.content

            new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (3000 - 750 + 1) + 750))).then(() => {
              this.addBubble("him", response)
            })
          },
          () => {
            this.$snackbar.open({
              duration: 5000,
              message: "Cannot reach Oliva's API",
              type: 'is-danger',
              position: 'is-top',
              actionText: 'Close',
              queue: false
            })
          }
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
      sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    },
    mounted() {
      localStorage.setItem("authorId", Math.floor(Math.random() * 1000000000000).toString())

      window.speechSynthesis.onvoiceschanged = () => {
        this.voice = speechSynthesis.getVoices().find(voice => (voice.lang === "en-GB" && voice.name.includes("Female")) || voice.name.includes("Samantha"))
      }

      this.sleep(3000).then(() => {
        if (this.voice !== undefined) return;
        
        this.$snackbar.open({
          duration: 5000,
          message: "Olivia's voice cannot load, the voice is now the default english one.",
          type: 'is-danger',
          position: 'is-top',
          actionText: 'Close',
          queue: false
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
    display:inline-block;
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
  }

  .him + .me {
    border-bottom-right-radius: 5px;
  }

  .me + .me {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .me:last-of-type {
    border-bottom-right-radius: 30px;
  }
</style>
