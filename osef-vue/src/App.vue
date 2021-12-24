<template>
  <HeaderTop></HeaderTop>
 
  <section >
    <transition name="anim">
      <ConnectionModal  v-show="$store.state.toggleConnection"/>
    </transition>
    <div></div>
    <div class="articles-div">
      <Articles/>
    </div>
    <div></div>
  </section>
  
</template>

<script>
import HeaderTop from './components/HeaderDisconnected.vue'
import Articles from './components/Articles.vue'
import ConnectionModal from './components/ConnectionModal.vue'

export default {
  
  name: 'App',
  components: {
    HeaderTop,
    Articles,
    ConnectionModal
  },

  data(){
    return{
      
    }
  },

  methods:{

  }

}
</script>

<style>

  *{
    
   
  }

  section{
    display: grid;
    grid-template-columns: 1fr 60% 1fr;
  }

  #app{
   
  }

  .articles-div{
    margin-top: 150px;
  }

  .anim-enter-active, .anim-leave-active{
    transition: opacity 0.20s ease-out;
  }

  .anim-enter, .anim-leave-to{
    opacity: 0;
  }
</style>
