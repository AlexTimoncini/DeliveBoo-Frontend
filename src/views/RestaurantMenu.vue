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
                "logo": "/booldonalds.png",
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
            <div class="restaurant-image col-12">
                <img class="img-fluid" :src="restaurant.image" :alt="restaurant.name + ' image'">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    div.container {

        div.restaurant-image img {
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
    }
</style>