<template>
  
        <div v-if="toggleButton" class="modalWindow" style="text-align:center">
            <h2>Connexion</h2>
            <input style="margin-top:50px" type="text" placeholder="Nom">
            <input  style="margin-top:10px" type="password" placeholder="Mot de passe">
            <div  style="margin-top:50px" class="btn btn-outline-primary">Accepter</div>
        </div>
        <div v-if="toggleButton" class="back">Fond</div>
  
</template>

<script>

export default {
    props:{
        toggleButton: Boolean,
    },

}

</script>

<style scoped>
    .back{
        background-color: rgba(0, 0, 0, 0.24);
        width: 100%;
        height: 100%;
        color: black;
        position: absolute;
        z-index: 2;
    }


    .modalWindow{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 15px;
        top: 25%;
        right: 25%;
        width: 450px;
        height: 450px;
        color: black;
        position: absolute;
        z-index: 3;
    }

</style>