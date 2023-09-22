<template>
    <div class="my_navbar d-flex align-items-center px-3">
        <ul class="d-flex justify-content-between align-items-center m-1 p-0 w-100">
            <li>
                <h3 class="fs-6 m-0 d-md-none">{{ $route.name }}</h3>
                <h3 class="fs-3 m-0 d-none d-md-block">{{ $route.name }}</h3>
            </li>
            <li>
                <div class="d-flex align-items-center">
                    <span class="fs-6 me-3 d-md-none">{{ authStore.user ? authStore.user.name : 'Restaurant Name' }}</span>
                    <span class="fs-4 me-3 d-none d-md-block">{{ authStore.user ? authStore.user.name : 'Restaurant Name'
                    }}</span>
                    <div class="logo d-inline-block">
                        <img class="logo-img"
                            :src="authStore.user.logo ? 'http://127.0.0.1:8000/storage/' + authStore.user.logo : '../../assets/logos/green_ghost.png'"
                            alt="" draggable="false">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'DashboardNavbar',

}
</script>

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

div.my_navbar {
    background-color: $secYellow;
    height: 80px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

    div.logo {
        width: 50px;
        aspect-ratio: 1;
        background-color: white;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        overflow: hidden;

        img.logo-img {
            width: 100%;
            object-fit: cover;
            transition: all .3s ease;
        }

        &:hover img {
            transform: scale(1.5);
        }
    }
}
</style>