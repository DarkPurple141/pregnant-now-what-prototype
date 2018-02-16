import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Info from '@/pages/Info'

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
    }
  ]
})
