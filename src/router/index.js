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
      name: 'homepage',
      component: listAllWishes
    },
    {
      path: '/inputForm',
      name: 'inputForm',
      component: inputForm
    },
    {
      path: '/storyPage/:id',
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