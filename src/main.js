import { createApp } from "vue";
//import { createPinia } from 'pinia'
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import "primeicons/primeicons.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

const app = createApp(App);

// Develop content
app.use(PrimeVue);
app.use(router);
//app.use(createPinia());

app.component("pv-datatable", DataTable);
app.component("pv-column", Column);
app.component("pv-row", Row);
app.component("pv-input-text", InputText);

app.mount("#app");
