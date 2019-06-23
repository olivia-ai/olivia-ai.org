<template>
  <div class="hero-body">
    <div class="container">
      <div class="content" v-if="posts[routeName] !== undefined">
        <h1>{{ posts[routeName].title }}</h1>
        <p>
          <font-awesome-icon icon="clock" /> {{ posts[routeName].readingTime }}&nbsp;&nbsp;
          <font-awesome-icon icon="calendar" /> {{ posts[routeName].date }}
        </p>
        <vue-markdown :source="posts[routeName].content">
        </vue-markdown>
      </div>
      <div class="content" v-else>
        <h1>Articles</h1>
        <ul v-for="post in posts" :id="post.title">
          <li>• <a :href="'/news/' + post.id">{{ post.title }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import axios from 'axios'
  import readingTime from 'reading-time'

  export default {
    components: {
      VueMarkdown
    },
    data() {
      return {
        posts: {
        },
        routeName: this.$route.params.name
      }
    },
    mounted() {
      if (this.posts[this.routeName] === undefined)
        return

      const markdown = require('../../public/posts/' + this.routeName + '.md');

      axios.get(markdown).then(res => {
        this.posts[this.routeName].content = res.data
        this.posts[this.routeName].readingTime = readingTime(res.data).text
      })
    }
  }
</script>