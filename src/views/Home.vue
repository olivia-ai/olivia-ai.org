<template>
  <div class="wrapper">
    <div class="container">
      <div class="right">
        <div class="top"><span>À: <span class="name">Olivia</span></span></div>
        <div class="chat active-chat" data-chat="person1">
          <div class="conversation-start"><span>Aujourd'hui</span></div>
          <div v-for="bubble in bubbles" :key="bubble.id">
            <div :class="'bubble ' + bubble.who">{{ bubble.content }}</div>
          </div>
        </div>
        <div class="write">
          <input type="text" v-model="input" v-on:keyup.enter="validate"/>
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
        bubbles: []
      }
    },
    methods: {
      validate() {
        this.addBubble("me", this.input)

        this.$http.post('https://olivia.cleverapps.io/api/response?sentence='
          + this.input + '&authorId=' + localStorage.getItem("authorId")).then(
          data => {
            var response = data.body.content
            this.input = ""

            new Promise((resolve) => setTimeout(resolve,Math.floor(Math.random() * (3000 - 750 + 1) + 750))).then(() => {
              this.addBubble("you", response)
            })
          },
          error => {
            console.log(error)
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

<style>
  @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    background-size: cover;
  }

  .wrapper {
    position: relative;
    left: 50%;
    width: 60%;
    height: 800px;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .container {
    position: relative;
    top: 40%;
    left: 50%;
    width: 80%;
    height: 75%;
    background-color: #fff;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .container .left input:focus {
    outline: none;
  }

  .container .right {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
  }

  .container .right .top {
    width: 100%;
    height: 47px;
    padding: 15px 29px;
    background-color: #eceff1;
  }

  .container .right .top span {
    font-size: 15px;
    color: #999;
  }

  .container .right .top span .name {
    color: #1a1a1a;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
  }

  .container .right .chat {
    position: relative;
    display: none;
    overflow: hidden;
    padding: 0 35px 92px;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #e6e6e6;
    height: calc(100% - 48px);
    justify-content: flex-end;
    flex-direction: column;
  }

  .container .right .chat.active-chat {
    display: block;
    display: flex;
  }

  .container .right .chat.active-chat .bubble {
    transition-timing-function: cubic-bezier(0.4, -0.04, 1, 1);
  }

  .container .right .chat.active-chat .bubble:nth-of-type(1) {
    -webkit-animation-duration: 0.15s;
    animation-duration: 0.15s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(2) {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(3) {
    -webkit-animation-duration: 0.45s;
    animation-duration: 0.45s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(4) {
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(5) {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(6) {
    -webkit-animation-duration: 0.9s;
    animation-duration: 0.9s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(7) {
    -webkit-animation-duration: 1.05s;
    animation-duration: 1.05s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(8) {
    -webkit-animation-duration: 1.2s;
    animation-duration: 1.2s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(9) {
    -webkit-animation-duration: 1.35s;
    animation-duration: 1.35s;
  }

  .container .right .chat.active-chat .bubble:nth-of-type(10) {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }

  .container .right .write {
    position: absolute;
    bottom: 29px;
    left: 30px;
    height: 42px;
    padding-left: 8px;
    border: 1px solid #e6e6e6;
    background-color: #eceff1;
    width: calc(100% - 58px);
    border-radius: 5px;
  }

  .container .right .write input {
    font-size: 16px;
    float: left;
    width: 347px;
    height: 40px;
    padding: 0 10px;
    color: #1a1a1a;
    border: 0;
    outline: none;
    background-color: #eceff1;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  .container .right .bubble {
    font-size: 16px;
    position: relative;
    display: inline-block;
    clear: both;
    margin-bottom: 8px;
    padding: 13px 14px;
    vertical-align: top;
    border-radius: 5px;
  }

  .container .right .bubble:before {
    position: absolute;
    top: 19px;
    display: block;
    width: 8px;
    height: 6px;
    content: '\00a0';
    -webkit-transform: rotate(29deg) skew(-35deg);
    transform: rotate(29deg) skew(-35deg);
  }

  .container .right .bubble.you {
    float: left;
    color: #fff;
    background-color: #00b0ff;
    align-self: flex-start;
    -webkit-animation-name: slideFromLeft;
    animation-name: slideFromLeft;
  }

  .container .right .bubble.you:before {
    left: -3px;
    background-color: #00b0ff;
  }

  .container .right .bubble.me {
    float: right;
    color: #1a1a1a;
    background-color: #eceff1;
    align-self: flex-end;
    -webkit-animation-name: slideFromRight;
    animation-name: slideFromRight;
  }

  .container .right .bubble.me:before {
    right: -3px;
    background-color: #eceff1;
  }

  .container .right .conversation-start {
    position: relative;
    width: 100%;
    margin-bottom: 27px;
    text-align: center;
  }

  .container .right .conversation-start span {
    font-size: 14px;
    display: inline-block;
    color: #999;
  }

  .container .right .conversation-start span:before, .container .right .conversation-start span:after {
    position: absolute;
    top: 10px;
    display: inline-block;
    width: 30%;
    height: 1px;
    content: '';
    background-color: #e6e6e6;
  }

  .container .right .conversation-start span:before {
    left: 0;
  }

  .container .right .conversation-start span:after {
    right: 0;
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