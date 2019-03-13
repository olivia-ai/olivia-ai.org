<template>
  <div>
    <section class="cover height-100 switchable switchable--switch bg--secondary text-center-xs">
      <div class="container pos-vertical-center">
        <div class="row align-items-center justify-content-around">
          <div class="col-md-6 col-lg-5">
            <h1>
              Your new open-source best friend
            </h1>
            <p class="lead">
              Enjoy the pleasure of chatting with a contextual open-source chatbot
            </p>
            <a class="btn btn--primary type--uppercase" href="#">
              <span class="btn__text">
                Chat online
              </span>
            </a>
            <span class="block type--fine-print">or
              <a href="#">host olivia yourself</a>
            </span>
          </div>
          <div class="col-md-6">
            <img alt="Olivia character" src="img/icons/olivia.png"/>
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
        var sentence = this.input

        if (sentence == "")
          return

        this.addBubble("me", this.input)
        this.input = ""

        this.$http.post('https://olivia-api.herokuapp.com/api/response?sentence='
          + sentence + '&authorId=' + localStorage.getItem("authorId"), {emulateHTTP: true}).then(
          data => {
            var response = data.body.content

            new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (3000 - 750 + 1) + 750))).then(() => {
              this.addBubble("you", response)
            })
          },
          _ => {
            this.addBubble("you", "Je ne peux pas répondre, l'api est indisponible")
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