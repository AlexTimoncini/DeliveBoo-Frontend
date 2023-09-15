import { createRouter, createWebHistory } from "vue-router";
import Homepage from './views/HomePage.vue';
import WorkInProgress from './views/WorkInProgress.vue';
import AdvanceSearch from './views/AdvanceSearch.vue';
import RestaurantMenu from './views/RestaurantMenu.vue';
import LoginRestaurant from './views/LoginRestaurant.vue';
import CartCheckout from './views/CartCheckout.vue';
import MyAccount from './views/admin/MyAccount.vue';
import Dishes from './views/admin/Dishes.vue';
import Orders from './views/admin/Orders.vue';
import Analytics from './views/admin/Analytics.vue';
import DishEdit from './views/admin/DishEdit.vue';
import OrderShow from './views/admin/OrderShow.vue';
import NotFound from './views/NotFound.vue';



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
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/admin/myaccount',
            name: 'MyAccount',
            component: MyAccount
        },
        {
            path: '/admin/dishes',
            name: 'Dishes',
            component: Dishes
        },
        {
            path: '/admin/orders',
            name: 'Orders',
            component: Orders
        },
        {
            path: '/admin/analytics',
            name: 'Analytics',
            component: Analytics
        },
        {
            path: '/admin/dish/:id',
            name: 'DishEdit',
            component: DishEdit
        },
        {
            path: '/admin/order/:id',
            name: 'OrderShow',
            component: OrderShow
        },
    ],
});
export { router };
