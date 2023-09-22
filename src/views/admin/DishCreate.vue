<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="dish-create">
                    <h2>Add New Dish</h2>
                    <div class="row align-items-center">
                        <div class="dish-info col-12 col-md-6">

                            <form @submit.prevent="storeDish()">
                                <div class="form-section">

                                    <!-- Error message -->
                                    <div v-if="errorMessages.name.alert" class="talkbubble-container ">
                                        <div class="talkbubble d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-alert-circle" id="IconChangeColor">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                </svg>
                                                <p class="me-3">{{ errorMessages.name.alert }}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <label :class="errorMessages.name.visibility ? ' border-error' : 'border-none'"
                                        for="name">Name</label>
                                    <input placeholder="Dish Name" class="w-100" type="text" id="name" name="name"
                                        v-model="formData.name">

                                </div>
                                <div class="form-section">
                                    <label for="description">Description</label>
                                    <textarea placeholder="Dish Decription here" class="w-100" name="description"
                                        id="description" cols="30" rows="3"></textarea>

                                </div>
                                <div class="row mb-2">
                                    <div class="col-12 col-md-6 form-section">
                                        <label :class="errorMessages.category.visibility ? ' border-error' : 'border-none'"
                                            for="ingredients">Categories</label>
                                        <select name="category" id="category"
                                            @change="formData.category = $event.target.value">
                                            <option value="" selected hidden>{{ errorMessages.available.visibility === true
                                                ?
                                                'Wrong input' : 'Select a category...' }}</option>
                                            <option v-for="category in store.categories" :value="category.id">{{
                                                category.name }}
                                            </option>
                                        </select>

                                        <!-- Error message -->
                                        <div v-if="errorMessages.category.alert" class="talkbubble-container ">
                                            <div class="talkbubble d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-alert-circle" id="IconChangeColor">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                    </svg>
                                                    <p class="me-3">{{ errorMessages.category.alert }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 form-section">
                                        <label for="ingredients">Ingredients</label>
                                        <select name="ingredients" id="ingredients" disabled>
                                            <option value="0">Work in progress</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12 col-md-6  form-section">
                                        <label :class="errorMessages.category.visibility ? ' border-error' : 'border-none'"
                                            for="price">Price</label>
                                        <input placeholder="Ex. 13.00" class="w-100" type="text" id="price" name="price"
                                            v-model="formData.price">

                                        <!-- Error message -->
                                        <div v-if="errorMessages.price.alert" class="talkbubble-container ">
                                            <div class="talkbubble d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-alert-circle" id="IconChangeColor">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                    </svg>
                                                    <p class="me-3">{{ errorMessages.price.alert }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6  form-section">
                                        <label :class="errorMessages.category.visibility ? ' border-error' : 'border-none'"
                                            for="photo">Photo</label>
                                        <input placeholder="Dish photo url here" class="w-100" type="text" id="photo"
                                            name="photo" v-model="formData.photo">

                                        <!-- Error message -->
                                        <div v-if="errorMessages.photo.alert" class="talkbubble-container ">
                                            <div class="talkbubble d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-alert-circle" id="IconChangeColor">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                    </svg>
                                                    <p class="me-3">{{ errorMessages.photo.alert }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6  form-section">
                                        <label :class="errorMessages.category.visibility ? ' border-error' : 'border-none'"
                                            for="available">Available?</label>
                                        <select name="available" id="available"
                                            @change="formData.available = $event.target.value">
                                            <option value="" selected hidden>{{ errorMessages.available.visibility === true
                                                ?
                                                'Wrong input' : 'Select' }}</option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>

                                        <!-- Error message -->
                                        <div v-if="errorMessages.available.alert" class="talkbubble-container ">
                                            <div class="talkbubble d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-alert-circle" id="IconChangeColor">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                    </svg>
                                                    <p class="me-3">{{ errorMessages.available.alert }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 form-section">
                                        <label :class="errorMessages.category.visibility ? ' border-error' : 'border-none'"
                                            for="visible">Visible?</label>
                                        <select name="visible" id="visible"
                                            @change="formData.visible = $event.target.value">
                                            <option value="" selected hidden>{{ errorMessages.available.visibility === true
                                                ?
                                                'Wrong input' : 'Select' }}</option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>

                                        <!-- Error message -->
                                        <div v-if="errorMessages.visible.alert" class="talkbubble-container">
                                            <div class="talkbubble d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                        class="feather feather-alert-circle" id="IconChangeColor">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                                    </svg>
                                                    <p class="me-3">{{ errorMessages.visible.alert }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Buttons -->
                                <button type="reset" class="mb-3" @click="resetErrors()">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="reset">
                                        <path
                                            d="M9.5 1.293a6.47 6.47 0 0 0-6.462 6.46v3.002l-1.5-1.5-1.5 1.5 3.991 3.951 4.009-3.951-1.5-1.5-1.5 1.5v-3c0-2.46 2.001-4.462 4.462-4.462s4.462 2.001 4.462 4.462a4.468 4.468 0 0 1-1.458 3.298l1.348 1.479a6.476 6.476 0 0 0 2.11-4.777A6.47 6.47 0 0 0 9.5 1.293z">
                                        </path>
                                    </svg>
                                    <span class="d-none d-md-inline">Reset</span>
                                </button>
                                <button type="submit">
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
                            </form>
                        </div>
                        <div class="d-none d-md-block col-6">
                            <img class="d-none d-lg-block" src="../../assets/mascotte/boo-edit.png" alt="Boo Edit Image"
                                draggable="false">
                            <img class="d-md-block d-lg-none p-3" src="../../assets/mascotte/boo-edit-sm.png"
                                alt="Boo Edit Small Image" draggable="false">
                        </div>
                    </div>
                    <button>
                        <router-link :to="{ name: 'Dishes' }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="arrow-u-down-left">
                                <polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="24" points="80 120 32 168 80 216"></polyline>
                                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="24"
                                    d="M80,56h88a56,56,0,0,1,56,56v.00011A55.99988,55.99988,0,0,1,168.00011,168H32"></path>
                            </svg>
                            <span>Back</span>
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
import { useRoute } from 'vue-router';
export default {
    name: 'DishCreate',
    components: { DashboardSidebar, DashboardNavbar },
    data() {
        return {
            // errorMessages: {
            //     name: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     description: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     price: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     category: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     photo: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     available: {
            //         alert: '',
            //         visibility: false,
            //     },
            //     visible: {
            //         alert: '',
            //         visibility: false,
            //     },
            // }
        }
    },

    methods: {

    },
}
</script>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { store } from '../../store';
const authStore = useAuthStore();

const formData = {
    name: '',
    description: '',
    price: '',
    category: '',
    photo: '',
    available: '',
    visible: ''
};

const formDataValidate = {
    name: false,
    description: false,
    price: false,
    category: false,
    available: false,
    visible: false,
}

let errorMessages = {
    name: {
        alert: '',
        visibility: false,
    },
    description: {
        alert: '',
        visibility: false,
    },
    price: {
        alert: '',
        visibility: false,
    },
    category: {
        alert: '',
        visibility: false,
    },
    photo: {
        alert: '',
        visibility: false,
    },
    available: {
        alert: '',
        visibility: false,
    },
    visible: {
        alert: '',
        visibility: false,
    },
}

let validate = false;

function getCategory() {
    axios.get('/api/categories')
        .then((response) => {
            store.categories = response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function checkValidation() {
    /**VALIDATION**/
    //name
    if (
        formData.price !== '' &&
        typeof (formData.name) === 'string' &&
        formData.name.length >= 3 && formData.name.length <= 100) {

        formDataValidate.name = true
    }

    //description
    if (
        typeof (formData.description) === 'string' &&
        formData.description.length <= 65535) {

        formDataValidate.description = true
    }

    //price
    if (
        formData.price !== '' &&
        parseInt(formData.price) <= 999) {

        formDataValidate.price = true
    }

    //category id
    if (
        formData.category !== '' &&
        parseInt(formData.category) > 0 && parseInt(formData.category) <= store.categories.length) {

        formDataValidate.category = true;
    }

    //available
    if (
        formData.available !== '' && typeof (Boolean(formData.available)) === 'boolean') {

        formDataValidate.available = true;
    }

    //visible
    if
        (formData.visible !== '' && typeof (Boolean(formData.visible)) === 'boolean') {

        formDataValidate.visible = true;
    }
    /**VALIDATION MANAGEMENT**/
    if (formDataValidate.name && formDataValidate.price && formDataValidate.description && formDataValidate.category) {
        validate = true
    } else {
        errorPopUp();
    }
};

function resetErrors() {
    errorMessages = {
        name: {
            alert: '',
            visibility: false,
        },
        description: {
            alert: '',
            visibility: false,
        },
        price: {
            alert: '',
            visibility: false,
        },
        category: {
            alert: '',
            visibility: false,
        },
        photo: {
            alert: '',
            visibility: false,
        },
        available: {
            alert: '',
            visibility: false,
        },
        visible: {
            alert: '',
            visibility: false,
        },
    }
};

function errorPopUp(serverErrors) {
    resetErrors();

    if (!formDataValidate.name) {
        console.log('The Name isn\'t in the right format');
        errorMessages.name.alert = 'The Name isn\'t in the right format';
        errorMessages.name.visibility = true;
    }
    if (!formDataValidate.description) {
        console.log('The description isn\'t in the right format');
        errorMessages.name.alert = 'The Name isn\'t in the right format';
        errorMessages.description.visibility = true;
    }
    if (!formDataValidate.price) {
        console.log('The price isn\'t in the right format');
        errorMessages.price.alert = 'The price isn\'t in the right format';
        errorMessages.price.visibility = true;
    }
    if (!formDataValidate.category) {
        console.log('Category isn\'t in the right format');
        errorMessages.category.alert = 'Category isn\'t in the right format';
        errorMessages.category.visibility = true;
    }
    if (!formDataValidate.available) {
        console.log('Available attribute isn\'t in the right format');
        errorMessages.available.alert = 'Available attribute isn\'t in the right format';
        errorMessages.available.visibility = true;
    }
    if (!formDataValidate.visible) {
        console.log('Visible attribute isn\'t in the right format');
        errorMessages.visible.alert = 'Visible attribute isn\'t in the right format';
        errorMessages.visible.visibility = true;
    }
    if (!formDataValidate.photo) {
        console.log('Photo isn\'t in the right format');
        errorMessages.photo.alert = 'Photo isn\'t in the right format';
        errorMessages.photo.visibility = true;
    }

    if (serverErrors) {
        Object.values(serverErrors).forEach(e => {
            console.log(e[0]);
        });
    }

    console.log(errorMessages);
};

let messageErrors;

function storeDish() {
    checkValidation();
    if (validate) {
        axios.post(`/api/store`, {
            user_id: authStore.user.id,
            name: formData.name,
            description: formData.description,
            price: formData.price,
            category_id: formData.category,
            photo: formData.photo,
            available: formData.available,
            visible: formData.visible,
        })
            .then((response) => {
                console.log(response);
                window.location.href = '/admin/dishes';
            })
            .catch(function (error) {
                messageErrors = error.response.data.errors;
                console.log(messageErrors);
                errorPopUp(messageErrors);
            })
    }
}

onMounted(async () => {
    getCategory();
})
</script>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.dish-create::-webkit-scrollbar {
    display: none;
}

div.dish-create {
    padding: .5rem 1rem;
    overflow-y: scroll;
    height: calc(100vh - 95px - 80px);
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    @media (min-width: 992px) {
        padding: 2rem;
    }

    h2 {
        background-color: $priGreen;
        color: white;
        font-weight: 600;
        width: fit-content;
        padding: .5rem 1rem;
        border-radius: 15px;
        margin-bottom: 2rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    button {
        background-color: $priGreen;
        border-radius: 15px;
        padding: .5rem 1rem;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        svg#save,
        svg#reset {
            margin: 0;
        }

        &:hover {
            background-color: #00c073;

            svg {
                transform: scale(1.1);
            }
        }

        span {
            font-weight: 600;
            margin-left: .5rem;
        }

        svg {
            width: 30px;
            aspect-ratio: 1;
            transition: all .3s ease;
        }
    }

    // Form 

    div.dish-info {
        background-color: $secYellow;
        padding: 1rem;
        border-radius: 25px;
        margin-bottom: 1rem;

        .form-section {
            position: relative;
            margin-top: 1rem;

            .border-error {
                background-color: rgb(204, 36, 36);
                box-shadow: inset 0 0 0 2px rgb(204, 36, 36);

            }

            .talkbubble-container {
                margin-left: 1rem;
                width: 90%;
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(-25px);
                transform-origin: center;
                z-index: 1;
                border-radius: 5px;
                background-color: #f6cdcd;
                opacity: 0;

                animation-name: alert;
                animation-duration: 4s;
                animation-iteration-count: 1;

                svg {
                    height: .8rem;
                    margin-right: .5rem;
                }

                p {
                    margin: 0;
                    font-size: .7rem;
                    line-height: .7rem;
                }

            }

            @keyframes alert {
                0% {
                    opacity: .8;
                }

                80% {
                    opacity: .8;
                }

                100% {
                    opacity: 0;
                }
            }
        }

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
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            &[type=file] {
                background-color: white;
            }
        }

        textarea {
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            border: none;
            margin-bottom: 1rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            padding: .8rem 1rem;
        }

        select {
            background-color: white;
            border: none;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            padding: 1rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        button {
            padding: .5rem 1rem;
            background-color: white;
            border: none;
            border-radius: 25px;
            margin-right: 1rem;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: all .3s ease;

            &:hover {
                background-color: #acffde;

                svg {
                    transform: scale(1.1);
                }
            }

            svg {
                width: 30px;
                aspect-ratio: 1;
                transition: all .3s ease;
                margin-right: 1rem;
                fill: $priGreen;
            }

            span {
                color: $priGreen;
                font-weight: 600;
            }
        }
    }

    img {
        width: 100%;
    }
}
</style>