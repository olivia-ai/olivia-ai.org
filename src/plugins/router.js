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
      path: '/blog',
      component: require('../views/blog/PostsList.vue').default
    },
    {
      path: '/blog/:id',
      component: require('../views/blog/Post.vue').default
    },
    {
      path: '/docs',
      component: require('../views/docs/Docs.vue').default
    },
    {
      path: '/docs/:id',
      component: require('../views/docs/Docs.vue').default
    }
  ],
  mode: 'history'
})