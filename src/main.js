import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'
import Navbar_fake from "@/components/Navbar_fake.vue";

//PrimeVue
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from 'primevue/password';
import TieredMenu from 'primevue/tieredmenu';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


import './assets/main.css'

import PrimeVue from 'primevue/config';
import router from './router';
import 'primeicons/primeicons.css';



const app = createApp(App)


app.use(PrimeVue)
app.use(router)

// Develop content
app.use(PrimeVue);
app.use(router);
//app.use(createPinia());


app.component('Button',Button)
app.component('Password',Password)
app.component('Navbar_fake',Navbar_fake)
app.component('TieredMenu',TieredMenu)

app.mount('#app')
