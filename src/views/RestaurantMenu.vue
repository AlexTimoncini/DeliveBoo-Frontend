<script>
export default{
    name: 'RestaurantMenu',

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

<template>
    <div class="container">
        <div class="row">
            <div class="image-container col-12">
                <img class="image img-fluid" :src="restaurant.image" :alt="restaurant.name + ' image'" draggable="false">
                <img class="logo img-fluid" :src="restaurant.logo" :alt="restaurant.name + ' image'" draggable="false">
            </div>           
        </div>
        <div class="row">
            <div class="heading-container col-12">
                <h1>{{ restaurant.name }}</h1><br>
                <span>{{ restaurant.type_list.join(', ') }}</span>

                <!-- Inserire restaurant.description ↓↓↓ -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur, reiciendis maiores odit vel facere, culpa ut architecto quidem nam rem ad quod nesciunt dicta dignissimos. Architecto magni dignissimos temporibus?</p>
            </div>
        </div>
        <div class="row"></div>
            <div class="popular-dishes col-12">
                <h2>Boo-tifully Popular and Delicious</h2>
                <div class="row">
                    <div class="card col-sm-12 col-md-6 col-lg-4">
                        <div class="row">
                            <div class="card__image col-12">
                                <img :src="restaurant.dish_list[1].photo" :alt="restaurant.dish_list[1].name + ' image'" draggable="false">
                            </div>
                            <div class="row">
                                <div class="card__info col-8">
                                    <div class="car__info--title">
                                        <h3>{{ restaurant.dish_list[1].name }}</h3>
                                        <p>{{ restaurant.dish_list[1].description }}</p>
                                        <span>{{ restaurant.dish_list[1].ingredient_list.join(', ') }}.</span>
                                    </div>
                                </div>
                                <div class="card__price col-4">
                                    <button>
                                        <img src="../assets/icons/cart.svg" alt="Cart SVG" draggable="false">
                                    </button>
                                    <p> {{ restaurant.dish_list[1].price + ' €' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    
    div.container {

        div.image-container {
            position: relative;

            img.image {
                width: 100%;
                height: 400px;
                object-fit: cover;
                object-position: top;
                border-radius: 30px;
                margin: 2rem 0;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                transition: all .3s ease;

                &:hover {
                    transform: scale(1.02);
                }
            }
            
            img.logo {
                width: 150px;
                aspect-ratio: 1;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                left: 3%;
                top: 75%;
                box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
            }
        }

        div.heading-container {
            padding: 4rem 0;

            h1 {
                font-size: 3.5rem;
                font-weight: bold;
                margin: 0;
            }

            span {
                font-size: 1.3rem;
                font-weight: 600;
                color: grey;
                display: block;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.5rem;
            }
        }

        div.popular-dishes {

            h2 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }

            .card {
                overflow: hidden;
                border-radius: 25px;
                margin: 10px;
                box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
                background-color: $secYellow;
                border: none;

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
                        transition: all .2s ease;
                        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                        outline: 10px solid white;

                        &:hover {
                            transform: rotate(5deg) translate(15px, 10px) scale(1.3);
                        }
                    }
                }

                .card__info {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    padding: 1rem;
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
                    padding: 1rem;
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
        }
    }
</style>