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
                        <form @submit.prevent="payWithCreditCard()" class="">

                            <div class="d-flex">
                                <!-- Name  -->
                                <div class="form-group pe-1 col-6">
                                    <label>First Name*</label>
                                    <div class="position-relative">
                                        <input class="form-control" type="text" name="name" id="name" v-model="name"
                                            placeholder="Ex. John" />

                                        <!-- Error message label  -->
                                        <div :class="!errorForm.name ? 'info-message' : 'error-message'">
                                            <span v-if="!errorForm.name">Enter your first name.</span>
                                            <span v-if="errorForm.name">{{ errorForm.name.join() }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Last name  -->
                                <div class="form-group col-6 ps-1">
                                    <label>Last Name*</label>
                                    <input type="text" v-model="surname" class="form-control" placeholder="Ex. Doe">
                                    <!-- Error message label  -->
                                    <div :class="!errorForm.surname ? 'info-message' : 'error-message'">
                                        <span v-if="!errorForm.surname">Enter your last name.</span>
                                        <span v-if="errorForm.surname">{{ errorForm.surname.join() }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Delivery Address  -->
                            <div class="form-group my-2">
                                <label>Delivery Address*</label>
                                <input type="text" v-model="address" class="form-control"
                                    placeholder="Ex. 101 Rue Adolphe Fischer">
                                <!-- Error message label  -->
                                <div :class="!errorForm.address ? 'info-message' : 'error-message'">
                                    <span v-if="!errorForm.address">Enter your address.</span>
                                    <span v-if="errorForm.address">{{ errorForm.address.join() }}</span>
                                </div>
                            </div>

                            <!-- Email  -->
                            <div class="form-group my-2">
                                <label>Email*</label>
                                <input type="email" v-model="email" class="form-control"
                                    placeholder="Ex. john.doe@gmail.lu">
                                <!-- Error message label  -->
                                <div :class="!errorForm.email ? 'info-message' : 'error-message'">
                                    <span v-if="!errorForm.email">Enter your email.</span>
                                    <span v-if="errorForm.email">{{ errorForm.email.join() }}</span>
                                </div>
                            </div>

                            <!-- Phone number -->
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 mt-2">
                                        <label>Phone Number*</label>
                                        <input type="text" v-model="phone_number" class="form-control"
                                            placeholder="Ex. 3393847581">
                                        <!-- Error message label  -->
                                        <div :class="!errorForm.telephone ? 'info-message' : 'error-message'">
                                            <span v-if="!errorForm.telephone">Enter your phone number.</span>
                                            <span v-if="errorForm.telephone">{{ errorForm.telephone.join() }}</span>
                                        </div>
                                    </div>
                                    <!-- <div class="col-6 d-flex flex-column justify-content-between d-none">
                                        <label>Totale</label>
                                        <input type="text" v-model="store.totalPrice" class="form-control"
                                            placeholder="Totale" readonly>
                                    </div> -->
                                </div>
                            </div>

                            <div class="d-flex">
                                <!-- Interior -->
                                <div class="form-group pe-1 col-6">
                                    <label>Interior</label>
                                    <div class="position-relative">
                                        <input class="form-control" type="text" name="interior" id="interior" v-model="interior"
                                            placeholder="Ex. 1" />

                                        <!-- Info message label  -->
                                        <div class="info-message">
                                            <span>Enter your interior.</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Doorbell  -->
                                <div class="form-group col-6 ps-1">
                                    <label>Doorbell</label>
                                    <input type="text" v-model="doorbell" class="form-control" placeholder="Ex. 1">

                                    <!-- Info message label  -->
                                    <div class="info-message">
                                        <span>Enter your interior.</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Payment form  -->
                            <hr class="my-1" />
                            <h4 class="card-header titlepayment mb-3">Payment Informations</h4>

                            <!-- Card Number -->
                            <div class="form-group mb-3">
                                <label>Card Number*</label>
                                <div id="creditCardNumber" class="form-control input-pay">

                                </div>


                            </div>

                            <!-- Expiration Date -->
                            <div class="form-group mb-3">
                                <div class="row">
                                    <div class="col-6">
                                        <label>Expiration Date*</label>
                                        <div id="expireDate" class="form-control input-pay "></div>

                                    </div>

                                    <!-- Cvv -->
                                    <div class="col-6">
                                        <label>CVV*</label>
                                        <div id="cvv" class="form-control input-pay"></div>


                                    </div>
                                </div>
                            </div>

                            <!-- Error message label  -->
                            <div class="info-message rounded">
                                <span v-if="!error" class="error-message">Please check your data before
                                    payment. <strong>Fields marked with * are required.</strong></span>
                                <span v-else>{{ error }}</span>
                            </div>

                            <!-- Payment button  -->
                            <button class="border-0 btn-pay btn-block">Pay</button>
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
            interior: '',
            doorbell: '',

            // variabile per errori carta di credito
            error: '',


            surname: '',
            email: '',
            totalPrice: 0,
            tokenApi: '',
            isFieldInstance: false,

            // variabile per errori del form
            errorForm: [],
        };
    },

    mounted() {

        this.setTotalPrice();
        if (!this.isFieldInstance) {
            this.initializeBraintree();
            this.isFieldInstance = true;
        }

        if (store.cart_list.length === 0) {
            this.$router.push({ name: 'Homepage' });
        }
    },
    methods: {
        initializeBraintree() {
            braintree.client.create({
                authorization: "sandbox_q7k4hs9d_wdn3fmrkkz37q6r9"
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
                        console.log(this.error)
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
                interior: this.interior,
                doorbell: this.doorbell
            }
            axios.post('/api/orders/payment', data)
                .then((response) => {
                    if (response.data.success === true) {
                        this.store.cart_list = [],
                            localStorage.clear();
                        swal("Order Success!", "Your payment was successful.", "success");
                        this.resetHostedFields();
                        console.log(response.data.order);
                        store.isOrderConfirmed = true;
                        store.confirmedOrder = response.data.order;
                        this.$router.push({ name: 'OrderSuccess' });
                    }
                }).catch((error) => {
                    this.errorForm = error.response.data.errors;
                    // console.log(error.response.data.errors)
                    console.log(this.errorForm)
                    swal("Order Failed.", "The delivery or card informations are invalid. Please try again.", 'error');
                })

        }
    },
};
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.error {
    background-color: #f86f6f;
}

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
        border-radius: 0;
        border-top-right-radius: 10px;
    }

    .input-pay {
        height: 40px;
    }
}

div.info-message,
div.error-message {
    border-radius: 0 0 10px 10px;
    padding: .1rem .5rem;
    font-size: .8rem;
    margin-bottom: .8rem;
    font-weight: 600;
}

div.info-message {
    background-color: $secYellow;
}

div.error-message {
    background-color: #f86f6f;
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
    font-weight: 600;
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

.btn-pay {
    background-color: $priGreen;
    color: White;
    padding: 10px 0;
    transition: all .3s ease;
    border-radius: 10px;
    width: 80px;
}

.btn-pay:hover {
    background-color: rgb(67, 156, 111);
    font-weight: bold;
}

.btn-pay:active {
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