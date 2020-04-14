<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img width="450" src="../../../public/img/olivia-dashboard.png" alt="Olivia Dashboard">
          </h1>
          <b-button class="is-primary" rounded @click="credentialsModal = true">
            <strong>Enter credentials</strong>
          </b-button>
          <b-modal :active.sync="credentialsModal"
                   has-modal-card
                   trap-focus
                   aria-role="dialog"
                   aria-modal>
            <credentials></credentials>
          </b-modal>
        </div>
      </div>
    </section>

    <br>
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-3 " v-for="intent in intents" :key="intent.tag">
          <div class="tile is-child notification">
            <button class="delete" @click="deleteIntent(intent.tag)"></button>
            <p class="title">
              <b-tooltip label="Tag" v-if="intent.context == ''">
                <font-awesome-icon icon="tags" class="is-pink"/>
              </b-tooltip>
              <b-tooltip label="Contextual tag" v-else>
                <font-awesome-icon icon="clone" class="is-pink"/>
              </b-tooltip>
              {{ intent.tag }}
            </p>
            <p class="subtitle">
              “{{ intent.patterns[0] }}”
            </p>
            <p class="subtitle">
              <b-tooltip label="Number of responses">
                <font-awesome-icon icon="reply-all" class="is-pink" style="font-size: 20px;"/>
              </b-tooltip>
              {{ intent.responses.length }} — 
              <b-tooltip label="Number of patterns">
                <font-awesome-icon icon="clone" class="is-pink" style="font-size: 20px;"/>
              </b-tooltip>
              {{ intent.patterns.length }}
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
    font-size: 30px;
  }
</style>

<script>
  import Credentials from '../../components/Credentials'

  export default {
    data() {
      return {
        intents: [],
        credentialsModal: false
      }
    },
    components: {
      Credentials
    },
    methods: {
      deleteIntent(tag) {
        let token = localStorage.getItem('Olivia-Token')
        this.$http.delete('http://localhost:8080/api/intent', {
          body: {
            tag
          },
          headers: {
            'Olivia-Token': token
          }
        }).then(data => {
          if (data.body.message !== undefined) {
            this.$buefy.snackbar.open({
              message: data.body.message,
              type: 'is-warning',
              position: 'is-top'
            })
          }

          this.getIntents()
        })
      },

      getIntents() {
        this.$http.get('http://localhost:8080/api/intents').then(data => {
          this.intents = data.body
        })
      }
    },
    mounted() {
      this.getIntents()
    }
  }
</script>
