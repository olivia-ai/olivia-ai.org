import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/views/Home.vue').default
    },
    {
      path: '/chat',
      component: require('@/views/Chat.vue').default
    },
    {
      path: '/changelog',
      component: require('@/views/Changelog.vue').default
    },
    {
      path: '/hugo',
      component: require('@/views/Creator.vue').default
    },
    {
      path: '/blog',
      component: require('@/views/blog/Blog.vue').default
    },
    {
      path: '/blog/:id',
      component: require('@/views/blog/Post.vue').default
    },
    {
      path: '/dashboard/data',
      component: require('@/views/dashboard/Data.vue').default
    },
    {
      path: '/dashboard/intents',
      component: require('@/views/dashboard/Intents.vue').default
    }
  ],
  mode: 'history'
})
