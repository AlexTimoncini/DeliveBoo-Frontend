import { defineStore } from 'pinia';
import axios from 'axios';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        messageErrors: '',
        loginMessageErrors: '',
        forgotError: null,
        authSuccess: null,
        authResetSuccess: null,
        forgotLoader: false,
        authStatus: null,
        resetPassword: null
    }),
    getters: {
        user: (state) => state.authUser,
    },
    actions: {
        async getToken() {
            await axios.get('/sanctum/csrf-cookie',);
        },
        async getUser() {
            this.getToken();
            await axios.get('/api/user').then((response) => {
                this.authUser = response.data;
                console.log(this.authUser);
            }).catch((error) => {
            });
        },

        async loginUser(dataLogin) {
            await this.getToken();
            await axios.post('/login', {
                email: dataLogin.email,
                password: dataLogin.password
            }).then((response) => {
                this.router.push('/admin/myaccount');
            }).catch((error) => {
                this.loginMessageErrors = error.response.data.errors
                console.log(this.loginMessageErrors);
            });
        },

        async registerUser(dataRegister) {
            await this.getToken();
            await axios.post('/register', {
                name: dataRegister.name,
                vat_number: dataRegister.vat_number,
                email: dataRegister.email,
                address: dataRegister.address,
                closer_time: dataRegister.closer_time,
                open_time: dataRegister.open_time,
                phone: dataRegister.phone,
                description: dataRegister.description,
                password: dataRegister.password,
                password_confirmation: dataRegister.password_confirm
            }).then((response) => {
                this.router.push('/admin/myaccount');
            }).catch((error) => {
                this.messageErrors = error.response.data.errors
                console.log(this.messageErrors);
            });
        },

        async logout() {
            this.messageErrors = '';
            axios.post('/logout');
            this.authUser = null;
            this.router.push('/');
        },

        async forgotPassword(email) {
            try {
                const response = await axios.post('/forgot-password', {
                    email: email
                })
                this.authSuccess = response.data.status
                if (this.authSuccess) {
                    this.authStatus = true
                    this.forgotLoader = false
                }
            } catch (error) {
                console.log(error.response.data)
                this.forgotError = error.response.data.message
                if (this.forgotError) {
                    this.authStatus = false
                    this.forgotLoader = false
                }
            }
        },

        async resetPassword(resetData) {
            this.getToken();
            try {
                const response = await axios.post('/reset-password', resetData);
                this.authResetSuccess = response.data.status
                if (this.authResetSuccess) {
                    console.log(this.authResetSuccess)
                    this.authStatus = true
                    this.router.push('/login');
                }

            } catch (error) {
                console.log(error.response.data.message)
                this.resetError = error.response.data.message
                if (this.resetError) {
                    this.authStatus = false
                }
            }
        }
    }
})