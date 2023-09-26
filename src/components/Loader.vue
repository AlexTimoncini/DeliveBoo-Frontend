<template>
    <div class="container">
        <div class="row  d-flex justify-content-center align-items-center">
            <h1 class="text-center mb-0">"Deliveboo is conjuring up your feast... <br><span>Get ready for a ghostly
                    delight!</span>
            </h1>
            <img class="boo col-lg-3 col-md-5 col-sm-6 col-6" src="../assets/mascotte/Loader-copia-sm.gif"
                alt="boo the ghost laughting">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    height: calc(100vh - 195px);
    margin-top: 100px;
}

h1 {
    color: $priGreen;
    font-weight: 700;

    span {
        color: $secYellow;
    }
}
</style>