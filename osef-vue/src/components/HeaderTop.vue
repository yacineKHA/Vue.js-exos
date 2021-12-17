<template>

    <div id="header">
        <img src="logo" alt="Logo">
        <input type="text" placeholder="Rechercher...">
        <button id="button" >Se connecter</button>
    </div>

</template>

<script>

    export default {
        name:'headerTop',

    }

</script>


<style scoped>

    #header{
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 50px;
        width: 100%;
        background-color: lightskyblue;
    }

    img{
        margin-left: 30px;
    }

    input{
        height: 60%;
        width: 50%;
        max-width: 700px;
        padding-left: 15px;
        border:0;
    }

    #button{
        background-color: black;
        height: 100%;
        padding: 0 15px;
        color: white;
        font-weight: bold;
        border: 0px; 
    }

    #button:hover{
        background-color: #418cee;
        box-shadow: 3px 3px black;
    }

</style>