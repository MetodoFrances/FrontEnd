import { createWebHistory, createRouter } from "vue-router"
import Historial from '../pages/historial-home.vue'

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