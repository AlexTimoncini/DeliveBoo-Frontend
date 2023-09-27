<template >
    <form @submit.prevent="authStore.resetPassword(formData)">
        <label for="login-password">Password</label>
        <div class="position-relative w-100">
            <input type="password" name="login-password" id="login-password" v-model="formData.password" />
            <div class="info-message" v-if="!authStore.loginMessageErrors.password">
                <span>Enter your password.</span>
            </div>
        </div>
        <label for="login-password">Confirm Password</label>
        <div class="position-relative w-100">
            <input type="password" name="login-password" v-model="formData.password_confirmation" />
            <div class="info-message" v-if="!authStore.loginMessageErrors.password">
                <span>Confirm your password.</span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRoute } from 'vue-router';
const route = useRoute();
const authStore = useAuthStore();

const formData = ref({
    password: '',
    password_confirmation: '',
    email: route.query.email,
    token: route.params.token,
})
</script>
<style lang="scss"></style>