<template>
  <div class="card new-card">
    <div class="card-content">
      <p class="title">{{ tag }}</p>
      <p class="subtitle">
        <strong>Patterns</strong>:
        {{ patterns.join(' — ') }}
      </p>
      <p class="subtitle">
        <strong>Responses</strong>:
        {{ responses.join(' — ') }}
      </p>

      <p class="subtitle" v-if="context != ''">
        <strong>Context</strong>:
        {{ context }}
      </p>

      <b-button rounded @click="$parent.close()">
        Close
      </b-button>
      <b-button type="is-danger"
                icon-left="delete"
                rounded
                @click="deleteIntent(tag)"
                v-if="token != undefined"
                style="float: right">
        Delete
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tag', 'patterns', 'responses', 'context'],
    data() {
      return {
        token: localStorage.getItem('Olivia-Token'),
        url: ''
      }
    },
    methods: {
      deleteIntent(tag) {
        console.log('ssss')
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
