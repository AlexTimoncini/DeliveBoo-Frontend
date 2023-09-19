<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="my_app p-4">
                    <div class="table-container">
                        <div class="d-block d-md-flex justify-content-between my-table-header">
                            <h2 class="mb-3 mb-md-0 ">Your Orders</h2>
                            <form action="">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>This Week</option>
                                    <option value="1">This Month</option>
                                    <option value="2">This Year</option>
                                    <option value="3">Ever</option>
                                </select>
                            </form>
                        </div>
                        <table class="table table-striped table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td class="d-none d-md-table-cell">First Name</td>
                                    <td class="d-none d-md-table-cell">Last Name</td>
                                    <td>Total Price</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in authStore.user.orders" :order="order">
                                    <th scope="row">{{ order.id }}</th>
                                    <td class="d-none d-md-table-cell">{{ order.first_name }}</td>
                                    <td class="d-none d-md-table-cell">{{ order.last_name }}</td>
                                    <td><span>€ </span><span>{{ order.total_price }}</span></td>
                                    <td><button class="btn my_btn m-0" @click=" this.$router.push({
                                        name: 'OrderShow',
                                        params: { id: order.id }
                                    })">View</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
export default {
    name: 'Orders',
    data() {
    },
    components: { DashboardSidebar, DashboardNavbar },

} 
</script >
<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser();
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

        margin: 1rem;

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
}
</style>