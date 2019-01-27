<template lang="html">
  <div class="header-component">
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Volunteer</li>
      </ul>
    </nav>
    
    <img class="header-logo" src="/assets/MAW_Logo.png">
    
    <nav>
      <ul>
        <li> <button class="donate_button" type="button" name="donate_button">Donate</button></li>
        <li>Refer a child</li>
      </ul>
    </nav>
    
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .header-logo {
    width: 350px;
    display: inline-block;
    vertical-align: bottom;
  }
  nav {
    display: inline-block;
  }
  .donate_button {
    background-color: #F7B244;
    border: none;
    border-radius: 5px;
    color: white;
    min-height: 35px;
    padding: 0px 10px;
  }
</style>
