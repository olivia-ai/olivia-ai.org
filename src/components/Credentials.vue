<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Credentials</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Token">
          <b-input
              type="text"
              v-model="token"
              placeholder="The authentication token"
              required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-rounded" type="button" @click="$parent.close()">
          <strong>
            Close
          </strong>
        </button>
        <button class="button is-primary is-rounded" @click="saveToken()">
          <strong>
            Save
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
