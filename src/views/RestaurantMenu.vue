<script>
import Card from '../components/Card.vue';

export default{
    name: 'RestaurantMenu',

    components: {
        Card
    },

    data() {
        return {
            restaurants: [
                {
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
                },
                {
                    "name": "Pizzeria da 'Gino",
                    "password": "GinoVaInCampagna00",
                    "email": "PizzeriaDaGino@gmail.com",
                    "vat_number": "LU23456789",
                    "address": "12 Rue Jean Engling, L-1466",
                    "type_list": ["Pizzeria", "Italian"],
                    "logo": "/pizzeria_da_gino.png",
                    "image": "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "dish_list": [
                        {
                            "name": "Pizza Margherita",
                            "description": "A classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
                            "price": 8.99,
                            "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
                            "availability": true,
                            "ingredient_list": ["Tomato", "Cheese", "Basil"],
                            "category": "Pizza"
                        },
                        {
                            "name": "Pizza Diavola",
                            "description": "A spicy pizza with tomato sauce, mozzarella cheese, spicy salami, and chili peppers.",
                            "price": 9.99,
                            "photo": "https://s3.eu-central-1.amazonaws.com/quomi/media/133057/conversions/Pizza-Diavola-thumb-big.jpg",
                            "availability": true,
                            "ingredient_list": ["Tomato", "Cheese", "Spicy salami", "Chili pepper"],
                            "category": "Pizza"
                        },
                        {
                            "name": "Pizza Capricciosa",
                            "description": "A pizza with tomato sauce, mozzarella cheese, ham, mushrooms, artichokes, and black olives.",
                            "price": 10.99,
                            "photo": "https://i0.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/12/3240_Pizza.jpg?resize=895%2C616&ssl=1",
                            "availability": true,
                            "ingredient_list": ["Tomato", "Cheese", "Ham", "Mushroom", "Artichoke", "Olive"],
                            "category": "Pizza"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Pizza Margherita", "Pizza Capricciosa"],
                            "customer_address":"9 Rue Cavour, L-4050"
                        },
                        {
                            "dish_list": ["Pizza Diavola", "Pizza Diavola", "Pizza Diavola"],
                            "customer_address":"16 Rue Paris, L-3666"
                        },
                        {
                            "dish_list": ["Pizza Capricciosa", "Pizza Capricciosa", "Pizza Margherita"],
                            "customer_address":"15 Rue Automne, L-9898"
                        }
                    ]
                },
                {
                    "name": "Fusion Baguette",
                    "password": "EscargeoutBestSushi19",
                    "email": "FusionBaguette@luxenbourg.fr",
                    "vat_number": "LU34567890",
                    "address": "121 Av. De La Faiencerie, L-1511",
                    "type_list": ["Chinese", "Asian", "Japanese", "Sushi", "French"],
                    "logo": "/fusion_baguette.png",
                    "image": "https://images.pexels.com/photos/8951558/pexels-photo-8951558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ì",
                    "dish_list": [
                        {
                            "name": "Nigiri Salmon Sushi",
                            "description": "A type of sushi consisting of a slice of raw salmon placed over pressed vinegared rice.",
                            "price": 14.99,
                            "photo": "https://cdn.cook.stbm.it/thumbnails/ricette/144/144483/hd750x421.jpg",
                            "availability": true,
                            "ingredient_list": ["Salmon", "Rice", "Vinegar"],
                            "category": "Sushi"
                        },
                        {
                            "name": "Tonkotsu Ramen",
                            "description": "A type of ramen made with a base of pork bone broth, served with wheat noodles, slices of pork belly, green onions, and often a soft boiled egg.",
                            "price": 12.99,
                            "photo": "https://www.foodandwine.com/thmb/0AXGLeY6dYnY8sEXFqxBa8opDrs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tonkotsu-Ramen-FT-BLOG1122-8fe6c12d609a4fd4ab246bea3aae140e.jpg",
                            "availability": true,
                            "ingredient_list": ["Pork", "Pasta", "Onion", "Egg"],
                            "category": "Ramen"
                        },
                        {
                            "name": "Shrimp Tempura",
                            "description": "A Japanese dish where shrimp are coated in batter and deep fried until crispy.",
                            "price": 13.99,
                            "photo": "https://www.sidechef.com/recipe/b9707c31-d58d-4f69-a76d-9d029c6ee8a7.jpg?d=1408x1120",
                            "availability": true,
                            "ingredient_list": ["Shrimp", "Batter"],
                            "category": "Sides"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Nigiri Salmon Sushi", "Tonkotsu Ramen"],
                            "customer_address":"9 Rue Cavour, L-4050"
                        },
                        {
                            "dish_list": ["Shrimp Tempura", "Shrimp Tempura", "Shrimp Tempura", "Shrimp Tempura"],
                            "customer_address":"16 Rue Paris, L-3666"
                        },
                        {
                            "dish_list": ["Tonkotsu Ramen", "Tonkotsu Ramen"],
                            "customer_address":"15 Rue Automne, L-9898"
                        }

                    ]
                },
                {
                    "name": "Me Prendí Fuego",
                    "password": "OnFireFRFRFR909",
                    "email": "FuegoMexican@libero.fr",
                    "vat_number": "LU45678901",
                    "address": "53a Cote D'eich, L-1450",
                    "type_list": ["Mexican"],
                    "logo": "/me_prendi_fuego.png",
                    "image": "https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "dish_list": [
                        {
                            "name": "Chilaquiles",
                            "description": "Chilaquiles are a traditional Mexican dish using baked or fried tortillas as the base - great for a casual gathering.",
                            "price": 5.99,
                            "photo": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-424772_11-65058a6.jpg?quality=90&webp=true&resize=300,272",
                            "availability": true,
                            "ingredient_list": ["Bread", "Cheese", "Onion", "Garlic", "Mais"],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Tacos al pastor",
                            "description": "This historic dish is one of our most popular varieties of tacos, with origins dating back to the 1920s and 30s and the arrival of Lebanese and Syrian immigrants to Mexico.",
                            "price": 8.99,
                            "photo": "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/GettyImages-1410200729-0a2afd0.jpg?quality=90&webp=true&fit=975,649",
                            "availability": true,
                            "ingredient_list": ["Mais", "Pork", "Onion", "Pineapple" ],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Elote",
                            "description": "The best corn on the cob you will ever have!",
                            "price": 2.99,
                            "photo": "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/GettyImages-507452097-6-d0fddb1.jpg?quality=90&webp=true&crop=11px,1521px,3153px,2100px&fit=975,649",
                            "availability": true,
                            "ingredient_list": ["Mais", "Lime", "Cheese"],
                            "category": "sides"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Chilaquiles", "Chilaquiles"],
                            "customer_address":"13 Rue Tavour, L-7050"
                        },
                        {
                            "dish_list": ["Tacos al pastor", "Chilaquiles", "Elote", "Elote"],
                            "customer_address":"16 Rue Daris, L-3654"
                        },
                        {
                            "dish_list": ["Elote", "Tacos al pastor"],
                            "customer_address":"15 Rue Summer, L-0995"
                        }

                    ]
                },
                {
                    "name": "Los Pollos Hermanos",
                    "password": "BreakingBadBR",
                    "email": "GusGus@metanfetamina.fr",
                    "vat_number": "LU56789012",
                    "address": "464 Route De Longwy, L-4832",
                    "type_list": ["Fast Food", "Mexican", "American"],
                    "logo": "/los_pollos_hermanos.png",
                    "image": "https://media.timeout.com/images/105541804/image.jpg",
                    "dish_list": [
                        {
                            "name": "Chicken Wings",
                            "description": "definitely better than KFC",
                            "price": 5.99,
                            "photo": "https://www.lifesambrosia.com/wp-content/uploads/Deep-Fried-Chicken-Wings-Recipe-Photo-11-scaled.jpg",
                            "availability": true,
                            "ingredient_list": ["Chicken", "Bread", "Onion", "Paprika"],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Gus' Choice",
                            "description": "You don't need any description, this is Gus' Choice.",
                            "price": 4.59,
                            "photo": "https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg",
                            "availability": true,
                            "ingredient_list": ["Mais", "Chicken", "Rice", "Onion", "Chili peppers" ],
                            "category": "Burrito"
                        },
                        {
                            "name": "Gus Mashed Potato Bowl",
                            "description": "You better try this (This is not an advice).",
                            "price": 5.50,
                            "photo": "https://kitchendivas.com/wp-content/uploads/2021/02/KFC-Famous-Bowl20.jpg",
                            "availability": true,
                            "ingredient_list": ["Potato", "Chicken", "Cheese", "Mais", "Garlic"],
                            "category": "Sides"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Chicken Wings", "Gus' Choice"],
                            "customer_address":"23 Rue Napoleaon, L-1250"
                        },
                        {
                            "dish_list": ["Gus Mashed Potato Bowl", "Gus' Choice", "Chicken Wings", "Chicken Wings"],
                            "customer_address":"16 Rue Koala, L-1254"
                        },
                        {
                            "dish_list": ["Gus' Choice", "Chicken Wings"],
                            "customer_address":"15 Rue Winter, L-1995"
                        }

                    ]
                },
                {
                    "name": "Turkish Kebab",
                    "password": "LflBestRegionKBB",
                    "email": "TurkishKebab@luxenbourg.fr",
                    "vat_number": "LU67890123",
                    "address": "53a Cote D'eich, L-3254",
                    "type_list": ["Kebab", "Turkish", "Arabic"],
                    "logo": "/turkish_kebab.png",
                    "image": "https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "dish_list": [
                        {
                            "name": "Wrap Kebab",
                            "description": "Our wrap is DA BEST in DA WEST!",
                            "price": 5.00,
                            "photo": "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/chicken_kebab_wrap_35076_16x9.jpg",
                            "availability": true,
                            "ingredient_list": ["Chicken", "Tomato", "Ketchup", "Carrot", "Garlic"],
                            "category": "Kebab"
                        },
                        {
                            "name": "Doner Kebab",
                            "description": "KEBAB, KEBAB, KEBAB!",
                            "price": 4.00,
                            "photo": "https://www.thespruceeats.com/thmb/o7Szsda7azjqS_7Ak-nMr_1OiI0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/doner-kebab-recipe-4171703-hero-01-c14d8b7189df4685a50bae311317f831.jpg",
                            "availability": true,
                            "ingredient_list": ["Steak", "Egg", "Bread", "Garlic", "Tomato", "Carrot", "Onion", "Paprika"],
                            "category": "Kebab"
                        },
                        {
                            "name": "Chicken Shawarma",
                            "description": "Our signature recipe, you must try this!",
                            "price": 8.00,
                            "photo": "https://www.recipetineats.com/wp-content/uploads/2017/01/Chicken-Shawarma-Wrap_3.jpg?resize=650,813",
                            "availability": true,
                            "ingredient_list": ["Chicken", "Lemon", "Paprika", "Garlic", "Bread", "Rice"],
                            "category": "Kebab"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Wrap Kebab", "Doner Kebab"],
                            "customer_address":"23 Rue Attila, L-3223"
                        },
                        {
                            "dish_list": ["Chicken Shawarma", "Doner Kebab", "Wrap Kebab", "Wrap Kebab"],
                            "customer_address":"16 Rue Flower, L-6767"
                        },
                        {
                            "dish_list": ["Doner Kebab", "Wrap Kebab"],
                            "customer_address":"15 Rue Mario, L-0000"
                        }

                    ]
                },
                {
                    "name": "Bistrot chez Chloe",
                    "password": "SpenderaiUnSaccoFRFR",
                    "email": "ChezChloe@napoli.fr",
                    "vat_number": "LU78901234",
                    "address": "95 Rue De Strasbourg, L-2561",
                    "type_list": ["Bistrot", "French"],
                    "logo": "/bistrot_chez_chloe.png",
                    "image": "https://images.pexels.com/photos/5605617/pexels-photo-5605617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "dish_list": [
                        {
                            "name": "Escargots",
                            "description": "Would you believe me if I told you that the whole process takes 3 full days?! That explains the price tag, right? ",
                            "price": 15.99,
                            "photo": "https://dreamsinparis.com/wp-content/uploads/2022/01/Escargots-1024x768.jpg",
                            "availability": true,
                            "ingredient_list": ["Butter", "Snail", "Garlic", "Parsley"],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Les Cuisses De Grenouille",
                            "description": "Don't be shy, these are the best frogs you will ever try!",
                            "price": 12.99,
                            "photo": "https://dreamsinparis.com/wp-content/uploads/2022/01/Les-cuisses-de-Grenouille-Frog-legs-1024x768.jpg",
                            "availability": true,
                            "ingredient_list": ["Frog", "Butter", "Garlic", "Parsley"],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Roquefort",
                            "description": "Wait, is this blue?",
                            "price": 3.99,
                            "photo": "https://dreamsinparis.com/wp-content/uploads/2022/01/Roquefort-blue-cheese-1024x768.jpg",
                            "availability": true,
                            "ingredient_list": ["Cheese"],
                            "category": "Appetizer"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Escargots", "Les Cuisses De Grenouille"],
                            "customer_address":"23 Rue Joele, L-2121"
                        },
                        {
                            "dish_list": ["Roquefort", "Escargots", "Roquefort", "Roquefort"],
                            "customer_address":"16 Rue EmaPau, L-9999"
                        },
                        {
                            "dish_list": ["Escargots", "Roquefort"],
                            "customer_address":"15 Rue Vito, L-1112"
                        }

                    ]
                },
                {
                    "name": "Thai-Food",
                    "password": "StomachOnFire99",
                    "email": "Thai-Food@luxenbourg.fr",
                    "vat_number": "LU89012345",
                    "address": "67 Avenue De La Gare, L-4130",
                    "type_list": ["Thai", "Asian"],
                    "logo": "/thai-food.jpg",
                    "image": "https://images.pexels.com/photos/6454806/pexels-photo-6454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    "dish_list": [
                        {
                            "name": "Chicken Satay",
                            "description": "If you've never had the real stuff, then you'll fall in love with this special Thai chicken satay recipe.",
                            "price": 8.59,
                            "photo": "https://www.thespruceeats.com/thmb/FnXzJ8TJot1llYPINZ7F1BL3eqs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-satay-recipe-3217478-herp-01-e78b544a0775490ea78b856f83a949bd.jpg",
                            "availability": true,
                            "ingredient_list": ["Chicken", "Lemon", "Garlic"],
                            "category": "Appetizer"
                        },
                        {
                            "name": "Fillet of Fished in Banana Leaf",
                            "description": "Hey, If you don't like this, you're wrong.",
                            "price": 9.99,
                            "photo": "https://www.thespruceeats.com/thmb/ykVcLHhMAhXWnbCYW3VZWQ9KSaE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thai-fish-fillet-baked-in-banana-leaf-3217405-hero-01-8cb30145c76f478ca7049c2ad1dee82e.jpg",
                            "availability": true,
                            "ingredient_list": ["Cod", "Coconut", "Rice", "Potato"],
                            "category": "Fish"
                        },
                        {
                            "name": "Mini Shrimp Lettuce Wraps",
                            "description": "They are small, but they got a big heart!",
                            "price": 3.99,
                            "photo": "https://www.thespruceeats.com/thmb/GPecU3V__toiFIJgZdRhD1xnNU0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mini-shrimp-lettuce-wraps-3217683-hero-01-593a2d390eb84b87b8b1904ce4f86e4c.jpg",
                            "availability": true,
                            "ingredient_list": ["Shrimp", "Lettuce", "Lime"],
                            "category": "Appetizer"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Chicken Satay", "Fillet of Fished in Banana Leaf"],
                            "customer_address":"23 Rue Joele, L-2121"
                        },
                        {
                            "dish_list": ["Mini Shrimp Lettuce Wraps", "Chicken Satay", "Fillet of Fished in Banana Leaf", "Fillet of Fished in Banana Leaf"],
                            "customer_address":"16 Rue EmaPau, L-9999"
                        },
                        {
                            "dish_list": ["Chicken Satay", "Fillet of Fished in Banana Leaf"],
                            "customer_address":"15 Rue Vito, L-1112"
                        }

                    ]
                },
                {
                    "name": "Osteria Cacina",
                    "password": "Grosso2006frfr",
                    "email": "CustomerService@Cacina.fr",
                    "vat_number": "LU87654321",
                    "address": "23 Rue De Napoleon, L-1261",
                    "type_list": ["Italian"],
                    "logo": "/osteria_cacina.png",
                    "image": "https://media-cdn.tripadvisor.com/media/photo-s/1e/26/b2/0c/the-best-italian-restaurant.jpg",
                    "dish_list": [
                        {
                            "name": "Carbonara",
                            "description": "Italy has the best food no cap!",
                            "price": 6.99,
                            "photo": "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg",
                            "availability": true,
                            "ingredient_list": ["Pasta", "Egg", "Pork", "Cheese"],
                            "category": "Pasta"
                        },
                        {
                            "name": "Amatriciana",
                            "description": "The colosseum straight to your table",
                            "price": 6.99,
                            "photo": "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/10/Bucatini-all-amatriciana-4802.jpg",
                            "availability": true,
                            "ingredient_list": ["Pasta", "Tomato", "Pork", "Onion"],
                            "category": "Pasta"
                        },
                        {
                            "name": "Cacio e Pepe",
                            "description": "This is not a dream!",
                            "price": 6.99,
                            "photo": "https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/01/Pasta-cacio-e-pepe-2634.jpg",
                            "availability": true,
                            "ingredient_list": ["Pasta", "Cheese"],                    
                            "category": "Pasta"
                        }
                    ],
                    "order_list": [
                        {
                            "dish_list": ["Amatriciana", "Cacio e Pepe"],
                            "customer_address":"23 Rue Joele, L-2121"
                        },
                        {
                            "dish_list": ["Carbonara", "Cacio e Pepe", "Amatriciana", "Amatriciana"],
                            "customer_address":"16 Rue EmaPau, L-9999"
                        },
                        {
                            "dish_list": ["Cacio e Pepe", "Amatriciana"],
                            "customer_address":"15 Rue Vito, L-1112"
                        }
                    ]
                    
                }
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">

            <!-- Restaurant Photo & Logo -->
            <div class="image-container col-12">
                <img class="image img-fluid" :src="restaurants[0].image" :alt="restaurants[0].name + ' image'" draggable="false">
                <img class="logo img-fluid" :src="restaurants[0].logo" :alt="restaurants[0].name + ' image'" draggable="false">
            </div>           
        </div>
        <div class="row">
            
        <!-- Restaurant Header (Title, Types & Description) -->
            <div class="header col-8 mb-5">
                <h1>{{ restaurants[0].name }}</h1>
                <span>{{ restaurants[0].type_list.join(', ') }}</span>

                <!-- Insert restaurant.description ↓↓↓ -->
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur, reiciendis maiores odit vel facere, culpa ut architecto quidem nam rem ad quod nesciunt dicta dignissimos. Architecto magni dignissimos temporibus?</p>
            </div>

            <!-- Restaurant Info-Card (Address, Telephone, Mail & VAT Number) -->
            <div class="info-card card col-4 mb-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><img src="../assets/icons/gps.svg" alt="GPS Icon"><span>{{ restaurants[0].address }}</span></li>
                    
                    <!-- Insert restaurant.phone ↓↓↓ -->
                    <li class="list-group-item"><img src="../assets/icons/telephone.svg" alt="E-mail Icon"><span>000 000 0000</span></li>

                    <li class="list-group-item"><img src="../assets/icons/mail.svg" alt="Mail Icon"><span>{{ restaurants[0].email }}</span></li>
                    <li class="list-group-item"><img src="../assets/icons/paper.svg" alt="VAT Icon"><span>{{ restaurants[0].vat_number }}</span></li>
                </ul>
            </div>
        </div>
        <div class="row"></div>

            <!-- Restaurant Popular Dishes List -->
            <div class="popular-dishes col-12">
                <h2>Boo-tifully Popular and Delicious</h2>
                <div class="row">
                    <Card />
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

        div.header {
            padding: 4rem 0 0;

            h1 {
                font-size: 3.5rem;
                font-weight: bold;
                margin: 0;
            }

            span {
                font-size: 1.3rem;
                font-weight: 600;
                color: grey;
                display: inline-block;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1.5rem;
                padding: 0.5rem 2rem 0.5rem 0.5rem;
            }
        }

        div.info-card {
            border: 1px solid lightgrey;
            align-self: center;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;

            img {
                width: 25px;
                aspect-ratio: 1;
                margin-right: .5rem;
                filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
            }

            span {
                line-height: 25px;
                vertical-align: middle;
            }

            ul li {
                transition: all .3s ease;

                &:hover {
                    color: $priGreen;
                }
            }
        }

        div.popular-dishes {

            h2 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
        }
    }
</style>