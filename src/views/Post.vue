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
      <div v-if="posts[routeName] !== undefined">
        <a class="button is-primary is-rounded" href="/blog">
          <font-awesome-icon icon="long-arrow-alt-left" />&nbsp;<strong>Get back</strong>
        </a>
      </div>
      <div class="content" v-else>
        <h1>Articles</h1>
        <div v-for="post in posts" :id="post.title">
          <div class="card">
            <div class="card-content">
              <p class="title is-5">
                {{ post.title }}
              </p>
              <p>
                <font-awesome-icon icon="clock" /> {{ post.readingTime }}&nbsp;&nbsp;
                <font-awesome-icon icon="calendar" /> {{ post.date }}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  <strong><a class="button is-rounded is-primary" :href="'/blog/' + post.id">Read the article</a></strong>
                </span>
              </p>
            </footer>
          </div>
        </div>
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