<template>
  <div class="hero">
    <div class="hero-body">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-2">
            <img src="/img/hugo.jpeg">
          </div>
          <div class="column is-6">
            <h1 class="title">
              Hugo Lageneste<span class="subtitle">, {{ calculateAge("2002-12-04") }} {{ $t('creator.age') }}</span>
            </h1>
            <h2
              class="subtitle"
              v-html="$t('creator.location')"/>
            <h2
              class="subtitle"
              v-html="$t('creator.studies')"/>
            <h2
              class="subtitle"
              v-html="$t('creator.olivia')"/>
            <h2
              class="subtitle"
              v-html="$t('creator.skills')"/>
            <h2 class="subtitle">
              <div class="columns">
                <a
                  v-for="social in socials"
                  :key="social.icon"
                  :href="social.link"
                  style="padding-left: 0.75rem">
                  <b-icon
                    :icon="social.icon"
                    size="is-medium"/>
                </a>
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
  data () {
    return {
      socials: [
        { link: 'https://github.com/hugolgst', icon: 'github' },
        { link: 'https://www.linkedin.com/in/hugolageneste/', icon: 'linkedin' },
        { link: 'https://instagram.com/hugolgst', icon: 'instagram' },
        { link: 'mailto:hugo.lageneste@pm.me', icon: 'email' },
      ]
    }
  },
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
