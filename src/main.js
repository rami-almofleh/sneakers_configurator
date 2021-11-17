import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store'
import 'bootstrap'
import "./styles/global.scss";

createApp(App).use(store).use(router).mount('#app')
