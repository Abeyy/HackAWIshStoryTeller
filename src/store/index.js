import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    currentlySelectedStoryIndex: 1,
    currentlySelectedStory: {
      childName: '',
      childAge: '',
      childCondition: '',
      defaultImage: '',
      images: [],
      storyText: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setCurrentlySelectedStoryIndex (state, selectedStoryNum) {
      state.currentlySelectedStoryIndex = selectedStoryNum
    }
  }
})

export default store