import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Contact from '@/components/Contact'
import User from '@/components/User'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          // /user/:id/profile 과 일치 할 때
          // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
          path: ':id',
          component: UserDetail
        },
      ]
    },
  ]
})
