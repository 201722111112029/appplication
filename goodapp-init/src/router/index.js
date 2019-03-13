import Vue from 'vue'
import Home from '@/components/Home'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
