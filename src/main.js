import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';
import 'primeicons/primeicons.css';

const app = createApp(App)

// Develop content
app.use(PrimeVue);
app.use(router);
app.use(createPinia());

app.mount('#app')
