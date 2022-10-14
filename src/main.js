import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'

//PrimeVue
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from 'primevue/password';
import TieredMenu from 'primevue/tieredmenu';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


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
app.component('TieredMenu',TieredMenu)

app.mount('#app')
