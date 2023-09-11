<script>
export default{
    name: 'NavbarApp',
    data() {
        return {
            triggerMenu: false,
        }
    },
    mounted(){
        window.onresize = () => {
            if(window.innerWidth < 992){
                this.triggerMenu = false;
            };
        }
    }
}
</script>

<template>
    <nav>
        <div class="logo">
            <img src="../assets/logos/full_logo.svg" alt="Deliveboo full logo" draggable="false" class="d-none d-lg-block">
            <img src="../assets/logos/green_ghost.svg" alt="Deliveboo full logo" draggable="false" class="d-lg-none">
        </div>
        <div class="hamburger-menu d-lg-none" @click="triggerMenu = !triggerMenu" :class="triggerMenu ? 'active' : ''">
            <img src="../assets/icons/burger-menu.png" alt="burger icon">
        </div>
        <div class="navbar d-none d-lg-flex flex-lg-nowrap" :class="triggerMenu ? 'active' : ''">
            <ul class="nav-links d-flex flex-column flex-lg-row">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div class="login-btn">Are you a restaurant?</div>
            <div class="cart-btn">
                <img src="../assets/icons/cart.svg" alt="cart svg" draggable="false">
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../styles/variables/variables' as *;
@use '../styles/variables/mixins' as *;
    nav{
        @include flex(row, space-between, center, no-wrap);
        height: 95px;
        background-color: rgb(255, 255, 255);
        padding: 0.5rem 0.8rem;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        font-family: $primaryFont;
        position: fixed;
        z-index: 1;
        width: 100%;
        .logo{
            height: 100%;
            width: 300px;
            display: flex;
            padding: 0.5rem 0;
            img{
                display: block;
                margin: auto 0;
                height: 100%
            }
        }
        .navbar{
            height: 100%;

            .nav-links{
                column-gap: 1.5rem;
                margin-bottom: 0;
                
                li{
                    height: 100%;
                }
            }

            .login-btn{
                margin: 0 2rem;
                background-color: $secYellow;
                padding: 0.5rem 1.5rem;
                border-radius: 30px;
            }
            .cart-btn{
                width: 35px;
                aspect-ratio: 1/1;
                filter: invert(37%) sepia(95%) saturate(780%) hue-rotate(119deg) brightness(91%) contrast(99%);
                cursor: pointer;
            }
        }

        .navbar.active{
            display: flex!important;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            position: absolute;
            top: 100%;
            height: calc(100vh - 95px);
            width: 100vw;

            .nav-links{
                margin-bottom: 0;
                width: 100%;
                
                li{
                    width: 100%;
                    display: flex;
                    padding: 2rem 0;
                    a{
                        text-transform: uppercase;
                        font-size: 5rem;
                        color: $priGreen;
                        margin: auto;
                        transition: all 0.33s ease;
                    }

                    a:hover{
                        letter-spacing: 0.9rem;
                    }
                }
            }

            .login-btn{
                font-size: 3rem;
            }

            .cart-btn{
                margin-top: 3rem;
                width: 200px;
            }
        }

        .hamburger-menu{
            position: relative;
            width: 50px;
            aspect-ratio: 1/1;
            cursor: pointer;
            transition: all linear 0.33s;
            img{
                display: block;
                height: 100%;
            }
        }
        .hamburger-menu::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            background-color: transparent;
            top: 0;
            left: 0;
            transition: all linear 0.33s;
            border-radius: 5px;
        }
        .hamburger-menu::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            background-color: transparent;
            bottom: 0;
            left: 0;
            transition: all linear 0.33s;
            border-radius: 5px;
        }

        .hamburger-menu.active{
            img{
                display: none;
            }
        }

        .hamburger-menu.active::after{
            top: 50%;
            transform: rotate(45deg) translateY(-50%);
            background-color: $secYellow;
        }

        .hamburger-menu.active::before{
            bottom: 50%;
            transform: rotate(-45deg) translateY(50%);
            background-color: $secYellow;
        }
    }
</style>
