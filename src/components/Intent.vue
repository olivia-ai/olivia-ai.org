<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create an intent</p>
      </header>
      <section class="modal-card-body">
        <b-field grouped >
          <b-input expanded v-model="params.tag" placeholder="Tag"></b-input>
          <b-input expanded v-model="params.context" placeholder="Context"></b-input>
        </b-field>
        <b-field>
          <b-taginput
              ellipsis
              v-model="params.patterns"
              placeholder="Patterns..">
          </b-taginput>
        </b-field>
        <b-field>
          <b-taginput
              ellipsis
              v-model="params.responses"
              placeholder="Responses..">
          </b-taginput>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-rounded" type="button" @click="$parent.close()">
          <strong>
            Close
          </strong>
        </button>
        <a class="button is-primary is-rounded" @click="createIntent()">
          <strong>
            Create
          </strong>
        </a>
      </footer>
    </div>
  </form>
</template>

<script>
  export default {
    props: ['url'],
    data() {
      return {
        params: {
          tag: '',
          patterns: '',
          responses: '',
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
    }
  }
</script>
