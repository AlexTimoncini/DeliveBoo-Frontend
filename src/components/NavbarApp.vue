<script>
import { store } from '../store';
export default {
    name: 'NavbarApp',
    data() {
        return {
            triggerMenu: false,
            store,
            counter: 0,
        }
    },
    mounted() {
        window.onresize = () => {
            if (window.innerWidth < 992) {
                this.triggerMenu = false;
            };
        };
        if (localStorage.getItem('cart')) {
            try {
                store.cart_list = JSON.parse(localStorage.getItem('cart'));
            } catch (e) {
                localStorage.removeItem('cart');
            }
        }
    }
}
</script>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser();
})
</script>

<template>
    <nav>
        <div class="nav container">
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/logos/full_logo.svg" alt="Deliveboo full logo" draggable="false"
                        class="d-none d-lg-block">
                </router-link>
                <router-link to="/">
                    <img src="../assets/logos/green_ghost.svg" alt="Deliveboo full logo" draggable="false"
                        class="d-lg-none">
                </router-link>
            </div>
            <div class="hamburger-menu d-lg-none" @click="triggerMenu = !triggerMenu" :class="triggerMenu ? 'active' : ''">
                <img src="../assets/icons/burger-menu.png" alt="burger icon">
            </div>
            <div class="navbar d-none d-lg-flex flex-lg-nowrap" :class="triggerMenu ? 'active' : ''">
                <ul class="nav-links d-flex flex-column flex-lg-row">
                    <li><router-link :to="{ name: 'Homepage' }">Home</router-link></li>
                    <li><router-link :to="{ name: 'WorkInProgress' }">About</router-link></li>
                    <li><router-link :to="{ name: 'WorkInProgress' }">Contact</router-link></li>
                </ul>
                <div v-if="!authStore.user">
                    <router-link :to="{ name: 'LoginRestaurant' }">
                        <button>Are you a restaurant?</button>
                    </router-link>
                </div>
                <div class="d-flex align-items-center" v-else>
                    <div class="btn-class">
                        <img :src="authStore.user ? 'http://127.0.0.1:8000/storage/' + authStore.user.logo : ''" alt="">
                    </div>
                    <div class="menu-profile">
                        <button @click="openCloseMenu">
                            <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 330 330" xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path id="XMLID_225_"
                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                        <div class="menu">
                            <ul class="list-unstyled">
                                <li>
                                    <router-link :to="{ name: 'MyAccount' }">Dashboard</router-link>
                                </li>
                                <li @click="authStore.logout">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cart-btn">
                    <router-link :to="{ name: 'CartCheckout' }">
                        <img src="../assets/icons/cart.svg" alt="cart svg" draggable="false">
                        <div v-if="store.cart_list.length !== 0" class="cart_counter">
                            <p>{{ store.cart_list.length }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

nav {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    font-family: $primaryFont;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;

    .nav.container {
        @include flex(row, space-between, center, no-wrap);
        padding: 0.5rem 0;
        height: 95px;

        .logo {
            height: 100%;
            display: flex;
            padding: 0.5rem 0;

            img {
                display: block;
                margin: auto 0;
                height: 100%
            }
        }

        .navbar {
            height: 100%;

            .nav-links {
                column-gap: .5rem;
                margin-bottom: 0;
                margin-right: 1rem;

                li {
                    height: 100%;
                    padding: .2rem .7rem;
                    transition: all .3s ease;
                    border-radius: 30px;
                    cursor: pointer;

                    a {
                        transition: all .3s ease;
                    }

                    &:hover {
                        background-color: $priGreen;

                        a {
                            color: white;
                        }
                    }
                }
            }

            button {
                margin-right: 1rem;
                border: none;
                background-color: $secYellow;
                padding: 0.5rem 1.5rem;
                border-radius: 30px;
                transition: all .3s ease;

                &:hover {
                    filter: brightness(1.2);
                }
            }

            .btn-class {
                position: relative;
                margin-right: 1rem;
                border: none;
                height: 60px;
                width: 60px;
                background-color: $secYellow;
                border-radius: 50%;
                transition: all .3s ease;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }

                &:hover {
                    filter: brightness(1.2);
                }
            }

            .menu-profile {
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.5s;
                cursor: pointer;

                button {
                    border-radius: 50%;
                    padding: .3rem;
                    height: 30px;
                    width: 30px;
                    z-index: 1;

                    &:hover svg {
                        transform: scale(1.7) translateY(20%);
                    }

                    svg {
                        transform: scale(1.7) translateY(-20%);
                        z-index: 0;
                        transition: all .3s ease;
                    }
                }

                &:hover {
                    .menu {
                        width: 120px;
                    }
                }

                .menu {
                    width: 0px;
                    position: absolute;
                    top: 2.4rem;
                    transition: all 0.5s;

                    ul {
                        padding-top: 3rem;
                        border-radius: 30px;
                        margin: 0;
                        overflow: hidden;
                        transition: all 0.5s;

                        li {
                            padding: .5rem 1rem;
                            background-color: $priGreen;
                            text-align: center;
                            transition: all 0.5s;
                            cursor: pointer;
                            color: white;
                            font-weight: 500;
                            border-bottom: 3px solid $secYellow;

                            a {
                                color: white;
                            }

                            &:hover {
                                filter: brightness(1.2);
                            }
                        }
                    }
                }
            }

            .cart-btn {
                width: 35px;
                aspect-ratio: 1/1;
                cursor: pointer;
                position: relative;

                &:hover img {
                    transform: scale(1.1);
                }

                &:hover .cart_counter {
                    transform: scale(1.4);
                }

                img {
                    filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
                    transition: all .3s ease;
                }

                .cart_counter {
                    position: absolute;
                    width: 18px;
                    border-radius: 50px;
                    background-color: red;
                    color: $fontWhite;
                    height: 18px;
                    line-height: 18px;
                    font-size: 1rem;
                    text-align: center;
                    top: -7px;
                    right: -7px;
                    box-sizing: content-box;
                    transition: all .3s ease;
                }
            }
        }

        .navbar.active {
            display: flex !important;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            top: 100%;
            left: 0;
            height: calc(100vh - 95px);
            width: 100vw;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px inset;

            .nav-links {
                margin-bottom: 0;
                width: 100%;

                li {
                    width: 100%;
                    display: flex;
                    padding: 2rem 0;

                    a {
                        text-transform: uppercase;
                        font-size: 5rem;
                        color: $priGreen;
                        margin: auto;
                        transition: all 0.33s ease;
                    }

                    a:hover {
                        letter-spacing: 0.9rem;
                    }
                }
            }

            .login-btn {
                font-size: 3rem;
            }

            .cart-btn {
                margin-top: 3rem;
                width: 200px;
            }
        }

        .hamburger-menu {
            position: relative;
            width: 50px;
            aspect-ratio: 1/1;
            cursor: pointer;
            transition: all linear 0.33s;

            img {
                display: block;
                height: 100%;
            }
        }

        .hamburger-menu::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            background-color: transparent;
            top: 0;
            left: 0;
            transition: all linear 0.33s;
            border-radius: 5px;
        }

        .hamburger-menu::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            background-color: transparent;
            bottom: 0;
            left: 0;
            transition: all linear 0.33s;
            border-radius: 5px;
        }

        .hamburger-menu.active {
            img {
                display: none;
            }
        }

        .hamburger-menu.active::after {
            top: 50%;
            transform: rotate(45deg) translateY(-50%);
            background-color: $secYellow;
        }

        .hamburger-menu.active::before {
            bottom: 50%;
            transform: rotate(-45deg) translateY(50%);
            background-color: $secYellow;
        }
    }
}
</style>
