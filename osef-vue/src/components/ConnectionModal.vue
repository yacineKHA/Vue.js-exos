<template>
    <div class="modal-window">
        
        <div class="overlay"></div>
        <div class="contener">
            <form action="">
              <h1>Connexion</h1>
              
              <div class="email">
                <img src="../assets/email_black_36dp.png" width="40px" alt="img">
                <input class="emailInput" placeholder="Email" type="text" required>
              </div>
              <label for="">Password</label>
              <input class="mdp" placeholder="Mot de passe" type="password" required>
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
        margin-top: 100px;
        z-index: 4;
    }

    .x{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        margin-top: 80px;
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

    .email{
        border: 1px solid black;
    }

    h1{
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

    label{
        margin-top: 15px;
    }

    .btn{
        margin-top: 25px;
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