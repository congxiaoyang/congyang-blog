import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import BlogList from '@/view/blog/BlogList'
import BlogDetails from '@/view/blog/BlogDetails'

Vue.use(Router);

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
    },
    {
      path: '/blog/list',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog/details',
      name: 'BlogDetails',
      component: BlogDetails
    }
  ]
})
