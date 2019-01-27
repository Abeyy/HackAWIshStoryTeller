<template lang="html">
  <div class="story-page-component container">
    <div class="header-component">
      <Header></Header>
    </div>
    <div class="main-story">
      <div class="row">
        <div class="story-heading">
          <div class="story-image-component">
            <img :src="currentStory.defaultImage" alt="Story Image">
          </div>
          
          <div class="story-name">
            <h1> {{currentStory.name}}</h1>
            <span>{{currentStory.age}}, {{currentStory.medicalCondition}}</span>
          </div>
        </div>
      </div>
      <div class="story-text">
        <p> {{currentStory.storyText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './makeAWishHeader.vue'
export default {
  components: {
    Header
  },
  computed: {
    currentStory() {
      return this.$store.state.masterStoryList[this.$route.params.id]
    }
  }
}
</script>

<style lang="css" scoped>
  .story-image-component img {
    max-width: 150px;
  }
  
  .main-story {
    border: 1px solid gainsboro;
  }

  .story-name h1{
    margin-top: 55px;
  }
  
  .story-heading {
    width: 100%;
  }
  
  .story-heading span {
    color: #00d1b2;
  }
  
  .story-heading img, .story-heading div {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
  }
  
  .story-text {
    width: 75%;
    margin: 20px auto;
    font-size: 26px;
    line-height: 42px;
  }
</style>
