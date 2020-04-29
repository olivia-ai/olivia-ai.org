<template>
  <div
    class="card new-card"
    style="width: 700px">
    <div class="card-content">
      <p class="title">{{ $t('dashboard.intents.create.title') }}</p>

      <b-field
        grouped>
        <b-input
          v-model="params.tag"
          rounded
          expanded
          :placeholder="$t('dashboard.intents.tag')"></b-input>
        <b-input
          v-model="params.context"
          rounded
          expanded
          :placeholder="$t('dashboard.intents.context')"></b-input>
      </b-field>
      <b-field>
        <b-taginput
          v-model="params.patterns"
          style="border-radius: 25px;"
          ellipsis
          rounded
          :placeholder="' ' + $t('dashboard.intents.patterns') + '..'"></b-taginput>
      </b-field>
      <b-field>
        <b-taginput
          v-model="params.responses"
          ellipsis
          rounded
          :placeholder="' ' + $t('dashboard.intents.responses') + '..'"></b-taginput>
      </b-field>

      <a
        class="button is-primary is-rounded"
        @click="createIntent()">
        <strong>
          {{ $t('generic.create') }}
        </strong>
      </a>
    </div>
  </div>
</template>

<style>
  .tag:not(body) {
    background-color: #e4e4e4;
  }

  .taginput .taginput-container .autocomplete input {
    border-radius: 25px;
  }

  .taginput .taginput-container.is-focusable {
    border-radius: 25px;
  }
</style>

<script>

  export default {
    data() {
      return {
        params: {
          tag: '',
          patterns: [],
          responses: [],
          context: ''
        }
      }
    },
    components: {
    },
    methods: {
      createIntent() {
        let loader = this.$buefy.loading.open()

        this.$http.post(this.url + '/api/' + this.$i18n.locale + '/intent', this.params, {
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
          this.$parent.close()
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
