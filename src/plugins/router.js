import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('../views/Home.vue').default
    },
    {
      path: '/chat',
      component: require('../views/Chat.vue').default
    },
    {
      path: '/changelog',
      component: require('../views/Changelog.vue').default
    }
  ],
  mode: 'history'
})
