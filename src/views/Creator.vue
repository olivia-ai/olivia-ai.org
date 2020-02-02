<template>
  <div class="hero">
    <div class="hero-body">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-8">
            <h1 class="title">
              Hugo Lageneste<span class="subtitle">, {{ calculateAge("2002-12-04") }} years old.</span>
            </h1>
            <h2 class="subtitle">
              Based in <strong>Geneva, Switzerland</strong>.
            </h2>
            <h2 class="subtitle">
              ● Student at <a href="https://www.google.com/search?q=Lyc%C3%A9e+Madame+de+Sta%C3%ABl">Lycée Madame de Staël</a>. <strong>Earth and life sciences</strong> option, specialization in <strong>computer science</strong>.
            </h2>
            <h2 class="subtitle">
              ● Creator and maintainer of <strong>Olivia, 1.5K stars-projet</strong> on <a href="https://github.com/olivia-ai/olivia">GitHub</a>
            </h2>
            <h2 class="subtitle">
              ● Skills: programming languages: <strong>Go, JS, Ruby, Crystal, Python</strong>, technologies: <strong>Ruby on Rails, Vue.js, LaTeX, Docker, Git</strong>
            </h2>
            <h2 class="subtitle">
              <div class="columns">
                <div class="column is-2">
                  <a href="https://github.com/hugolgst">
                    ● github
                  </a>
                </div>

                <div class="column is-2">
                  <a href="https://www.linkedin.com/in/hugolageneste/">
                    ● linkedin
                  </a>
                </div>

                <div class="column is-2">
                  <a href="mailto:hugo.lageneste@pm.me">
                    ● email
                  </a>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      calculateAge(birthday) {
        let date = new Date(birthday)
        let ageDifMs = Date.now() - date.getTime()
        let ageDate = new Date(ageDifMs)

        return Math.abs(ageDate.getUTCFullYear() - 1970)
      }
    }
  }
</script>
