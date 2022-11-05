import { createApp } from "vue";
//import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router';
import Store from './store/index.js';
import $dataTransfer from "./shared/services/data-transfer.service.js";
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from "primevue/toastservice";
import Password from "primevue/password";
import TieredMenu from "primevue/tieredmenu";
import InputText from "primevue/inputtext";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import 'primeicons/primeicons.css';

import 'primevue/resources/themes/saga-blue/theme.css';     //theme
import 'primevue/resources/primevue.min.css';              //core css
import 'primeicons/primeicons.css';

const app = createApp(App);

app.config.globalProperties.$dataTransfer = $dataTransfer;

app.use(PrimeVue, { ripple: true });
app.use(router);
app.use(Store);
app.use(ToastService);
//app.use(createPinia());


app.component('Password',Password)
app.component('TieredMenu',TieredMenu);
app.component("pv-input-text",InputText);
app.component("pv-button",Button);
app.component("pv-toast",Toast);
app.component("pv-datatable", DataTable);
app.component("pv-column", Column);
app.component("pv-row", Row);

app.mount("#app");
