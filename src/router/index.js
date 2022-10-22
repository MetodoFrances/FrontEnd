import { createWebHistory, createRouter } from "vue-router"
import Historial from '../historial-reportes-home/pages/historial-reportes-home.component.vue'

const routes = [
    {
        path: '/Historial',
        name: 'Historial',
        component: Historial
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;