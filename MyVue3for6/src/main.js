import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers/router.js'
import pinia from './utils/pinia.js'
createApp(App).use(router).use(pinia).mount('#app')
