<template>
  <nav
    class="navbar is-spaced"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/">
        <img
          src="https://olivia-ai.org/img/icons/olivia.png"
          alt="Olivia">
        <strong>Olivia</strong>
      </router-link>

      <locale-switch navbar/>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbar"
      class="navbar-menu">
      <div class="navbar-end">
        <a
          class="navbar-item"
          href="https://docs.olivia-ai.org">
          <strong>
            {{ $t('navbar.documentation') }}
          </strong>
        </a>

        <router-link
          to="/changelog"
          class="navbar-item">
          <strong>
            {{ $t('navbar.changelog') }}
          </strong>
        </router-link>

        <router-link
          to="/blog"
          class="navbar-item">
          <strong>
            {{ $t('navbar.blog') }}
          </strong>
        </router-link>

        <b-dropdown aria-role="list">
          <a
            slot="trigger"
            class="navbar-item">
            <strong>
              {{ $t('navbar.dashboard') }}
            </strong>
          </a>

          <b-dropdown-item aria-role="listitem">
            <div class="media">
              <b-icon
                class="media-left"
                icon="tag-multiple"/>
              <router-link
                to="/dashboard/intents"
                class="media-content"
                style="color: #1b1b1b">
                <h3>{{ $t('navbar.intents.title') }}</h3>
                <small>{{ $t('navbar.intents.text') }}</small>
              </router-link>
            </div>
          </b-dropdown-item>

          <b-dropdown-item aria-role="listitem">
            <div class="media">
              <b-icon
                class="media-left"
                icon="chart-areaspline"/>
              <router-link
                to="/dashboard/data"
                class="media-content"
                style="color: #1b1b1b">
                <h3>{{ $t('navbar.data.title') }}</h3>
                <small>{{ $t('navbar.data.text') }}</small>
              </router-link>
            </div>
          </b-dropdown-item>
        </b-dropdown>

        <div class="navbar-item">
          <div class="buttons">
            <router-link
              class="button is-rounded is-primary"
              to="/chat">
              <strong>
                {{ $t('navbar.chat') }}
              </strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import LocaleSwitch from './LocaleSwitch'

  export default {
    components: { LocaleSwitch }
  }
</script>
