<template lang="html">
<div id="allWishes">
  <div class="header-component">
    <img class="header-logo" src="../assets/MAW_Logo.png">
  </div>
<div class="columns">
  <div class="column">
    <!-- <div v-for="item in allWishes" :key="item.key" class='list-item'>-->
     <div v-for="item in allWishes" :key="item.key">
     <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img :src="item.defaultImage" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{item.name}}</strong> <small>{{item.medicalCondition}},</small> <small>{{item.age}}</small>
          <br>
         {{item.storyText}} </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
     
          </div>
    </div>
  
  
  <div>
     
  </div>
</div>
</div>
</template>
<script>

export default {
  data () {
      return {
         fields: {
        name: { label: 'Name', sortable: true, 'class': 'text-center' },
         age: { label: 'Age', sortable: true, 'class': 'text-center' },
         medicalCondition: { label: 'Medical Condition', sortable: true, 'class': 'text-center' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
       boards: [],
      errors: [],
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
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    }
  }
}
</script>
<style lang="css" scoped>
  .header-logo {
    width: 50%;
    max-height: 300px
  }
  html, body {
  height: 100%;
  padding-top: 10px;
  background: #e6ecf1;
}
#allWishes {
  height: 100%;
  padding-top: 0px;
  text-align: center;
}
#allWishes .button {
  margin-bottom: 20px;
}
#allWishes .tweet {
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 15px;
}
#allWishes .box {
  margin-bottom: 0;
  border-radius: 0;
}
#allWishes .content small {
  color: #00d1b2;
}
#allWishes img {
  border-radius: 30px;
}
#allWishes .level-item {
  padding-left: 10px;
  color: #00d1b2;
}
#allWishes input:focus {
  border-color: #00d1b2;  
}
#allWishes .likes {
  padding: 0 7.5px;
}
#allWishes input {
  font-weight: bold;
}
#allWishes .tweets-move {
  transition: transform 1s;
}
</style>
<!-- name: {type: String, required: true, minlength: 2},
media: {type: String},
medical_condition: {type: String},
age: {type: Number},
story: {type: String} -->