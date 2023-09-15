<script>
import { store } from '../store';
import axios from 'axios';
import Slider from '../components/Slider.vue';
export default{
    name: 'HomePage',
    components:{
        Slider
    },
    data() {
        return {
            search: '',
            store,
            filteredTypes: [],
        }
    },
    methods: {
        getTypes(){
            axios.get(store.ApiUrl + 'types')
                .then( (response) => {
                    store.allTypes = response.data.data;
                    store.allTypes.forEach((type, index) => {
                    if(index % 2 == 0){
                        this.filteredTypes.push(type);
                    }
            });
                })
                .catch(function (error) {
                    console.log(error);
            });
        },
        getBestRestaurants(){
            axios.get(store.ApiUrl + 'restaurants/bestSeller')
                .then( (response) => {
                    store.bestRestaurants = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
            });
        }
    },
    created(){
        this.getTypes();
        this.getBestRestaurants();
    }
}
</script>

<template>
    <main>
        <section class="jumbo">
            <div class="container">
                <div class="row">
                    <div class="jumbo-img col-12 col-md-6 pt-4">
                        <img src="../assets/mascotte/ghost-jumbo-hd.png" alt="deliveboo mscotte eating a hamburger" draggable="false">
                    </div>
                    <div class="jumbo-title col-12 text-center text-md-start col-md-6">
                        <h1 class="title">DeliveBoo</h1>
                        <h2 class="slogan">Where Hunger Meets Hauntingly Good Food!</h2>
                    </div>
                    <div class="search-bar-box col-12 col-lg-7 m-auto">
                        <h3 class="title">What boo you wanna eat?</h3>
                        <h5>Order Online From Your Favourite Restaurant</h5>
                        <div class="search-bar" @keyup.enter="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'restaurant', searchInput: this.search } })">
                            <label for="home-searchbar">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search"><path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path></svg>
                            </label>
                            <input type="text" id="home-searchbar" placeholder="Type your restaurant..." v-model="search">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Background -->
            <img class="wave" src="../assets/shapes/diagonale.svg" alt="black wave svg" draggable="false">
        </section>
        <section class="categories">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <h3 class="m-0 title">Choose a category</h3>
                    </div>
                    <div v-for="type in filteredTypes" :to="{ name: 'WorkInProgress' }" class="category-card col-6 col-md-3" @click="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'category', searchInput: '0' } })">

                        <div class="card-image">
                            <img class="img-fluid" :src="type.logo" alt="">
                        </div>
                        <h3 class="card-title">{{ type.name }}</h3>
                    </div>
                </div>
            </div>
        </section>
        <section class="partners">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="title">Boo-na be our partner?</h3>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-center align-items-stretch" >
                            <div class="col-12 col-sm-10 col-md-6 col-lg-3 p-2 card_container">
                                <div class="partner-card d-flex flex-column">
                                    <div class="card_image">
                                        <img class="img-fluid" src="../assets/jumbo/rider_jumbo.png" alt="deliveboo rider image" draggable="false">
                                    </div>
                                    <div class="card_text d-flex flex-column justify-content-between">
                                        <h4>Ghastly Riders</h4>
                                        <p class="m-0">Embark on a haunting journey with our spectral rider team! Join us for bewitching hours and ghostly rewards as you deliver spine-tingling meals to the hungriest souls in town.</p>
                                        <div class="d-flex">
                                            <router-link :to="{ name: 'WorkInProgress' }" class="card_btn">
                                                Discover More
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-10 col-md-6 col-lg-3 p-2 card_container">
                                <div class="partner-card d-flex flex-column">
                                    <div class="card_image">
                                        <img class="img-fluid" src="../assets/jumbo/restaurant_jumbo.jpg" alt="haunted restaurant image" draggable="false">
                                    </div>
                                    <div class="card_text d-flex flex-column justify-content-between">
                                        <h4>Haunted Restaurants</h4>
                                        <p class="m-0">Summon more hungry spirits to your establishment! Partner with us and tap into the dark arts of our platform, marketing sorcery, and enhanced visibility.</p>
                                        <div class="d-flex">
                                            <router-link :to="{ name: 'WorkInProgress' }" class="card_btn">
                                                Discover More
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-10 col-md-6 col-lg-3 p-2 card_container">
                                <div class="partner-card d-flex flex-column">
                                    <div class="card_image">
                                        <img class="img-fluid" src="../assets/jumbo/work_with_us_jumbo.jpg" alt="skeleton employee" draggable="false">
                                    </div>
                                    <div class="card_text d-flex flex-column justify-content-between">
                                        <h4>Join Our Coven</h4>
                                        <p class="m-0">Dive into the shadows and discover eerie career opportunities with us. From dark tech mysteries to ghostly customer support, help us conjure the future of food delivery.</p>
                                        <div class="d-flex">
                                            <router-link :to="{ name: 'WorkInProgress' }" class="card_btn mt-auto">
                                                Discover More
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        <section class="restaurants">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="title">Our Best Restaurants</h3>
                        <Slider :slides="store.bestRestaurants" :autoplay="3000" :pagination="true" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .jumbo{
        position: relative;
        display: flex;
        .jumbo-img{

            img{
                display: block;
                width: 100%;
            }
        }

        .jumbo-title{
            color: $priGreen;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title{
                font-size: 4.5rem;
                font-weight: 900;
                display: block;
                width: 100%;
                margin: 0;
            }
            .slogan{
                font-size: 2.5rem;
                margin:0;
            }
        }
        
        .search-bar-box{
            padding: 2rem;
            background-color: #fff;
            text-align: center;
            transform: translateY(50%);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            border-radius: 10px;
            .title{               
                color: $priGreen;
                font-size: 2rem;
            }
            .search-bar{
                height: 35px;
                margin-top: 1rem;
                padding: 0 5rem;
                display: flex;
                justify-content: center;
                input[type=text]{
                    height: 100%;
                    color: $priGreen;
                    flex-grow: 1;
                    padding-left: 0.5rem;
                    border-radius: 10px;
                    border: 1px solid #e8ebeb;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,.05),inset 0 0 0 100px #fff;
                }

                input[type=text]:focus{
                    border: 1px solid $secYellow;
                }
                label{
                    height: 100%;
                    aspect-ratio: 1/1;
                    cursor: pointer;
                    margin-right: 0.5rem;
                    svg{
                        height: 100%;
                        aspect-ratio: 1/1;
                    }
                }
            }

        }
        img.wave{
            position: absolute;
            width: 100%;
            object-fit: cover;
            top: 0;
            left: 0;
            filter: invert(73%) sepia(60%) saturate(809%) hue-rotate(354deg) brightness(96%) contrast(100%);
            z-index: -1;
        }
    }
    .categories{
        padding-top: 100px;
        background-color: $priGreen;
        text-align: center;
        .title{
            color: $fontWhite;
            font-size: 2rem;
            padding: 2rem 0;
        }

        .category-card{
            display: block;
            padding: 2rem;
            transition: all 0.33s ease;
            max-width: 250px;
            cursor: pointer;
            .card-image{
                overflow: hidden;
                width: 100%;
                aspect-ratio: 1/1;
                border-radius: 50%;
                background-color: #fff;
                display: flex;
                padding: 1.8rem;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 6px 20px -3px;
                img{
                    height: 100%;
                    margin: auto;
                    transition: all 0.33s ease;
                }
            }

            .card-title{
                color: $fontWhite;
                text-transform: capitalize;
                padding-top: 1rem;
            }
        }
        .category-card:hover{
            transform: scale(1.05);

            .card-image{
                img{
                    transform: scale(1.1);
                }
            }
        }
    }
    .partners{
        padding: 3rem 0;
        .title{
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        .card_container{

            .partner-card{
                height: 100%;
                overflow: hidden;
                background-color: $secYellow;
                padding: 0;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: 10px;
        
                .card_image{
                    clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
                }
                
                .card_text{
                    flex-grow: 1;
                    padding: 1rem;
                }
        
                .card_btn{
                    background-color: $priGreen;
                    color: $fontWhite;
                    padding: 0.3rem 0.8rem;
                    margin-top: 1rem;
                    border-radius: 5px;
                }
            }
        }
            

        .card_container:nth-child(2){
            .partner-card{
                background-color: $priGreen;
                color: $fontWhite;

                .card_btn{
                    background-color: $secYellow;
                    color: #000;
                }
            }
        }
    }

    .restaurants{
        padding: 3rem 0;
        background-color: $secYellow;
        .title{
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }
    }
    /**MEDIA QUERIES**/
    @media (max-width: $small){
        .search-bar-box{
            transform: translateY(30%) !important;
            .title{
                font-size: 1.8rem!important;
            }
        } 
    }
</style>