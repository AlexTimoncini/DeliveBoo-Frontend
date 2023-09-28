<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-4">
                <form @submit.prevent="authStore.forgotPassword(email)" class="card">

                    <h2>Forgot Password?</h2>
                    <p>You can reset your Password here</p>
                    <input type="email" class="passInput" placeholder="Email address" name="email" v-model="email">
                    <div class="success send-email mt-3" :class="authStore.authStatus === true ? 'd-block' : 'd-none'">
                        {{ authStore.authSuccess }}
                    </div>
                    <div class="error send-email mt-3" :class="authStore.authStatus === false ? 'd-block' : 'd-none'">
                        {{ authStore.forgotError }}
                    </div>
                    <button type="submit">Send Your Email</button>
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
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    margin: 10rem 0;
    background-color: $priGreen;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 40px;
}

h2 {
    font-size: 1.5rem;
    margin-top: 10px;
    text-transform: uppercase;
}

p {
    font-size: 12px;
}

.passInput {
    margin-top: 15px;
    width: 80%;
    background: transparent;
    border: none;
    border-bottom: 2px solid $secYellow;
    font-size: 15px;
    color: white;
    outline: none;
}

button {
    margin-top: 15px;
    width: 80%;
    background-color: $secYellow;
    color: white;
    padding: 10px;
    border-radius: 12px;
    text-transform: uppercase;
    border: none;
}

.send-email {
    padding: .44rem;
    border-radius: 10px;
}

.error {
    color: rgb(255, 0, 0);
    background-color: $secYellow;
}

.success {
    background-color: rgb(22, 224, 22);
    color: rgb(57, 173, 57);
}
</style>