<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="container my_app ">
                    <!-- Totals-->
                    <div class="row">
                        <!-- Total revenues -->
                        <div class="col-12 col-sm-6 numbers-box-container mb-3 mb-sm-0 pe-sm-4">
                            <div class="numbers-box">
                                <h4>Total Revenues</h4>
                                <h2>$15.000</h2>
                            </div>
                        </div>

                        <div class="col-12 col-sm-6 numbers-box-container ">
                            <!-- Total Orders -->
                            <div class="numbers-box">
                                <h4>Total Orders</h4>
                                <h2>1.000</h2>
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
export default {
    name: 'Analytics',
    data() {
    },
    components: { DashboardSidebar, DashboardNavbar }
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
    }
}
</style>