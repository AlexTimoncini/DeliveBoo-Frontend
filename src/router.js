import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
    ],
});
export { router };
