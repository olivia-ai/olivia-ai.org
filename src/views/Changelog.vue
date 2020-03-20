<template>
  <div class="hero">
    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="timeline">
            <header class="timeline-header">
              <span class="tag is-medium is-primary">2020</span>
            </header>
            <div class="timeline-item is-primary">
              <div class="timeline-marker is-primary"></div>
              <div class="timeline-content">
                <p class="heading">March 2020</p>
                <p class="content">
                  <vue-markdown :source="march2020">
                  </vue-markdown>
                </p>
              </div>
            </div>

            <div class="timeline-item is-primary">
              <div class="timeline-marker is-primary"></div>
              <div class="timeline-content">
                <p class="heading">January 2020</p>
                <p class="content">
                  <vue-markdown :source="january2020">
                  </vue-markdown>
                </p>
              </div>
            </div>

            <header class="timeline-header">
              <span class="tag is-primary">2019</span>
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
  import Navbar from '../components/Navbar'

  export default {
    data() {
      return {
        august2019: 'Loading...',
        march2020: 'Loading...',
        january2020: 'Loading...'
      }
    },
    components: {
      VueMarkdown,
      Navbar
    },
    mounted() {
      import('../../public/changelog/august-2019.md').then(res => this.august2019 = res.default)
      import('../../public/changelog/january-2020.md').then(res => this.january2020 = res.default)
      import('../../public/changelog/march-2020.md').then(res => this.march2020 = res.default)
    }
  }
</script>
