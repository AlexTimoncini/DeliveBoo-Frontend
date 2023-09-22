<script>
import Card from '../components/Card.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'RestaurantMenu',

    components: {
        Card
    },

    data() {
        return {
            store,
            restaurant: [],
            bestDishes: [],
            restaurant_id: null,
            restaurant_logo: '',

            // cart sidebar 
            store,
            totalPrice: 0,

            // alert 
            alert: false,
            alertId: '',
        }
    },
    methods: {

        alertMessage(dishID) {
            this.alert = true;
            this.alertId = dishID;
        },

        turnOffAlert() {
            this.alert = false;
            this.alertId = '';
        },


        addDishToCart(dishObj) {
            if ((store.cart_list.length == 0) && (store.cartRestaurantID == null) || (store.cartRestaurantID == dishObj.user_id)) {
                console.log(dishObj.user_id);
                store.cartRestaurantID = dishObj.user_id;
            }
            if (store.cartRestaurantID !== dishObj.user_id) {
                this.alertMessage(dishObj.id);
                // alert("You can't add this dish to your cart, you already have others from a different restaurant.");
            } else {
                let cart = store.cart_list;
                if ((cart.find((item) => item.name === dishObj.name)) !== undefined) {
                    let dish = cart.find((item) => item.name === dishObj.name);
                    dishObj.quantity = dish.quantity + 1;
                    let dishIndex = cart.findIndex((item) => item.name === dishObj.name);
                    store.cart_list.splice(dishIndex, 1, dishObj);

                } else {
                    dishObj.quantity = 1;
                    store.cart_list.push(dishObj);
                };
                this.saveCart();
            }
        },
        getData() {
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id)
                .then((response) => {
                    this.restaurant = response.data.data;
                    this.bestDishes = this.restaurant.dishes.slice(0, 3);
                })
                .catch(() => {
                    this.$router.push('/404');
                });
            axios.get(`${store.ApiUrl}restaurants/logo/${this.restaurant_id}`)
                .then((response) => {
                    console.log(response);
                    const logoFileName = response.data.logoFileName;
                    const logoUrl = `/storage/${logoFileName}`;
                    this.restaurant_logo = logoUrl;
                    console.log(logoUrl);
                })
                .catch((error) => {
                    console.error('Errore durante il recupero dell\'immagine:', error);
                });
        },

        // CART SIDEBAR 
        removeDishFromCart(dishIndex, finalQuantity) {
            if (finalQuantity == 0) {
                store.cart_list.splice(dishIndex, 1);
                if (store.cart_list.length == 0) {
                    store.cartRestaurantID = null;
                }
            } else {
                let dishCopy = store.cart_list[dishIndex];
                dishCopy.quantity = parseInt(finalQuantity);
                store.cart_list.splice(dishIndex, 1, dishCopy);
            }
            console.log(store.cart_list);
            this.saveCart();
        },

        removeAllDishesFromCart() {
            store.cart_list = [];
            this.saveCart();
        },

        incrementQuantity(dishObj) {
            dishObj.quantity++;
            this.saveCart();
        },
        saveCart() {
            const parsed = JSON.stringify(store.cart_list);
            localStorage.setItem('cart', parsed);
            this.setTotalPrice();
            this.setCartId();
        },
        setTotalPrice() {
            this.totalPrice = 0;
            store.cart_list.forEach((dish) => {
                this.totalPrice += parseFloat(dish.price) * parseInt(dish.quantity);
            });
        },
        setCartId() {
            if (store.cart_list.length === 0) {
                store.cartRestaurantID = null
            } else {
                store.cartRestaurantID = store.cart_list[0].user_id;
            }
        }
    },
    mounted() {
        this.restaurant_id = this.$route.params.id;
        this.getData();
        this.setTotalPrice();
        this.setCartId();
    }
}
</script>

<template>
    <div class="d-flex container-fluid flex-column flex-md-row p-0 position-relative">
        <div class="cart-container  d-none d-md-block col-md-3">
            <div class="cart-sidebar px-3 py-4">
                <h2 class="mb-4 px-3">Shopping Cart</h2>

                <!-- Empty cart  -->
                <div v-if="store.cart_list.length < 1" class="empty_cart col-12 d-flex">
                    <img class="img-fluid mx-auto " src="../assets/mascotte/ghost_sleepy.png" alt="sleepy deliveboo ghost"
                        draggable="false">
                </div>

                <!-- Cart with at least one element -->

                <div v-else class="cart">
                    <ul class=" col-12 m-0 px-0 px-sm-3 mb-4">
                        <li v-for="(dish, index) in store.cart_list"
                            class="cart_item  col-12 mb-3 d-flex justify-content-between flex-md-column flex-xl-row ">
                            <!-- dishes ordered  -->
                            <div class="col-8 align-items-center align-items-md-start ">
                                <div class="dish_info pe-0 d-flex flex-column justify-content-center align-items-start ">
                                    <div class="dish_name">
                                        <h6 class="">{{ dish.name }}</h6>
                                    </div>
                                    <div class="dish_price">
                                        <p class="m-0">{{ dish.price }}€</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Commands -->
                            <div class="dish_quantity_box p-2 d-flex flex-column flex-md-row flex-xl-column">
                                <div class="buttons d-flex mb-2">
                                    <button class="btn_quantity " @click="removeDishFromCart(index, 0)"><svg
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button class="btn_quantity" @click="incrementQuantity(dish)"><img
                                            src="../assets/icons/spooky_plus.png" alt="plus img" draggable="false"></button>
                                </div>

                                <select class="dish_quantity w-75" @change="removeDishFromCart(index, $event.target.value)">
                                    <option v-for="n, index in dish.quantity" :value="n" :selected="n == dish.quantity">{{ n
                                    }}
                                    </option>
                                </select>
                            </div>
                        </li>
                    </ul>

                    <div class="total ms-sm-3 mb-4 d-flex align-items-center">
                        <h4 class="me-3 mb-0 ">Your Total is: </h4>
                        <p class="mb-0">{{ totalPrice.toFixed(2) }}</p>
                    </div>


                    <button class="btn order-btn order ms-sm-3 mb-4" @click=" this.$router.push({
                        name: 'CartCheckout'
                    })">Go to Order</button>
                    <button class="btn btn-danger  ms-sm-3 mb-4" @click="removeAllDishesFromCart()">Empty Cart</button>

                </div>




            </div>
        </div>

        <!-- Main app  -->
        <div class="main-app col-12 col-md-9">
            <div class="row">

                <!-- Restaurant Photo & Logo -->
                <div class="image-container col-12">
                    <img class="image img-fluid" :src="restaurant.image" :alt="restaurant.name + ' image'"
                        draggable="false">
                    <img class="logo img-fluid" :src="`http://127.0.0.1:8000${this.restaurant_logo}`"
                        :alt="restaurant.name + ' image'" draggable="false" @click="console.log(restaurant.logo)">
                </div>
            </div>
            <div class="row">

                <!-- Restaurant Header (Title, Types & Description) -->
                <div class="form">
                    <div class="header col-12 col-md-8 text-center text-md-start mb-5">
                        <h1>{{ restaurant.name }}</h1>
                        <span class="me-2" v-for="(    type, index    ) in     restaurant.types    ">{{ type.name }} {{
                            index +
                            1 ==
                            restaurant.types.length ? '' : '-' }}</span>

                        <!-- Insert restaurant.description ↓↓↓ -->
                        <p>{{ restaurant.description }}</p>
                    </div>

                    <!-- Restaurant Info-Card (Address, Telephone, Mail & VAT Number) -->
                    <div class="info-card card col-12 col-md-4 mb-5">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><img src="../assets/icons/gps.svg" alt="GPS Icon"><span>{{
                                restaurant.address }}</span></li>

                            <!-- Insert restaurant.phone ↓↓↓ -->
                            <li class="list-group-item"><img src="../assets/icons/telephone.svg" alt="E-mail Icon"><span>{{
                                restaurant.phone }}</span></li>

                            <li class="list-group-item"><img src="../assets/icons/mail.svg" alt="Mail Icon"><span>{{
                                restaurant.email }}</span></li>
                            <li class="list-group-item"><img src="../assets/icons/paper.svg" alt="VAT Icon"><span>{{
                                restaurant.vat_number }}</span></li>
                        </ul>
                    </div>
                </div>

                <!-- Restaurant Popular Dishes List -->
                <div class="popular-dishes col-12 mb-5">
                    <h2>Boo-tifully Popular and Delicious</h2>
                    <div class="row d-flex">
                        <Card v-for="    dish     in     bestDishes    " :dish="dish" @add="addDishToCart(dish)" />
                        <div v-for="    dish     in     bestDishes    "
                            class="my_alert alert alert-warning alert-dismissible col-lg-3 col-md-6 col-10 p-4 d-flex flex-column align-items-center"
                            :class="!alert || alertId === dish.id ? 'd-none' : 'd-block'">
                            <img class="" src="../assets/mascotte/angry-boo.png" alt="angry ghost">
                            <h4 class="alert-heading">Boo are you doing?!</h4>
                            <p class="text-center">You can't add this dish to your cart, you already have others from a
                                different restaurant.
                            </p>
                            <div class="d-flex justify-content-end"><button class="btn btn btn-danger"
                                    @click="turnOffAlert()">Ok</button></div>
                        </div>
                    </div>
                </div>

                <!-- Menu -->
                <div class="menu col-12">
                    <h2>{{ restaurant.name }} Menu</h2>
                    <div class="row ">
                        <Card v-for="    dish     in     restaurant.dishes    " :dish="dish" @add="addDishToCart(dish)" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

div.container-fluid {
    position: relative;

    .cart-container {
        height: calc(100vh - 90px);

        .cart-sidebar {
            height: 100%;
            background-color: white;

            h2 {
                color: $priGreen;
            }

            div.total {
                h4 {
                    color: $priGreen;
                }

                p {
                    font-size: 1.3rem;
                    font-weight: 300;
                }
            }

            .cart_item {
                // width: 100%;
                padding: 0;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
                border-radius: 10px;

                .dish_info {
                    height: 100%;
                    padding: 0.5rem 1rem;
                    background-color: white;
                    width: 100%;

                    &:hover h6,
                    &:hover .dish_price {
                        transform: translateX(-5%);
                    }

                    h6 {
                        font-size: 1.1rem;
                        color: $priGreen;
                        transition: all .3s ease;
                    }

                    .dish_price {
                        background-color: $secYellow;
                        text-align: center;
                        font-weight: 600;
                        width: fit-content;
                        padding: 0 1rem;
                        border-radius: 20px;
                        transition: all .3s ease;

                        p {
                            font-size: .85rem;
                        }
                    }
                }

                .dish_quantity_box {
                    display: flex;
                    align-items: center;
                    background-color: $secYellow;
                    padding: 0 1rem;
                    border-radius: 0 10px 10px 0;

                    select {
                        height: 40px;

                    }

                    select.dish_quantity {
                        border: none;
                        padding: .3rem;
                        background-color: white;
                        border-radius: 20px;
                        text-align: center;
                        font-size: .8rem;

                        & option {
                            background-color: white;
                        }
                    }

                    .btn_quantity {
                        display: flex;
                        padding: .2rem;
                        margin: 0 .3rem;
                        border: none;
                        display: block;
                        height: 30px;
                        width: 30px;
                        background-color: white;
                        border-radius: 50%;

                        img {
                            margin: auto;
                            width: 90%;
                            display: block;
                            filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
                            transition: all .3s ease;

                            &:hover {
                                transform: scale(1.2)
                            }

                            ;
                        }

                        svg {
                            margin: auto;
                            transition: all .3s ease;
                            width: 90%;
                            display: block;
                            filter: invert(24%) sepia(97%) saturate(2101%) hue-rotate(351deg) brightness(82%) contrast(100%);
                            transition: all .3s ease;

                            &:hover {
                                transform: scale(1.15)
                            }
                        }
                    }
                }
            }

            button.order {
                background-color: $priGreen;
                color: white;
            }
        }
    }

    .main-app::-webkit-scrollbar {
        /* WebKit - Chrome */
        width: 0;
        height: 0;
    }

    div.main-app {
        padding: 2rem;
        height: calc(100vh - 90px);
        overflow-y: scroll;
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */


        div.my_alert {
            background-color: rgb(253, 255, 232);
            border-radius: 10px;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);

            z-index: 2;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            color: black;


            img {
                width: 50%;
            }

            button {
                background-color: $secYellow;
                border: none;
                color: black;
            }

            .alert-heading {
                color: rgb(196, 18, 18);
                font-weight: 700;
            }

        }

        div.image-container {
            position: relative;

            img.image {
                width: 100%;
                height: 400px;
                object-fit: cover;
                object-position: top;
                border-radius: 30px;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                transition: all .3s ease;

                &:hover {
                    transform: scale(1.02);
                }
            }

            img.logo {
                width: 150px;
                aspect-ratio: 1;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                left: 3%;
                top: 75%;
                box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
            }
        }

        div.header {
            padding: 4rem 0 0;

            h1 {
                font-size: 3.5rem;
                font-weight: bold;
                margin: 0;
            }

            span {
                font-size: 1.3rem;
                font-weight: 600;
                color: grey;
                display: inline-block;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.5rem;
                padding: 0.5rem 2rem 0.5rem 0.5rem;
            }
        }

        div.info-card {
            border: 1px solid lightgrey;
            align-self: center;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;

            img {
                width: 25px;
                aspect-ratio: 1;
                margin-right: .5rem;
                filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
            }

            span {
                line-height: 25px;
                vertical-align: middle;
            }

            ul li {
                transition: all .3s ease;

                &:hover {
                    color: $priGreen;
                }
            }
        }

        div.popular-dishes {

            h2 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
        }

        div.menu {

            h2 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
        }
    }

}
</style>