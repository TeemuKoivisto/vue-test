// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import store from './store'

import HomePage from '@/pages/Home.page'
import LoginPage from '@/pages/Login.page'
import LoggedInPage from '@/pages/LoggedIn.page'
import MyselfPage from '@/pages/Myself.page'
import NotFoundPage from '@/pages/NotFound.page'

import Navbar from '@/components/ui/Navbar.component'
import Dropdown from '@/components/ui/Dropdown.component'

Vue.component('x-navbar', Navbar)
Vue.component('x-dropdown', Dropdown)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    { path: '/',
      component: LoggedInPage,
      meta: { requiresAuth: true },
      children: [
        { path: '/myself', name: 'myself', component: MyselfPage }
      ]
    },
    { path: '/', name: 'home', component: HomePage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '*', component: NotFoundPage }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth && !store.getters.isLoggedIn)) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
