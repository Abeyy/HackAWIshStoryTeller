<template lang="html">
<div id="allWishes">
  <div class="header-component">
    <img class="header-logo" src="../assets/MAW_Logo.png">
  </div>
  <h1>List of All Wishes</h1>
  <div v-for="item in allWishes" :key="item.key" class='list-item'>
            <p class="name">{{ item.name }}, age : {{ item.age }}, suffering from, {{item.medicalCondition}},Wish is, {{item.storyText}}</p>
            
            
          </div>
  <div>
     
  </div>
</div>
</template>

<script>

const ListCoffeeShops = `
  query {
    listAllWishes {
      items {
        id fName 
      }
    }
  }
`

export default {
  data () {
      return {
          testData: [
              { fName: 'Sumi', age:'8'},
              { fName: 'Sumi2', age:'9'}
          ]
      }
  },
  computed: {
    allWishes: function () {
      return this.$store.state.masterStoryList
    }
  }
}
</script>

<style lang="css" scoped>
  .header-logo {
    width: 50%;
    max-height: 300px
  }
</style>

<!-- name: {type: String, required: true, minlength: 2},
media: {type: String},
medical_condition: {type: String},
age: {type: Number},
story: {type: String} -->