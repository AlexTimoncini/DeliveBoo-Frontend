<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
    name: 'Slider',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: {
        slides: Array,
        autoplay: Number,
        pagination: Boolean,
        title: Boolean,
        navigation: Boolean,
    },
    data() {
        return {
            breakpoints: {
                992: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
                1400: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            }
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    mounted() {
    },
}
</script>

<template>
    <div class="position-relative wrapper">
        <Carousel class="" ref="slider" :items-to-show="2" :autoplay="autoplay" :transition="300" :wrapAround="true"
            :breakpoints="breakpoints" snapAlign="start">
            <Slide class="position-relative" v-for="slide in slides" :key="slide">
                <router-link :to="{ name: 'RestaurantMenu', params: { id: slide.name } }">
                    <h3 v-if="title" class="slide-title position-absolute">
                        {{ slide.name }}
                    </h3>
                    <div class="slide-img">
                        <img :src="slide.image" alt="">
                    </div>
                </router-link>

            </Slide>


            <template #addons>
                <Pagination v-if="pagination" />
                <navigation v-if="navigation">
                    <template #next>
                        <span class="next arrow">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.343 185.343"
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </template>
                    <template #prev>
                        <span class="prev arrow">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 185.343 185.343"
                                xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
                                    </g>
                                </g>
                            </svg>
                        </span>
                    </template>
                </navigation>
            </template>


        </Carousel>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.slide-img {
    width: 100%;
    aspect-ratio: 1/1;

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.slide-title {
    color: white;
    text-align: center;
    text-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    font-size: 2rem;
    text-align: center;

    width: 100%;
    top: 50%;
    transform: translateY(-50%);

}

.carousel__item {
    display: flex;
    justify-content: center;
    align-items: stretch;
}

.carousel__slide {
    padding: 5px;
}

.arrow {
    padding: 10px;
    background-color: $priGreen;
    border-radius: 50%;
    display: flex;
    margin: 1rem;


    svg {

        height: 20px;
        width: 20px;
        margin: 0 auto;
        fill: $fontWhite;

    }
}

.prev {
    margin-right: 4rem;
    transform: rotate(180deg);
}

.next {
    margin-left: 4rem;
}
</style>
