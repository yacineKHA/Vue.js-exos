import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'





const app = createApp(App);
library.add(faUserSecret)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.mount('#app')
