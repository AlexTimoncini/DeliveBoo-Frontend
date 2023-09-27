<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <Loader v-if="loader" />
                <div v-else class="container my_app ">
                    <!-- Totals-->
                    <div class="row mb-4">
                        <!-- Total revenues -->
                        <div class="col-12 col-sm-4 numbers-box-container mb-3 mb-sm-0 text-center">
                            <div class="numbers-box">
                                <h4>Total Revenues</h4>
                                <h2>€ {{ Math.trunc(restaurantRevenueEver.revenue) }}</h2>
                            </div>
                        </div>

                        <div class="col-12 col-sm-4 numbers-box-container text-center ">
                            <!-- Total Monthly -->
                            <div class="numbers-box">
                                <h4>This Month Revenues</h4>
                                <h2>€ {{ Math.trunc(restaurantRevenueThisMonth.revenue) }}</h2>
                            </div>
                        </div>

                        <div class="col-12 col-sm-4 numbers-box-container text-center">
                            <!-- Total Orders -->
                            <div class="numbers-box">
                                <h4>Total Orders</h4>
                                <h2>{{ ordersList.length }}</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-8">
                            <!-- Best selling dishes -->
                            <div class="col-12numbers-box-container mb-3 text-center">
                                <div class="numbers-box d-flex align-items-center flex-column">
                                    <h4 class="mb-0 mt-2">Best Selling Orders:</h4>
                                    <Bar :data="data" :options="options" />
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <!-- Best Selling restaurant -->
                            <div class="col-12 numbers-box-container mb-3 text-center">
                                <div class="numbers-box d-flex align-items-center flex-column">
                                    <img class="crown" src="../../assets/icons/crown.png" alt="">
                                    <h4 class="mb-2">Best Selling Restaurant</h4>
                                    <img class="container-fluid mb-2 p-0" :src="restaurantWinner.image"
                                        :alt="restaurantWinner.name">
                                    <h2 class="mb-0">{{ restaurantWinner.name }}</h2>
                                </div>
                            </div>

                            <!-- Best customer restaurant -->
                            <div class="col-12numbers-box-container mb-3 text-center">
                                <div class="numbers-box d-flex align-items-center flex-column">
                                    <img class="customer" src="../../assets/mascotte/best-customer.png" alt="">
                                    <h4 class="mb-0 mt-2">Best Customer:</h4>
                                    <h2 class="mb-0">{{ bestCustomerEver.name }}</h2>
                                    <h4 class="mb-2">€ {{ bestCustomerEver.total_spent }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
import Loader from '../../components/Loader.vue';
import axios from 'axios';
import { store } from '../../store';

// Chart JS 
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'Analytics',
    components: { DashboardSidebar, DashboardNavbar, Loader, Bar },
    data() {
        return {
            loader: true,

            restaurant_id: null,
            restaurantRevenueEver: [],
            restaurantRevenueThisMonth: [],
            restaurantWinner: [],
            bestCustomerEver: [],
            ordersList: [],
            bestOrders: [],

            // Chart
            data: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [{ data: [40, 20, 12, 1, 12] }]
            },
            options: {
                responsive: true
            }
        }
    },

    methods: {
        analytics() {
            // Total restaurant revenues ever
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id + '/ranking')
                .then((response) => {
                    this.restaurantRevenueEver.revenue = response.data.data.total_price;
                    this.restaurantRevenueEver.ranking = response.data.data.ranking;
                    this.restaurantRevenueEver.name = response.data.data.name;
                })
                .catch((error) => {
                    console.error('Il ristorante non ha ordini di successo con importo maggiore di zero.');
                });
            // Total restaurant revenues monthly 
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id + '/ranking')
                .then((response) => {
                    this.restaurantRevenueThisMonth.revenue = response.data.data.total_price;
                    this.restaurantRevenueThisMonth.ranking = response.data.data.ranking;
                    this.restaurantRevenueThisMonth.name = response.data.data.name;
                })
                .catch((error) => {
                    console.error('Il ristorante non ha ordini di successo con importo maggiore di zero nel mese corrente.');
                });
            // Best selling resturant Ever 
            axios.get(store.ApiUrl + 'restaurants/winner')
                .then((response) => {
                    this.restaurantWinner.name = response.data.data.firstPlace.name;
                    this.restaurantWinner.image = response.data.data.firstPlace.image;
                    this.restaurantWinner.logo = response.data.data.firstPlace.logo;
                })
                .catch((error) => {
                    console.error('Non ci sono ristoranti con vendite.');
                });
            // Best customer Ever 
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id + '/bestcustomer')
                .then((response) => {
                    this.bestCustomerEver.name = response.data.data.customer_name;
                    this.bestCustomerEver.total_spent = response.data.data.total_spent;
                })
                .catch((error) => {
                    console.error('Nessun cliente trovato per il ristorante specificato.');
                });

            // Orders List
            axios.get(store.ApiUrl + 'orders/index/' + this.restaurant_id)
                .then((response) => {
                    this.ordersList = response.data.results.data;

                })
                .catch((error) => {
                    console.error('Nessun ordine trovato per il ristorante specificato.');
                });

            // Best Orders
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id + '/bestOrders')
                .then((response) => {
                    // this.bestOrders = response.data.data.results.data;
                    console.log(response.data.results.data)
                    this.loader = false;
                })
                .catch((error) => {
                    console.error('Nessuna lista ordini trovata per il ristorante specificato.');
                });


        },
    },
    mounted() {
        this.restaurant_id = this.$route.params.id;
        this.analytics();
    }


}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.my_app::-webkit-scrollbar {
    display: none;
}

.my_app {
    width: 100%;
    height: calc(100vh - 95px - 80px);
    overflow-y: scroll;
    padding: 2rem;
    background-color: rgb(252, 252, 252);

    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    .numbers-box {
        background-color: white;
        // height: 300px;
        width: 100%;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        h4 {
            color: grey;
        }

        h2 {
            color: $priGreen;
            font-weight: 700;
            font-size: 2.5rem;
        }

        img {
            border-radius: 10px;
        }

        img.crown {
            width: 30%;
            margin-bottom: .6rem;
        }

        img.customer {
            width: 70%;
        }
    }
}
</style>
