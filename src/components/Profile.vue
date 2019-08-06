<template>
  <form action="">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Profile settings</p>
      </header>
      <section
          class="modal-card-body"
          v-for="(_, name) in information"
          :key="name">
        <b-field :label="camelCaseToNormal(name)">
          <b-input
              rounded
              type="text"
              v-model="information[name]">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button
            class="button is-rounded"
            type="button"
            @click="$parent.close()">
          <strong>
            Close
          </strong>
        </button>
        <button
            class="button is-rounded is-primary"
            @click="save()">
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
        information: this.getInformationFields()
      }
    },
    methods: {
      save() {
        localStorage.setItem('information', JSON.stringify(this.information))
      },

      getInformationFields() {
        let information = JSON.parse(localStorage.getItem('information'))
        let output = {}

        // Select only the fields that are not null
        for (let name in information) {
          if (information[name] !== null) {
            output[name] = information[name]
          }
        }

        return output
      },

      camelCaseToNormal(text) {
        return text.replace(/([A-Z])/g, ' $1')
            .replace(/_/, ' ')
            .replace(/^./, string => string.toUpperCase())
      }
    }
  }
</script>
