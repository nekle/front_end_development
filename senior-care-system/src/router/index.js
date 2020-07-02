import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from "../components/index/Index";
import ActionWatcher from "../components/index/nav/ActionWatcher";
import Statistics from "../components/index/nav/Statistics";
import UserIndex from "../components/index/UserIndex";
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

