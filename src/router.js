import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import android from '@/components/android/android'
import login from '@/components/user/login'
import signup from '@/components/user/signup'
import website from '@/components/website/website'
import work from '@/components/work/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/android',
      name: 'android',
      component: android
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/website',
      name: 'website',
      component: website
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }
  ],
  mode: 'history'
})
