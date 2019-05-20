import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/Home'
import About from '@/views/About'
import Contact from '@/views/Contact'
import User from '@/views/user/User'
import Notfound from '@/views/Notfound'
import Userinfo from '@/views/user/Userinfo'
import Userlist from '@/views/user/Userlist'

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
      path: '/user',
      name: 'user',
      component: User,
      children: [
        {
          path: '',
          name: 'userlist',
          component: Userlist
        },
        {
          path: '/user/:id',
          name: 'userinfo',
          component: Userinfo
        }

      ]
    },
    {
      path: '*',
      name: '404',
      component: Notfound
    }
  ]
})
