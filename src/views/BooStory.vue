<template >
    <div class="position-relative m-0 p-0">
        <div class="slide-container m-0 p-0" @wheel="handleScrollBehaviour">
            <div class="slide first">
                <div class="photo">
                    <img class="" src="../assets/timeline/deliveboo_team.png" alt="">
                </div>

                <div class="slide-info">
                    <h1>This is where it all began</h1>
                    <h5 class="mb-3"><em>September 2023</em></h5>
                    <p>The beginning of a legend. The worst photo ever taken. We are proud of our journey. And our terrible
                        photography skills. 😂</p>
                </div>
            </div>
            <div class="slide second">
                <div class="photo">
                    <img class="" src="../assets/timeline/first.png" alt="">
                </div>

                <div class="slide-info">
                    <h1>How did we go from this to Boo?</h1>
                    <h5 class="mb-3"><em>September 2023</em></h5>
                    <p>DeooovoBoo: the first attempt to create a mascotte for our food delivery website. Too
                        bad the name is wrong and the logo is horrible. But don’t worry, Boo is
                        here to save the day… or ruin it even more.
                    </p>
                </div>
            </div>
            <div class="slide third">
                <div class="photo">
                    <img class="" src="../assets/timeline/second.png" alt="">
                </div>

                <div class="slide-info">
                    <h1>This is not even an attempt</h1>
                    <h5 class="mb-3"><em>Also September 2023</em></h5>
                    <p>This time, Boo is wearing a construction helmet and a safety vest, but he still looks like a sheet
                        with holes. This is not cute, this is terrifying. And what does it have to do with food delivery?
                        Nothing. Absolutely nothing.</p>
                </div>
            </div>
            <div class="slide fourth">
                <div class="photo">
                    <img class="" src="../assets/timeline/third.jpeg" alt="">
                </div>

                <div class="slide-info">
                    <h1>Getting close but still...Ugh</h1>
                    <h5 class="mb-3"><em>Again September 2023</em></h5>
                    <p>This time, Boo is holding a burger, but he still looks like a yellow blob with creepy hands. This is
                        not cute, this is disturbing. And what’s with the yellow color? It makes him look like he’s sick or
                        jaundiced. No one wants to order food from a chicken nugget.</p>
                </div>
            </div>
            <div class="slide fifth">
                <div class="photo">
                    <img class="" src="../assets/timeline/fifth.jpg" alt="">
                </div>

                <div class="slide-info">
                    <h1>Uhm...No!</h1>
                    <h5 class="mb-3"><em>Still September 2023</em></h5>
                    <p>This is not cute, this is terrifying. And what’s with the black hollow eyes and mouth? They make him
                        look like he has no soul or emotions. And yes, he does have six fingers on his left hand. That’s not
                        a cute detail, that’s a freaky mutation. No one wants to order food from a nightmare ghost..</p>
                </div>
            </div>
            <div class="slide sixth">
                <div class="photo">
                    <img class="" src="../assets/timeline/fourth.jpg" alt="">
                </div>

                <div class="slide-info">
                    <h1>This is (Almost) Him!</h1>
                    <p>Cute and adorable. He looks happy and hungry. He is the first true Boo, but something is still
                        missing. Maybe he needs a better background, or a different color, or a catchy slogan. But he is
                        almost there. He is almost perfect.
                    </p>
                </div>
            </div>
            <div class="slide seventh">
                <div class="photo">
                    <img class="" src="../assets/mascotte/ghost-jumbo-hd.png" alt="">
                </div>

                <div class="second_photo">
                    <img class="" src="../assets/mascotte/boo-detective-wink.png" alt="">
                </div>

                <img class="my_gif" src="../assets/mascotte/boo-love.gif" alt="">
            </div>
        </div>
        <div class="timeline">
            <svg id="Livello_3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 3878.44">
                <path
                    d="m453.26,3697.35c-35.65,0-70.68-8.96-103.12-26.57-30.69-16.66-57.61-40.33-80.01-70.36-23.58-31.61-41.43-69.39-53.05-112.31-12.41-45.84-17.55-97.12-15.28-152.41,2.45-59.51,13.52-123.92,32.92-191.46,20.68-72,63.46-122.14,130.77-153.29,58.6-27.11,129.95-37.36,198.96-47.26,61.33-8.8,124.74-17.91,179.41-38.69,60.82-23.12,102.43-57,130.94-106.62,35.39-61.6,39.59-115.3,12.49-159.6-35.31-57.71-115.63-89.58-176.78-106.15-72.49-19.64-161.59-29.13-238.33-25.37-56.32,2.75-118.22-15.92-174.32-52.59-56.94-37.21-103.15-90.15-130.12-149.06-26.02-56.83-33.87-118.68-22.67-178.86,12.75-68.56,49.28-134.91,108.57-197.18,59.73-62.74,127.97-102.27,208.63-120.87,69.92-16.12,140.27-14.38,202.34-12.84,63.01,1.56,122.54,3.03,170.04-14.19,51.11-18.53,84.96-57.88,106.51-123.83,14.92-45.63,21.07-85.88,18.29-119.62-2.51-30.47-12.46-56.5-29.56-77.38-77.22-94.24-294.69-80.39-451.54-61.78-39.47,4.68-78.19-.67-115.09-15.93-33.81-13.98-65.53-36-94.26-65.44-52.46-53.76-92.68-131.27-110.36-212.65-15.15-69.72-12.82-138.15,6.54-192.69,22.2-62.54,65.6-105.73,125.49-124.9,134.5-43.04,287.84-95.02,405.23-167.36,63.2-38.95,109.89-80.53,138.77-123.6,15.77-23.52,26.63-48.07,32.29-72.98,5.99-26.38,6.34-54.08,1.04-82.34-11.61-61.91-52.35-98.59-128.21-115.42-69.12-15.33-154.72-11.42-237.51-7.64-114.11,5.22-212.66,9.72-254.12-36.34-41.79-46.43-51.31-108.67-27.54-179.97,17.41-52.23,46.34-90.71,47.57-92.32,4.67-6.16,13.46-7.36,19.62-2.69,6.16,4.67,7.36,13.45,2.7,19.61h0c-.27.36-27.68,36.92-43.54,84.92-20.41,61.77-13.01,112.82,22.01,151.73,32.59,36.22,129.47,31.79,232.02,27.1,84.61-3.87,172.11-7.87,244.85,8.27,40.71,9.03,72.36,23.38,96.75,43.88,27.84,23.39,45.64,54.92,52.91,93.72,11.67,62.23-.98,121.47-37.59,176.07-31.13,46.42-80.7,90.78-147.34,131.84-120.08,73.99-275.31,126.65-411.39,170.19-26.5,8.48-49.25,22.38-67.6,41.31-17.27,17.81-30.74,40.12-40.03,66.28-17.64,49.69-19.62,112.68-5.56,177.37,16.59,76.39,54.15,148.94,103.04,199.04,37.97,38.92,101.07,83.2,186.01,73.12,117.17-13.9,205.73-17.1,278.7-10.08,44.48,4.28,83,12.64,114.48,24.85,35.55,13.78,63.58,32.98,83.32,57.07,20.78,25.35,32.82,56.58,35.81,92.82,3.09,37.48-3.5,81.42-19.58,130.62-12.76,39.05-29.49,69.6-51.15,93.4-19.91,21.89-43.61,37.6-72.44,48.06-52.46,19.02-114.55,17.48-180.28,15.86-124.09-3.07-264.73-6.55-390,125.02-103.95,109.19-132.62,231.74-80.72,345.08,24.8,54.17,67.42,102.92,119.99,137.28,51.2,33.46,107.17,50.53,157.63,48.07,80.7-3.95,170.74,5.64,247.02,26.31,66.06,17.9,153.22,52.99,193.34,118.56,15.81,25.84,23.09,54.41,21.64,84.93-1.53,32.19-12.88,66.93-33.73,103.23-31.47,54.78-78.99,93.66-145.27,118.85-57.57,21.88-122.55,31.21-185.38,40.23-70.1,10.06-136.3,19.57-191.18,44.96-60.32,27.91-97.06,71-115.62,135.61-18.78,65.4-29.5,127.6-31.86,184.88-2.16,52.43,2.67,100.86,14.33,143.94,10.69,39.5,27,74.11,48.47,102.88,19.96,26.75,43.82,47.78,70.93,62.49,39.63,21.52,83.68,28.22,127.38,19.37,45.22-9.16,86.94-34.51,120.63-73.31,5.07-5.84,13.91-6.46,19.75-1.39,5.84,5.07,6.46,13.91,1.39,19.75-37.79,43.51-84.89,72-136.22,82.4-14.4,2.92-28.84,4.36-43.17,4.36Z" />
            </svg>
        </div>
        <ul class="bg-bubbles m-0 p-0">
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
</template>

<script>
export default {
    name: 'BooStory',
    methods: {
        handleScrollBehaviour(event) {
            const direction = event.deltaY > 0 ? 1 : -1;
            const slideHeight = window.innerHeight - 95;
            const currentSlideIndex = Math.round(window.scrollY / slideHeight);
            const nextSlideIndex = currentSlideIndex + direction;
            const nextSlidePosition = nextSlideIndex * slideHeight;
            console.log(nextSlideIndex);
            if (nextSlideIndex < 7) {
                window.scrollTo({
                    top: nextSlidePosition,
                    behavior: 'smooth',
                });
                event.preventDefault();
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.slide {
    height: calc(100vh - 95px);
    position: relative;

    .photo {
        position: absolute;
        width: 600px;
        height: 400px;
        background-color: red;
        border-radius: 5px;
        border: 15px solid white;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        background-color: rgba(244, 185, 9, 0.617);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .slide-info {
        width: 30%;
        position: absolute;

        h1 {
            color: $priGreen;
            font-weight: 700;
        }

        h5 {
            color: grey;
            font-weight: 400;
        }
    }
}

.slide.first {
    .photo {
        right: 200px;
        top: 200px;
        transform: rotate(-15deg);
    }

    .slide-info {
        bottom: 200px;
        left: 200px;
    }
}

.slide.second {
    .photo {
        left: 200px;
        top: 200px;
        transform: rotate(-5deg);
        border: 15px solid rgba(244, 185, 9, 0.617);
    }

    .slide-info {
        bottom: 300px;
        right: 200px;
    }

}

.slide.third {
    .photo {
        height: 600px;
        width: 400px;
        right: 300px;
        top: 100px;
        transform: rotate(10deg);
        // border: 15px solid rgba(244, 185, 9, 0.617);
    }

    .slide-info {
        bottom: 100px;
        left: 200px;
    }

}

.slide.fourth {
    .photo {
        left: 200px;
        top: 200px;
        transform: rotate(-5deg);
        border: 15px solid rgba(244, 185, 9, 0.617);
        background-color: white;

        img {
            object-fit: contain;

        }
    }

    .slide-info {
        bottom: 300px;
        right: 200px;
    }

}

.slide.fifth {
    .photo {
        right: 200px;
        top: 200px;
        transform: rotate(-5deg);
        // border: 15px solid rgba(244, 185, 9, 0.617);
        background-color: white;
    }

    .slide-info {
        bottom: 200px;
        left: 200px;
    }

}


.slide.sixth {
    .photo {
        left: 200px;
        top: 300px;
        transform: rotate(5deg);
        border: 15px solid rgba(244, 185, 9, 0.617);
        background-color: white;

        img {
            object-fit: contain;

        }
    }

    .slide-info {
        bottom: 200px;
        right: 200px;
    }

}

.slide.seventh {
    img.my_gif {
        width: 450px;
        height: 450px;
        position: absolute;
        top: 300px;
        right: 500px;

    }

    .second_photo {
        width: 200px;
        height: 200px;
        top: 100;
        right: 500px;
        position: absolute;

        img {
            object-fit: cover;
            width: 200px;
            height: 200px;
        }
    }

    .photo {
        width: 300px;
        height: 300px;
        right: 200px;
        top: 100px;
        transform: rotate(5deg);
        border: none;
        background-color: transparent;
        box-shadow: none;
        // background-color: white;

        img {
            object-fit: contain;

        }
    }
}

.timeline {
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    svg {
        fill: $priGreen;
    }
}

.red {
    background-color: red;
}

.blue {
    background-color: blue;

}

ul.bg-bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc((100vh - 95px) * 7);
    // background-color: red;
    z-index: -1;
    overflow: hidden;


    li {
        position: absolute;
        list-style: none;
        display: block;
        width: 100%;
        height: 100%;
        // top: 160px;
        bottom: -160px;
        background-size: cover;
        background-repeat: no-repeat;

        -webkit-animation: square 30s infinite;
        animation: square 30s infinite;

        -webkit-transition-timing-function: ease;
        transition-timing-function: ease;

        &:nth-child(1) {
            left: 10%;
            width: 50px;
            height: 50px;
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
            width: 40px;
            height: 40px;
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
            width: 80px;
            height: 80px;
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

@-webkit-keyframes square {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-6100px) rotate(900deg);
    }
}

@keyframes square {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-6100px) rotate(900deg);
    }
}

@media (max-width: 1400px) {}
</style>