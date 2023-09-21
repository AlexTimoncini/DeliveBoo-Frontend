import { defineStore } from 'pinia';
import axios from 'axios';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        authUser: null,
        messageErrors: ''
    }),
    getters: {
        user: (state) => state.authUser
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
            });
            this.router.push('/admin/myaccount');
            this.messageErrors = '';
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
                image: dataRegister.image,
                logo: dataRegister.logo,
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
        }
    }
})