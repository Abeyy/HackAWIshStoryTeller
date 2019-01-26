import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    currentlySelectedStory: 1
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setCurrentlySelectedStory (state, selectedStoryNum) {
      state.currentlySelectedStory = selectedStoryNum
    }
  }
})

export default store