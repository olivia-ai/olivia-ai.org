<template>
  <div :class="(dark ? 'dark ' : '') + 'main'">
    <div class="container">
      <div class="top">
        <span>À:
          <span class="name">Olivia</span>
        </span>
        <div @click="changeTheme" class="dark">
          <span style="cursor: pointer">Thème {{ dark ? 'clair' : 'sombre' }}</span>
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
        dark: false,
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

            new Promise((resolve) => setTimeout(resolve,Math.floor(Math.random() * (3000 - 750 + 1) + 750))).then(() => {
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
      }
    },
    mounted() {
      localStorage.setItem("authorId", Math.floor(Math.random() * 1000000000000).toString())
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .main {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }

  .main.dark {
    background-color: #2b2b2b;
  }

  .container {
    width: 55%;
    padding: 25px;
    margin-left: auto;
    margin-right: auto;
  }

  .top {
    width: 100%;
    padding: 15px 15px;
    border: 1px solid #eceff1;
    border-radius: 5px;
    background-color: #eceff1;
  }

  .main.dark .container .top {
    border-color: #444444;
    background-color: #444444;
  }

  .top span {
    font-size: 15px;
    color: #999;
  }

  .main.dark .container .top span {
    color: #cccccc;
  }

  .top span .name {
    color: #1a1a1a;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
  }

  .main.dark .container .top span .name {
    color: #fff;
  }
  
  .top .dark {
    float: right;
  }

  .messages-wrapper {
    left: 22%;
    position: fixed;
    overflow: scroll;
    height: 60%;
  }

  .bubble {
    font-size: 16px;
    position: relative;
    display: inline-block;
    clear: both;
    margin-bottom: 8px;
    padding: 13px 14px;
    vertical-align: top;
    border-radius: 5px;
  }

  .bubble:before {
    position: absolute;
    top: 19px;
    display: block;
    width: 8px;
    height: 6px;
    content: '\00a0';
    -webkit-transform: rotate(29deg) skew(-35deg);
    transform: rotate(29deg) skew(-35deg);
  }

  .bubble.you {
    float: left;
    color: #fff;
    background-color: #f41d65;
    align-self: flex-start;
    -webkit-animation-name: slideFromLeft;
    animation-name: slideFromLeft;
  }

  .bubble.you:before {
    left: -3px;
    background-color: #f41d65;
  }

  .bubble.me {
    float: right;
    color: #1a1a1a;
    background-color: #eceff1;
    align-self: flex-end;
    -webkit-animation-name: slideFromRight;
    animation-name: slideFromRight;
  }

  .bubble.me:before {
    right: -3px;
    background-color: #eceff1;
  }

  input {
    position: absolute;
    height: 40px;
    bottom: 29px;
    padding: 0 10px;
    width: 55%;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
    border: 1px solid #e6e6e6;
    background-color: #eceff1;
    border-radius: 5px;
  }

  .main.dark .container input {
    border-color: #666666;
    background-color: #444444;
    color: #ffffff;
  }

  @keyframes slideFromLeft {
    0% {
      margin-left: -200px;
      opacity: 0;
    }
    100% {
      margin-left: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes slideFromLeft {
    0% {
      margin-left: -200px;
      opacity: 0;
    }
    100% {
      margin-left: 0;
      opacity: 1;
    }
  }

  @keyframes slideFromRight {
    0% {
      margin-right: -200px;
      opacity: 0;
    }
    100% {
      margin-right: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes slideFromRight {
    0% {
      margin-right: -200px;
      opacity: 0;
    }
    100% {
      margin-right: 0;
      opacity: 1;
    }
  }
</style>