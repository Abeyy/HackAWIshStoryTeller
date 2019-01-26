<template>
  <div id="app">
    <Header></Header>
    <button class="btn btn-primary" type="button" name="button">Test</button>
  </div>
</template>


<script>
import Header from './components/makeAWishHeader.vue'
export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    state() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
