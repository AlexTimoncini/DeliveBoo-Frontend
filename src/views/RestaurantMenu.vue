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
        }
    },
    methods: {
        addDishToCart(dishObj) {
            if ((store.cart_list.length == 0) && (store.cartRestaurantID == null)) {
                console.log(dishObj.user_id);
                store.cartRestaurantID = dishObj.user_id;
            }
            if (store.cartRestaurantID !== dishObj.user_id) {
                alert("You can't add this dish to your cart, you already have others from a different restaurant.");
                
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
        saveCart() {
            console.log(store.cart_list);
            const parsed = JSON.stringify(store.cart_list);
            localStorage.setItem('cart', parsed);
        },
        getData() {
            axios.get(store.ApiUrl + 'restaurants/' + this.restaurant_id)
                .then((response) => {
                    this.restaurant = response.data.data;
                    this.bestDishes = this.restaurant.dishes.slice(0, 3);
                    this.restaurant_logo = this.restaurant.logo;
                })
                .catch(() => {
                    this.$router.push('/404');
                });
        }
    },
    mounted() {
        this.restaurant_id = this.$route.params.id;
        this.getData();
    }
}
</script>

<template>
    <div class="container pb-5">
        <div class="row">

            <!-- Restaurant Photo & Logo -->
            <div class="image-container col-12">
                <img class="image img-fluid" :src="restaurant.image" :alt="restaurant.name + ' image'" draggable="false">
                <img class="logo img-fluid"
                    :src="restaurant_logo.startsWith('http') ? restaurant.logo : '../../public/assets/restaurant-logos' + restaurant.logo"
                    :alt="restaurant.name + ' image'" draggable="false" @click="console.log(restaurant.logo)">
            </div>
        </div>
        <div class="row">

            <!-- Restaurant Header (Title, Types & Description) -->
            <div class="header col-12 col-md-8 text-center text-md-start mb-5">
                <h1>{{ restaurant.name }}</h1>
                <span class="me-2" v-for="(    type, index    ) in     restaurant.types    ">{{ type.name }} {{ index + 1 ==
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
            <div class="row">
                <Card v-for="    dish     in     bestDishes    " :dish="dish" @add="addDishToCart(dish)" />
            </div>
        </div>

        <!-- Menu -->
        <div class="menu col-12">
            <h2>{{ restaurant.name }} Menu</h2>
            <div class="row">
                <Card v-for="    dish     in     restaurant.dishes    " :dish="dish" @add="addDishToCart(dish)" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

div.container {

    div.image-container {
        position: relative;

        img.image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            object-position: top;
            border-radius: 30px;
            margin: 2rem 0;
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
</style>