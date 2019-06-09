<template>
  <div>
    <div class="hero-body" style="overflow: scroll; max-height: 82vh">
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
        <div class="field is-grouped is-expanded">
          <div class="control is-expanded">
            <input class="input" v-model="input" v-on:keyup.enter="validate()" type="text" placeholder="Message">
          </div>
          <p class="control">
            <a class="button is-primary" @click="validate()">
              Send
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" @click="dictate()">
              Dictate
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let voice
  window.speechSynthesis.onvoiceschanged = () => {
    voice = speechSynthesis.getVoices().find(voice => {
      return voice.lang === "en-GB" && (voice.name.includes("Female") || voice.name.include("Samantha"))
    })
  }

  export default {
    data() {
      return {
        input: "",
        recorgnitionEnabled: typeof webkitSpeechRecognition !== "undefined",
        bubbles: []
      }
    },
    methods: {
      speak(text) {
        let message = new SpeechSynthesisUtterance(text)
        message.voice = voice
        message.lang = "en-US"
        window.speechSynthesis.speak(message);
      },
      dictate() {
        const SpeechRecognition = webkitSpeechRecognition
        let recognition = new SpeechRecognition()
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

        this.$http.post('https://olivia-api.herokuapp.com/api/response?sentence='
          + sentence + '&authorId=' + localStorage.getItem("authorId"), {emulateHTTP: true}).then(
          data => {
            let response = data.body.content

            new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (3000 - 750 + 1) + 750))).then(() => {
              this.addBubble("him", response)
            })
          },
          () => this.addBubble("him", "I can't reach the API.")
        )
      },
      addBubble(who, content) {
        if (who === "him") {
          this.speak(content)
        }

        this.bubbles.push({
          id: this.bubbles.length,
          who,
          content
        })

        this.sleep(100).then(() => {
          // Scroll to the last message
          let bubbleElement = document.getElementById('message-' + (this.bubbles.length - 1))
          document.getElementById('bubbles').scrollTop = bubbleElement.offsetHeight + bubbleElement.offsetTop
        })
      },
      sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    },
    mounted() {
      localStorage.setItem("authorId", Math.floor(Math.random() * 1000000000000).toString())
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
