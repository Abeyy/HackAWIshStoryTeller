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
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="kid-Name"
                    label="Name"
                    label-for="exampleInput1"
                    description="Please enter the Kid's name">
        <b-form-input id="exampleInput1"
                      type="name"

                      required
                      placeholder="Please enter the Kid's name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="image"
                    label="Image upload"
                    label-for="exampleInput2">
        <b-form-input id="image"
                      type="text"

                      required
                      placeholder="Upload an image">
        </b-form-input>
      </b-form-group>
      <b-form-group id="medical_condition"
                    label="Image upload"
                    label-for="exampleInput2">
        <b-form-input id="medical_condition"
                      type="text"

                      required
                      placeholder="Enter the medical condition">
        </b-form-input>
      </b-form-group>
      <b-form-group id="age"
                    label="age"
                    label-for="exampleInput2">
        <b-form-input id="age"
                      type="text"

                      required
                      placeholder="Enter the age">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</div>

</template>

<script>
export default {
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
