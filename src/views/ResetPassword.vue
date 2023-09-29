<template>
    <div class="container">
        <div class="password-reset">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="d-none d-md-block col-5">
                    <img src="../assets/mascotte/boo-forgot-password.png" alt="Afraid Boo Image">
                </div>
                <div class="col-12 col-md-7">
                    <div class="title-section">
                        <h1>Password Reset</h1>
                        <p>Ghoulfriend, it's time to conjure up a new 'Boo'-tiful password!</p>
                    </div>
                    <div class="form-section">
                        <form @submit.prevent="authStore.resetPassword(formData)">
                            <div class="row">
                                <div class="col-12">
                                    <label for="password">Enter your new password:</label>
                                    <input type="password" name="password" v-model="formData.password">
                                </div>
                                <div class="col-12">
                                    <label for="password">Confirm your new password:</label>
                                    <input type="password" name="password" v-model="formData.password_confirmation">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                        <!-- <div class="error-message" v-if="authStore.loginMessageErrors.password">
                            <span>authStore.loginMessageErrors.password</span>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
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

<style lang="scss">
@use '../styles/partials/variables' as *;

div.container {
    height: calc(100vh - 95px);
    display: flex;
    align-items: center;
    overflow-y: hidden;

    div.password-reset {
        text-align: center;
        
        img {
            width: 80%;
        }

        div.title-section {
            background-color: $priGreen;
            border-radius: 20px 20px 0 0px;

            h1 {
                background-color: $secYellow;
                border-radius: 20px 20px 0 0px;
                margin: 0;
                padding: 1rem;
                font-weight: 700;
            }

            p {
                font-size: 1.5rem;
                padding: 1rem;
                color: $priGreen;
                border-left: 10px solid $secYellow;
                border-right: 10px solid $priGreen;
                background-color: white;
                margin: 0;
                font-weight: 600;
            }
        }

        div.form-section {
            position: relative;

            form {
                background-color: $priGreen;
                padding: 2rem;
                border-radius: 0 0 20px 20px;
                margin-bottom: 1rem;

                label {
                    background-color: $secYellow;
                    padding: .5rem 2rem;
                    font-weight: 700;
                    border-radius: 20px 20px 0 0;
                }
                
                input {
                    width: 80%;
                    background-color: white;
                    padding: 1rem;
                    border: 3px solid transparent;
                    border-radius: 20px;
                    margin-bottom: 1rem;

                    &:focus {
                        border: 3px solid $secYellow;
                        outline: none;
                    }
                }

                button {
                    width: 80%;
                    background-color: $secYellow;
                    padding: .5rem 2rem;
                    border-radius: 20px;
                    font-size: 1.1rem;
                    text-transform: uppercase;
                    border: none;
                    font-weight: 700;
                    transition: all .3s ease;

                    &:hover {
                        filter: brightness(1.1);
                    }
                }
            }

            div.error-message {
                background-color: #f86f6f;
                position: absolute;
                width: 100%;
                padding: 1rem;
                border-radius: 20px;
                font-weight: 600;
                font-size: 1.2rem;
            }
        }

        img {
            width: 100%;
        }
    }
}
</style>