<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="https://olivia-ai.org/img/icons/olivia.png" alt="Olivia">
        <strong>Olivia</strong>
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="https://docs.olivia-ai.org">
          <strong>
            Documentation
          </strong>
        </a>

        <router-link to="/changelog" class="navbar-item">
          <strong>
            Changelog
          </strong>
        </router-link>

        <router-link to="/blog" class="navbar-item">
          <strong>
            Blog
          </strong>
        </router-link>

        <b-dropdown aria-role="list">
          <a class="navbar-item" slot="trigger">
            <strong>Dashboard</strong>
          </a>

          <b-dropdown-item aria-role="listitem">
            <div class="media">
              <b-icon class="media-left" icon="tag-multiple"></b-icon>
              <router-link to="/dashboard/intents" class="media-content" style="color: #1b1b1b">
                <h3>Intents</h3>
                <small>Where you can add intents</small>
              </router-link>
            </div>
          </b-dropdown-item>

          <b-dropdown-item aria-role="listitem">
            <div class="media">
              <b-icon class="media-left" icon="chart-areaspline"></b-icon>
              <router-link to="/dashboard/data" class="media-content" style="color: #1b1b1b">
                <h3>Data</h3>
                <small>For getting training data</small>
              </router-link>
            </div>
          </b-dropdown-item>
        </b-dropdown>

        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-rounded is-primary" to="/chat">
              <strong>
                Chat
              </strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
