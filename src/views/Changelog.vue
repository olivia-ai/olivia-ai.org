<template>
  <div class="hero">
    <b-navbar class="is-spaced">
      <template slot="brand">
        <router-link
            class="navbar-item"
            to="/">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>
        </router-link>
      </template>
    </b-navbar>

    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="timeline">
            <header class="timeline-header">
              <span class="tag is-medium is-primary">Latest</span>
            </header>
            <div class="timeline-item is-primary">
              <div class="timeline-marker is-primary"></div>
              <div class="timeline-content">
                <p class="heading">August 2019</p>
                <p class="content">
                  <vue-markdown :source="august2019">
                  </vue-markdown>
                </p>
              </div>
            </div>
            <header class="timeline-header">
              <span class="tag is-primary">2019</span>
            </header>
            <div class="timeline-item">

            </div>
            <header class="timeline-header">
              <span class="tag is-primary">2018</span>
            </header>
            <div class="timeline-item">

            </div>
            <header class="timeline-header">
              <span class="tag is-primary">2017</span>
            </header>
            <div class="timeline-item">

            </div>
            <header class="timeline-header">
              <span class="tag is-medium is-primary">Start</span>
            </header>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    data() {
      return {
        august2019: 'Loading...'
      }
    },
    components: {
      VueMarkdown
    },
    mounted() {
      import('../../public/changelog/august-2019.md').then(res => this.august2019 = res.default)
    }
  }
</script>
