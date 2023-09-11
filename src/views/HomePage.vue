<script>
export default{
    name: 'HomePage',
    components:{

    }
}
</script>

<template>
    <main>
        <div class="jumbo">
            <div class="container">
                <div class="row">
                    <div class="jumbo-img col-12 col-md-6">
                        <img src="../assets/mascotte/ghost-hamburger-jumbo.png" alt="deliveboo mscotte eating a hamburger">
                    </div>
                    <div class="jumbo-title col-12 text-center text-md-start col-md-6">
                        <h1 class="title">DeliveBoo</h1>
                        <h2 class="slogan">Where Hunger Meets Hauntingly Good Food!</h2>
                    </div>
                </div>

                <div class="search-bar-box">
                    <h3>What boo you wanna eat?</h3>
                </div>
            </div>
            <!-- Background -->
            <img class="wave" src="../assets/shapes/diagonale.svg" alt="black wave svg">
        </div>
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
            position: absolute;
            background-color: $detGrey;
            color: $fontWhite;
            text-align: center;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
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
</style>
