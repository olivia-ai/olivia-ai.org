<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('dashboard.intents.create.title') }}</p>
      </header>
      <section class="modal-card-body">
        <b-field grouped >
          <b-input expanded v-model="params.tag" :placeholder="$t('dashboard.intents.tag')"></b-input>
          <b-input expanded v-model="params.context" :placeholder="$t('dashboard.intents.context')"></b-input>
        </b-field>
        <b-field>
          <b-taginput
              ellipsis
              v-model="params.patterns"
              :placeholder="$t('dashboard.intents.patterns') + '..'">
          </b-taginput>
        </b-field>
        <b-field>
          <b-taginput
              ellipsis
              v-model="params.responses"
              :placeholder="$t('dashboard.intents.responses') + '..'">
          </b-taginput>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-rounded" type="button" @click="$parent.close()">
          <strong>
            {{ $t('generic.close') }}
          </strong>
        </button>
        <a class="button is-primary is-rounded" @click="createIntent()">
          <strong>
            {{ $t('generic.create') }}
          </strong>
        </a>
      </footer>
    </div>
  </form>
</template>

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
    methods: {
      createIntent() {
        this.$http.post(this.url + '/api/intent', this.params, {
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

          this.$parent.getIntents()
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
