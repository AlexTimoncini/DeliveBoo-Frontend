<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
export default{
	name: 'Slider',
    components: {
    Carousel,
    Slide,
    Pagination,
  },
    props: {
        slides: Array,
        autoplay: Number,
        pagination: Boolean
    },
    data(){
        return{
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
        getImagePath: function(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}
</script>

<template>
    <Carousel :items-to-show="2" :autoplay="autoplay" :transition="300" :wrapAround="true" :breakpoints="breakpoints" snapAlign="start">
        <Slide v-for="slide in slides" :key="slide">
            <router-link :to="{ name: 'WorkInProgress' }">
                <div class="slide-img">
                    <img :src="slide.image" alt="">
                </div> 
            </router-link>

        </Slide>

        <template #addons>
        <Pagination v-if="pagination" />
        </template>
    </Carousel>
</template>

<style lang="scss" scoped>

.slide-img{
    width: 100%;
    aspect-ratio: 1/1;
    img{
        display: block;   
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.carousel__item {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.carousel__slide {
  padding: 5px;
}

</style>
