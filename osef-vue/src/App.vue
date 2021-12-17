<template>
  <header-top></header-top>

  <articles></articles>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue'
import Articles from './components/Articles.vue'

export default {
  

  name: 'App',
  components: {
    HeaderTop,
    Articles,
  }
}
</script>

<style>
  *{
    margin: 0%;
   
  }

  #app {
    
  }
</style>
