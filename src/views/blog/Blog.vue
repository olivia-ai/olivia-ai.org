<template>
  <div class="hero">
    <navbar></navbar>

    <div class="hero-body">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img src="../../../public/blog/the-math-behind-a-neural-network/thumbmail.png" alt="Thumbmail">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    The math behind a neural network
                  </p>
                  <div class="subtitle is-6">
                    <div class="columns">
                      <div class="column is-3">
                        <font-awesome-icon icon="user" /> <a href="https://twitter.com/hugolgst">@hugolgst</a>
                      </div>
                      <div class="column">
                        <font-awesome-icon icon="clock" /> January 20, 2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content">
                Understand what is the mechanism behind Olivia's functioning
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>
