import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Vuetify from 'vuetify'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#e91e63',
    secondary: '#ff5722',
    accent: '#ff9800',
    error: '#f44336',
    warning: '#ffc107',
    info: '#03a9f4',
    success: '#4caf50'
  }
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
      path: '/api',
      component: require('./views/Api.vue').default
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
