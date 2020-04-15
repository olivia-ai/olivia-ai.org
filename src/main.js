import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'
import Buefy from 'buefy'
import './registerServiceWorker'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'
import router from './plugins/router'

Vue.use(Buefy)
Vue.use(Resource)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
