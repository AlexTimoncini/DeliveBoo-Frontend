<template>
    <div class="container">
        <div class="contact-us">
            <div class="title-section">
                <h1>Contact Us</h1>
                <p>Need help? Don't be shy, give Boo a try! Contact Boo for any inquiries, and we'll spooktacularly assist you!</p>
            </div>
            <div class="form-section d-flex align-items-center">
                <div class="row w-100">
                    <div class="d-none d-md-block col-6 d-flex">
                        <img class="img-fluid" src="../assets/mascotte/best-customer.png" alt="Boo Image">
                    </div>
                    <div class="col-12 col-md-6">
                        <form action="" method="POST">
                            <div class="row">
                                <div class="col-12">
                                        <label for="name">Name:</label>
                                        <input type="text" name="name" id="name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="email">Email:</label>
                                    <input type="email" name="email" id="email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <label for="message">Message:</label>
                                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-warning me-3" type="reset">Reset Fields</button>
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
import { store } from '../store';
export default {
    name: 'ContactUs',

    data() {
        return {
            store
        }
    },
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    
    div.container {
        height: calc(100vh - 95px);
        padding: 3rem 0;

        div.contact-us {
            width: fit-content;
            margin: auto;
            padding: 1rem;

            div.title-section {
                text-align: center;
                margin-bottom: 2rem;

                h1 {
                    background-color: $secYellow;
                    width: fit-content;
                    margin: auto;
                    padding: 1rem;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                }

                p {
                    font-size: 1.5rem;
                    padding: 1rem;
                    background-color: $priGreen;
                    color: white;
                    border-radius: 20px;
                }
            }

            div.form-section {

                form {

                    label {
                        background-color: $secYellow;
                        padding: .5rem 2rem;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                    }
                    
                    input,
                    textarea {
                        width: 100%;
                        margin-bottom: 1rem;
                        border-radius: 0 20px 20px 20px;
                        border: 3px solid $secYellow;
                        padding: 1rem;
                    }

                    input {
                        height: 40px;
                    }

                    textarea {
                        resize: none;
                    }
                }

                img {
                    width: 80%;
                    margin-top: 5rem;
                }
            }
        }
    }
</style>