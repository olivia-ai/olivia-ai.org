<template>
  <div id="home">
    <!-- HERO -->
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body container">
        <div class="columns is-vcentered">
          <!-- BODY -->
          <div class="column is-6 is-narrow">
            <div class="container">
              <h1 class="title is-size-1">
                {{ $t('home.introduction.title') }}
              </h1>
              <h1 class="subtitle" v-html="$t('home.introduction.text')"/>
              <div class="buttons">
                <router-link class="button is-medium is-primary is-rounded" to="/chat">
                  <strong>{{ $t('home.introduction.chat') }}</strong>
                </router-link>

                <a class="button is-medium is-rounded" href="https://github.com/olivia-ai">
                  <strong>{{ $t('home.introduction.github') }}</strong>
                </a>
              </div>
            </div>
          </div>

          <!-- IMAGE -->
          <div class="column is-6 is-narrow">
            <img src="/img/oliviaiphone11ipadpro.jpg" alt="Mockup iPhone 11 Pro">
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-4">
            <div class="container">
              <div class="m-carl-notification">
                <div class="m-carl-notification-cue m-cue">
                  <div class="a-cue-voice">
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                    <div class="a-cue-voice-el"></div>
                  </div>

                  <div class="a-cue-icon"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <h1 class="title is-size-2">
              {{ $t('home.speakAbility.title') }}
            </h1>
            <h1 class="subtitle" v-html="$t('home.speakAbility.text')"/>
          </div>
        </div>

        <div class="columns is-centered is-vcentered">
          <div class="column is-6">
            <h1 class="title is-size-2">
              {{ $t('home.privacy.title') }}
            </h1>
            <h1 class="subtitle" v-html="$t('home.privacy.text')"/>
          </div>

          <div class="column is-4">
            <img src="/img/olivia-privacy.png" width="350">
          </div>
        </div>
      </div>
    </section>

    <section class="hero is-light">
      <div class="hero-body has-text-centered">
        <h1 class="title">{{ $t('home.features.title') }}</h1>
        <div class="columns is-vcentered">
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <b-icon size="is-medium" icon="cube-scan"></b-icon><br>
              <span class="is-pink">1.</span> {{ $t('home.features.modulable.title') }}
            </h1>
            <p>{{ $t('home.features.modulable.text') }}</p>
          </div>
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <b-icon size="is-medium" icon="code-tags"></b-icon><br>
              <span class="is-pink">2.</span> {{ $t('home.features.openSource.title') }}
            </h1>
            <p>{{ $t('home.features.openSource.text') }}</p>
          </div>
          <div class="column is-4 is-narrow">
            <h1 class="title">
              <b-icon size="is-medium" icon="cellphone"></b-icon><br>
              <span class="is-pink">3.</span> {{ $t('home.features.pwa.title') }}
            </h1>
            <p>{{ $t('home.features.pwa.text') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 25px;
  }
</style>

