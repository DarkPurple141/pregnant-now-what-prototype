import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Info from '@/pages/Info'
import Entry from '@/pages/Entry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'This Week',
      component: Main
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Main
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
