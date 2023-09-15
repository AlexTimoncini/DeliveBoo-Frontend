<script>
import { store } from '../store';
export default{
    name: 'CartCheckout',
    data() {
        return {   
            store,
            totalPrice: 0,
        }
    },
    methods: {
		removeDishFromCart(dishIndex, finalQuantity){
				if(finalQuantity == 0){
                    store.cart_list.splice(dishIndex, 1);                   
				} else {
                    let dishCopy = store.cart_list[dishIndex];
                    dishCopy.quantity = parseInt(finalQuantity);
                    store.cart_list.splice(dishIndex, 1, dishCopy);
				}
                console.log(store.cart_list);
            this.setTotalPrice();
            this.saveCart();
		},
        incrementQuantity(dishObj){
            dishObj.quantity++;
            this.setTotalPrice();
            this.saveCart();
        },
        saveCart(){
            const parsed = JSON.stringify(store.cart_list);
            localStorage.setItem('cart', parsed);
        },
        setTotalPrice(){
            this.totalPrice = 0;
            store.cart_list.forEach((dish) => {
            this.totalPrice += parseInt(dish.price) * parseInt(dish.quantity);
        });
        }
    },
    mounted(){
        this.setTotalPrice();
        if(localStorage.getItem('cart')){
        try {
            store.cart_list = JSON.parse(localStorage.getItem('cart'));
        } catch(e) {
            localStorage.removeItem('cart');
        }
        // localStorage.clear();
    }
    },
}

</script>

<template>
    <div class="container pb-5">
        <div class="row">
            <div class="col-12 navbar d-flex justify-space-between">
                <div class="btn">
                    <router-link :to="{ name: 'WorkInProgress' }" class="d-block h-100">
                        <img src="../assets/icons/left-arrow.svg" alt="left arrow icon" draggable="false">
                    </router-link>
                </div>
                <h1 class="title">Shopping Cart</h1>
                <div class="btn d-none d-sm-block">
                    <router-link :to="{ name: 'WorkInProgress' }" class="d-block h-100">
                        <img src="../assets/icons/cart.svg" alt="left arrow icon" draggable="false">
                    </router-link>
                </div>
            </div>
        </div>
        <div v-if="store.cart_list.length < 1" class="empty_cart col-12 d-flex" >
            <img class="img-fluid mx-auto" src="../assets/mascotte/ghost_sleepy.png" alt="sleepy deliveboo ghost" draggable="false">
        </div>
        <div v-else class="row justify-content-between align-items-start">
            <ul class="cart col-12 col-lg-6 row">
                <li v-for="(dish, index) in store.cart_list" class="cart_item col-12">
                    <div class="dish_img"><img :src="dish.photo" :alt="dish.name + 'image'" draggable="false"></div>
                    <div class="dish_info">
                        <div class="dish_name"><h6>{{ dish.name }}</h6></div>
                        <div class="dish_price"><p class="m-0">{{ dish.price }}€</p></div>
                    </div>
                    <div class="dish_quantity_box">
                        <select class="dish_quantity" @change="removeDishFromCart(index, $event.target.value)">
                            <option v-for="n, index in dish.quantity"  :value="n" :selected="n == dish.quantity">{{ n }}</option>
                        </select>
                        <button class="btn_quantity d-none d-sm-block" @click="incrementQuantity(dish)"><img src="../assets/icons/spooky_plus.png" alt="plus img" draggable="false"></button>
                    </div>
                </li>
            </ul>
            <ul class="order_preview col-12 col-lg-6 m-0">
                <li><h4 class="title mt-3">Order Preview</h4></li>
                <li v-for="dish in store.cart_list" class="order_item d-flex justify-content-between">
                    <div class="dish_name m-0"><h6>{{ dish.name }} <strong>x{{ dish.quantity }}</strong></h6></div>
                    <div class="dish_price m-0"><p class="m-0">{{ (dish.price * dish.quantity).toFixed(2) }}€</p></div>
                </li>
                <li class="order_item d-flex justify-content-between total_price">
                    <div class="dish_name m-0"><h6>Total Price</h6></div>
                    <p class="m-0">{{ totalPrice.toFixed(2) }}€</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .navbar{
        height: 90px;
        padding: 1rem 0;
        font-family: $primaryFont;
        .title{
            font-size: 2.5rem;
        }
        .btn{
            height: 100%;
            flex-shrink: 1;
            img{
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

    .cart{
        flex-direction: column;
        row-gap: 1rem;

        .cart_item{
            width: 100%;
            background-color: $secYellow;
            padding: 0;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;
            display: flex;
            position: relative;
            border-radius: 10px;
            .dish_img{
                width: 70px;            

                img{
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 1/1;
                    display: block;
                    object-fit: cover;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
            }
            .dish_info{
                padding: 0.5rem 2rem;
                background-color: white;
                width: 50%;

                &:hover h6, &:hover .dish_price {
                    transform: translateX(-10%);
                }

                h6 {
                    font-size: 1.3rem;
                    color: $priGreen;
                    transition: all .3s ease;
                }

                .dish_price{
                    background-color: $secYellow;
                    text-align: center;
                    font-weight: 600;
                    width: fit-content;
                    padding: 0 1rem;
                    border-radius: 20px;
                    transition: all .3s ease;

                }
            }

            .dish_quantity_box{
                position: absolute;
                right: 5%;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                .dish_quantity{
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

                .btn_quantity{
                    padding: .2rem;
                    margin: 0 1rem;
                    border: none;
                    background: none;
                    font-size: 2rem;
                    display: block;
                    flex-grow: 1;
                    height: 100%;
                    width: 40px;
                    background-color: white;
                    border-radius: 50%;
                    img{
                        width: 100%;
                        display: block;
                        filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
                        transition: all .3s ease;

                        &:hover {
                            transform: scale(1.15)
                        }
;
                    }
                }
            }
        }
    }

    .order_preview{
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 7px;

        strong {
            color: $priGreen;
            font-weight: 600;
        }
        .title {
            color: $priGreen;
            font-weight: 600;
            margin-bottom: 2rem;
        }
        .order_item{
            padding: 0.3rem 0;
        }
        .total_price{
            border-top: 2px solid $secYellow;
            padding: 1rem 0;
        }

    }
    .order_preview::after{
        content: '';
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
        width: 100%;
        height: 20px;
        background-color: rgb(220, 220, 220); 
        clip-path: polygon(
            0 0,
            1% 50%,
            2% 0,
            3% 50%,
            4% 0,
            5% 50%,
            6% 0,
            7% 50%,
            8% 0,
            9% 50%,
            10% 0,
            11% 50%,
            12% 0,
            13% 50%,
            14% 0,
            15% 50%,
            16% 0,
            17% 50%,
            18% 0,
            19% 50%,
            20% 0,
            21% 50%,
            22% 0,
            23% 50%,
            24% 0,
            25% 50%,
            26% 0,
            27% 50%,
            28% 0,
            29% 50%,
            30% 0,
            31% 50%,
            32% 0,
            33% 50%,
            34% 0,
            35% 50%,
            36% 0,
            37% 50%,
            38% 0,
            39% 50%,
            40% 0,
            41% 50%,
            42% 0,
            43% 50%,
            44% 0,
            45% 50%,
            46% 0,
            47% 50%,
            48% 0,
            49% 50%,
            50% 0,
            51% 50%,
            52% 0,
            53% 50%,
            54% 0,
            55% 50%,
            56% 0,
            57% 50%,
            58% 0,
            59% 50%,
            60% 0,
            61% 50%,
            62% 0,
            63% 50%,
            64% 0,
            65% 50%,
            66% 0,
            67% 50%,
            68% 0,
            69% 50%,
            70% 0,
            71% 50%,
            72% 0,
            73% 50%,
            74% 0,
            75% 50%,
            76% 0,
            77% 50%,
            78% 0,
            79% 50%,
            80% 0,
            81% 50%,
            82% 0,
            83% 50%,
            84% 0,
            85% 50%,
            86% 0,
            87% 50%,
            88% 0,
            89% 50%,
            90% 0,
            91% 50%,
            92% 0,
            93% 50%,
            94% 0,
            95% 50%,
            96% 0,
            97% 50%,
            98% 0,
            99% 50%,
            100% 0
        );     
    }
</style>
