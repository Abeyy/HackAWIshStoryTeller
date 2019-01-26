import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Router from './router/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: Store
})
