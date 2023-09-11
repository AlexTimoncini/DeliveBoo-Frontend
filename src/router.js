import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue';
import WorkInProgress from './views/WorkInProgress.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/workinprogress',
            name: 'WorkInProgress',
            component: WorkInProgress
        },
    ],
});
export { router };
