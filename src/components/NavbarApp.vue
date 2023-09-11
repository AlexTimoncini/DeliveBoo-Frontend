<script>
export default{
    name: 'NavbarApp'
}
</script>

<template>
    <nav>
        <div class="logo">
            <img src="../assets/logos/full_logo.svg" alt="Deliveboo full logo" draggable="false">
        </div>
        <div class="navbar">
            <ul class="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div class="login-btn">Are you a restourant?</div>
            <div class="cart-btn">
                <img src="../assets/icons/cart.svg" alt="cart svg">
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
        .logo{
            height: 100%;
            width: 300px;
            display: flex;
            img{
                display: block;
                margin: auto
            }
        }
        .navbar{
            @include flex(row, center, center, no-wrap);
            height: 100%;

            .nav-links{
                @include flex(row, center, center, no-wrap);
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
    }
</style>
