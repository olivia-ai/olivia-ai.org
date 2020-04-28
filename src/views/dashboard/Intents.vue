<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img
              width="450"
              src="/img/olivia-dashboard.png"
              alt="Olivia Dashboard">
          </h1>

          <div class="columns is-centered">
            <div class="column is-3">
              <b-button
                rounded
                @click="credentialsModal = true">
                <strong>{{ $t('dashboard.intents.credentials.enter') }}</strong>
              </b-button>
            </div>

            <div class="column is-3">
              <b-button
                class="is-primary"
                rounded
                @click="createIntentModal = true">
                <strong>{{ $t('dashboard.intents.create.title')}}</strong>
              </b-button>
            </div>

            <div
              v-if="token != undefined"
              class="column is-3">
              <b-button
                icon-left="sync"
                rounded
                @click="syncNetwork()">
                <strong>{{ $t('dashboard.intents.sync')}}</strong>
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
            <div
              v-for="intent in intents"
              :key="intent.tag"
              class="column is-3">
              <b-modal
                :active.sync="intent.active"
                has-modal-card
                trap-focus
                aria-role="dialog"
                aria-modal>
                <div class="card new-card">
                  <p span="title">{{ intent.tag }}</p>
                </div>
              </b-modal>

              <div class="new-card">
                <div class="card-content">
                  <p class="title">
                    <b-tooltip
                      v-if="intent.context == ''"
                      :label="$t('dashboard.intents.tag')">
                      <b-icon
                        size="is-medium"
                        class="is-pink"
                        icon="tag-multiple"></b-icon>
                    </b-tooltip>
                    <b-tooltip
                      v-else
                      :label="$t('dashboard.intents.contextualTag')">
                      <b-icon
                        size="is-medium"
                        class="is-pink"
                        icon="content-copy"></b-icon>
                    </b-tooltip>
                    {{ intent.tag }}
                    <a @click="openIntentModal(intent)">
                      <b-icon
                        style="float: right"
                        class="is-pink"
                        icon="menu"></b-icon>
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

    <b-modal
      :active.sync="createIntentModal"
      has-modal-card
      aria-role="dialog"
      aria-modal>
      <create-intent v-model="url"/>
    </b-modal>

    <b-modal
      :active.sync="credentialsModal"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal>
      <credentials/>
    </b-modal>
  </div>
</template>

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
      openIntentModal(intent) {
        this.$buefy.modal.open({
          parent: this,
          component: ModalIntent,
          props: intent
        })
      },

      syncNetwork() {
        this.$http.post(this.url + '/api/' + this.$i18n.locale + '/train', {}, {
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
      },

      loadIntents() {
        let loader = this.$buefy.loading.open()

        this.$http.get(this.url + '/api/' + this.$i18n.locale + '/intents').then(data => {
          this.intents = data.body
          loader.close()
        })
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = 'https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com'
      }
      this.url = this.url.replace('ws', 'http')

      this.loadIntents()

      let lastLocale = this.$i18n.locale
      setInterval(() => {
        if (lastLocale != this.$i18n.locale) {
          this.loadIntents()
        }

        lastLocale = this.$i18n.locale
      }, 1000)
    }
  }
</script>
