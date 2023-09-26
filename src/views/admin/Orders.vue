<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <Loader v-if="orders.loading" />
                <div v-else class="my_app p-4">
                    <div class="table-container " v-if="authStore.user">
                        <div class="d-block d-md-flex justify-content-between my-table-header">
                            <h2 class="mb-3 mb-md-0 ">Your Orders</h2>
                            <form action="">
                                <select class="form-select" aria-label="Default select example">
                                    <option value="0">This Week</option>
                                    <option value="1">This Month</option>
                                    <option value="2">This Year</option>
                                    <option value="3" selected>Ever</option>
                                </select>
                            </form>
                        </div>
                        <table class="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="row">Date</th>
                                    <th class="d-none d-md-table-cell">Name</th>
                                    <th class="d-none d-md-table-cell">Adress</th>
                                    <th>Total Price</th>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in orders.order_list"
                                    :class="order.successful == 1 ? 'table-success' : 'table-danger'">
                                    <th scope="row">{{ (order.created_at).slice(0, 10) }}</th>
                                    <td class="d-none d-md-table-cell">{{ order.first_name }} {{ order.last_name }}</td>
                                    <td class="d-none d-md-table-cell">{{ order.customer_address }}</td>
                                    <td><span>€ </span><span>{{ order.total_price }}</span></td>
                                    <td><button class="btn my_btn m-0" @click=" this.$router.push({
                                        name: 'OrderShow',
                                        params: { id: order.id }
                                    })">View</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <nav class="page" aria-label="Page">
                        <ul class="pagination m-0 justify-content-center ">
                            <li class="page-item "><button @click="prevPage" class="page-link  text-white">Previous</button>
                            </li>
                            <li class="page-item text-white" v-for="page, index in order">
                                <button @click="singlePage(index + 1)" class="page-link  text-white"
                                    :class="activeIndex === index + 1 ? 'active' : ''">{{ index + 1 }}</button>
                            </li>
                            <li class="page-item"><button @click="nextPage" class="page-link  text-white">Next</button></li>
                        </ul>
                    </nav>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
import Loader from '../../components/Loader.vue';

export default {
    name: 'Orders',
    components: { DashboardSidebar, DashboardNavbar, Loader },
    components: { DashboardSidebar, DashboardNavbar }
}
</script >

<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import axios from 'axios';
const authStore = useAuthStore();
const orders = ref({
    order_list: [],
    loading: true
});
const nextUrlPage = {
    url: '',
};
const prevUrlPage = {
    url: '',
};
const lastUrlPage = {
    url: '',
};
const firstUrlPage = {
    url: '',
};
const numberofPage = {
    url: '',
};
const activeIndex = {
    index: 1
};

async function getOrder(url) {
    axios.get(url).then(response => {
        orders.value.order_list = response.data.results.data;
        nextUrlPage.url = response.data.results.next_page_url;
        prevUrlPage.url = response.data.results.prev_page_url;
        lastUrlPage.url = response.data.results.last_page_url;
        firstUrlPage.url = response.data.results.first_page_url;
        numberofPage.url = response.data.results.last_page;
        orders.value.loading = false;
    })
        .catch(error => console.error(error))
};

function singlePage(index) {
    getOrder(`api/orders/index/${authStore.user.id}?page=${index}`);
    activeIndex.index = index;
};

function nextPage() {
    if (!nextUrlPage.url == '' || !nextUrlPage.url == null) {
        getOrder(nextUrlPage.url);
        activeIndex.index++;
    }
};

function prevPage() {
    if (!prevUrlPage.url == '' || !prevUrlPage.url == null) {
        getOrder(prevUrlPage.url);
        activeIndex.index--;
    }
};

onMounted(async () => {
    await authStore.getUser();
    await getOrder('/api/orders/index/' + authStore.user.id);
    console.log(orders.value);
})
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
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;

    .table-container {
        border-radius: 0 0 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        margin: .5rem 1rem;

        .my-table-header {
            background-color: $priGreen;
            padding: 1.5rem 2rem;
            border-radius: 10px 10px 0 0;

            h2 {
                color: $fontWhite;
            }
        }
    }

    th,
    td {
        vertical-align: middle;
    }

    .my_thead {
        background-color: $priGreen;
        color: white;
    }

    .my_btn {
        background-color: $secYellow;
    }

    .my_btn:hover {
        background-color: #f7cd4e;
    }

    .my_btn:active {
        background-color: $secYellow;
    }

    nav.page {
        ul {
            li {
                background-color: none;

                button {
                    background-color: $priGreen;
                }

                button:active {
                    border: 1px solid $secYellow;
                }

                button:focus {
                    border: 1px solid $secYellow;
                }
            }
        }
    }
}
</style>