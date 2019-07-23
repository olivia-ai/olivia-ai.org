<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h1 class="title">Articles</h1>
        <div
            v-for="post in posts"
            :key="post.title">
          <div class="notification">
            <h2 class="is-5">
              {{ post.title }}
            </h2>
            <p style="color: #363636">
              <font-awesome-icon icon="clock" /> {{ post.readingTime }}&nbsp;&nbsp;
              <font-awesome-icon icon="calendar" /> {{ post.date }}
            </p>
            <span>
              <strong>
                <router-link
                    class="button is-rounded is-primary"
                    :to="'/blog/' + post.id">
                  Read the article
                </router-link>
              </strong>
            </span>
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
        }
      }
    },
    mounted() {
      for (let postID in this.posts) {
        const markdown = require('../../public/posts/' + postID + '.md');

        axios.get(markdown).then(res => {
          this.posts[postID].content = res.data
          this.posts[postID].readingTime = readingTime(res.data).text
        })
      }
    }
  }
</script>