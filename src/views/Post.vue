<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h1 class="title">{{ posts[routeName].title }}</h1>
        <p>
          <font-awesome-icon icon="clock" /> {{ posts[routeName].readingTime }}&nbsp;&nbsp;
          <font-awesome-icon icon="calendar" /> {{ posts[routeName].date }}
        </p>
        <vue-markdown :source="posts[routeName].content">
        </vue-markdown>
      </div>
      <div>
        <router-link class="button is-primary is-rounded" to="/blog">
          <font-awesome-icon icon="long-arrow-alt-left" />&nbsp;<strong>Get back</strong>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
  .hero.is-dark .card .title {
    color: #363636;
  }

  .is-5.is-dark {
    color: #F5F5F5;
  }
</style>

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
          'the-story-of-olivia': {
            id: 'the-story-of-olivia',
            title: 'The story of Olivia',
            date: 'June 23, 2019',
            readingTime: '',
            content: ''
          }
        },
        routeName: this.$route.params.name
      }
    },
    mounted() {
      console.log(this.$route)
      for (let postId in this.posts) {
        const markdown = require('../../public/posts/' + postId + '.md');

        axios.get(markdown).then(res => {
          this.posts[postId].content = res.data
          this.posts[postId].readingTime = readingTime(res.data).text
        })
      }
    }
  }
</script>