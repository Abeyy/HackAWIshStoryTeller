import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Router from './router/index.js'
import Buefy from 'buefy'
import VueFire from 'vuefire'
import 'buefy/dist/buefy.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router,
  store: Store
})