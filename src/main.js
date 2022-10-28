import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';
import Store from './store/index.js';
import $dataTransfer from "./shared/services/data-transfer.service.js";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from "primevue/toastservice";
import 'primeicons/primeicons.css';

const app = createApp(App);

app.config.globalProperties.$dataTransfer = $dataTransfer;

// Develop content
app.use(PrimeVue);
app.use(router);
app.use(Store);
app.use(ToastService);
//app.use(createPinia());

app.component("pv-input-text",InputText);
app.component("pv-button",Button);
app.component("pv-toast",Toast);


app.mount('#app');
