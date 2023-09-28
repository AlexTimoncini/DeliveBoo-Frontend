import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import Homepage from './views/HomePage.vue';
import AboutUs from './views/AboutUs.vue';
import ContactUs from './views/ContactUs.vue';
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
import DishCreate from './views/admin/DishCreate.vue';
import OrderShow from './views/admin/OrderShow.vue';
import NotFound from './views/NotFound.vue';
import CheckOut from './views/CheckOut.vue';
import OrderSuccess from './views/OrderSuccess.vue';
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'


const router = createRouter({
    scrollBehavior() {
        return { top: 0 }
    },
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: ContactUs
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
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword
        },
        {
            path: '/password-reset/:token',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/admin/myaccount',
            name: 'MyAccount',
            component: MyAccount,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/dishes',
            name: 'Dishes',
            component: Dishes,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/orders',
            name: 'Orders',
            component: Orders,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/analytics',
            name: 'Analytics',
            component: Analytics,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/edit/dish/:id',
            name: 'DishEdit',
            component: DishEdit,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/create/dish',
            name: 'DishCreate',
            component: DishCreate,
            meta: { requiresAuth: true },
        },
        {
            path: '/admin/order/show/:id',
            name: 'OrderShow',
            component: OrderShow,
            meta: { requiresAuth: true },
        },
        {
            path: '/payment',
            name: 'CheckOut',
            component: CheckOut,
        },
        {
            path: '/payment/ordersuccess',
            name: 'OrderSuccess',
            component: OrderSuccess
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth && !(await isLoggedIn())) {
        next('/login');
    } else {
        next();
    }
});
function isLoggedIn() {
    return axios.get('/api/user')
        .then(response => {
            if (response.status === 204) {
                console.log('non autenticato', response.status === 204);
                return false;
            } else {
                if (response.status === 200) {
                    console.log('autenticato', response.status === 200);
                    return true;
                }
            }
        })
        .catch(error => {
            console.error(error);
            return false; // Gestisci eventuali errori di rete o API come non autenticato
        });
}
export { router };
