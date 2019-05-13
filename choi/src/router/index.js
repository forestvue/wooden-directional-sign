import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Home'
import About from '@/views/About'
import Contact from '@/views/Contact'
import User from '@/views/User'
import Notfound from '@/views/Notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '*',
      name: '404',
      component: Notfound
    }
  ]
})
