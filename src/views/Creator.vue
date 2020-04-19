<template>
  <div class="hero">
    <div class="hero-body">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title">
              Hugo Lageneste<span class="subtitle">, {{ calculateAge("2002-12-04") }} {{ $t('creator.age') }}</span>
            </h1>
            <h2 class="subtitle" v-html="$t('creator.location')"/>
            <h2 class="subtitle" v-html="$t('creator.studies')"/>
            <h2 class="subtitle" v-html="$t('creator.olivia')"/>
            <h2 class="subtitle" v-html="$t('creator.skills')"/>
            <h2 class="subtitle">
              <div class="columns">
                <div class="column is-2">
                  <a href="https://github.com/hugolgst">
                    ● github
                  </a>
                </div>

                <div class="column is-2">
                  <a href="https://www.linkedin.com/in/hugolageneste/">
                    ● linkedin
                  </a>
                </div>

                <div class="column is-2">
                  <a href="mailto:hugo.lageneste@pm.me">
                    ● {{ $t('creator.email') }}
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
