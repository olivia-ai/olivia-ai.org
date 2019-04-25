import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import './registerServiceWorker'

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
