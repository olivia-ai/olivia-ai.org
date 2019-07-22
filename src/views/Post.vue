<template>
  <div class="hero-body">
    <div class="container">
      <div class="content" v-if="posts[routeName] !== undefined">
        <h1 class="title">{{ posts[routeName].title }}</h1>
        <p>
          <font-awesome-icon icon="clock" /> {{ posts[routeName].readingTime }}&nbsp;&nbsp;
          <font-awesome-icon icon="calendar" /> {{ posts[routeName].date }}
        </p>
        <vue-markdown :source="posts[routeName].content">
        </vue-markdown>
      </div>
      <div v-if="posts[routeName] !== undefined">
        <router-link class="button is-primary is-rounded" to="/blog">
          <font-awesome-icon icon="long-arrow-alt-left" />&nbsp;<strong>Get back</strong>
        </router-link>
      </div>
      <div class="content" v-else>
        <h1 class="title">Articles</h1>
        <div v-for="post in posts" :key="post.title">
          <div class="card">
            <div class="card-content is-dark">
              <h2 class="is-5">
                {{ post.title }}
              </h2>
              <p>
                <font-awesome-icon icon="clock" /> {{ post.readingTime }}&nbsp;&nbsp;
                <font-awesome-icon icon="calendar" /> {{ post.date }}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  <strong><router-link class="button is-rounded is-primary" :to="'/blog/' + post.id">Read the article</router-link></strong>
                </span>
              </p>
            </footer>
          </div>
        </div>
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