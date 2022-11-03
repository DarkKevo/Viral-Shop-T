import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

//Uso para peticiones HTTP
const app = createApp(App)
app.use(store, axios, VueAxios).use(router).mount('#app');
