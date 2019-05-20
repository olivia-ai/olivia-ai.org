<template>
  <div>
    <section class="text-center height-10">
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-12">
            <h1>
              Hi there, I'm <span class="color--primary">Olivia</span>.
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="switchable height-60" id="bubbles" style="overflow: auto">
      <div class="container">
        <ul v-for="bubble in bubbles" :key="bubble.id" >
          <li :class="bubble.who">
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
              <div class="col-md-2">
                <button @click="validate()" type="submit" class="btn btn--primary type--uppercase">Send</button>
              </div>
              <div class="col-md-2">
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
  let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

  export default {
    data() {
      return {
        input: "",
        voice: null,
        bubbles: []
      }
    },
    methods: {
      speak(text) {
        let message = new SpeechSynthesisUtterance(text)
        message.voice = speechSynthesis.getVoices()[33]
        message.lang = "en-GB"
        window.speechSynthesis.speak(message);
      },
      dictate() {
        let recognition = new SpeechRecognition()
        recognition.lang = "en-GB"
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
