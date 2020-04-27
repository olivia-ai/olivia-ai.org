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

    <br>
    <div class="container">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-4 is-parent is-vertical">
            <div class="tile is-child notification">
              <p class="title">
                <b-skeleton
                  v-if="loading"
                  active
                  width="30%"></b-skeleton>
                <span v-else>
                  <b-icon
                    size="is-medium"
                    class="is-pink"
                    icon="tag-multiple"></b-icon> {{ data.layers.output }}
                </span>
              </p>
              <p class="subtitle">
                <b-skeleton
                  v-if="loading"
                  active
                  width="40%"></b-skeleton>
                <span v-else>{{ $t('dashboard.data.intentsTags') }}</span>
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <b-skeleton
                  v-if="loading"
                  active
                  width="60%"></b-skeleton>

                <span v-else>
                  <b-icon
                    size="is-medium"
                    class="is-pink"
                    icon="close"></b-icon> {{ Math.round(data.training.errors[18]*10000)/10000 }}
                </span>
              </p>
              <p class="subtitle">
                <b-skeleton
                  v-if="loading"
                  active
                  width="30%"></b-skeleton>

                <span v-else>{{ $t('dashboard.data.errorLoss') }}</span>
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <b-skeleton
                  v-if="loading"
                  active
                  width="20%"></b-skeleton>

                <span v-else>
                  <b-icon
                    size="is-medium"
                    class="is-pink"
                    icon="layers"></b-icon> {{ data.layers.hidden }}
                </span>
              </p>
              <p class="subtitle">
                <b-skeleton
                  v-if="loading"
                  active
                  width="50%"></b-skeleton>

                <span v-else>{{ $t('dashboard.data.hiddenLayers') }}</span>
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child notification">
              <b-loading
                :is-full-page="false"
                :active.sync="loading"
                :can-cancel="true"></b-loading>
              <canvas id="error-loss"></canvas>
            </div>
          </div>
        </div>

        <div class="tile">
          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <b-skeleton
                  v-if="loading"
                  active
                  width="30%"></b-skeleton>

                <span v-else>
                  <b-icon
                    size="is-medium"
                    class="is-pink"
                    icon="clock"></b-icon> {{ data.training.time }}s
                </span>
              </p>
              <p class="subtitle">
                <b-skeleton
                  v-if="loading"
                  active
                  width="30%"></b-skeleton>

                <span v-else>{{ $t('dashboard.data.learningTime') }}</span>
              </p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <b-skeleton
                  v-if="loading"
                  active
                  width="20%"></b-skeleton>

                <span v-else>
                  <b-icon
                    size="is-medium"
                    class="is-pink"
                    icon="percent"></b-icon> {{ data.training.rate }}
                </span>
              </p>
              <p class="subtitle">
                <b-skeleton
                  v-if="loading"
                  active
                  width="30%"></b-skeleton>

                <span v-else>{{ $t('dashboard.data.learningRate') }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  data() {
    return {
      data: {
        training: {
          rate: '...',
          time: '...',
          errors: [],
        },
        layers: {
          input: 0,
          hidden: 0,
          output: 0,
        }
      },
      loading: true
    }
  },
  async mounted() {
    this.url = process.env.VUE_APP_URL
    if (this.url == undefined) {
      this.url = "https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com"
    }
    this.url = this.url.replace("ws", "http")

    this.$http.get(this.url + '/api/' + this.$i18n.locale + '/dashboard').then(
      data => {
        this.data = data.body
        let errors = data.body.training.errors
        errors.shift()

        let iterations = 1000
        let labels = []
        for (let i = 0; i <= 18; i++) {
          let a = i / 20
          labels.push(iterations * a)
        }

        new Chart(document.getElementById("error-loss"), {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                data: errors,
                label: this.$t('dashboard.data.errorLoss'),
                borderColor: "#ff3aaf",
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: this.$t('dashboard.data.errorLossText')
            },
            scales: {
              x: {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: this.$t('dashboard.data.networkIterations')
                }
              },
              y: {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: this.$t('dashboard.data.errorLoss')
                }
              }
            }
          }
        })

        this.loading = false
      }
    )
  }
}
</script>
