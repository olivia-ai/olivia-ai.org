<template>
  <div id="app">
    <navbar v-if="$route.path !== '/chat'"/>

    <router-view/>

    <app-footer v-if="$route.path !== '/chat'"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  $primary: #ff3aaf;
  $primary-invert: findColorInvert($primary);
  $twitter: #d40890;
  $twitter-invert: findColorInvert($twitter);
  $input-background-color: $white-ter;
  $input-border-color: $grey-lighter;
  $input-shadow: none;
  $colors: (
      "white": ($white, $black),
      "black": ($black, $white),
      "light": ($light, $light-invert),
      "dark": ($dark, $dark-invert),
      "primary": ($primary, $primary-invert),
      "info": ($info, $info-invert),
      "success": ($success, $success-invert),
      "warning": ($warning, $warning-invert),
      "danger": ($danger, $danger-invert),
      "twitter": ($twitter, $twitter-invert)
  );

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
