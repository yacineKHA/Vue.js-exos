import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createRouter, createWebHistory } from 'vue-router'

createApp(App).mount('#app')

const router = createRouter({history = createWebHistory(),routes});

export default{
    router
}