<template>
  <div>
    <h1>Olivia</h1>

    <div class="grid">
      <div class="cell -3of12">
        <div class="card">
          <header class="card-header">menu</header>
          <div class="card-content">
            <div class="inner">
              <div class="menu">
                <a class="menu-item">
                  boîte de chat<div class="pull-right">»</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cell -8of12">
        <div class="content">8</div>
      </div>
    </div>
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