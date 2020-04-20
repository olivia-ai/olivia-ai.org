<template>
  <b-dropdown aria-role="list">
    <a :class="{ 'navbar-item': navbar }" slot="trigger">
      <b-icon class="media-left" icon="translate"/>
    </a>

    <b-dropdown-item
      v-for="lang in locales"
      :key="lang.locale"
      :class="{ 'is-active': $i18n.locale === lang.locale }"
      aria-role="listitem"
      @click="changeLocale(lang.locale)">
      <div class="media">
        <img class="media-left" :src="`/img/locales/${lang.locale}.png`" width="30">
        <h3>{{ lang.name }}</h3>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
  export default {
    props: {
      navbar: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        locales: [
          { locale: 'en', name: 'English' },
          { locale: 'fr', name: 'Français' },
          { locale: 'es', name: 'Español' },
          { locale: 'ca', name: 'Català' }
        ]
      }
    },
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale
        localStorage.setItem('language', locale)
        this.$emit('change', locale)
      }
    }
  }
</script>
