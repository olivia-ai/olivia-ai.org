import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/chat',
      component: () => import('@/views/Chat.vue')
    },
    {
      path: '/changelog',
      component: () => import('@/views/Changelog.vue')
    },
    {
      path: '/hugo',
      component: () => import('@/views/Creator.vue')
    },
    {
      path: '/blog',
      component: () => import('@/views/blog/Blog.vue')
    },
    {
      path: '/blog/:id',
      component: () => import('@/views/blog/Post.vue')
    },
    {
      path: '/dashboard/data',
      component: () => import('@/views/dashboard/Data.vue')
    },
    {
      path: '/dashboard/intents',
      component: () => import('@/views/dashboard/Intents.vue')
    },
    {
      path: '/dashboard/language',
      component: () => import('@/views/dashboard/Language.vue')
    },
    { 
      path: '/404', 
      component: () => import('@/components/404.vue') 
    },  
    { 
      path: '*', 
      redirect: '/404' 
    }
  ],
  mode: 'history'
})
