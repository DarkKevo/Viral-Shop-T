import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Home from '../views/Home.vue';
import telefonos from '../views/telefonosventa.vue';
import computadoras from '../views/computadorasventa.vue';
import create from '../views/create.vue';

const routes = [
    {
        path: '/xd',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/telefonos',
        name: 'telefonos',
        component: telefonos,
    },
    {
        path: '/computadoras',
        name: 'computadoras',
        component: computadoras,
    },
    {
        path: '/create',
        name: 'create',
        component: create,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
