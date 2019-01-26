import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Store from './store/index.js'

Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App),
  store: Store
})
