<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img width="450" src="../../../public/img/olivia-dashboard.png" alt="Olivia Dashboard">
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
                <b-icon size="is-medium" class="is-pink" icon="tag-multiple"></b-icon> {{ data.layers.output }}
              </p>
              <p class="subtitle">
                Intents' tags
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <b-icon size="is-medium" class="is-pink" icon="close"></b-icon> {{ Math.round(data.training.errors[18]*10000)/10000 }}
              </p>
              <p class="subtitle">
                Error loss
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <b-icon size="is-medium" class="is-pink" icon="layers"></b-icon> {{ data.layers.hidden }}
              </p>
              <p class="subtitle">
                Hidden layers
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child notification">
              <canvas id="error-loss">

              </canvas>
            </div>
          </div>
        </div>

        <div class="tile">
          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <b-icon size="is-medium" class="is-pink" icon="clock"></b-icon> {{ data.training.time }}s
              </p>
              <p class="subtitle">
                Learning time
              </p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <b-icon size="is-medium" class="is-pink" icon="percent"></b-icon> {{ data.training.rate }}
              </p>
              <p class="subtitle">
                Learning rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .is-pink {
    color: #ff3aaf;
    font-size: 35px;
  }
</style>

<script>
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
        }
      }
    },
    async mounted() {
      this.url = process.env.VUE_APP_URL
      if (this.url == undefined) {
        this.url = "https://cors-anywhere.herokuapp.com/wss://olivia-api.herokuapp.com"
      }
      this.url = this.url.replace("ws", "http")

      this.$http.get(this.url + '/api/dashboard').then(
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
              datasets: [{
                data: errors,
                label: "Error loss",
                borderColor: "#ff3aaf",
                fill: false
              }
              ]
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: 'Error loss of the neural network'
              },
              scales: {
                x: {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Network iterations'
                  }
                },
                y: {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Error loss'
                  }
                }
              }
            }
          })
        }
      )
    }
  }
</script>
