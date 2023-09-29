<template >
    <div class="slide-container" @wheel="handleScrollBehaviour">
        <div class="slide red"></div>
        <div class="slide blue"></div>
        <div class="slide red"></div>
        <div class="slide blue"></div>
    </div>
</template>

<script>
export default {
    name: 'BooStory',
    methods: {
        handleScrollBehaviour(event) {
            const direction = event.deltaY > 0 ? 1 : -1;
            const slideHeight = window.innerHeight - 95;
            const currentSlideIndex = Math.round(window.scrollY / slideHeight);
            const nextSlideIndex = currentSlideIndex + direction;
            const nextSlidePosition = nextSlideIndex * slideHeight;
            console.log(nextSlideIndex);
            if(nextSlideIndex < 4){
                window.scrollTo({
                    top: nextSlidePosition,
                    behavior: 'smooth',
                });
                event.preventDefault();
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.slide{
    height: calc(100vh - 95px);
}

.red{
    background-color: red;
}

.blue{
    background-color: blue;

}

@media (max-width: 1400px) {

}
</style>