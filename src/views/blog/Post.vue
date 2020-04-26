<template>
  <div>
    <!-- POST TITLE -->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <span>
            <strong
              class="is-pink"
              style="font-size: 15px;">
              {{ post.date }}
            </strong>
          </span>
          <h1 class="title">
            {{ post.name }}
          </h1>
        </div>

        <br><br><br>

        <!-- POST CONTENT -->
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-10">
              <!-- MARKDOWN -->
              <p class="content">
                <vue-markdown :source="post.content"/>
              </p>

              <!-- AUTHOR MEDIA -->
              <br>
              <a :href="post.author.link">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        class="is-rounded"
                        :src="post.author.picture">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{ post.author.name }}</p>
                    <p class="subtitle is-6 is-pink">{{ post.author.id }}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Navbar from '../../components/Navbar'
import VueMarkdown from 'vue-markdown'
import posts from '../../plugins/posts.js'

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      posts: posts.posts,
      post: {}
    }
  },
  mounted() {
    this.posts.forEach(post => {
      if (post.path === this.$route.params.id) {
        this.post = post
      }
    })
  }
}
</script>
