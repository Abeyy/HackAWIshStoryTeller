<template lang="html">
<div>
  <div class="header-component">
    <img class="header-logo" src="../assets/MAW_Logo.png">
  </div>
  <div class="input-form-component">
    <div class="input-form-component">
      <img src="" alt="Story Image">
    </div>
  </div>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if='true'>
      <b-form-group id="kid-Name"
                    label="Name"
                    label-for="exampleInput1"
                    description="Please enter the Kid's name">
        <b-form-input id="exampleInput1"
                      type="name"
                      v-model="name"
                      required
                      placeholder="Please enter the Kid's name">
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
                    label="Image upload"
                    label-for="exampleInput2">
        <b-form-input id="medical_condition"
                      type="text"
                      v-model="medical_condition"
                      required
                      placeholder="Enter the medical condition">
        </b-form-input>
      </b-form-group>
      <b-form-group id="age"
                    label="age"
                    label-for="exampleInput2">
        <b-form-input id="age"
                      type="text"
                      v-model="age"
                      required
                      placeholder="Enter the age">
        </b-form-input>
      </b-form-group>

      <b-button @click="addWish" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
      age: ''
    }
  },
  methods: {
    addWish: function() {
      console.log('got to formtoJson', this.name, this.image, this.medical_condition, this.age)
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
