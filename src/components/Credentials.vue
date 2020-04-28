<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('dashboard.intents.credentials.title') }}</p>
      </header>
      <section class="modal-card-body">
        <b-field :label="$t('dashboard.intents.credentials.token.title')">
          <b-input
            v-model="token"
            type="text"
            :placeholder="$t('dashboard.intents.credentials.token.text')"
            required/>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-rounded"
          type="button"
          @click="$parent.close()">
          <strong>
            {{ $t('generic.close') }}
          </strong>
        </button>
        <button
          class="button is-primary is-rounded"
          @click="saveToken()">
          <strong>
            {{ $t('generic.save') }}
          </strong>
        </button>
      </footer>
    </div>
  </form>
</template>


<script>
  export default {
    data() {
      return {
        token:  localStorage.getItem('Olivia-Token')
      }
    },
    methods: {
      saveToken() {
        localStorage.setItem('Olivia-Token', this.token)
        this.$parent.close()
      }
    }
  }
</script>
