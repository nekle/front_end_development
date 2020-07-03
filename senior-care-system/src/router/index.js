import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/Index'
import UserIndex from '../components/index/UserIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      component: UserIndex
    }
  ]
})
