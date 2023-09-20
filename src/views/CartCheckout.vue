<script>
import { store } from '../store';
export default {
    name: 'CartCheckout',
    data() {
        return {
            store,
            totalPrice: 0,
        }
    },
    methods: {
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
            this.setTotalPrice();
            this.saveCart();
        },
        incrementQuantity(dishObj) {
            dishObj.quantity++;
            this.setTotalPrice();
            this.saveCart();
        },
        saveCart() {
            const parsed = JSON.stringify(store.cart_list);
            localStorage.setItem('cart', parsed);
        },
        setTotalPrice() {
            this.totalPrice = 0;
            store.cart_list.forEach((dish) => {
                this.totalPrice += parseInt(dish.price) * parseInt(dish.quantity);
            });
        }
    },
    mounted() {
        this.setTotalPrice();
    },
}

</script>

<template>
    <div class="container pb-5">
        <div class="row">
            <div class="col-12 navbar d-flex justify-content-start">
                <div class="btn me-2 me-md-5">
                    <router-link :to="{ name: 'Homepage' }" class="d-block h-100">
                        <img src="../assets/icons/left-arrow.svg" alt="left arrow icon" draggable="false">
                    </router-link>
                </div>

                <h1 class="title">Shopping Cart</h1>

            </div>
        </div>
        <div v-if="store.cart_list.length < 1" class="empty_cart col-12 d-flex">
            <img class="img-fluid mx-auto" src="../assets/mascotte/ghost_sleepy.png" alt="sleepy deliveboo ghost"
                draggable="false">
        </div>
        <div v-else class="row justify-content-between align-items-start">
            <ul class="cart col-12 col-lg-6 row m-0 px-0 px-sm-3 mb-4">
                <li v-for="(dish, index) in store.cart_list" class="cart_item d-flex justify-content-between col-12">
                    <div class="d-flex col-8 align-items-center align-items-md-start">
                        <div class="dish_img"><img class="img-fluid" :src="dish.photo" :alt="dish.name + 'image'"
                                draggable="false"></div>
                        <div class="dish_info pe-0">
                            <div class="dish_name ">
                                <h6 class="">{{ dish.name }}</h6>
                            </div>
                            <div class="dish_price">
                                <p class="m-0">{{ dish.price }}€</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-5 dish_quantity_box p-2 d-flex flex-column flex-md-row">
                        <div class="buttons d-flex  mb-3 mb-md-0">
                            <button class="btn_quantity " @click="removeDishFromCart(index, 0)"><svg viewBox="0 0 24 24">
                                    <path
                                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
                                    </path>
                                </svg>
                            </button>
                            <button class="btn_quantity" @click="incrementQuantity(dish)"><img
                                    src="../assets/icons/spooky_plus.png" alt="plus img" draggable="false"></button>
                        </div>

                        <select class="dish_quantity ms-0 ms-md-2 px-3 px-lg-2 px-xl-3 w-75 w-sm-100"
                            @change="removeDishFromCart(index, $event.target.value)">
                            <option v-for="n, index in dish.quantity" :value="n" :selected="n == dish.quantity">{{ n }}
                            </option>
                        </select>
                    </div>
                </li>
            </ul>
            <ul class="order_preview col-12 col-lg-5 m-0">
                <li>
                    <h4 class="title mt-3">Order Preview</h4>
                </li>
                <li v-for="dish in store.cart_list" class="order_item d-flex justify-content-between">
                    <div class="dish_name m-0">
                        <h6>{{ dish.name }} <strong>x{{ dish.quantity }}</strong></h6>
                    </div>
                    <div class="dish_price m-0">
                        <p class="m-0">{{ (dish.price * dish.quantity).toFixed(2) }}€</p>
                    </div>
                </li>
                <li class="order_item d-flex justify-content-between total_price">
                    <div class="dish_name m-0">
                        <h6>Total Price</h6>
                    </div>
                    <p class="m-0">{{ totalPrice.toFixed(2) }}€</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

div.container {
    height: calc(100vh - 95px);
}

.navbar {
    height: 90px;
    padding: 1rem 0;
    font-family: $primaryFont;

    .title {
        font-size: 2.5rem;
        color: $priGreen;
        font-weight: 700;

    }

    .btn {
        height: 100%;
        flex-shrink: 1;

        img {
            aspect-ratio: 1/1;
            height: 100%;
            display: block;
            filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
            transition: all .3s ease;

            &:hover {
                transform: scale(1.2)
            }
        }
    }
}

.cart {
    flex-direction: column;
    row-gap: 1rem;

    .cart_item {
        // width: 100%;
        padding: 0;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
        border-radius: 10px;

        .dish_img {
            width: 70px;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                aspect-ratio: 1/1;
                display: block;
                object-fit: cover;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
        }

        .dish_info {
            padding: 0.5rem 2rem;
            background-color: white;
            width: 100%;

            &:hover h6,
            &:hover .dish_price {
                transform: translateX(-5%);
            }

            h6 {
                font-size: 1.3rem;
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

            .dish_quantity {
                border: none;
                padding: .5rem;
                background-color: white;
                border-radius: 20px;
                width: 60px;
                text-align: center;

                & option {
                    background-color: white;
                    font-size: 1rem;
                }
            }

            .btn_quantity {
                display: flex;
                padding: .2rem;
                margin: 0 .3rem;
                border: none;
                display: block;
                height: 35px;
                width: 35px;
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
}

.order_preview {
    position: relative;
    background-color: #F5F5F5FF;
    border-radius: 0 0 10px 10px;

    strong {
        color: $priGreen;
        font-weight: 600;
    }

    .title {
        color: $priGreen;
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .order_item {
        padding: 0.3rem 0;
    }

    .total_price {
        border-top: 2px solid $secYellow;
        padding: 1rem 0;
    }

}

.order_preview::after {
    background-image: linear-gradient(135deg, transparent 46%, #E4E4E4FF 50%, #F5F5F5FF 54%), linear-gradient(225deg, #FFFFFFFF 46%, #E4E4E4FF 50%, #F5F5F5FF);
    background-position: 0 0, 0 0;
    background-repeat: repeat-x;
    background-size: 12px 12px;
    content: "";
    height: 6px;
    left: 0;
    position: absolute;
    top: -6px;
    width: 100%;
}

@media (max-width: 370px) {
    .navbar .title {
        font-size: 2rem;
    }

    .navbar .btn img {
        height: 2rem;
    }

}
</style>
