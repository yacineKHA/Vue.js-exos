<template>
  <div>
     <h2>Titre</h2>
    <div id="contener">
      <div>
        <sign-in-form/>
        <sign-up/>
      </div>
      <div>
        <sign-in/>
        <sign-up-form/>
      </div>
    </div>
  </div>
</template>

<script>
  import SignUpForm from './components/SignUpForm.vue'
  import SignInForm from './components/SignInForm.vue'
  import SignIn from './components/SignIn.vue'
  import SignUp from './components/SignUp.vue'

  export default {

    name: 'App',
    components: {
      SignInForm,
      SignIn,
      SignUp,
      SignUpForm,
    }

  }
</script>

<style>

  

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #contener{
    display: flex;
    height: 600px;
    width: 800px;
    background-color: lightgreen;
  }

</style>
