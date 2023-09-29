<script>

export default {
    name: 'Riders',
    components: {

    },

}
</script>

<template>
    <div class="jumbo mb-2">
        <h1 class=""></h1>
        <img src="../assets/mascotte/boo-delivery.png" alt="little boo ghost rider">
    </div>
    <div class="container my_container">
        <h2 class="title text-center  mx-auto  mb-3">Rider kit Store</h2>
        <button class="btn my_button d-block  mx-auto  col-2 mb-5">clicca qui</button>
        <p class="mx-auto col-6 ">
            Hey there, frightfully cute friend! Here's <strong>a little treat</strong> for you: DeliveBoo provides all our
            Riders with equipment through our <strong>Rider Kit Store</strong>. You can even indulge in getting <strong>some
                extra
                goodies </strong>you might
            like!
            <br>
            <br>
            The <strong>Free Base Kit</strong> is great, but unfortunately, it doesn't include the high-visibility vest, the
            spine-chilling
            helmet, or the <strong>support for your phone</strong>. But you know what? You might need them to make your
            deliveries
            monstrously safe. No worries, <strong>you can add them to your order </strong>without any extra charges!
            <br>
            <br>
            And remember, shipping for the Base Kit is always a spooky gift.
            <br>
            <br>
            We even have <strong>kits for bicycles</strong>, scooters, and cars for Riders who love eerie choices, plus a
            <strong>jacket</strong> and a
            <strong>thermal backpack</strong> to keep you warm during your nightmare missions.
            <br><br>
            <strong> The shipping for the Base Kit is always free.</strong>
        </p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.jumbo {
    img {
        display: block;
        width: 100%;
        height: calc(100vh - 95px);
        object-fit: contain;
    }
}

.my_container {
    margin-bottom: 4rem;
}

.title {
    font-weight: 700;
    color: $priGreen;
}

.my_button {
    background-color: $secYellow;
    color: white;
    position: relative;
}

.my_button:before {
    background-image: url(https://riders.deliveroo.it/_nuxt/img/rider-scooter.a1e2afb.svg);
    position: absolute;
    top: 0;
    right: 0;
    content: "";
}

.my_button:after {
    background-image: url(https://riders.deliveroo.it/_nuxt/img/rider-bike.a4dcd06.svg);
    position: absolute;
    content: "";
}

.my_button:hover {
    background-color: #efc440;
}

.my_button:active {
    background-color: $secYellow;
    color: white;
}

p {
    strong {
        color: $priGreen;
    }
}
</style>