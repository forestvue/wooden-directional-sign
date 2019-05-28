import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contact from '@/components/Contact'
import User from '@/components/User'
import UserID from '@/components/UserID'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user/:id',
      name: 'UserID',
      component: UserID
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})