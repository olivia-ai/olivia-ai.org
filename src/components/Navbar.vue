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
          <a class="navbar-item" slot="trigger" role="button">
            <strong>
              Dashboard
            </strong>
          </a>

          <b-dropdown-item aria-role="listitem">
            <router-link to="/dashboard/data">
              <strong>
                Training data
              </strong>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">
            <router-link to="/dashboard/intents">
              <strong>
                Intents
              </strong>
            </router-link>
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
