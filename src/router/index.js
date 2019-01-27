import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import inputForm from '../components/inputForm.vue'
import storyPage from '../components/storyPage.vue'
import listAllWishes from '../components/listAllWishes.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inputForm',
      component: inputForm
    },
    {
      path: '/storyPage',
      name: 'storyPage',
      component: storyPage
    },
    {
      path: '/allWishes',
      name: 'listAllWishes',
      component: listAllWishes
    }
  ]
})