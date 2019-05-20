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
              this.addBubble("him", response)
            })
          },
          _ => {
            this.addBubble("him", "I can't reach the API.")
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
    font-family: Helvetica, Arial, sans-serif;
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
