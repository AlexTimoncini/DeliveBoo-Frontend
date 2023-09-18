<script>
export default{
    name: 'OrderSuccess'
}
</script>

<template>
    <div class="container-fluid">
    <div class="wrapperAlert">
        <div class="contentAlert">
            <div class="topHalf">
                <h1>Congratulations! You’ve ordered a Boo-tiful meal!</h1>
                <p>
                    <svg viewBox="0 0 512 512" width="100" title="check-circle">
                        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                </p>
                <ul class="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="bottomHalf">
                <p>Your payment was successful. We’ll do our best to make sure you get your order as soon as possible.</p>
                <p>We’re glad you chose us and we hope you enjoy it!</p>
                <p>Your order ID is: <strong>#1</strong>. Here is a summary of your data:</p>
                <ul>
                    <div class="row mb-5">
                        <div class="col-6">
                            <li>First Name: <strong>Giovanni</strong></li>
                            <li>Last Name: <strong>Rana</strong></li>
                            <li>Phone: <strong>0000000000</strong></li>
                        </div>
                        <div class="col-6">
                            <li>Address: <strong>Via Roma, 12</strong></li>
                            <li>Interior: <strong>2</strong></li>
                            <li>Doorbell: <strong>3</strong></li>
                        </div>
                        <img class="d-none d-sm-block" src="../assets/mascotte/ghost_rider.png" alt="Boo Rider">
                    </div>
                </ul>
                <button>
                    <router-link :to="{ name: 'Homepage' }">
                            <span>Return to Home</span>
                        </router-link>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

div.container-fluid {
    display: flex;
	text-align: center;
	justify-content: center;
    align-items: center;
    height: calc(100vh - 95px);

    div.wrapperAlert {
        overflow: hidden;
        border-radius: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    div.contentAlert {
        div.topHalf {
            width: 100%;
            color: white;
            overflow: hidden;
            min-height: 250px;
            position: relative;
            padding: 40px 0;
            background: rgb(0, 0, 0);
            background: -webkit-linear-gradient(45deg, $priGreen, #a0ebcf);

            p {
                margin-bottom: 30px;
                
                svg {
                    fill: white;
                }
            }

            h1 {
                font-size: 2.25rem;
                display: block;
                font-weight: 500;
                letter-spacing: 0.15rem;
                text-shadow: 0 2px rgba(128, 128, 128, 0.6);
                padding: 1rem;
            }

            ul.bg-bubbles {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                li {
                    position: absolute;
                    list-style: none;
                    display: block;
                    width: 40px;
                    height: 40px;
                    bottom: -160px;
                    background-size: cover;
                    background-repeat: no-repeat;

                    -webkit-animation: square 20s infinite;
                    animation: square 20s infinite;

                    -webkit-transition-timing-function: linear;
                    transition-timing-function: linear;

                    &:nth-child(1) {
                        left: 10%;
                        background-image: url(../assets/logos/green_ghost.svg);
                    }

                    &:nth-child(2) {
                        left: 20%;
                        width: 80px;
                        height: 80px;
                        animation-delay: 2s;
                        animation-duration: 17s;
                        background-image: url(../assets/logos/yellow_ghost.svg);
                    }

                    &:nth-child(3) {
                        left: 25%;
                        animation-delay: 4s;
                        background-image: url(../assets/logos/white_ghost.svg);
                    }

                    &:nth-child(4) {
                        left: 40%;
                        width: 60px;
                        height: 60px;
                        animation-duration: 22s;
                        background-image: url(../assets/logos/green_ghost.svg);

                    }

                    &:nth-child(5) {
                        left: 70%;
                        background-image: url(../assets/logos/white_ghost.svg);
                    }

                    &:nth-child(6) {
                        left: 80%;
                        width: 120px;
                        height: 120px;
                        animation-delay: 3s;
                        background-image: url(../assets/logos/yellow_ghost.svg);
                    }

                    &:nth-child(7) {
                        left: 32%;
                        width: 160px;
                        height: 160px;
                        animation-delay: 7s;
                        background-image: url(../assets/logos/green_ghost.svg);
                    }

                    &:nth-child(8) {
                        left: 55%;
                        width: 20px;
                        height: 20px;
                        animation-delay: 15s;
                        animation-duration: 40s;
                        background-image: url(../assets/logos/yellow_ghost.svg);
                    }

                    &:nth-child(9) {
                        left: 25%;
                        width: 10px;
                        height: 10px;
                        animation-delay: 2s;
                        animation-duration: 40s;
                        background-image: url(../assets/logos/white_ghost.svg);
                    }

                    &:nth-child(10) {
                        left: 90%;
                        width: 160px;
                        height: 160px;
                        animation-delay: 11s;
                        background-image: url(../assets/logos/green_ghost.svg);
                    }
                }
            }
        }

        div.bottomHalf {
            align-items: center;
            padding: 35px;
            position: relative;

            img {
                position: absolute;
                width: 200px;
                bottom: 0;
                right: 0;
                transition: all .5s ease;

                &:hover {
                    transform: translateX(40px);
                }
            }

            p {
                font-weight: 500;
                font-size: 1.05rem;
                margin-bottom: 20px;
                text-align: start;
            }

            ul {
                text-align: start;
                
                strong {
                    font-weight: 600;
                }
            }

            button {
                border: none;
                color: white;
                cursor: pointer;
                border-radius: 12px;
                padding: 10px 18px;
                background-color: $priGreen;
                text-shadow: 0 1px rgba(128, 128, 128, 0.75);
                transition: all .3s ease;

                &:hover {
                    background-color: #00bb70;
                }

                a {
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }
        }
    }
}

@-webkit-keyframes square {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-500px) rotate(600deg);
	}
}

@keyframes square {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-500px) rotate(600deg);
	}
}

</style>
