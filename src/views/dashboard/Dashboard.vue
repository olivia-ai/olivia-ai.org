<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to <span class="is-pink">Olivia</span>'s dashboard
          </h1>
        </div>
      </div>
    </section>

    <br>
    <div class="container">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-4 is-parent is-vertical">
            <div class="tile is-child notification is-bold">
              <p class="title">
                <font-awesome-icon icon="comments" class="is-pink" /> 14,583
              </p>
              <p class="subtitle">
                Messages sent
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <font-awesome-icon icon="times" class="is-pink" /> 0.194%
              </p>
              <p class="subtitle">
                Error loss
              </p>
            </div>

            <div class="tile is-child notification is-bold">
              <p class="title">
                <font-awesome-icon icon="layer-group" class="is-pink"/> 100
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
                <font-awesome-icon icon="tags" class="is-pink"/> 18
              </p>
              <p class="subtitle">
                Intents' tags
              </p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <font-awesome-icon icon="clock" class="is-pink"/> 1m18s
              </p>
              <p class="subtitle">
                Learning time
              </p>
            </div>
          </div>

          <div class="tile is-parent">
            <div class="tile is-child notification">
              <p class="title">
                <font-awesome-icon icon="percentage" class="is-pink"/> 0.1
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
    mounted() {
      let iterations = 1000
      let labels = []
      for (let i = 0; i <= 20; i++) {
        let a = i/20
        labels.push(iterations*a)
      }


      new Chart(document.getElementById("error-loss"), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: [0.35,0.33,0.26,0.20,0.13,0.07,0.065,0.06,0.058,0.056, 0.054, 0.053, 0.05, 0.046, 0.04, 0.037],
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
  }
</script>
