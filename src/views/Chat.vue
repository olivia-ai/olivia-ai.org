<template>
  <div>
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>
              Hi there, I'm <span class="color--primary">Olivia</span>.
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="switchable" style="height: 250px; overflow: auto;">
      <div v-for="bubble in bubbles" :key="bubble.id" class="container">
        <div class="testimonial testimonial-2">
          <div class="testimonial__body boxed boxed--border bg--secondary"
               :style="'width: 400px;' + (bubble.who === 'me' ? 'float: right;' : '')">
            <p class="lead">
              {{ bubble.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <div class="row">
              <div class="col-md-8">
                <input v-model="input" type="text" placeholder="Write your message" />
              </div>
              <div class="col-md-4">
                <button @click="validate()" type="submit" class="btn btn--primary type--uppercase">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: "",
        bubbles: []
      }
    },
    methods: {
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
              this.addBubble("you", response)
            })
          },
          _ => {
            this.addBubble("you", "I can't reach the API.")
          }
        )
      },
      addBubble(who, content) {
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