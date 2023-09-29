<script>
import { useAuthStore } from '../stores/auth';
import { ref } from 'vue';
export default {
    name: 'ForgotPassword',

    methods: {
        startLoader() {
            this.authStore.forgotLoader = true;
        }
    },

    setup() {
        const authStore = useAuthStore();
        const email = ref('');

        return {
            authStore,
            email
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="password-forgotten">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="d-none d-md-block col-6">
                    <img src="../assets/mascotte/boo-forgot-password.png" alt="Afraid Boo Image">
                </div>
                <div class="col-12 col-md-6">
                    <div class="title-section">
                        <h1>Password Forgotten?</h1>
                        <p>Is your password playing hide-and-'Boo'? Time to unmask it with a reset!</p>
                    </div>
                    <div class="form-section">
                        <form @submit.prevent="this.authStore.forgotPassword(email)">
                            <label for="email">Enter your email address:</label>
                            <input type="email" name="email" v-model="email">
                            <button type="submit" @click="startLoader()">Send Request</button>
                        </form>
                        <div class="success send-email mt-3" :class="this.authStore.authStatus === true ? 'd-block' : 'd-none'">
                            {{ this.authStore.authSuccess }}
                        </div>
                        <div class="error send-email mt-3" :class="this.authStore.authStatus === false ? 'd-block' : 'd-none'">
                            {{ this.authStore.forgotError }}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="loader" v-if="authStore.forgotLoader">
        <div class="row">
            <div class="col-12">
                <img src="../assets/mascotte/Loader-boo-thinking.gif" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

div.container {
    height: calc(100vh - 95px);
    display: flex;
    align-items: center;
    overflow-y: hidden;

    div.password-forgotten {
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
                    border-radius: 20px 20px 0 0;

                    &:focus {
                        border: 3px solid $secYellow;
                        outline: none;
                    }
                }

                button {
                    width: 80%;
                    background-color: $secYellow;
                    padding: .5rem 2rem;
                    border-radius: 0 0 20px 20px;
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

            div.send-email {
                position: absolute;
                width: 100%;
                padding: 1rem;
                border-radius: 20px;
                font-weight: 600;
                font-size: 1.2rem;

                &.error {
                    background-color: #f86f6f;
                }

                &.success {
                    background-color: rgb(145, 255, 145);
                }
            }  
        }
    }
}

div.loader {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    img {
        width: 100%;
    }
}
</style>