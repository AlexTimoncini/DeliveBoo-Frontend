<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter()
const formRegister = ref({
    name: '',
    email: '',
    vat_number: '',
    address: '',
    closer_time: '',
    open_time: '',
    image: '',
    logo: '',
    phone: '',
    description: '',
    password: '',
    password_confirm: '',
})

const formLogin = ref({
    email: '',
    password: '',
})


const getToken = async () => {
    await axios.get('/sanctum/csrf-cookie',);
}

const loginUser = async () => {
    await getToken();
    await axios.post('/login', {
        email: formLogin.value.email,
        password: formLogin.value.password
    });
    router.push('/');
}

const registerUser = async () => {
    console.log(formRegister.vat_number)
    await getToken();
    await axios.post('/register', {
        name: formRegister.value.name,
        vat_number: formRegister.value.vat_number,
        email: formRegister.value.email,
        address: formRegister.value.address,
        closer_time: formRegister.value.closer_time,
        open_time: formRegister.value.open_time,
        image: formRegister.value.image,
        logo: formRegister.value.logo,
        phone: formRegister.value.phone,
        description: formRegister.value.description,
        password: formRegister.value.password,
        password_confirmation: formRegister.value.password_confirm
    }).then((response) => {
        console.log(response)
    });
    router.push('/');
}
function signUp() {
    let elementContainer = document.getElementById('container');
    elementContainer.classList.add('right-panel-active')
};
function signIn() {
    let elementContainer = document.getElementById('container');
    elementContainer.classList.remove('right-panel-active')
}
</script>

<template>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form @submit.prevent="registerUser">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 310 310" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                            stroke="#4665af">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_"
                                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="#" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 315 315" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_510_">
                                    <path id="XMLID_511_"
                                        d="M307.5,136.892h-19.791V117.1c0-4.143-3.357-7.5-7.5-7.5h-26.717c-4.143,0-7.5,3.357-7.5,7.5v19.792 h-19.791c-4.143,0-7.5,3.357-7.5,7.5v26.717c0,4.143,3.357,7.5,7.5,7.5h19.791v19.792c0,4.142,3.357,7.5,7.5,7.5h26.717 c4.143,0,7.5-3.358,7.5-7.5v-19.792H307.5c4.143,0,7.5-3.357,7.5-7.5v-26.717C315,140.249,311.643,136.892,307.5,136.892z">
                                    </path>
                                    <path id="XMLID_512_"
                                        d="M101.906,104.16c9.088,0,17.823,2.45,25.274,7.087l8.513,5.825c2.967,2.03,6.958,1.671,9.514-0.861 l24.828-24.596c1.589-1.574,2.392-3.774,2.191-6.001c-0.2-2.227-1.384-4.248-3.228-5.513l-14.43-9.896 c-0.294-0.201-0.603-0.382-0.922-0.539l-13.979-6.902c-0.185-0.092-0.374-0.176-0.566-0.252 c-12.042-4.754-24.729-7.165-37.708-7.165c-26.757,0-51.996,10.27-71.068,28.915c-19.367,18.934-30.137,44.681-30.323,72.499 c-0.187,27.824,10.239,53.72,29.355,72.916c18.968,19.049,45.879,29.975,73.834,29.975c27.658,0,53.608-10.739,71.195-29.463 c13.931-14.831,22.48-34.641,24.727-57.288c0.021-0.215,0.034-0.43,0.036-0.645l0.26-20.345c0.006-0.421-0.024-0.841-0.09-1.257 l-1.09-6.953c-0.571-3.649-3.716-6.339-7.409-6.339h-86.672c-4.143,0-7.5,3.358-7.5,7.5v29.982c0,4.142,3.357,7.5,7.5,7.5h44.186 c-2.025,4.439-5.216,9.12-9.251,13.482c-8.801,9.518-21.926,14.977-36.01,14.977c-14.383,0-28.157-5.636-37.79-15.462 c-20.052-20.448-19.822-56.077,0.489-76.245C75.334,109.605,88.505,104.16,101.906,104.16z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="#" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 22.773 22.773" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z">
                                        </path>
                                        <path
                                            d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z">
                                        </path>
                                    </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <span class="mb-3">or use your e-mail for registration</span>
                <div class="container-input w-100">
                    <div class="row">
                        <div class="col-6">
                            <label for="name">Restaurant Name</label>
                            <input type="text" name="name" id="name" v-model="formRegister.name" />
                        </div>
                        <div class="col-6">
                            <label for="email">E-mail</label>
                            <input type="mail" name="email" id="email" v-model="formRegister.email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="vat-number">VAT Number</label>
                            <input type="text" name="vat-number" id="vat-number" v-model="formRegister.vat_number" />
                        </div>
                        <div class="col-6">
                            <label for="address">Address</label>
                            <input type="text" name="address" id="address" v-model="formRegister.address" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label for="open-time">Opening Time</label>
                            <select class="d-block" name="open-time" id="open-time" v-model="formRegister.open_time">
                                <option value="00:00">00:00</option>
                                <option value="00:30">00:30</option>
                                <option value="01:00">01:00</option>
                                <option value="01:30">01:30</option>
                                <option value="02:00">02:00</option>
                                <option value="02:30">02:30</option>
                                <option value="03:00">03:00</option>
                                <option value="03:30">03:30</option>
                                <option value="04:00">04:00</option>
                                <option value="04:30">04:30</option>
                                <option value="05:00">05:00</option>
                                <option value="05:30">05:30</option>
                                <option value="06:00">06:00</option>
                                <option value="06:30">06:30</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="21:00">21:00</option>
                                <option value="21:30">21:30</option>
                                <option value="22:00">22:00</option>
                                <option value="22:30">22:30</option>
                                <option value="23:00">23:00</option>
                                <option value="23:30">23:30</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label for="closer-time">Closing Time</label>
                            <select class="d-block" name="closer-time" id="closer-time" v-model="formRegister.closer_time">
                                <option value="00:00">00:00</option>
                                <option value="00:30">00:30</option>
                                <option value="01:00">01:00</option>
                                <option value="01:30">01:30</option>
                                <option value="02:00">02:00</option>
                                <option value="02:30">02:30</option>
                                <option value="03:00">03:00</option>
                                <option value="03:30">03:30</option>
                                <option value="04:00">04:00</option>
                                <option value="04:30">04:30</option>
                                <option value="05:00">05:00</option>
                                <option value="05:30">05:30</option>
                                <option value="06:00">06:00</option>
                                <option value="06:30">06:30</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="21:00">21:00</option>
                                <option value="21:30">21:30</option>
                                <option value="22:00">22:00</option>
                                <option value="22:30">22:30</option>
                                <option value="23:00">23:00</option>
                                <option value="23:30">23:30</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label for="phone-number">Phone Number</label>
                            <input type="text" name="phone-number" id="phone-number" v-model="formRegister.phone" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="image">Image URL</label>
                            <input type="text" name="image" id="image" v-model="formRegister.image" />
                        </div>
                        <div class="col-6">
                            <label for="image">Logo URL</label>
                            <input type="text" name="logo" id="logo" v-model="formRegister.logo" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        </div>
                        <div class="col-12">
                            <label for="description">Description</label>
                            <textarea name="description" id="description" class="w-100" cols="30" rows="2"
                                v-model="formRegister.description"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" v-model="formRegister.password" />
                        </div>
                        <div class="col-6">
                            <label for="password-confirm">Confirm Password</label>
                            <input type="password" name="password-confirm" id="password-confirm" v-model="formRegister.password_confirm" />
                        </div>
                    </div>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form @submit.prevent="loginUser">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 310 310" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                            stroke="#4665af">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_"
                                        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="#" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 315 315" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_510_">
                                    <path id="XMLID_511_"
                                        d="M307.5,136.892h-19.791V117.1c0-4.143-3.357-7.5-7.5-7.5h-26.717c-4.143,0-7.5,3.357-7.5,7.5v19.792 h-19.791c-4.143,0-7.5,3.357-7.5,7.5v26.717c0,4.143,3.357,7.5,7.5,7.5h19.791v19.792c0,4.142,3.357,7.5,7.5,7.5h26.717 c4.143,0,7.5-3.358,7.5-7.5v-19.792H307.5c4.143,0,7.5-3.357,7.5-7.5v-26.717C315,140.249,311.643,136.892,307.5,136.892z">
                                    </path>
                                    <path id="XMLID_512_"
                                        d="M101.906,104.16c9.088,0,17.823,2.45,25.274,7.087l8.513,5.825c2.967,2.03,6.958,1.671,9.514-0.861 l24.828-24.596c1.589-1.574,2.392-3.774,2.191-6.001c-0.2-2.227-1.384-4.248-3.228-5.513l-14.43-9.896 c-0.294-0.201-0.603-0.382-0.922-0.539l-13.979-6.902c-0.185-0.092-0.374-0.176-0.566-0.252 c-12.042-4.754-24.729-7.165-37.708-7.165c-26.757,0-51.996,10.27-71.068,28.915c-19.367,18.934-30.137,44.681-30.323,72.499 c-0.187,27.824,10.239,53.72,29.355,72.916c18.968,19.049,45.879,29.975,73.834,29.975c27.658,0,53.608-10.739,71.195-29.463 c13.931-14.831,22.48-34.641,24.727-57.288c0.021-0.215,0.034-0.43,0.036-0.645l0.26-20.345c0.006-0.421-0.024-0.841-0.09-1.257 l-1.09-6.953c-0.571-3.649-3.716-6.339-7.409-6.339h-86.672c-4.143,0-7.5,3.358-7.5,7.5v29.982c0,4.142,3.357,7.5,7.5,7.5h44.186 c-2.025,4.439-5.216,9.12-9.251,13.482c-8.801,9.518-21.926,14.977-36.01,14.977c-14.383,0-28.157-5.636-37.79-15.462 c-20.052-20.448-19.822-56.077,0.489-76.245C75.334,109.605,88.505,104.16,101.906,104.16z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <a href="#" class="social">
                        <svg fill="#faf9f5" height="18px" width="18px" version="1.1" id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 22.773 22.773" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z">
                                        </path>
                                        <path
                                            d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z">
                                        </path>
                                    </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                    <g> </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <span class="mb-5">or use your account</span>
                <label for="login-email">Email</label>
                <input type="email" class="mb-4" name="login-email" id="login-email" v-model="formLogin.email" />
                <label for="login-password">Password</label>
                <input type="password" name="login-password" id="login-password" v-model="formLogin.password" />
                <a href="#" style="color: #faf9f5">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Already registered?</h1>
                    <p>Don’t be shy like a boo and log in with your personal info!</p>
                    <button class="ghost" @click="signIn">Sign In</button>
                    <img class="w-50" src="../assets/logos/green_ghost.svg" alt="Boo Green Logo">
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Ready for a spooky adventure?</h1>
                    <p>Enter your personal details and start journey with us!</p>
                    <button class="ghost" @click="signUp">Sign Up</button>
                    <img class="w-50" src="../assets/logos/green_ghost.svg" alt="Boo Green Logo">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h2 {
    text-align: center;
}

p {
    margin: 20px 0 30px;
    font-size: 1rem;
}

span {
    font-size: 1rem;
}

a {
    color: #333;
    font-size: 1rem;
    text-decoration: none;
    margin: 15px 0;
}

img {
    transition: all .3s ease;
    
    &:hover {
        filter: brightness(1.1);
    }
}

button {
    border-radius: 20px;
    border: 1px solid $secYellow;
    background-color: $secYellow;
    color: #000;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    transition: filter .3s ease;

    &:hover {
        filter: brightness(1.1);
    }
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: $priGreen;
    color: $fontWhite;
    border-color: $priGreen;
}

form {
    background-color: $priGreen;
    color: $fontWhite;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 .7rem;
    height: 100%;
    text-align: center;
}

label {
    background-color: $secYellow;
    padding: .1rem 1.5rem;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    color: black;
    font-weight: 600;
    font-size: 1rem;
}

input,
select {
    background-color: white;
    border: none;
    padding: .5rem;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 20px;

    &:focus {
        outline: 3px solid $secYellow;
    }
}

textarea {
    resize: none;
    margin-bottom: 1rem;
    border-radius: 20px;

    &:focus {
        outline: 3px solid $secYellow;
    }
}

.container {
    background-color: #fff;
    position: relative;
    overflow: hidden;
    height: calc(100vh - 95px);
    z-index: 0;
}

.form-container {
    position: absolute;
    top: 5%;
    height: 90%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 5%;
    left: 50%;
    width: 50%;
    height: 90%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background-color: $secYellow;
    color: #000;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    border-radius: 20px;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
    transition: all .3s ease;

    svg {
        transition: all .3s ease;
    }

    &:hover {
        border: 1px solid $secYellow;
    }

    &:hover svg {
        fill: $secYellow;
    }
}

/**MEDIA QUERIES**/
@media (max-width: $small) {
    .container {
        max-width: 400px;
    }
}
</style>
