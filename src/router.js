import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue';
import WorkInProgress from './views/WorkInProgress.vue';
import AdvanceSearch from './views/AdvanceSearch.vue';
import RestaurantMenu from './views/RestaurantMenu.vue';
import LoginRestaurant from './views/LoginRestaurant.vue';
import CartCheckout from './views/CartCheckout.vue';


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
        {
            path: '/search/:searchType/:searchInput',
            name: 'AdvanceSearch',
            component: AdvanceSearch
        },
        {
            path: '/restaurant/:id',
            name: 'RestaurantMenu',
            component: RestaurantMenu
        },
        {
            path: '/login',
            name: 'LoginRestaurant',
            component: LoginRestaurant
        },
        {
            path: '/cart',
            name: 'CartCheckout',
            component: CartCheckout
        },
    ],
});
export { router };
