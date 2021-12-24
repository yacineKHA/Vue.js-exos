import { createStore } from "vuex";


export default createStore({
    state:{
        toggleConnection: false,
        
    },

    mutations:{
        toggleConnectionSwitch(state){
            state.toggleConnection = !state.toggleConnection;
            console.log("ca marche mutation");
        },
    },

    actions:{
        toggleConnectionSwitch(){
            
            console.log("ca marche action");
        },
        
    },

    getters:{

    },

    modules:{

    }
})