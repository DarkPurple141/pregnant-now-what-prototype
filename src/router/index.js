import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Info from '@/pages/Info'
import Entry from '@/pages/Entry'
import Schedule from '@/pages/Schedule'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'This Week',
      component: Main
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/info/:article',
      name: 'Article',
      component: Info,
      props: (route) => ({
         article: route.params.article
      })
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Info
    },
    {
      path: '/login',
      name: 'Entry',
      component: Entry
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (store.getters.isLoggedIn || to.name == 'Entry') {
    next()
  } else {
    next({path: '/login'})
  }
})

export default router
