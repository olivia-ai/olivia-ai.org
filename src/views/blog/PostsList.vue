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
  import blog from '../../utils/blog.js'

  export default {
    data() {
      return {
        posts: blog.getPosts()
      }
    }
  }
</script>