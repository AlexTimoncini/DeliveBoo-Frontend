<template>
    <div class="contact-us">
        <div class="title-section">
            <h1>Contact Us</h1>
            <p>Need help? Don't be shy, give Boo a try! Contact DeliveBoo for any inquiries, and we'll spooktacularly assist you!</p>
        </div>
        <div class="container">
            <div class="form-section d-flex align-items-center">
                <div class="row w-100">
                    <div class="d-none d-md-block col-6 text-center mt-5">
                        <img v-if="formDataErrors.name || formDataErrors.email || formDataErrors.message" class="img-fluid" src="../assets/mascotte/boo-contact-us-afraid.png" alt="Afraid Boo Image" draggable="false">
                        <img v-else class="img-fluid" src="../assets/mascotte/boo-contact-us.png" alt="Boo Image" draggable="false">
                    </div>
                    <div class="col-12 col-md-6">
                        <form @submit.prevent="sendMail()">
                            <div class="row">
                                <div class="col-12">
                                    <label for="name">Name:</label>
                                    <input v-model="formData.name" type="text" name="name" id="name">
                                    <div class="info-message" v-if="!formDataErrors.name">
                                        <span>Enter your name.</span>
                                    </div>
                                    <div class="error-message" v-if="formDataErrors.name">
                                        <span>{{ formDataErrors.name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="email">Email:</label>
                                    <input v-model="formData.email" type="email" name="email" id="email">
                                    <div class="info-message" v-if="!formDataErrors.email">
                                        <span>Enter your email.</span>
                                    </div>
                                    <div class="error-message" v-if="formDataErrors.email">
                                        <span>{{ formDataErrors.email }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="message">Message:</label>
                                    <textarea v-model="formData.message" name="message" id="message" cols="30" rows="5"></textarea>
                                    <div class="info-message" v-if="!formDataErrors.message">
                                        <span>Enter your message.</span>
                                    </div>
                                    <div class="error-message" v-if="formDataErrors.message">
                                        <span>{{ formDataErrors.message }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-warning me-3" @click.prevent="resetFieldsAndErrors()">Reset Fields</button>
                                    <button class="btn btn-success" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ContactUs',

    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            formDataValidate: {
                name: false,
                email: false,
                message: false
            },
            formDataErrors: {
                name: '',
                email: '',
                message: ''
            }
        }
    },

    methods: {
        checkValidation() {
            this.resetErrors();
            // Name
            if (typeof (this.formData.name) === 'string' && this.formData.name.length >= 3 && this.formData.name.length <= 40) {
                this.formDataValidate.name = true;

            } else {
                this.formDataValidate.name = false;
                this.formDataErrors.name = "The name field isn't in the right format."
            }

            // Email
            if (typeof (this.formData.email) === 'string' && this.formData.email.length >= 3 && this.formData.email.length <= 60) {
                this.formDataValidate.email = true;

            } else {
                this.formDataValidate.email = false;
                this.formDataErrors.email = "The email field isn't in the right format."
            }

            // Message
            if (typeof (this.formData.message) === 'string' && this.formData.message.length >= 3 && this.formData.message.length <= 65535) {
                this.formDataValidate.message = true;
                
            } else {
                this.formDataValidate.message = false;
                this.formDataErrors.message = "The message field isn't in the right format."
            }
        },

        resetFieldsAndErrors() {
            this.formData.name = '',
            this.formData.email = '',
            this.formData.message = '',
            this.formDataErrors.name = false;
            this.formDataErrors.email = false;
            this.formDataErrors.message = false
        },

        resetErrors() {
            this.formDataErrors.name = false;
            this.formDataErrors.email = false;
            this.formDataErrors.message = false
        },

        sendMail() {
            this.checkValidation();
            if (this.formDataValidate.name && this.formDataValidate.email && this.formDataValidate.message) {
                axios.post('/api/contact-us/', this.formData)
                .then((response) => {
                    console.log(response.data);
                    swal("Message sent successfully!", "We will get back to you as soon as possible.", 'success');
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                })
                .catch((error) => {
                    console.error(error);
                    swal("Message sending failed.", "Please try again.", 'error');
                });
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    
    div.contact-us {
        height: calc(100vh - 95px);
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        div.title-section {
            text-align: center;
            margin-bottom: 2rem;

            h1 {
                background-color: $secYellow;
                margin: auto;
                padding: 1rem;
                font-weight: 700;
            }

            p {
                font-size: 1.5rem;
                padding: 1rem;
                background-color: $priGreen;
                color: white;
            }
        }

        div.container {
            padding: 3rem 0;

            div.form-section {
                padding: 1rem;

                form {

                    label {
                        background-color: $secYellow;
                        padding: .5rem 2rem;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                        font-weight: 700;
                    }
                    
                    input,
                    textarea {
                        width: 100%;
                        border-radius: 0 20px 20px 0px;
                        border: 3px solid $secYellow;
                        padding: 1rem;

                        &:focus {
                            border-color: $priGreen;
                            outline: none;
                        }
                    }

                    input {
                        height: 40px;
                    }

                    textarea {
                        resize: none;
                        display: block;
                    }

                    div.info-message,
                    div.error-message {
                        margin-bottom: 1rem;
                        width: fit-content;
                        padding: .2rem 1.5rem;
                        border-radius: 0px 0px 20px 20px;
                        font-weight: 600;
                    }

                    div.info-message {
                        background-color: $secYellow;
                    }

                    div.error-message {
                        background-color: #f86f6f;
                    }
                }

                img {
                    width: 80%;
                }
            }
        }
    }
</style>