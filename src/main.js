import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Navbar from "@/components/Navbar.vue";

//PrimeVue
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from 'primevue/password';
import TieredMenu from 'primevue/tieredmenu';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


import './assets/main.css'


const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('Button',Button)
app.component('Password',Password)
app.component('Navbar',Navbar)
app.component('TieredMenu',TieredMenu)

app.mount('#app')
