<template>
  <div>
    <div class="hero">
      <div class="hero-body has-text-centered">
        <h1 class="title">
          <img
            width="335"
            src="/img/olivia-blog.png"
            alt="Olivia Dashboard">
        </h1>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-centered">
            <div
              v-for="post in posts"
              :key="post.name"
              class="column is-4">
              <router-link :to="`/blog/${post.path}`">
                <!-- POST CARD -->
                <div class="new-card">
                  <!-- THUMBMAIL -->
                  <div class="card-image">
                    <figure class="image">
                      <img
                        :src="`/blog/${post.path}/thumbmail.png`"
                        :alt="`Thumbnail: ${post.name}`"
                        style="border-radius: 10px;">
                    </figure>
                  </div>

                  <!-- POST CONTENT -->
                  <div class="card-content">
                    <!-- TITLE -->
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">
                          {{ post.name }}
                        </p>
                      </div>
                    </div>

                    <br>

                    <!-- CONTENT -->
                    <div class="content">
                      {{ post.description }}
                    </div>

                    <!-- AUTHOR -->
                    <div class="columns is-vcentered">
                      <div class="column">
                        <a :href="post.author.link">
                          <p class="image is-32x32">
                            <img :src="post.author.picture">
                          </p>
                        </a>
                      </div>
                      <div
                        class="column"
                        style="align: right">
                        <i class="mdi mdi-calendar"/> {{ post.date }}
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../../plugins/posts.js'

export default {
  data() {
    return {
      posts: posts.posts
    }
  }
}
</script>
