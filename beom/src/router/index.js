import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Contact from '@/components/Contact'
import User from '@/components/User'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  /**
   * path : 라우팅 할 경로 지정
   * name : 컴포넌트의 이름 지정
   * component : 라우팅 할 컴포넌트 등록
   * 
   * path에서 ':parameter'는 해당 파라미터로 동적 라우팅이 된다.
   * 
   * 라우팅 하는 방법 예시
   * 1) <router-link to="/foo">Go to Foo</router-link>
   * 2) this.$router.push('/')
   * 3) <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
   * 4) this.$router.push({ name: 'user', params: { userId: 123 }})
   */
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
/* 중첩라우팅 예시 */
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: ':id',
          component: UserDetail
        },
      ]
    },
  ]
})
