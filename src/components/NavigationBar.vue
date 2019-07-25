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
        Olivia
      </router-link>

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
          Documentation
        </a>
        <a
            class="navbar-item"
            href="https://github.com/olivia-ai">
          Github
        </a>
        <router-link
            class="navbar-item"
            to="/blog">
          Blog
        </router-link>
        <div class="navbar-item">
          <b-tooltip
              :label="darkTheme ? 'Move to light theme' : 'Move to dark theme'"
              :type="darkTheme ? 'is-light' : 'is-dark'"
              position="is-bottom"
              animated>
            <a
                class="button is-rounded is-light"
                @click="setTheme(!darkTheme)">
              <font-awesome-icon icon="adjust" />
            </a>
          </b-tooltip>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <router-link
                class="button is-primary is-rounded"
                to="/chat">
              <strong>Chat</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>