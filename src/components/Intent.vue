<template>
  <div>
    <div class="card new-card">
      <div class="card-content">
        <div class="columns">
          <div class="column is-8">
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

          <div class="column">
            <b-tooltip
              label="Scan this QR Code on Olivia to add this intent"
              style="float: right"
              position="is-left">
              <vue-qrcode
                :value="codeValue"
                tag="img"
                :options="{ width: 200, color: { dark: '#444444' } }"></vue-qrcode>
            </b-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueQrcode from '@chenfengyuan/vue-qrcode';

  export default {
    components: {
      VueQrcode
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

      this.codeValue = `${this.tag};${this.patterns};${this.responses};${this.context}`
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
      }
    }
  }
</script>
