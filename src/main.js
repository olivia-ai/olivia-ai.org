import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

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
