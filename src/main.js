import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import TreeTable from 'primevue/treetable'
import Column from 'primevue/column'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component('TreeTable', TreeTable);
app.component('Column-p', Column);

app.mount('#app')
