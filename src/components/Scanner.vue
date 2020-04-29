<template>
  <div
    class="card new-card"
    style="width: 600px">
    <div class="card-content">
      <p class="title">Scan an intent's QR code</p>
      <qrcode-stream @decode="onDecode"></qrcode-stream>
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
        this.$buefy.snackbar.open({
          message: this.$t('intents.scanned'),
          type: 'is-success',
          position: 'is-top'
        })

        let parameters = content.split(';')
        parameters[1] = parameters[1].split('|')
        parameters[2] = parameters[2].split('|')

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
          if (data.body.message !== undefined) {
            this.$buefy.snackbar.open({
              message: data.body.message,
              type: 'is-warning',
              position: 'is-top'
            })
            return
          }

          this.$parent.loadIntents()
          this.$parent.close()

          this.$buefy.snackbar.open({
            message: this.$t('intents.intentCreated'),
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
