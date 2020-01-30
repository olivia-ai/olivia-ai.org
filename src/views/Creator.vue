<template>
  <div class="hero">
    <div class="hero-body">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title">
              Hugo Lageneste<span class="subtitle">, {{ calculateAge("2002-12-04") }} years old.</span>
            </h1>
            <h2 class="subtitle">
              Based in <strong>Geneva, Switzerland</strong>.
            </h2>
            <h2 class="subtitle">
              <strong>Scientific</strong> french baccalaureate degree with a computer option
            </h2>
            <h2 class="subtitle">
              Maintainer of <strong>Olivia, 1.5K stars-projet</strong> on GitHub
            </h2>
            <h2 class="subtitle">
              <div class="columns">
                <div class="column is-2">
                  <a href="https://github.com/ananagame">
                    github
                  </a>
                </div>

                <div class="column is-2">
                  <a href="https://keybase.io/ananagame">
                    keybase
                  </a>
                </div>

                <div class="column is-2">
                  <a href="https://www.reddit.com/user/ananagame">
                    reddit
                  </a>
                </div>

                <div class="column is-2">
                  <a href="mailto:hugo.lageneste@pm.me">
                    email
                  </a>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      calculateAge(birthday) {
        let date = new Date(birthday)
        let ageDifMs = Date.now() - date.getTime()
        let ageDate = new Date(ageDifMs)

        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }
    }
  }
</script>
