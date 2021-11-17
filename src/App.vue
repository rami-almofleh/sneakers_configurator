<template>
  <navbar />
  <router-view />
</template>

<script>

import Navbar from "./components/layout/Navbar";
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
