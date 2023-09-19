<template>
    <div class="my_navbar d-flex align-items-center px-3">
        <ul class="d-flex justify-content-between align-items-center m-4 p-0 w-100">
            <li>
                <h3>{{ $route.name }}</h3>
            </li>
            <li>
                <div class="d-flex align-items-center">
                    <span class="me-3">{{ authStore.user ? authStore.user.name : 'Restaurant Name' }}</span>
                    <div class="logo d-inline-block">
                        <img class="img-fluid" :src="authStore.user ? authStore.user.logo : ''" alt="Logo">
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
        return {
            isDisabled: true
        }
    },
    methods: {
        toggle() {
            this.isDisabled = !this.isDisabled;
        }
    }
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
            object-fit: contain;
            padding: .5rem;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            overflow: hidden;

            img {
                transition: all .3s ease;
            }

            &:hover img {
                transform: scale(1.5);
            }
        }
    }
</style>