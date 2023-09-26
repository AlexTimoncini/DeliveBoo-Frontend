<template>
    <div class="container">
        <div class="row section-payment">

            <!-- Order Review  -->
            <div class="col-12 col-md-6 mb-4">
                <div class="boo-img">
                    <img class="image-fluid" src="../assets/mascotte/boo-payment.png" alt="little ghost with a credit card">
                </div>
                <div>
                    <ul class="order_review pt-3 pe-4">
                        <li>
                            <h4 class="title mt-3">Order Rreview</h4>
                        </li>
                        <li v-for="dish in store.cart_list" class="order_item d-flex justify-content-between">
                            <div class="dish_name m-0">
                                <h6>{{ dish.name }} <strong>x{{ dish.quantity }}</strong></h6>
                            </div>
                            <div class="dish_price m-0">
                                <p class="m-0">{{ (dish.price * dish.quantity).toFixed(2) }}€</p>
                            </div>
                        </li>
                        <div class="my-3">
                            <router-link :to="{ name: 'CartCheckout' }">
                                <button class=" btn btn-warning text-start" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Go
                                    back
                                    to
                                    cart</button>
                            </router-link>
                        </div>
                        <li class="order_item d-flex justify-content-between total_price">
                            <div class="dish_name m-0">
                                <h6>Total Price</h6>
                            </div>
                            <p class="m-0">{{ totalPrice.toFixed(2) }}€</p>
                        </li>
                    </ul>
                </div>
            </div>


            <!-- Delivery Informations-->
            <div class="col-12 col-md-6 container-cc-info m-0">
                <div class="card color-sal">
                    <h4 class="card-header titlepayment">Delivery Informations</h4>
                    <div class="card-body">
                        <!-- <div class="alert alert-success" v-if="nonce">
                            Successfully generated nonce.
                        </div>
                        <div class="alert alert-danger" v-if="error">
                            {{ error }}
                        </div> -->
                        <form @submit.prevent="payWithCreditCard" class="d-flex flex-column">
                            <div class="form-group my-2">
                                <label>Nome</label>
                                <input type="text" v-model="name" class="form-control" placeholder="Inserisci Nome"
                                    required>
                            </div>
                            <div class="form-group my-2">
                                <label>Cognome</label>
                                <input type="text" v-model="surname" class="form-control" placeholder="Inserisci Cognome"
                                    required>
                            </div>
                            <div class="form-group my-2">
                                <label>Indirizzo di consegna</label>
                                <input type="text" v-model="address" class="form-control"
                                    placeholder="Inserisci l'indirizzo di consegna" required>
                            </div>
                            <div class="form-group my-2">
                                <label>email</label>
                                <input type="email" v-model="email" class="form-control" placeholder="Inserisci email"
                                    required>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-6 my-2">
                                        <label>Numero di telefono</label>
                                        <input type="text" v-model="phone_number" class="form-control"
                                            placeholder="Numero di telefono">
                                    </div>
                                    <!-- <div class="col-6 d-flex flex-column justify-content-between d-none">
                                        <label>Totale</label>
                                        <input type="text" v-model="store.totalPrice" class="form-control"
                                            placeholder="Totale" readonly>
                                    </div> -->
                                </div>
                            </div>
                            <!-- Payment form  -->
                            <hr />
                            <h4 class="titlepayment">Payment Informations</h4>
                            <hr />
                            <div class="form-group">
                                <label>Numero della carta</label>
                                <div id="creditCardNumber" class="form-control input-pay mb-3"></div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-6">
                                        <label>Data di scadenza</label>
                                        <div id="expireDate" class="form-control input-pay mb-3"></div>
                                    </div>
                                    <div class="col-6">
                                        <label>CVV</label>
                                        <div id="cvv" class="form-control input-pay  mb-3"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="border-0 btn-paga btn-block">Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import braintree from 'braintree-web';
import { store } from '../store';
import swal from 'sweetalert';
export default {
    name: "AppPayment",
    data() {
        return {
            store,
            hostedFieldInstance: false,
            nonce: null,
            phone_number: '',
            name: '',
            address: '',
            error: '',
            surname: '',
            email: '',
            totalPrice: 0,
            tokenApi: '',
            isFieldInstance: false
        };
    },

    mounted() {
        this.setTotalPrice();
        if (!this.isFieldInstance) {
            this.initializeBraintree();
            this.isFieldInstance = true;
        }
    },
    methods: {
        initializeBraintree() {
            braintree.client.create({
                authorization: "sandbox_4xnksjmk_7tdbczf8qx35n699"
            })
                .then(clientInstance => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                'font-size': '14px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: 'Enter Credit Card'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: 'Enter CVV'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 00'
                            }
                        }
                    }
                    return braintree.hostedFields.create(options)
                })
                .then(hostedFieldInstance => {
                    if (!this.hostedFieldInstance)
                        this.hostedFieldInstance = hostedFieldInstance;
                })
                .catch(err => {
                    console.log(err)
                });

        },

        resetHostedFields() {
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.teardown(() => {
                    this.hostedFieldInstance = null;
                    this.initializeBraintree();
                });
            } else {
                this.initializeBraintree();
            }
        },
        payWithCreditCard() {
            if (this.hostedFieldInstance) {
                this.error = "";
                this.nonce = "";
                this.hostedFieldInstance.tokenize().then(payload => {
                    this.nonce = payload.nonce
                })
                    .catch(err => {
                        this.error = err.message;
                    })
                    .then(() => {
                        this.paymentResponse()
                    })
            }
        },
        setTotalPrice() {
            this.totalPrice = 0;
            store.cart_list.forEach((dish) => {
                this.totalPrice += parseFloat(dish.price) * parseInt(dish.quantity);
            });
        },
        paymentResponse() {
            const data = {
                cart: this.store.cart_list,
                nonce: this.nonce,
                totalPrice: this.totalPrice,
                name: this.name,
                surname: this.surname,
                email: this.email,
                telephone: this.phone_number,
                address: this.address,
            }
            axios.post('/api/orders/payment', data)
                .then((response) => {
                    if (response.data.success === true) {
                        this.store.cart_list = [],
                            localStorage.clear();
                        swal("Pagamento effettuato", "Il tuo ordine arriverà a breve", "success");
                        this.resetHostedFields();
                        this.$router.push({ name: 'Homepage' });
                    }
                })
                .catch(err => {
                    swal("Pagamento rifiutato", "Il tuo ordine non è stato effetuato", err);
                })
        }
    },
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.section-payment {
    margin-top: 2rem;

    .card {
        margin-bottom: 3rem;

        .card-header {
            border-radius: 10px 10px 0 0;
        }

        border-radius: 10px;
        border: none;
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
        rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }

    .card-header {
        background-color: $priGreen;
        color: white;
        padding: 1rem 2rem;
    }

    input,
    .input-pay {
        border: 1px solid rgb(189, 189, 189);
        box-shadow: none !important;
        border-radius: 0 10px 10px 10px;
    }

    .input-pay {
        height: 40px;
    }
}

.order_review {
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

label {
    background-color: $secYellow;
    margin-bottom: 0;
    border-radius: 10px 10px 0 0;
    padding: .1rem .5rem;
}

.order_review::after {
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

.btn-paga {
    background-color: $priGreen;
    color: White;
    padding: 10px 0;
    transition: all .3s ease;
    border-radius: 10px;
}

.btn-paga:hover {
    background-color: rgb(67, 156, 111);
    font-weight: bold;
}

.btn-paga:active {
    background-color: $priGreen;
    color: White;
}

.boo-img {
    display: flex;
    justify-content: center;

    img {
        width: 50%;
        margin-bottom: 1rem;
    }
}
</style>