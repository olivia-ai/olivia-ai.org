<template>
  <div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Documentation
        </h1>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <div v-for="doc in docs" v-bind:key="doc.id">
              <li :class="doc.active ? 'is-active' : ''">
                <a :href="'/docs/' + doc.id">
                  {{ doc.name }}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container">
        <div class="content">
          <vue-markdown :source="content">
          </vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import docs from '../../utils/docs.js'

  export default {
    data() {
      return {
        docs: [],
        content: ""
      }
    },
    components: {
      VueMarkdown
    },
    mounted() {
      this.docs = docs.getDocumentation()

      setInterval(() => {
        for (let i = 0; i < this.docs.length; i++) {
          let active = this.docs[i].id === this.$route.params.id
          if (active) this.content = this.docs[i].content
          this.docs[i].active = active
        }

        if (this.$route.params.id === undefined) {
          this.docs[0].active = true
        }
      }, 10)
    }
  }
</script>