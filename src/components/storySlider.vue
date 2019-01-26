<template lang="html">
  <div class="story-slider-component">
    <div class="images" v-for="(image, index) in sliderImages">
      <img :src="image" />
    </div>
  </div>
  
</template>

<script>
export default {
  computed: {
    sliderImages () {
      return this.$store.state.currentlySelectedStory.images
    }
  }
}
</script>

<style lang="css" scoped>
</style>
