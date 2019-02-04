<template>
  <div>
    <div
        v-for="bubble in bubbles"
        :key="bubble.id"
        :class="'alert alert-' + (bubble.who == 'me' ? 'info' : 'normal')"
    >
      &lt;{{ bubble.who == 'me' ? 'moi' : 'Olivia' }}&gt; {{ bubble.content }}
    </div>

    <form class="form">
      <fieldset class="form-group">
        <label>Message:</label>
        <input v-model="input" id="message" type="text" class="form-control">
      </fieldset>
      <fieldset class="form-actions">
        <button type="button" @click="validate" class="btn btn-primary">Envoyer</button>
      </fieldset>
    </form>
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