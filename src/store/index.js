import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    masterStoryList: {}
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateMasterStoryList (state, updatedJSON) {
      state.masterStoryList = updatedJSON
    },
    addStory (state, story) {
      state.masterStoryList[story.id] = story
      //TODO: Once the story has been updated, we should update our JSON file
    }
  }
})

export default store