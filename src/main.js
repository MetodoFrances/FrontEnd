import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';
import 'primeicons/primeicons.css';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Row from 'primevue/row';

const app = createApp(App)

// Develop content
app.use(PrimeVue);
app.use(router);
//app.use(createPinia());

app.component("pv-datatable",DataTable);
app.component("pv-column",Column);
app.component("pv-row",Row);

app.mount('#app')
