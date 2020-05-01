<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img
              width="450"
              src="/img/olivia-dashboard.png"
              alt="Olivia Dashboard">
          </h1>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column is-10">
              <div class="new-card">
                <div class="card-content">
                  <b-table
                    ref="table"
                    :opened-detailed="defaultOpenedDetails"
                    detailed
                    detail-key="locale_tag"
                    :show-detail-icon="showDetailIcon"
                    :data="coverage">

                    <template slot-scope="props">
                      <b-table-column
                        field="props.row.locale_tag"
                        :label="$t('dashboard.language.flag')"
                        width="40"
                        numeric>
                        <img
                          class="media-left"
                          :src="`/img/locales/${props.row.locale_tag}.png`"
                          width="30">
                      </b-table-column>

                      <b-table-column
                        field="language"
                        :label="$t('dashboard.language.language')"
                        width="40"
                        sortable>
                        {{ props.row.language.charAt(0).toUpperCase() + props.row.language.slice(1) }}
                      </b-table-column>

                      <b-table-column
                        field="coverage.modules.coverage"
                        :label="$t('dashboard.language.modulesCoverage')"
                        sortable>
                        <template>
                          <span :class="getColor(props.row.coverage.modules.coverage)">
                            {{ props.row.coverage.modules.coverage }}%
                          </span>
                        </template>
                      </b-table-column>

                      <b-table-column
                        field="coverage.intents.coverage"
                        :label="$t('dashboard.language.intentsCoverage')"
                        sortable>
                        <span :class="getColor(props.row.coverage.intents.coverage)">
                          {{ props.row.coverage.intents.coverage }}%
                        </span>
                      </b-table-column>

                      <b-table-column
                        field="coverage.messages.coverage"
                        :label="$t('dashboard.language.messagesCoverage')"
                        sortable>
                        <span :class="getColor(props.row.coverage.messages.coverage)">
                          {{ props.row.coverage.messages.coverage }}%
                        </span>
                      </b-table-column>

                      <b-table-column
                        field="coverage.front.coverage"
                        :label="$t('dashboard.language.websiteCoverage')"
                        sortable>
                        <span :class="getColor(props.row.coverage.front.coverage)">
                          {{ props.row.coverage.front.coverage }}%
                        </span>
                      </b-table-column>
                    </template>

                    <template
                      slot="detail"
                      slot-scope="props">
                      <div
                        v-if="props.row.coverage.front.not_covered.length > 0"
                        class="content">
                        <h3>{{ $t('dashboard.language.notCoveredWebsite') }}</h3>
                        <ul>
                          <li
                            v-for="notCovered in props.row.coverage.front.not_covered"
                            :key="notCovered">
                            {{ notCovered }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="props.row.coverage.modules.not_covered !== null"
                        class="content">
                        <h3>{{ $t('dashboard.language.notCoveredModules') }}</h3>
                        <ul>
                          <li
                            v-for="notCovered in props.row.coverage.modules.not_covered"
                            :key="notCovered">
                            {{ notCovered }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="props.row.coverage.messages.not_covered !== null"
                        class="content">
                        <h3>{{ $t('dashboard.language.notCoveredMessages') }}</h3>
                        <ul>
                          <li
                            v-for="notCovered in props.row.coverage.messages.not_covered"
                            :key="notCovered">
                            {{ notCovered }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="props.row.coverage.intents.not_covered !== null"
                        class="content">
                        <h3>{{ $t('dashboard.language.notCoveredIntents') }}</h3>
                        <ul>
                          <li
                            v-for="notCovered in props.row.coverage.intents.not_covered"
                            :key="notCovered">
                            {{ notCovered }}
                          </li>
                        </ul>
                      </div>

                      <div
                        v-if="props.row.coverage.intents.not_covered === null
                          && props.row.coverage.intents.not_covered === null
                          && props.row.coverage.messages.not_covered === null
                          && props.row.coverage.front.not_covered.length === 0"
                        class="content">
                        <h3>{{ $t('dashboard.language.translationsDone') }}</h3>
                      </div>
                    </template>
                  </b-table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import i18n from '../../plugins/i18n'

  export default {
    data() {
      return {
        url: '',
        coverage: [],
        defaultOpenedDetails: [1],
        showDetailIcon: true
      }
    },
    methods: {
      getCoverage() {
        let loader = this.$buefy.loading.open()

        this.$http.get(this.url + '/api/coverage').then(data => {
          this.coverage = data.body

          this.calculateFrontCoverage()

          loader.close()
        })
      },

      calculateFrontCoverage() {
        let defaultPaths = this.getPaths('en')

        Object.keys(i18n.messages).forEach(key => {
          if (key === 'en') {
            return
          }

          let paths = this.getPaths(key)
          let notCovered = []

          for (let i = 0; i < defaultPaths.length; i++) {
            if (!paths.includes(defaultPaths[i])) {
              notCovered.push(defaultPaths[i])
            }
          }

          for (let i = 0; i < this.coverage.length; i++) {
            if (this.coverage[i]['locale_tag'] !== key) {
              continue
            }

            this.coverage[i]['coverage']['front'] = {
              coverage: Math.round(100 * (defaultPaths.length - notCovered.length) / defaultPaths.length),
              'not_covered': notCovered
            }
          }
        })
      },

      getPaths(locale) {
        let paths = []

        Object.keys(i18n.messages[locale]).forEach(message => {
          paths.push(...this.iterateObject(message, i18n.messages[locale][message]))
        })

        return paths
      },

      iterateObject(path, current) {
        let paths = []

        Object.keys(current).forEach(key => {
          if (typeof current[key] == "string") {
            paths.push(path + '.' + key)
          } else {
            paths.push(...this.iterateObject(path + '.' + key, current[key]))
          }
        })

        return paths
      },

      getColor(percentage) {
        if (percentage == 100) {
          return 'tag is-success'
        } else if (percentage < 100 && percentage > 60) {
          return 'tag is-warning'
        } else {
          return 'tag is-danger'
        }
      }
    },
    mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = 'https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com'
      }
      this.url = this.url.replace('ws', 'http')

      this.getCoverage()
    }
  }
</script>
