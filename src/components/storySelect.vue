<template lang="html">
  <div class="story-select-component">
    <img class="select-image" :class="isSelectedStory ? '' : 'opacity-mask'" src="../assets/person-stock.png">
  </div>
</template>

<script>
export default {
  props: {
    isSelectedStory: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
  .story-select-component {
    cursor: pointer;
  }
  .select-image {
    max-width: 150px;
    max-height: 150px;
  }
  .opacity-mask {
    opacity: 0.5;
  }
</style>
