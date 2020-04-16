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

            <div class="column is-2" v-if="token != undefined">
              <b-button class="is-primary" rounded @click="createIntentModal = true">
                <strong>Create an intent</strong>
              </b-button>
            </div>

            <div class="column is-2" v-if="token != undefined">
              <b-button
                        icon-left="sync"
                        rounded
                        @click="syncNetwork()"
                        v-if="token != undefined"
                        style="float: right">
                <strong>Sync the model</strong>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-3" v-for="intent in intents" :key="intent.tag">
              <b-modal :active.sync="intent.active"
                       has-modal-card
                       trap-focus
                       aria-role="dialog"
                       aria-modal>
                <div class="card new-card">
                  <p span="title">{{ intent.tag }}</p>
                </div>
              </b-modal>

              <div class="card new-card">
                <div class="card-content">
                  <p class="title">
                    <b-tooltip label="Tag" v-if="intent.context == ''">
                      <b-icon size="is-medium" class="is-pink" icon="tag-multiple"></b-icon>
                    </b-tooltip>
                    <b-tooltip label="Contextual tag" v-else>
                      <b-icon size="is-medium" class="is-pink" icon="content-copy"></b-icon>
                    </b-tooltip>
                    {{ intent.tag }}
                    <a @click="openIntentModal(intent)">
                      <b-icon style="float: right"
                              class="is-pink"
                              icon="menu"
                      >
                      </b-icon>
                    </a>
                  </p>
                  <p class="subtitle">
                    {{ intent.patterns[0] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal :active.sync="createIntentModal"
             has-modal-card
             aria-role="dialog"
             aria-modal>
      <create-intent v-model="url"></create-intent>
    </b-modal>

    <b-modal :active.sync="credentialsModal"
             has-modal-card
             trap-focus
             aria-role="dialog"
             aria-modal>
      <credentials></credentials>
    </b-modal>
  </div>
</template>

<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 30px;
  }

  .new-card {
    border-radius: 10px;
    -webkit-box-shadow: none;
    box-shadow: none;
    background-color: #f5f5f5;
  }
</style>

<script>
  import Credentials from '../../components/Credentials'
  import CreateIntent from '../../components/CreateIntent'
  import ModalIntent from '../../components/Intent'

  export default {
    data() {
      return {
        intents: [],
        credentialsModal: false,
        createIntentModal: false,
        url: '',
        token: localStorage.getItem('Olivia-Token')
      }
    },
    components: {
      Credentials,
      CreateIntent
    },
    methods: {
      getIntents() {
        this.$http.get(this.url + '/api/intents').then(data => {
          this.intents = data.body
        })
      },

      openIntentModal(intent) {
        this.$buefy.modal.open({
          parent: this,
          component: ModalIntent,
          props: intent
        })
      },

      syncNetwork() {
        this.$http.post(this.url + '/api/train', {}, {
          headers: {
            'Olivia-Token': localStorage.getItem('Olivia-Token')
          }
        }).then(data => {
          if (data.body.message !== undefined) {
            this.$buefy.snackbar.open({
              message: data.body.message,
              type: 'is-warning',
              position: 'is-top'
            })
          }
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
