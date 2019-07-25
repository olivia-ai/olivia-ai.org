<template>
  <div class="hero-body">
    <div class="container">
      <div class="content">
        <h1 class="title">{{ post.title }}</h1>
        <p>
          <font-awesome-icon icon="clock" /> {{ post.readingTime }}&nbsp;&nbsp;
          <font-awesome-icon icon="calendar" /> {{ post.date }}
        </p>
        <vue-markdown :source="post.content">
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

<script>
  import VueMarkdown from 'vue-markdown'
  import blog from '../../utils/blog.js'

  export default {
    data() {
      return {
        post: {}
      }
    },
    components: {
      VueMarkdown
    },
    mounted() {
      this.post = blog.findPostByID(this.$route.params.id)
    }
  }
</script>