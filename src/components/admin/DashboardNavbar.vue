<template>
    <div class="my_navbar d-flex align-items-center px-3">
        <ul class="d-flex justify-content-between align-items-center m-0 p-0 w-100">
            <li>
                <h3>My Account</h3>
            </li>
            <li>
                <div>
                    <span class="me-3">Restaurant Name</span>
                    <div class="logo d-inline-block">
                        <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" alt="Logged user logo">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DashboardNavbar',


    data() {

    }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

    div.my_navbar {
        background-color: $secYellow;
        height: 80px;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

        div.logo {
            width: 50px;
            aspect-ratio: 1;
            background-color: white;
            border-radius: 50%;
            object-fit: contain;
            padding: .5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }
    }
</style>