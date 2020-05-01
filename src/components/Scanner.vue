<template>
  <div
    class="card new-card"
    style="width: 600px">
    <div class="card-content">
      <p class="title">Scan an intent's QR code</p>
      <qrcode-stream
        style="border-radius: 10px;"
        @decode="onDecode">
      </qrcode-stream>
    </div>
  </div>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'

  export default {
    components: {
      QrcodeStream
    },
    methods: {
      onDecode(content) {
        let loader = this.$buefy.loading.open()

        let parameters = content.split(';')
        parameters[1] = parameters[1].split('|')
        parameters[2] = parameters[2].split('|')

        if (parameters.length !== 4) {
          this.$buefy.snackbar.open({
            message: this.$t('dashboard.intents.scanned'),
            type: 'is-success',
            position: 'is-top'
          })
          return
        }

        this.$parent.close()
        this.$buefy.snackbar.open({
          message: this.$t('dashboard.intents.scanned'),
          type: 'is-success',
          position: 'is-top'
        })

        this.$http.post(this.url + '/api/' + this.$i18n.locale + '/intent', {
          tag: parameters[0],
          patterns: parameters[1],
          responses: parameters[2],
          context: parameters[3]
        }, {
          headers: {
            'Olivia-Token': localStorage.getItem('Olivia-Token')
          }
        }).then(data => {
          loader.close()

          if (data.body.message !== undefined) {
            this.$buefy.snackbar.open({
              message: data.body.message,
              type: 'is-warning',
              position: 'is-top'
            })
            return
          }

          this.$parent.$parent.intents.push(data.body)

          this.$buefy.snackbar.open({
            message: this.$t('dashboard.intents.intentCreated'),
            type: 'is-success',
            position: 'is-top'
          })
        })
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = "https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com"
      }
      this.url = this.url.replace("ws", "http")
    }
  }
</script>
