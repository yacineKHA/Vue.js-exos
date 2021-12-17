<template>

  <div id="ff">
    <Text></Text>
    <div class="btn btn-outline-primary te m-5 p-5 col-sm-8" @click="displayForm()">button</div>
  </div>
  <Modal-window :toggleButton="toggleButton"/>
  <h2 >{{api}}</h2>
  

</template>

<script>
import axios from 'axios'
import ModalWindow from './components/ModalWindow.vue'
import Text from './components/Text.vue'

export default {
  name: 'App',

  components:{
    Text,
    ModalWindow,
  },

  data(){
    return{
      toggleButton: false,
      api: ''
    }
  },

  methods:{

    displayForm(){
      this.toggleButton = !this.toggleButton;
      console.log("ca march: "+ this.toggleButton);

    }
  },

  mounted(){
    axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(reponse =>{
      this.api = reponse.data.title;
      console.log(reponse.data.title);
    })
  }
}

</script>

<style>
  *{
    margin: 0;
  }

  #ff{
    margin: 30px;
    z-index: 0;
    position: absolute;
  }

</style>
