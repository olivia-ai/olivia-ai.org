import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      component: require('../views/Chat.vue').default
    }
  ],
  mode: 'history'
})
