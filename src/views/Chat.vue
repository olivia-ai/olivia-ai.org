<template>
  <div>

    <section class="text-center cta cta-4 space--xxs border--bottom ">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <span>This online version of Olivia is sometimes answering wrong, it's better to use Olivia locally!</span>
          </div>
        </div>
      </div>
    </section>
    <section class="switchable height-70" id="bubbles" style="overflow: auto">
      <div class="container">
        <ul v-for="bubble in bubbles" :key="bubble.id" >
          <li :class="bubble.who" :id="'message-' + bubble.id">
            {{ bubble.content }}
          </li>
        </ul>
      </div>
    </section>
    <section class="text-center height-20">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <div class="row">
              <div class="col-md-8">
                <input v-model="input" v-on:keyup.enter="validate()" type="text" placeholder="Write your message" />
              </div>
              <div :class="'col-md-' + (recorgnitionEnabled ? '2' : '4')">
                <button @click="validate()" type="submit" class="btn btn--primary type--uppercase">Send</button>
              </div>
              <div class="col-md-2" v-if="recorgnitionEnabled">
                <button @click="dictate()" type="submit" class="btn btn--primary type--uppercase">Dictate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  const voice = speechSynthesis.getVoices().find(voice => { return voice.name.includes("Samantha") })
  console.log(voice)

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
        message.voice = this.voice
        message.lang = "en-US"
        window.speechSynthesis.speak(message);
      },
      dictate() {
        let SpeechRecognition = webkitSpeechRecognition
        let recognition = new SpeechRecognition()
        recognition.lang = "en-US"
        recognition.start()
        recognition.onresult = (event) => {
          const speechToText = event.results[0][0].transcript
          this.input = speechToText
        }

        recognition.onend = () => {
          this.validate()
        }
      },
      validate() {
        let sentence = this.input

        if (sentence == "")
          return

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
          () => {
            this.addBubble("him", "I can't reach the API.")
          }
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


        const sleep = (milliseconds) => {
          return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        sleep(100).then(() => {
          // Scroll to the last message
          let bubbleElement = document.getElementById('message-' + (this.bubbles.length - 1))
          document.getElementById('bubbles').scrollTop = bubbleElement.offsetHeight + bubbleElement.offsetTop
        })

      }
    },
    mounted() {
      localStorage.setItem("authorId", Math.floor(Math.random() * 1000000000000).toString())
    }
  }
</script>

<style>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li{
    display:inline-block;
    clear: both;
    padding: 20px;
    border-radius: 30px;
    margin-bottom: 2px;
  }

  .him{
    background: #ff3aaf;
    color: #fff;
    float: left;
  }

  .me{
    float: right;
    background: #eee;
  }

  .him + .me{
    border-bottom-right-radius: 5px;
  }

  .me + .me{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .me:last-of-type {
    border-bottom-right-radius: 30px;
  }
</style>
