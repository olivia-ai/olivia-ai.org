<template>
  <div class="columns is-centered">
    <div class="column is-9">
      <div class="card new-card">
        <div class="card-content">
          <p class="title">{{ tag }}</p>
          <p class="subtitle">
            <strong>{{ $t('dashboard.intents.patterns') }}</strong>:
            {{ patterns.join(' — ') }}
          </p>
          <p class="subtitle">
            <strong>{{ $t('dashboard.intents.responses') }}</strong>:
            {{ responses.join(' — ') }}
          </p>

          <p
              v-if="context != ''"
              class="subtitle">
            <strong>{{ $t('dashboard.intents.context') }}</strong>:
            {{ context }}
          </p>

          <b-button
              v-if="token != undefined"
              icon-left="delete"
              rounded
              type="is-danger"
              @click="deleteIntent(tag)">
            <strong>{{ $t('generic.delete') }}</strong>
          </b-button>
        </div>
      </div>
    </div>

    <div class="column">
      <div
          class="card new-card"
          style="width: 220px; float: right;">
        <div class="card-content">
          <b-tooltip
              label="Scan this QR Code on Olivia to add this intent"
              position="is-left">
            <vue-qrcode
                tag="img"
                :value="codeValue"
                :options="{ width: 200, color: { dark: '#444444' } }"></vue-qrcode>
          </b-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueQrcode from '@chenfengyuan/vue-qrcode'

  export default {
    components: {
      VueQrcode,
    },
    props: {
      tag: {
        type: String,
        required: true
      },
      patterns: {
        type: Array,
        required: true
      },
      responses: {
        type: Array,
        required: true
      },
      context: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        token: localStorage.getItem('Olivia-Token'),
        url: '',
        modal: false,
        codeValue: ''
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = "https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com"
      }
      this.url = this.url.replace("ws", "http")

      this.codeValue = `${this.tag};${this.patterns.join('|')};${this.responses.join('|')};${this.context}`
    },
    methods: {
      deleteIntent(tag) {
        let loader = this.$buefy.loading.open()

        let token = localStorage.getItem('Olivia-Token')
        this.$http.delete(this.url + '/api/' + this.$i18n.locale + '/intent', {
          body: {
            tag
          },
          headers: {
            'Olivia-Token': token
          }
        }).then(data => {
          loader.close()

          if (data.body.message !== undefined) {
            this.$buefy.snackbar.open({
              message: data.body.message,
              type: 'is-warning',
              position: 'is-top'
            })
          }

          this.$parent.$parent.intents = data.body
          this.$parent.close()
        })
      }
    }
  }
</script>
