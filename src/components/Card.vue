<template>
    <div class="card col-sm-12 col-md-6 col-lg-4">
        <div class="row">
            <div class="card__image col-12">
                <img :src="dish.photo" :alt="dish.name + ' image'" draggable="false">
            </div>
            <div class="row">
                <div class="card__info col-8">
                    <div class="car__info--title">
                        <h3>{{ dish.name }}</h3>
                        <p>{{ dish.description }}</p>
                        <span>{{ dish.ingredient_list.join(', ') }}.</span>
                    </div>
                </div>
                <div class="card__price col-4">
                    <button @click="$emit('add')">
                        <img src="../assets/icons/cart.svg" alt="Cart SVG" draggable="false">
                    </button>
                    <p> {{ dish.price + ' €' }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Card',

    props: {
        dish: Object
    },

    data() {
        return {
            restaurant: {
                "name": "BoolDonald's",
                "password": "BestInTown99",
                "email": "boolDonald@customer.it",
                "vat_number": "LU12345678",
                "address": "10 rue Willy Goergen",
                "type_list": ["Fast Food", "American"],
                "logo": "/assets/booldonalds.png",
                "image": "https://images.pexels.com/photos/4109136/pexels-photo-4109136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "dish_list": [
                    {
                        "name": "BoolCheeseBurger",
                        "description": "You will never experience something this good, CHEESE!",
                        "price": 7.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/cheeseburger--hero-mob.jpg.webp?itok=zUC2Hd7n",
                        "availability": true,
                        "ingredient_list": ["Bread", "Steak", "Cheese", "Onion", "Pickle", "Ketchup", "Senape"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolDoubleBurger",
                        "description": "Double Meat Double Fun.",
                        "price": 9.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/double-cheeseburger--hero-mob.jpg.webp?itok=h2Sb6fQv",
                        "availability": true,
                        "ingredient_list": ["Bread", "Steak", "Cheese", "Onion", "Pickle", "Ketchup", "Senape"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolChickenBurger",
                        "description": "Sometimes you could admit that CHICKEN is better than Steak.",
                        "price": 6.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/chickenburger--hero-mob.jpg.webp?itok=3ii-KClB",
                        "availability": false,
                        "ingredient_list": ["Bread", "Chicken", "Mayonnaise"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolFishBurger",
                        "description": "Aaaaargh, Fish o'Neal.",
                        "price": 4.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/filet-o-fish--hero-mob.jpg.webp?itok=kxKSQ52V",
                        "availability": true,
                        "ingredient_list": ["Bread", "Cod", "Mayonnaise"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolBaconBurger",
                        "description": "Just BACON, What Else? ",
                        "price": 9.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/gran-crispy-mcbacon--hero-mob_0.jpg.webp?itok=IxGQroUp",
                        "availability": true,
                        "ingredient_list": ["Bread", "Steak", "Cheese", "Onion", "Bacon", "Ketchup", "Senape"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolSelectionBurger",
                        "description": "Hey, if Gordon says it's good, it has to be good.",
                        "price": 10.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/myselection-chicken-avocado--hero-mob.jpg?itok=6B4inxSd",
                        "availability": false,
                        "ingredient_list": ["Bread", "Chicken", "Avocado", "Bacon", "Radish", "Tomato", "Cheese"],
                        "category": "Burger"
                    },
                    {
                        "name": "BoolFries",
                        "description": "Do I have to add anything?",
                        "price": 3.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/patate-regolari_mobile_0.jpg.webp?itok=dHGCytPo",
                        "availability": true,
                        "ingredient_list": ["Potato"],
                        "category": "Sides"
                    },
                    {
                        "name": "BoolNuggets",
                        "description": "MUST-HAVE!",
                        "price": 2.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/chicken-mcnuggets_mobile.jpg.webp?itok=-3FSOlc1",
                        "availability": true,
                        "ingredient_list": ["Chicken", "Bread"],
                        "category": "Sides"
                    },
                    {
                        "name": "Water",
                        "description": "Lilia Water Plastic Bottle",
                        "price": 0.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/acqua-lilla_mobile.jpg.webp?itok=rSdWmsOF",
                        "availability": true,
                        "ingredient_list": ["water"],
                        "category": "Drink"
                    },
                    {
                        "name": "BoolCoke",
                        "description": "DRINK, DRINK DRINK!",
                        "price": 3.99,
                        "photo": "https://www.mcdonalds.it/sites/default/files/styles/compressed/public/products/cup-bibite-mobile_0.jpg.webp?itok=zUg1ivDC",
                        "availability": true,
                        "ingredient_list": ["water", "sugar"],
                        "category": "Drink"
                    }
                ],
                "order_list": [
                    {
                        "dish_list": ["BoolCheeseBurger", "BoolFries","BoolCoke"],
                        "customer_address": "7 Rue Auguste Collard, L-3220"
                    },
                    {
                        "dish_list": ["BoolSelectionBurger", "BoolSelectionBurger","BoolFries","Water"],
                        "customer_address": "9 Rue Auguste Comte, L-3090"
                    },
                    {
                        "dish_list": ["BoolFishBurger", "BoolChickenBurger", "BoolNuggets" ,"Water", "BoolCoke", "BoolCoke"],
                        "customer_address": "9 Rue Auguste Comte, L-3090"
                    }
                ]
            }
        }
    }
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
                    transform: rotate(0deg) translate(25px, 25px) scale(1.3);
                }
            }
        }

        .card__info {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding: 1.5rem;
            z-index: 1;

            h3 {
                font-size: 1.5rem;
                font-weight: bold;
            }

            p {
                font-weight: 600;
            }

            span {
                color: $detGrey;
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
            }
        }
    }
</style>