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
    },
    {
      path: '/hugo',
      component: require('../views/Creator.vue').default
    },
    {
      path: '/blog',
      component: require('../views/blog/Blog.vue').default
    }
  ],
  mode: 'history'
})
