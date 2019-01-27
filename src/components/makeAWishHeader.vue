<template lang="html">
  <div class="header-component">
    <nav>
      <ul>
        <li><a href="https://beta.wish.org/">Home</a></li>
        <li><a href="https://beta.wish.org/impact">About</a></li>
        <li><a href="https://beta.wish.org/get-involved">Volunteer</a></li>
      </ul>
    </nav>
    
    <img class="header-logo" src="/assets/MAW_Logo.png">
    
    <nav>
      <ul>
        <li> <button class="donate_button" type="button" name="donate_button"><a href="https://beta.wish.org/donate/single?donate_return=/">Donate</a></button></li>
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
  .header-component {
    padding: 20px;
  }
  .header-logo {
    width: 350px;
    display: inline-block;
    vertical-align: bottom;
  }
  nav {
    display: inline-block;
  }
  li, button {
    cursor: pointer;
  }
  a {
    color: #2c3e50;
  }
  .donate_button {
    background-color: #F7B244;
    border: none;
    border-radius: 5px;
    color: white;
    min-height: 35px;
    padding: 0px 10px;
  }
  .donate_button a {
    color: white;
  }
</style>
