<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="container my_app ">
                    <div class="row d-flex justify-content-center ">
                        <div class="buttons col-12 col-lg-11 mt-4 mb-4 ">
                            <button @click="this.$router.push({ name: 'Orders' })">
                                <svg viewBox="0 0 256 256" id="arrow-u-down-left">
                                    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24" points="80 120 32 168 80 216"></polyline>
                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24"
                                        d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32">
                                    </path>
                                </svg>
                                <span class="d-none d-md-inline">Back</span>
                            </button>
                        </div>
                        <div class="row d-flex justify-content-center">

                            <ul class="order_preview col-12 col-lg-6 m-0">
                                <li>
                                    <h4 class="title mt-3">Order n° <span>{{ }}</span></h4>
                                </li>
                                <li v-for="order in allOrders" class="order_item d-flex justify-content-between">
                                    <div class="dish_name m-0">
                                        <h6>BoolDoubleBurger <strong>x1</strong></h6>
                                    </div>
                                    <div class="dish_price m-0">
                                        <p class="m-0">15.00€</p>
                                    </div>
                                </li>

                                <li class="order_item d-flex justify-content-between total_price">
                                    <div class="dish_name m-0">
                                        <h6>Total Invoice</h6>
                                    </div>
                                    <p class="m-0">15.00€</p>
                                </li>
                            </ul>
                            <div class="col-lg-5 d-none d-lg-block">
                                <img class="img-fluid" src="../../assets/mascotte/boo-order-show.png"
                                    alt="boo the gost working at the shop counter">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
import axios from 'axios';
export default {
    name: 'OrderShow',

    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/orders',
            order: {}
        }
    },

    methods: {
        getOrder() {
            axios.get(`${this.apiUrl}/1`).then(response => {
                console.log(response.data);
                this.order = response.data;
            })
                .catch(error => console.error(error))
        }
    },

    mounted() {
        this.getOrder();
    }
}

</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.my_app::-webkit-scrollbar {
    display: none;
}

.my_app {
    width: 100%;
    height: calc(100vh - 95px - 80px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    div.buttons {
        display: flex;
        justify-content: end;
        align-items: center;

        button {
            background-color: $secYellow;
            padding: .5rem .5rem;
            border-radius: 15px;
            border: none;
            margin: 1rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: all .3s ease;

            &:hover {
                background-color: #ffd966;
            }

            &:hover svg {
                transform: scale(1.1);
            }

            span {
                margin-left: 1rem;
            }

            &.disabled {
                background-color: darkgrey;
                color: lightgrey;
                pointer-events: none;

                svg {
                    fill: lightgrey;
                }
            }

            svg {
                width: 30px;
                aspect-ratio: 1;
                transition: all .3s ease;
            }
        }


    }


    .order_preview {
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

        .order_item {
            padding: 0.3rem 0;
        }

        .total_price {
            border-top: 2px solid $secYellow;
            padding: 1rem 0;
        }

    }

    .order_preview::after {
        content: '';
        position: absolute;
        bottom: 0;
        transform: translateY(100%);
        left: 0;
        width: 100%;
        height: 20px;
        background-color: rgb(220, 220, 220);
        clip-path: polygon(0 0,
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
                100% 0);
    }

}
</style>