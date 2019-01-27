<template lang="html">
<div>
  <div class="header-component">
    <img class="header-logo" src="/assets/MAW_Logo.png">
  </div>
  <div class="input-form-component">
    <div class="input-form-component">
      <!-- <img src="" alt="Story Image"> -->
    </div>
  </div>
  <div class="input-form">
    <b-form @submit="addWish">
      <b-form-group id="kid-Name"
                    label="Name"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="name"
                      required
                      placeholder="Please enter the Kid's name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="age"
                    label="Age"
                    label-for="exampleInput2">
        <b-form-input id="age"
                      type="text"
                      v-model="age"
                      required
                      placeholder="Enter the age">
        </b-form-input>
      </b-form-group>
      <b-form-group id="image"
                    label="Image upload"
                    label-for="exampleInput2">
        <b-form-input id="image"
                      type="text"
                      v-model="image"
                      required
                      placeholder="Upload an image">
        </b-form-input>
      </b-form-group>
      <b-form-group id="medical_condition"
                    label="Medical Condition"
                    label-for="exampleInput2">
        <b-form-input id="medical_condition"
                      type="text"
                      v-model="medical_condition"
                      required
                      placeholder="Enter the medical condition">
        </b-form-input>
      </b-form-group>
      
      <b-form-group id="storyText"
                    label="Story Blurb"
                    label-for="storyText1">
        <b-form-textarea id="storyText"
                      type="textarea"
                      v-model="storyText"
                      required
                      placeholder="Enter your story text here">
        </b-form-textarea>
      </b-form-group>

      <b-button class="b-btn" @click="addWish" variant="primary">Submit</b-button>
      <b-button class="b-btn" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      image: '',
      medical_condition: '',
      storyText: '',
      age: ''
    }
  },
  methods: {
    makeid: function() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 1; i < 30; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        if (i % 5 == 0) {
            text += "-";
        }
      }

      return text;
    },
    addWish: function() {
      let myObj = {
        'id': this.makeid(),
        'name': this.name,
        'age': this.age,        
        'storyText': this.storyText,
        // 'defaultImage': this.image,
        'defaultImage': 'https://firebasestorage.googleapis.com/v0/b/makeawishstories-9ca11.appspot.com/o/abey.jpeg?alt=media&token=561f66aa-bcd7-4871-8cbe-b201526e0a4f',
        'medicalCondition': this.medical_condition,
      }
      this.$store.commit('addStory', myObj)
      this.$router.push({ name: 'listAllWishes' })
    }
  }
}
</script>

<style lang="css" scoped>
  .header-logo {
    width: 50%;
    max-height: 300px
  },
  #kid-Name {
    width: 400px;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
  }
  #storyText {
    min-height: 100px;
  }
  .b-btn {
    margin-bottom: 10px;
  }
</style>

<!-- name: {type: String, required: true, minlength: 2},
media: {type: String},
medical_condition: {type: String},
age: {type: Number},
story: {type: String} -->
