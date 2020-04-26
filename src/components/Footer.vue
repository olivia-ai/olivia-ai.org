<template>
  <div>
    <div class="container">
      <br>
      <br>
    </div>

    <footer class="section">
      <div class="container is-small">
        <div class="columns">
          <div
            class="column is-narrow"
            style="width: 300px;">
            <img
              alt="Olivia logo"
              src="/img/icons/olivia-with-text.png"
              style="max-height: 1.75rem;">
            <br>
            <div class="content is-small">
              {{ $t('footer.bestFriend') }}<br>
              <b-icon
                icon="map-marker"
                size="is-small"/>{{ $t('footer.location') }}<br>
              <a
                class="has-text-dark"
                href="mailto:hello@olivia-ai.org">
                <b-icon
                  icon="email"
                  size="is-small"/> hello@olivia-ai.org
              </a>
              <br>
              <br>
              <span v-html="$t('footer.license')"/>
            </div>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column">
                <h6 class="title is-6">{{ $t('footer.about.title') }}</h6>
                <ul>
                  <li>
                    <a
                      class="has-text-dark"
                      href="https://docs.olivia-ai.org">{{ $t('navbar.documentation') }}</a>
                  </li>
                  <li>
                    <a
                      class="has-text-dark"
                      href="/blog">{{ $t('navbar.blog') }}</a>
                  </li>
                  <li>
                    <a
                      class="has-text-dark"
                      href="/changelog">{{ $t('navbar.changelog') }}</a>
                  </li>
                  <li>
                    <a
                      class="has-text-dark"
                      href="mailto:hello@olivia-ai.org">{{ $t('footer.about.contact') }}</a>
                  </li>
                </ul>
              </div>
              <div class="column">
                <h6 class="title is-6">{{ $t('footer.information.title') }}</h6>
                <ul>
                  <li><router-link
                    class="has-text-dark"
                    to="/hugo">{{ $t('footer.information.creator') }}</router-link></li>
                  <li><a
                    class="has-text-dark"
                    href="https://github.com/olivia-ai/olivia/blob/master/LICENSE">{{ $t('footer.information.license') }}</a></li>
                </ul>
              </div>
              <div class="column">
                <h6 class="title is-6">{{ $t('footer.community.title') }}</h6>
                <ul>
                  <li><a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="has-text-dark"
                    href="https://twitter.com/oliv_ai">Twitter</a></li>
                  <li><a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="has-text-dark"
                    href="https://trello.com/b/azB6r2IC/olivia">Trello</a></li>
                  <li><a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="has-text-dark"
                    href="https://github.com/olivia-ai">GitHub</a></li>
                  <li><a
                    rel="noopener noreferrer"
                    target="_blank"
                    class="has-text-dark"
                    href="https://discord.gg/wXDwTdy">Discord</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <img
      src="/img/background-olivia.png"
      style="position: absolute;">
  </div>
</template>
