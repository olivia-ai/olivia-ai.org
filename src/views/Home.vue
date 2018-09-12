<template>
  <div :class="(dark ? 'dark ' : '') + 'main'">
    <div class="container">
      <div class="top">
        <span>À:
          <span class="name">Olivia</span>
        </span>
        <div class="dark">
          <span @click="changeTheme" style="cursor: pointer">Thème {{ dark ? 'clair' : 'sombre' }}</span>
          <span> | </span>
          <router-link to="api">API</router-link>
        </div>
      </div>
    </div>
    <div class="container messages-wrapper">
      <div v-for="bubble in bubbles" :key="bubble.id">
        <div :class="'bubble ' + bubble.who">
          {{ bubble.content }}
        </div>
      </div>
    </div>
    <div class="container">
      <input autofocus type="text" v-model="input" v-on:keyup.enter="validate"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
        dark: localStorage.getItem('dark'),
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
      },
      changeTheme() {
        this.dark = !this.dark
        localStorage.setItem('dark', this.dark)
      }
    },
    mounted() {
      localStorage.setItem("authorId", Math.floor(Math.random() * 1000000000000).toString())
    }
  }
</script>