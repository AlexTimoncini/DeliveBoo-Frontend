<script>
export default {
    name: 'AdvanceSearch',
    data() {
        return {
            types: [
                {
                    name: "Fast Food",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "American",
                    logo: "https://cdn-icons-png.flaticon.com/256/2505/2505032.png"
                },
                {
                    name: "French",
                    logo: "https://cdn-icons-png.flaticon.com/512/3187/3187475.png"
                },
                {
                    name: "Italian",
                    logo: "https://cdn-icons-png.flaticon.com/512/4624/4624275.png"
                },
                {
                    name: "Turkish",
                    logo: "https://cdn-icons-png.flaticon.com/256/6978/6978155.png"
                },
                {
                    name: "Asian",
                    logo: "https://cdn-icons-png.flaticon.com/512/3183/3183463.png"
                },
                {
                    name: "Thai",
                    logo: "https://cdn-icons-png.flaticon.com/256/909/909119.png"
                },
                {
                    name: "Kebab",
                    logo: "https://cdn-icons-png.flaticon.com/256/7499/7499501.png"
                },
            ],
            categories: [
                {
                    name: "Burger",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Sides",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Drink",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Pizza",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Sushi",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Ramen",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Appetizer",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Burrito",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Kebab",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Fish",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
                {
                    name: "Pasta",
                    logo: "https://cdn-icons-png.flaticon.com/512/385/385102.png"
                },
            ],
        }
    },
}
</script>

<template>
    <div class="top-filters">
        <div class="select-type">
            <div class="container d-flex justify-content-center">
                <!-- <a href="#" v-for="type in types.slice(0, 8)" class="type-pill d-none d-lg-block"
                    @click="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'type', searchInput: '0' } })">
                    <div class="type_pill d-flex align-items-center">
                        <img class="type-icon" :src="type.logo" alt="">
                        <p class="m-0">{{ type.name }}</p>
                    </div>
                </a>
                <a href="#" v-for="type in types.slice(0, 5)" class="type-pill d-none d-md-block d-lg-none"
                    @click="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'type', searchInput: '0' } })">
                    <div class="type_pill d-flex align-items-center">
                        <img class="type-icon" :src="type.logo" alt="">
                        <p class="m-0">{{ type.name }}</p>
                    </div>
                </a>
                <a href="#" v-for="type in types.slice(0, 3)" class="type-pill d-md-none"
                    @click="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'type', searchInput: '0' } })">
                    <div class="type_pill d-flex align-items-center">
                        <img class="type-icon" :src="type.logo" alt="">
                        <p class="m-0">{{ type.name }}</p>
                    </div>
                </a> -->
            </div>
        </div>
        <div class="select-category">
            <div class="container d-flex justify-content-center">
                <a href="#" class="category-pills"
                    @click="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'category', searchInput: '0' } })">
                    <img class="category-icon" src="" alt="">
                    <p class="m-0">Nome Categoria</p>
                </a>
            </div>
        </div>
    </div>
    <div class=" container-fluid ">
        <div class=" row d-flex search-page-container">
            <div class="my_sidebar col-3 d-none d-md-block">
                <!-- <h1>Cerca il tuo ristorante</h1> -->
                <div class="search-bar"
                    @keyup.enter="this.$router.push({ name: 'AdvanceSearch', params: { searchType: 'restaurant', searchInput: this.search } })">
                    <label for="home-searchbar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search">
                            <path
                                d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z">
                            </path>
                        </svg>
                    </label>
                    <input type="text" id="home-searchbar" placeholder="Type your restaurant..." v-model="search">
                </div>

            </div>
            <div class="my_main col-9">
                ciao
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.top-filters {
    background-color: $priGreen;


    .select-type {
        background-color: #3ea27a;
        padding: 1rem 0;

        .type_pill {
            background-color: white;
            height: 60px;
            border-radius: 30px;
            padding: .5rem 1rem;
            margin: 0 .5rem;

            .type-icon {
                height: 100%;
                aspect-ratio: 1 / 1;
                margin: 0 .7rem 0 0;
            }

        }
    }

    .select-category {
        // height: 80px;
    }
}

div.search-page-container {
    width: 100vw;
    height: calc(100vh - 95px);

    .my_sidebar {
        padding: 1rem 3rem;
        height: 100%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        .search-bar {
            height: 35px;
            margin-top: 1rem;
            padding: 0 5rem;
            display: flex;

            input[type=text] {
                height: 100%;
                color: $priGreen;
                flex-grow: 1;
                padding-left: 0.5rem;
                border-radius: 10px;
                border: 1px solid #e8ebeb;
                box-shadow: inset 0 2px 4px rgba(0, 0, 0, .05), inset 0 0 0 100px #fff;
            }

            input[type=text]:focus {
                border: 1px solid $secYellow;
            }

            label {
                height: 100%;
                aspect-ratio: 1/1;
                cursor: pointer;
                margin-right: 0.5rem;

                svg {
                    height: 100%;
                    aspect-ratio: 1/1;
                }
            }
        }
    }

    .my_main {
        padding: 1rem 2rem;
    }

}
</style>
