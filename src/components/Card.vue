<template>
    <div class="card col-sm-12 col-md-6 col-lg-4">
        <div class="row justify-content-between h-100">
            <div class="card__image col-12 " :class="!dish.available ? 'disabled' : ''">
                <img :src="dish.photo.startsWith('/dish/') ? (`http://127.0.0.1:8000/storage${dish.photo}`) : dish.photo" :alt="dish.name + ' image'" draggable="false">
            </div>
            <div class="row">
                <div class="card__info col-8">
                    <div class="card__info-title">
                        <h3>{{ dish.name }}</h3>
                        <div class="d-flex align-items-center">
                            <div class="visibility-indicator me-2" :class="!dish.available ? 'false' : ''"></div>
                            <p v-if="dish.available" class="more-info-txt m-0">Available</p>
                            <p v-if="!dish.available" class="more-info-txt m-0">Not Available</p>
                        </div>
                        <p>{{ dish.description }}</p>
                        <p><span class="me-2" v-for="ingredient, index in dish.ingredients">{{ ingredient.name }} {{ ((index
                            + 1) == dish.ingredients.length) ? '' : '-' }} </span></p>
                    </div>
                </div>
                <div class="card__price col-4">
                    <button :class="!dish.available ? 'disabled' : ''"
                        @click="dish.available ? $emit('add') : 'not available'">
                        <img src="../assets/icons/cart.svg" alt="Cart SVG" draggable="false">
                    </button>
                    <p> {{ dish.price + ' €' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data: () => ({
        isDishAddToCart: false,
    }),
    props: {
        dish: Object
    },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.card {
    overflow: hidden;
    border-radius: 25px;
    background-color: $secYellow;
    border: 5px solid white;

    .card__image {
        position: relative;
        height: 300px;

        img {
            border-bottom-right-radius: 30px;
            transform: rotate(-5deg) translate(-25px, -25px);
            position: absolute;
            width: 90%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: all .3s ease;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            outline: 10px solid white;

            &:hover {
                transform: rotate(0deg) translate(-10px, -10px) scale(1.1);
            }
        }
    }

    .card__info {
        padding: 1rem;
        z-index: 1;

        .card__info-title {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h3 {
                font-size: 1.5rem;
                font-weight: bold;
                max-height: 60px;
                overflow-y: hidden;
            }

            p {
                font-weight: 600;
                max-height: 75px;
                overflow-y: hidden;
            }

            span {
                color: $detGrey;
            }
        }
    }

    .card__price {
        @include flex(column, end, center, no-wrap);
        text-align: center;
        z-index: 1;

        p {
            background-color: white;
            padding: .5rem 1rem;
            border-radius: 25px;
            font-weight: 600;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        }



        button {
            background-color: $priGreen;
            width: 70px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            border-radius: 50%;
            padding: .8rem;
            border: none;
            margin-bottom: 1rem;
            transition: all .3s ease;
            border: 5px solid white;

            position: relative;

            .plus-one {
                position: absolute;

            }

            .animation-plus-one {}

            img {
                transition: all .3s ease;
            }

            &:hover {
                cursor: pointer;
                background-color: #009e5f;

                img {
                    transform: scale(1.1);
                }
            }

            &:active {
                background-color: #12b350;

                img {
                    transform: scale(.9);
                }
            }
        }
    }

    .disabled {
        filter: saturate(.15);
        pointer-events: none;
    }

    p.more-info-txt {
        font-weight: 300;
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