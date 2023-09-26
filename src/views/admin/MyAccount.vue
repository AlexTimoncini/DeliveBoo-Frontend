<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />

                <Loader v-if="formData.loading" />
                <div v-else class="my-account">

                    <!-- Upper section with restaurant image & buttons -->
                    <div class="row">
                        <div class="col-10 p-0">
                            <img v-if="authStore.user.image"
                                :src="authStore.user.image.startsWith('/restaurants') ? (`http://127.0.0.1:8000/storage${authStore.user.image}`) : authStore.user.image"
                                alt="Restaurant Image">
                            <img v-else src="../../assets/mascotte/pattern.jpg" alt="Restaurant Image">
                        </div>
                        <div class="col-2 buttons p-0">
                            <button @click="toggle">
                                <svg v-if="isDisabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="pencil">
                                    <path d="M178.846 92.087h128.085v354.049H178.846z"
                                        transform="rotate(-134.999 242.89 269.113)"></path>
                                    <path
                                        d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305zM64.021 363.252L32 480l116.737-32.021z">
                                    </path>
                                </svg>
                                <svg v-if="!isDisabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                                    id="arrow-u-down-left">
                                    <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24" points="80 120 32 168 80 216"></polyline>
                                    <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="24"
                                        d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32">
                                    </path>
                                </svg>
                                <span class="d-none d-md-inline" v-if="isDisabled"> Edit</span>
                                <span class="d-none d-md-inline" v-if="!isDisabled">Back</span>
                            </button>
                            <button class="bg-danger" @click="alertMessage">
                                <svg viewBox="0 0 24 24">
                                    <path
                                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
                                    </path>
                                </svg>
                                <span class="d-none d-md-inline">Delete</span>
                            </button>
                        </div>
                    </div>
                    <div class="error-message d-flex flex-column justify-content-center align-items-center"
                        :class="isAlertOn ? '' : 'd-none'">
                        <img class="my-3" src="../../assets/mascotte/Boo_eraser.png"
                            alt="Boo ghost with an eraser in his hands">
                        <p><strong>Are you sure</strong> you want to <strong>delete</strong> your <strong>Account</strong>?
                        </p>
                        <div class="buttons-container d-flex justify-content-center">
                            <button class="btn cancel" @click="isAlertOn = false">Cancel</button>
                            <button class="btn" @click="deleteAccount">Confirm</button>
                        </div>
                    </div>

                    <!-- Middle section with "My profile" informations -->
                    <form @submit.prevent="updateRestaurant()" id="form">
                        <div class="row">
                            <div class="my-profile col-12">
                                <h4>Main Profile Info</h4>
                                <label for="name">Restaurant Name</label>
                                <input class="w-100" type="text" id="name" name="name" v-model="formData.name"
                                    v-bind:disabled="isDisabled">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="mail">E-mail</label>
                                        <input class="w-100" type="mail" id="mail" name="mail" v-model="formData.email"
                                            v-bind:disabled="isDisabled">
                                    </div>
                                    <div class="col-6">
                                        <label for="phone">Phone Number</label>
                                        <input class="w-100" type="text" id="phone" name="phone" v-model="formData.phone"
                                            v-bind:disabled="isDisabled">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom section with "My Restaurant" & "Media" informations -->
                        <div class="row flex-row">
                            <div class="my-restaurant col-12 col-md-6">
                                <h4>Restaurant</h4>
                                <label for="vat-number">VAT Number</label>
                                <input class="w-100" type="text" id="vat-number" name="vat-number"
                                    :value="authStore.user ? authStore.user.vat_number : ''" v-bind:disabled="isDisabled">
                                <label for="address">Address</label>
                                <input class="w-100" type="text" id="address" name="address" v-model="formData.address"
                                    v-bind:disabled="isDisabled">
                                <label for="free-delivery-from">Free Delivery From</label>
                                <input class="w-100" type="text" id="free-delivery-from" name="free-delivery-from"
                                    :value="authStore.user ? '' : ''" v-bind:disabled="isDisabled">
                                <div class="row">
                                    <div class="col-6">
                                        <label for="opening-time">Opening Time</label>
                                        <input class="w-100" type="time" id="opening-time" name="opening-time"
                                            v-model="formData.open_time" v-bind:disabled="isDisabled">
                                    </div>
                                    <div class="col-6">
                                        <label for="closing-time">Closing Time</label>
                                        <input class="w-100" type="time" id="closing-time" name="closing-time"
                                            v-model="formData.closer_time" v-bind:disabled="isDisabled">
                                    </div>
                                </div>
                            </div>
                            <div class="my-media col-12 col-md-6">
                                <h4>Media</h4>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="image">Image</label>
                                        <input class="w-100" type="file" id="image" name="image"
                                            v-bind:disabled="isDisabled" @change="formData.image = $event.target.files">
                                    </div>
                                    <div class="col-6">
                                        <label for="logo">Logo</label>
                                        <input class="w-100" type="file" id="logo" name="logo" v-bind:disabled="isDisabled"
                                            @change="formData.logo = $event.target.files">
                                    </div>
                                </div>
                                <label for="description">Description</label>
                                <textarea class="w-100" name="description" id="description" cols="30" rows="6"
                                    v-bind:disabled="isDisabled" v-model="formData.description"></textarea>
                            </div>
                        </div>
                        <div class="buttons">
                            <button v-bind:class="{ disabled: isDisabled }" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="save">
                                    <switch>
                                        <g>
                                            <path
                                                d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4
                                c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z
                                M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z">
                                            </path>
                                            <path
                                                d="M5268.4 2410.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.6-.4-1-1-1H5268.4zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2414.1 5273.3 2413.7 5272.7 2413.7zM5272.7 2417h-4.3c-.6 0-1 .4-1 1 0 .6.4 1 1 1h4.3c.6 0 1-.4 1-1C5273.7 2417.5 5273.3 2417 5272.7 2417zM94.6 25.9L73.7 5c-1.6-1.6-3.8-2.5-6-2.5H58V20c0 1.8-1.5 3.3-3.3 3.3H27.3c-1.8 0-3.3-1.5-3.3-3.3V2.5H11.4c-4.7 0-8.5 3.8-8.5 8.5v78c0 4.7 3.8 8.5 8.5 8.5h77.3c4.7 0 8.5-3.8 8.5-8.5V31.9C97.1 29.7 96.2 27.5 94.6 25.9zM76.9 78.2c0 1.8-1.5 3.3-3.3 3.3H26.3c-1.8 0-3.3-1.5-3.3-3.3V45.4c0-1.8 1.5-3.3 3.3-3.3h47.4c1.8 0 3.3 1.5 3.3 3.3V78.2z">
                                            </path>
                                            <path
                                                d="M44.2 17.7h6.4c.7 0 1.3-.6 1.3-1.3V3.8c0-.7-.6-1.3-1.3-1.3h-6.4c-.7 0-1.3.6-1.3 1.3v12.5C42.9 17.1 43.5 17.7 44.2 17.7zM63.9 51.3H36.1c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5h27.7c1.9 0 3.5-1.5 3.5-3.5C67.3 52.8 65.8 51.3 63.9 51.3zM63.9 65.5H36.1c-1.9 0-3.5 1.5-3.5 3.5 0 1.9 1.5 3.5 3.5 3.5h27.7c1.9 0 3.5-1.5 3.5-3.5C67.3 67.1 65.8 65.5 63.9 65.5z">
                                            </path>
                                        </g>
                                    </switch>
                                </svg>
                                <span class="d-none d-md-inline">Save</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
import Loader from '../../components/Loader.vue';
export default {
    name: 'MyAccount',
    data() {
        return {
            isDisabled: true,
            isAlertOn: false,
            confirmDelete: false,
        }
    },
    methods: {
        toggle() {
            this.isDisabled = !this.isDisabled;
        },
        alertMessage() {
            this.isAlertOn = true;
            console.log(this.isAlertOn)
        },
    },
    components: { DashboardSidebar, DashboardNavbar, Loader }
}
</script>

<script setup>
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import axios from 'axios';
const authStore = useAuthStore();
const formData = ref({
    name: null,
    description: null,
    email: null,
    phone: null,
    address: null,
    open_time: null,
    closer_time: null,
    image: null,
    logo: null,
    loading: true
})

function deleteAccount() {
    axios.delete(`/api/delete/restaurant/${authStore.user.id}`)
        .then((response) => {
            console.log(response.data);
        })
    authStore.logout();
}
function uploadFileImage(file) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(`api/upload/restaurants/image/File/${authStore.user.id}`, file, config).then(function (response) {
        console.log(response.data);
    });
}

function uploadFileLogo(file) {
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(`api/upload/restaurants/logo/File/${authStore.user.id}`, file, config).then(function (response) {
        console.log(response.data);
    });
}

function changeData() {
    formData.value.name = authStore.user.name
    formData.value.email = authStore.user.email
    formData.value.address = authStore.user.address
    formData.value.phone = authStore.user.phone
    formData.value.open_time = authStore.user.open_time
    formData.value.closer_time = authStore.user.closer_time
    formData.value.description = authStore.user.description
    formData.value.loading = false;
}

function updateRestaurant() {
    uploadFileImage(formData.value.image)
    uploadFileLogo(formData.value.logo)
    axios.put(`/api/update/restaurant/${authStore.user.id}`, {
        name: formData.value.name,
        email: formData.value.email,
        address: formData.value.address,
        open_time: formData.value.open_time,
        closer_time: formData.value.closer_time,
        description: formData.value.description,
        phone: formData.value.phone,
    })
        .then((response) => {
            console.log(response);
            window.location.href = '/admin/myaccount';
        })
        .catch(function (error) {
            console.log(error);
        })
}
onMounted(async () => {
    await authStore.getUser();
    changeData();
})
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.error-message {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    padding: .5rem 1rem;
    border-radius: 10px;
    background-color: rgb(255, 249, 249);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 62.8%;
    transform: translate(-50%, -50%);


    img {
        width: 50%;
    }

    button {
        background-color: $secYellow;
        margin: .5rem;
    }

    button:hover {
        background-color: #f4ca4c;
    }

    button:active {
        background-color: $secYellow;
    }

    button.cancel {
        background-color: white;
        border: 2px solid $secYellow;
    }

    button.cancel:hover {
        background-color: #fff5d5;
        border: 2px solid $secYellow;
    }

    button.cancel:active {
        background-color: $secYellow;
    }

}

div.my-account::-webkit-scrollbar {
    display: none;
}

div.my-account {
    height: calc(100vh - 95px - 80px);
    padding: 1rem 2rem;
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

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