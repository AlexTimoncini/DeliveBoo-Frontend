<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form @submit.prevent="authStore.forgotPassword(email)">
                    <div class="bg-success send-email" :class="authStore.authStatus === true ? 'd-block' : 'd-none'">
                        {{ authStore.authSuccess }}
                    </div>
                    <div class="bg-danger send-email" :class="authStore.authStatus === false ? 'd-block' : 'd-none'">
                        {{ authStore.forgotError }}
                    </div>
                    <label for=" login-email">Email</label>
                    <div class="position-relative w-100 mb-3">
                        <input type="email" class="mb-4" name="login-email" id="login-email" v-model="email" />
                        <div class="info-message" v-if="!authStore.loginMessageErrors.email">
                            <span>Enter your email.</span>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Invia</button>
                </form>

            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
const email = ref('');
</script>
<style lang="scss">
@use '../styles/partials/variables' as *;

div.info-message {
    background-color: $secYellow;

    &.login-mobile {
        background-color: $priGreen;
    }
}

.send-email {
    padding: 1rem;
}

div.error-message {
    background-color: #f86f6f;
}
</style>