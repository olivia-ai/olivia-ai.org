import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Buefy from 'buefy'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faMicrophone, faComment, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPaperPlane, faMicrophone, faComment, faVolumeMute, faVolumeUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
})
Vue.use(Router)
Vue.use(Resource)

Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('./views/Home.vue').default
    },
    {
      path: '/chat',
      component: require('./views/Chat.vue').default
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
