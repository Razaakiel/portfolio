<template>
  <div class="wrapper">
    <Header/>
    <router-view/>
  </div>




</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: { Header },
}
</script>

<style lang="scss">
html{
  background-color: #1c2b4f;
}

a{
  text-decoration: none;
  color: black;
}
</style>
