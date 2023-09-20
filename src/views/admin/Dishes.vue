<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-2 p-0">
                <DashboardSidebar />
            </div>
            <div class="col-md-9 col-10 p-0">
                <DashboardNavbar />
                <div class="my_app px-5">

                    <div class="mt-4">
                        <div class="d-flex justify-content-end">
                            <button class="btn my_button" @click=" this.$router.push({
                                name: 'DishCreate'
                            })">
                                <svg id=" add-dish" viewBox="0 0 800 800">
                                    <path
                                        d="m400,700c-18.4,0-33.3-14.9-33.3-33.3v-233.4h-233.4c-18.4,0-33.3-14.9-33.3-33.3s14.9-33.3,33.3-33.3h233.3v-233.4c0-18.4,14.9-33.3,33.3-33.3s33.3,14.9,33.3,33.3v233.3h233.3c18.4,0,33.3,14.9,33.3,33.3s-14.9,33.3-33.3,33.3h-233.2v233.3c0,18.6-14.9,33.5-33.3,33.5Z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Categories  -->
                        <div class="category mb-4 row" v-if="authStore.user">

                            <!-- Cards  -->
                            <div class="col-12 col-md-6 col-lg-4 p-0 p-md-3" v-for="dish in authStore.user.dishes"
                                :key="dish.id">
                                <div class="dish-card card-container p-3">
                                    <div class="card-buttons-container d-flex justify-content-end mb-2">
                                        <div class="card-button btn" @click=" deleteDish(dish.id)">
                                            <svg viewBox="0 0 24 24">
                                                <path
                                                    d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="card-button btn" @click=" this.$router.push({
                                            name: 'DishEdit',
                                            params: { id: dish.id }
                                        })">
                                            <svg version=" 1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                                y="0px" viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;"
                                                xml:space="preserve">
                                                <path d="M522.4,136.3c18.3-18.2,47.8-18.2,66,0l75.8,75.8c18.2,18.2,18.2,47.7,0,66l-55.1,55.1L467.4,191.3L522.4,136.3z
	 M133.6,678.3c-8.2,0-13.1-6.3-10.9-15.6l32.4-144c3.3-12,9.2-23.1,17.3-32.4l82.4-82.4l73.7-73.8l105.8-105.8l36.8,36.8l-262,261.9
	l-14.5-14.5c-4,5.1-7,10.9-9,17.1l-14.3,63.5l40,40l63.5-14.3c6.2-1.9,12-5,17.1-9l-49.7-49.8l261.9-261.9l72,72L470.4,471.9
	L314.2,628.1v0c-9.4,8.1-20.4,14.1-32.4,17.3l-144,32.4C136.5,678.1,135.1,678.3,133.6,678.3L133.6,678.3z" />
                                            </svg>

                                        </div>
                                    </div>
                                    <form>
                                        <div
                                            class="d-flex flex-column flex-xl-row align-items-start justify-content-center justify-content-xl-start">
                                            <div class="d-flex align-items-center mb-2 justify-content-center me-xl-4">
                                                <div class="visibility-indicator me-2"
                                                    :class="!dish.visible ? 'false' : ''">
                                                </div>
                                                <p v-if="dish.visible" class="more-info-txt m-0">Visible</p>
                                                <p v-if="!dish.visible" class="more-info-txt m-0">Not Visible</p>
                                            </div>
                                            <div class="d-flex align-items-center mb-2 ">
                                                <div class="visibility-indicator me-2"
                                                    :class="!dish.available ? 'false' : ''"></div>
                                                <p v-if="dish.available" class="more-info-txt m-0">Available</p>
                                                <p v-if="!dish.available" class="more-info-txt m-0">Not Available</p>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="dishName">Dish Name</label>
                                            <input type="text" class="form-control " id="dishName" :placeholder="dish.name"
                                                disabled :value="dish.name">
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="dishDesc">Dish Description</label>
                                            <textarea class="form-control" name="dishDescription" id="dishDesc" rows="3"
                                                disabled>{{ dish.description }}</textarea>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label for="dishIngredients">Ingredients</label>
                                            <div type="text" class="fake-input mb-1" id="dishIngredients">
                                                <span v-for="ingredient, index in dish.ingredients">{{ ingredient.name }}{{
                                                    index + 1 === dish.ingredients.length ? '' : ', ' }}</span>
                                            </div>
                                        </div>
                                        <div class="form-group mb-2 d-flex">

                                            <div class="form-group mb-2 me-3">
                                                <label for="dishPrice">Price</label>
                                                <input type="text" class="form-control mb-1" id="dishPrice"
                                                    placeholder="9.99€" :value="dish.price" disabled>
                                            </div>
                                            <div class="form-group mb-2 d-flex flex-column">
                                                <label for="">Image</label>
                                                <img class="thumb" :src="dish.photo" :alt="dish.name">
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import DashboardSidebar from '../../components/admin/DashboardSidebar.vue';
import DashboardNavbar from '../../components/admin/DashboardNavbar.vue';
export default {
    name: 'Dishes',
    components: { DashboardSidebar, DashboardNavbar },

    methods: {
        deleteDish(dishID) {
            if (window.confirm('Are you sure you want to delete this dish?')) {
                axios.delete(`/api/delete/${dishID}`)
                    .then((response) => {
                        console.log(response);
                        window.location.href = '/admin/dishes';
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
    }
}
</script>

<script setup>
import { useAuthStore } from '../../stores/auth';
const authStore = useAuthStore();
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

    .my_button {
        background-color: $priGreen;
        margin: .5rem;

        svg {
            width: 25px;
            height: 25px;
            fill: $fontWhite;
        }
    }

    .my_button:hover {
        background-color: #028450;
    }

    .my_button:active {
        background-color: #249d6d;

        svg {
            padding: .1rem;
        }
    }
}

.category {
    .my_title {
        color: $priGreen;
        font-weight: 600;
    }

    .dish-card {
        // background-color: #efebe0;
        border-radius: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .fake-input {
            background-color: #E9ECEF;
            padding: 0.375rem 0.75rem;
            border-radius: 0.375rem;
            min-height: 60px;
        }

        .btn.card-button {
            height: 30px;
            width: 30px;
            margin: .3rem;
            padding: 0;
            border-radius: 50%;
            background-color: $secYellow;



            svg {
                margin: .3rem;
                fill: $fontWhite;
            }

            svg:hover {
                margin: .4rem;
            }
        }

        .btn.card-button:hover {
            background-color: #f5c535;
        }

        .thumb {
            width: 35px;
            height: 35px;
            border-radius: 5px;
        }
    }

    .visibility-indicator {
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: #028450;
    }

    .false {
        background-color: rgb(200, 5, 5);
    }
}
</style>