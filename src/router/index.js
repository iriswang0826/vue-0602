import Vue from 'vue'
import Router from 'vue-router'
import banner from '@/views/banner'
import list from '@/views/list'
import detail from '@/views/detail'
import logIn from '@/views/logIn'
import signUp from '@/views/signUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'banner',
      component: banner
    },
    {
      path: '/alllist',
      name: 'list',
      component: list
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/login',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp
    }
  ]
})
