<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img width="450" src="../../../public/img/olivia-dashboard.png" alt="Olivia Dashboard">
          </h1>
          <div class="columns is-centered">
            <div class="column is-2">
              <b-button rounded @click="credentialsModal = true">
                <strong>Enter credentials</strong>
              </b-button>
            </div>

            <div class="column is-2">
              <b-button class="is-primary" rounded @click="intentModal = true">
                <strong>Create an intent</strong>
              </b-button>
            </div>
          </div>

          <b-modal :active.sync="intentModal"
                   has-modal-card
                   aria-role="dialog"
                   aria-modal>
            <intent v-model="url"></intent>
          </b-modal>

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
  import Intent from '../../components/Intent'

  export default {
    data() {
      return {
        intents: [],
        credentialsModal: false,
        intentModal: false,
        url: ''
      }
    },
    components: {
      Credentials,
      Intent
    },
    methods: {
      deleteIntent(tag) {
        let token = localStorage.getItem('Olivia-Token')
        this.$http.delete(this.url + '/api/intent', {
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
        this.$http.get(this.url + '/api/intents').then(data => {
          this.intents = data.body
        })
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = "https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com"
      }
      this.url = this.url.replace("ws", "http")

      this.getIntents()
    }
  }
</script>
