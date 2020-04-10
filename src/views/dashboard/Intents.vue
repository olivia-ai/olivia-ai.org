<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img width="450" src="../../../public/img/olivia-dashboard.png" alt="Olivia Dashboard">
          </h1>
        </div>
      </div>
    </section>

    <br>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3 has-text-centered" v-for="intent in intents" :key="intent.tag">
          <div class="tile is-child notification">
            <p class="title">
              {{ intent.tag }} <font-awesome-icon icon="clone" class="is-pink" v-if="intent.context != ''"/>
            </p>

            <p class="subtitle">
              <font-awesome-icon icon="reply-all" class="is-pink"/> {{ intent.responses.length }} •
              <font-awesome-icon icon="comment" class="is-pink"/> {{ intent.patterns.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 20px;
  }
</style>


<script>
  export default {
    data() {
      return {
        intents: []
      }
    },
    async mounted() {
      this.$http.get('http://localhost:8080/api/intents').then(data => {
        this.intents = data.body
      })
    }
  }
</script>
