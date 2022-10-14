import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

const app = createApp(App)

// Develop content
app.use(PrimeVue);
app.use(createPinia())

app.mount('#app')
