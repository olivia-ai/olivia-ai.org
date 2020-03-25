<template>
  <div class="hero">
    <div class="hero-body">
      <div class="columns is-multiline is-centered">
        <div class="column is-4" v-for="post in posts" :key="post.name">
          <router-link :to="'/blog/' + post.path">
            <!-- POST CARD -->
            <div class="card">
              <!-- THUMBMAIL -->
              <div class="card-image">
                <figure class="image">
                  <img :src="'/blog/' + post.path + '/thumbmail.png'" alt="Thumbmail">
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

                <!-- CONTENT -->
                <div class="content">
                  {{ post.description }}
                </div>

                <!-- AUTHOR -->
                <div class="columns is-vcentered">
                  <div class="column">
                    <a :href="post.author.link">
                      <b-tooltip :label="post.author.name">
                        <figure class="image is-48x48">
                          <img class="is-rounded" :src="post.author.picture">
                        </figure>
                      </b-tooltip>
                    </a>
                  </div>
                  <div class="column">
                    <font-awesome-icon icon="calendar" /> {{ post.date }}
                  </div>
                </div>
              </div>
            </div>
          </router-link>
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
