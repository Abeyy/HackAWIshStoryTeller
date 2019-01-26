<template lang="html">
  <div class="story-page-component">
    <div class="row">
      <div class="story-select-section col-md-2">
        <div v-for="num in 10" @click="setCurrentlySelectedStory(num)">
          <StorySelect class="story-select-component" :key="num" :isSelectedStory="num == currentlySelectedStory" @click="setCurrentlySelectedStory(num)"></StorySelect>
        </div>
      </div>
      <div class="selected-story-image-slider col-md-8">
        <!-- <img src="" alt="Story Image"> -->
      </div>
      <div class="story-select-section col-md-2">
        <div v-for="num in 10" @click="setCurrentlySelectedStory(num+10)">
          <StorySelect class="story-select-component" :key="num+10" :isSelectedStory="num + 10 == currentlySelectedStory"></StorySelect>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import StorySelect from './StorySelect.vue'
export default {
  components: {
    StorySelect
  },
  computed: {
    currentlySelectedStory() {
      return this.$store.state.currentlySelectedStory
    }
  },
  methods: {
    setCurrentlySelectedStory(num) {
      console.log(num)
      this.$store.commit('setCurrentlySelectedStory', num)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
