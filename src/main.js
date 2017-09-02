// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import HomePage from '@/pages/Home.page'

import NavBar from '@/components/ui/Navbar.component'
Vue.component('x-navbar', NavBar)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
