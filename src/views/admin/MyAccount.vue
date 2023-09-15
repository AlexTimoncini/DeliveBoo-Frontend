<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="my-account">

                    <!-- Upper section with restaurant image & buttons -->
                    <div class="row">
                        <div class="col-10 p-0">
                            <img src="https://www1.lovethatdesign.com/wp-content/uploads/2021/08/Love-That-Design-McDonalds-Oxford-Street-London-07.jpg" alt="Restaurant image">
                        </div>
                        <div class="col-2 buttons p-0">
                            <button @click="toggle">
                                <svg v-if="isDisabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="pencil"><path d="M178.846 92.087h128.085v354.049H178.846z" transform="rotate(-134.999 242.89 269.113)"></path><path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305zM64.021 363.252L32 480l116.737-32.021z"></path></svg>
                                <svg v-if="!isDisabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="arrow-u-down-left"><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="80 120 32 168 80 216"></polyline><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"></path></svg>
                                <span class="d-none d-md-inline" v-if="isDisabled"> Edit</span>
                                <span class="d-none d-md-inline" v-if="!isDisabled">Back</span>
                            </button>
                            <button v-bind:class="{ disabled: isDisabled }">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="save"><switch><g><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4
                                c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z
                                M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"></path><path d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM94.6 25.9L73.7 5c-1.6-1.6-3.8-2.5-6-2.5H58V20c0 1.8-1.5 3.3-3.3 3.3H27.3c-1.8 0-3.3-1.5-3.3-3.3V2.5H11.4c-4.7 0-8.5 3.8-8.5 8.5v78c0 4.7 3.8 8.5 8.5 8.5h77.3c4.7 0 8.5-3.8 8.5-8.5V31.9C97.1 29.7 96.2 27.5 94.6 25.9zM76.9 78.2c0 1.8-1.5 3.3-3.3 3.3H26.3c-1.8 0-3.3-1.5-3.3-3.3V45.4c0-1.8 1.5-3.3 3.3-3.3h47.4c1.8 0 3.3 1.5 3.3 3.3V78.2z"></path><path d="M44.2 17.7h6.4c.7 0 1.3-.6 1.3-1.3V3.8c0-.7-.6-1.3-1.3-1.3h-6.4c-.7 0-1.3.6-1.3 1.3v12.5C42.9 17.1 43.5 17.7 44.2 17.7zM63.9 51.3H36.1c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5h27.7c1.9 0 3.5-1.5 3.5-3.5C67.3 52.8 65.8 51.3 63.9 51.3zM63.9 65.5H36.1c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5h27.7c1.9 0 3.5-1.5 3.5-3.5C67.3 67.1 65.8 65.5 63.9 65.5z"></path></g></switch></svg>
                                <span class="d-none d-md-inline">Save</span>
                            </button>
                        </div>
                    </div>

                    <!-- Middle section with "My profile" informations -->
                    <div class="row">
                        <div class="my-profile col-12">
                            <h4>Main Profile Info</h4>
                            <label for="name">Restaurant Name</label>
                            <input class="w-100" type="text" id="name" name="name" value="Gino Cacino" v-bind:disabled="isDisabled">
                            <div class="row">
                                <div class="col-6">
                                    <label for="mail">E-mail</label>
                                    <input class="w-100" type="mail" id="mail" name="mail" value="gino-cacino@gmail.com" v-bind:disabled="isDisabled">
                                </div>
                                <div class="col-6">
                                    <label for="phone">Phone Number</label>
                                    <input class="w-100" type="text" id="phone" name="phone" value="3353288745" v-bind:disabled="isDisabled">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom section with "My Restaurant" & "Media" informations -->
                    <div class="row flex-row">
                        <div class="my-restaurant col-12 col-md-6">
                            <h4>Restaurant</h4>
                            <label for="vat-number">VAT Number</label>
                            <input class="w-100" type="text" id="vat-number" name="vat-number" value="LX896198791" v-bind:disabled="isDisabled">
                            <label for="address">Address</label>
                            <input class="w-100" type="text" id="address" name="address" value="Via Roma, 2" v-bind:disabled="isDisabled">
                            <label for="free-delivery-from">Free Delivery From</label>
                            <input class="w-100" type="text" id="free-delivery-from" name="free-delivery-from" value="19,90" v-bind:disabled="isDisabled">
                            <div class="row">
                                <div class="col-6">
                                    <label for="opening-time">Opening Time</label>
                                    <input class="w-100" type="time" id="opening-time" name="opening-time" value="16:30" v-bind:disabled="isDisabled">
                                </div>
                                <div class="col-6">
                                    <label for="closing-time">Closing Time</label>
                                    <input class="w-100" type="time" id="closing-time" name="closing-time" value="23:30" v-bind:disabled="isDisabled">
                                </div>
                            </div>
                        </div>
                        <div class="my-media col-12 col-md-6">     
                            <h4>Media</h4>
                            <div class="row">
                                <div class="col-6">
                                    <label for="image">Image</label>
                                    <input class="w-100" type="file" id="image" name="image" v-bind:disabled="isDisabled">
                                </div>
                                <div class="col-6">
                                    <label for="logo">Logo</label>
                                    <input class="w-100" type="file" id="logo" name="logo" v-bind:disabled="isDisabled">
                                </div>
                            </div>
                            <label for="description">Description</label>
                            <textarea class="w-100" name="description" id="description" cols="30" rows="6" v-bind:disabled="isDisabled">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ex exercitationem rerum libero asperiores quo sapiente! Soluta voluptatem sed ab delectus nobis ad quasi debitis? Consequatur laborum officia animi porro?</textarea>
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
export default {
    name: 'MyAccount',
    data() {
        return {
            isDisabled: true
        }
    },
    methods: {
        toggle() {
            this.isDisabled = !this.isDisabled;
        }
    },
    components: { DashboardSidebar, DashboardNavbar }
}
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

    div.my-account {
        height: calc(100vh - 95px - 80px);
        padding: 1rem 2rem;
        overflow: scroll;

        img {
            width: 100%;
            height: 150px;
            object-position: center;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            transition: all .3s ease;

            &:hover {
                transform: scale(1.02);
            }
        }

        div.buttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
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

        div.my-profile,
        div.my-restaurant,
        div.my-media {
            padding: 1rem;
            background-color: $secYellow;
            border: 5px solid white;
            border-radius: 25px;

            h4 {
                background-color: white;
                color: $priGreen;
                font-weight: 600;
                width: fit-content;
                padding: .3rem 1rem;
                border-radius: 15px;
                margin: auto;
                margin-bottom: 1rem;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            }

            label {
                background-color: $priGreen;
                padding: 0 1rem;
                border-top-right-radius: 15px;
                border-top-left-radius: 15px;
                color: white;
            }

            input {
                border-top-right-radius: 15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                border: none;
                padding: .8rem 1rem;
                margin-bottom: 1rem;

                &[type=file] {
                    background-color: white;
                }

                &[disabled] {
                    background-color: white;
                }
            }

            textarea {
                border-top-right-radius: 15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                border: none;
                padding: 1rem;

                &[disabled] {
                    background-color: white;
                }
            }
        }

        div.my-restaurant,
        div.my-media {
            height: 440px;
        }
    }

</style>