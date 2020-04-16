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

      <b-button type="is-danger"
                icon-left="delete"
                rounded
                @click="deleteIntent(tag)">
        Delete
      </b-button>
      <b-button rounded style="float: right" @click="$parent.close()">
        Close
      </b-button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tag', 'patterns', 'responses', 'context'],
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
