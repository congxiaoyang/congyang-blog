import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      component:Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
