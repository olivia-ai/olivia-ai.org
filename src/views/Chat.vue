<template>
  <div>
    <div
        class="hero-body"
        style="overflow: scroll; max-height: 78vh"
        id="bubbles">
      <div class="container">
        <ul
            v-for="bubble in bubbles"
            :key="bubble.id">
          <li :class="bubble.who + ' is-dark'" :id="'message-' + bubble.id">
            {{ bubble.content }}
          </li>
        </ul>
      </div>
    </div>
    <div
        class="hero-foot"
        style="padding: 0 20px 20px 20px">
      <div class="container">
        <div class="is-boxed is-fullwidth" >
          <chat-input
              :speech.sync="speech"
              :bubbles.sync="bubbles">
          </chat-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChatInput from '../components/ChatInput'
  import chat from '../utils/chat'

  export default {
    data() {
      return {
        input: "",
        speech: {
          voice: undefined,
          recognitionEnabled: typeof webkitSpeechRecognition !== "undefined",
          isMuted: localStorage.getItem('muted') === 'true',
        },
        bubbles: []
      }
    },
    components: {
      ChatInput
    },
    mounted() {
      chat.createUserInformations()

      // Wait that the voices are loaded to choose the right one
      window.speechSynthesis.onvoiceschanged = () => {
        this.speech.voice = speechSynthesis.getVoices().find(voice => (voice.lang === "en-GB" && voice.name.includes("Female")) || voice.name.includes("Samantha"))
      }

      // If the voices didn't load send a snackbar
      chat.sleep(3000).then(() => {
        if (this.speech.voice !== undefined) return;

        chat.sendVoiceErrorMessage(this.$toast)
      })
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
    display: inline-block;
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
    color: #363636;
  }
</style>
