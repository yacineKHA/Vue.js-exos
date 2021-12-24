<template>
    <div class="modal-window">
        
        <div class="overlay"></div>
        <div class="contener">
            <form action="">
              <h3>Connexion</h3>
              
              <div class="div">
                <img src="../assets/email_black_36dp.png" height="25px" alt="img">
                <input class="emailInput" placeholder="Email" type="text" required>
              </div>
              <div class="div">
                <img src="../assets/lock_black_36dp.png" height="25px" alt="img">
                <input class="mdp" placeholder="Mot de passe" type="password" required>
              </div>
              <button class="btn btn-primary">Se connecter</button>
            </form>
            <p>Pas de compte ? S'inscrire ici.</p>
        </div>
        <div @click="$store.commit('toggleConnectionSwitch')" class="x">X</div>
    </div>
</template>

<script>
export default {

    name:"Modal",
  
    data(){
        return{
           
        }
    },


    methods:{
        
    }
}

</script>

<style scoped>
    .modal-window{
        position: absolute;
        height: 100%;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-content: center;
        z-index: 0;
    }

    .contener{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 450px;
        width: 500px;
        border-radius: 15px;
        box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.274);
        margin-top: 170px;
        z-index: 4;
    }

    .x{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        margin-top: 140px;
        background-color: rgb(255, 255, 255);
        font-weight: bolder;
        border-radius: 50px;
        z-index: 4;
    }

    .x:hover{
        cursor: pointer;
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .div{
        display:flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        margin-top: 25px;
        height: 40px;
    }

    .div:focus-within{
       border: 2px solid black ;
       
    }

    input{
        border: 0;
        padding-left: 10px ;
        height: 100%;
        outline: none;
    }

    img{
        padding: 2px;
    }

    h3{
        font-size: xx-large;
        text-align: center;
    }

    input{
       width: 350px;
    }

    button{
        margin-top: 25px;
        border: 0px;
        height: 40px;
    }

    .overlay{
        position: absolute;
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.247);
        z-index: 3;
    }

    p{
        margin-top: 40px;
    }


</style>