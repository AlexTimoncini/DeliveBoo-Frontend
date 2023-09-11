<script>
export default{
    name: 'FooterApp',
    data() {
        return {
            footer_link: [
                {
                    section_title: 'Discover DeliveBoo',
                    links: [
                        {
                            name: 'investors',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'about us',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'takeaway',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'more',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'newsroom',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'engineering blog',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'design blog',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'careeers',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'restaurant signup',
                            path: 'WorkInProgress'
                        },
                    ]
                },
                {
                    section_title: 'Legal',
                    links: [
                        {
                            name: 'term and conditions',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'privacy',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'Cookies',
                            path: 'WorkInProgress'
                        },
                    ]
                },
                {
                    section_title: 'Help',
                    links: [
                        {
                            name: 'contact',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'faqs',
                            path: 'WorkInProgress'
                        },
                        {
                            name: 'cuisines',
                            path: 'WorkInProgress'
                        },
                    ]
                }
            ]
        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row flex-column flex-md-row">
                <div v-for="section in footer_link" class="col-9 col-md-6 col-lg-3 footer-section">
                    <ul>
                        <li class="header-link">{{ section.section_title }}</li>
                        <li v-for="link in section.links" class="link"><router-link :to="{ name: link.path }">{{ link.name }}</router-link></li>
                    </ul>
                </div>
                <div class="col-9 col-md-6 col-lg-3 footer-section">
                    <ul>
                        <li class="header-link">Download the App</li>
                        <li class="link">
                            <a href="https://deliveroo.it/app/?platform=ios&home_page=true&home_page_variant=&mobile_banner=false">
                                <img src="../assets/icons/app-store.png" alt="app store logo" draggable="false">
                            </a>
                        </li>
                        <li class="link">
                            <a href="https://play.google.com/store/apps/details?id=com.deliveroo.orderapp&hl=it&gl=US">
                                <img src="../assets/icons/google-play.png" alt="app store logo" draggable="false">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="footer-social">
                    <div class="social">
                        <a href="https://www.facebook.com/deliveroo.uk">
                            <svg viewBox="0 0 24 24" class="facebook social-icon"><path d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9304 5.90625 14.2146 5.90625C15.3087 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.9499 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"></path></svg>
                        </a>
                        <a href="https://twitter.com/Deliveroo">
                            <svg viewBox="0 0 24 24" class="twitter social-icon"><path d="M23 5.89379C22.2644 6.21496 21.4731 6.43215 20.6431 6.52997C21.4906 6.02976 22.1413 5.23853 22.4475 4.29533C21.655 4.75801 20.7763 5.09394 19.8419 5.27545C19.0931 4.49037 18.0269 4 16.8469 4C14.5806 4 12.7437 5.80827 12.7437 8.03922C12.7437 8.35547 12.78 8.66372 12.85 8.95966C9.43938 8.79108 6.41625 7.18277 4.3925 4.73893C4.03937 5.33574 3.83687 6.02976 3.83687 6.76993C3.83687 8.17089 4.56125 9.40758 5.66187 10.1317C4.98937 10.1108 4.35688 9.92932 3.80375 9.62661C3.80313 9.64384 3.80312 9.66045 3.80312 9.67768C3.80312 11.6348 5.2175 13.2671 7.095 13.6381C6.75062 13.7304 6.38812 13.7797 6.01375 13.7797C5.74938 13.7797 5.4925 13.7544 5.24188 13.7077C5.76375 15.3123 7.27938 16.4801 9.075 16.5127C7.67062 17.5962 5.90125 18.2416 3.97875 18.2416C3.6475 18.2416 3.32125 18.2225 3 18.1856C4.81562 19.3312 6.9725 20 9.29 20C16.8375 20 20.9644 13.8449 20.9644 8.50744C20.9644 8.33209 20.9606 8.15797 20.9525 7.98446C21.7544 7.41534 22.45 6.7041 23 5.89379Z"></path></svg>
                        </a>
                        <a href="https://instagram.com/deliveroo">
                            <svg viewBox="0 0 24 24" class="instagram social-icon"><path d="M11.9969 2.00632C14.7118 2.00632 15.0523 2.01783 16.1185 2.06648C17.1826 2.11501 17.9093 2.28402 18.5452 2.53116C19.2025 2.78659 19.76 3.12842 20.3158 3.68417C20.8716 4.23997 21.2134 4.79747 21.4689 5.45485C21.716 6.09072 21.885 6.81743 21.9335 7.88148C21.9822 8.94775 21.9937 9.28818 21.9937 12.0032C21.9937 14.7181 21.9822 15.0586 21.9335 16.1248C21.885 17.1889 21.716 17.9156 21.4689 18.5515C21.2134 19.2089 20.8716 19.7664 20.3158 20.3222C19.76 20.8779 19.2025 21.2197 18.5452 21.4752C17.9093 21.7223 17.1826 21.8913 16.1185 21.9398C15.0523 21.9885 14.7118 22 11.9969 22C9.28187 22 8.94143 21.9885 7.87516 21.9398C6.81111 21.8913 6.0844 21.7223 5.44853 21.4752C4.79115 21.2197 4.23365 20.8779 3.67786 20.3222C3.1221 19.7664 2.78028 19.2089 2.52484 18.5515C2.2777 17.9156 2.10869 17.1889 2.06016 16.1248C2.01151 15.0586 2 14.7181 2 12.0032C2 9.28818 2.01151 8.94775 2.06016 7.88148C2.10869 6.81743 2.2777 6.09072 2.52484 5.45485C2.78028 4.79747 3.1221 4.23997 3.67786 3.68417C4.23365 3.12842 4.79115 2.78659 5.44853 2.53116C6.0844 2.28402 6.81111 2.11501 7.87516 2.06648C8.94143 2.01783 9.28187 2.00632 11.9969 2.00632ZM11.9969 3.80755C9.32758 3.80755 9.01139 3.81775 7.95726 3.86584C6.98258 3.91029 6.45325 4.07314 6.10099 4.21005C5.63437 4.3914 5.30135 4.60802 4.95155 4.95786C4.60171 5.30767 4.38508 5.64068 4.20373 6.10731C4.06683 6.45957 3.90397 6.9889 3.85952 7.96358C3.81143 9.01771 3.80123 9.3339 3.80123 12.0032C3.80123 14.6724 3.81143 14.9886 3.85952 16.0427C3.90397 17.0174 4.06683 17.5468 4.20373 17.899C4.38508 18.3656 4.60175 18.6987 4.95155 19.0485C5.30135 19.3983 5.63437 19.6149 6.10099 19.7963C6.45325 19.9332 6.98258 20.096 7.95726 20.1405C9.01127 20.1886 9.32738 20.1988 11.9969 20.1988C14.6663 20.1988 14.9825 20.1886 16.0364 20.1405C17.0111 20.096 17.5404 19.9332 17.8927 19.7963C18.3593 19.6149 18.6923 19.3983 19.0421 19.0485C19.392 18.6987 19.6086 18.3656 19.79 17.899C19.9269 17.5468 20.0897 17.0174 20.1342 16.0427C20.1823 14.9886 20.1925 14.6724 20.1925 12.0032C20.1925 9.3339 20.1823 9.01771 20.1342 7.96358C20.0897 6.9889 19.9269 6.45957 19.79 6.10731C19.6086 5.64068 19.392 5.30767 19.0421 4.95786C18.6923 4.60802 18.3593 4.3914 17.8927 4.21005C17.5404 4.07314 17.0111 3.91029 16.0364 3.86584C14.9823 3.81775 14.6661 3.80755 11.9969 3.80755ZM11.9969 15.3354C13.8372 15.3354 15.3291 13.8435 15.3291 12.0032C15.3291 10.1628 13.8372 8.67088 11.9969 8.67088C10.1565 8.67088 8.66456 10.1628 8.66456 12.0032C8.66456 13.8435 10.1565 15.3354 11.9969 15.3354ZM11.9969 6.86965C14.832 6.86965 17.1304 9.16798 17.1304 12.0032C17.1304 14.8383 14.832 17.1367 11.9969 17.1367C9.16167 17.1367 6.86333 14.8383 6.86333 12.0032C6.86333 9.16798 9.16167 6.86965 11.9969 6.86965ZM18.5328 6.66683C18.5328 7.32937 17.9957 7.86644 17.3332 7.86644C16.6707 7.86644 16.1336 7.32937 16.1336 6.66683C16.1336 6.00429 16.6707 5.46719 17.3332 5.46719C17.9957 5.46719 18.5328 6.00429 18.5328 6.66683Z"></path></svg>
                        </a>
                    </div>
                    <div class="copyright">
                        <p>
                            &#169; 2023 DeliveBoo
                        </p>
                        <router-link to="/">
                            <img src="../assets/logos/black_ghost.svg" alt="deliveboo green logo" draggable="false">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    footer{
        background-color: $detGrey;
        color: $fontWhite;
        padding: 1.5rem 0;
        .footer-section{
            background-color: rgba(255, 255, 255, 0.3);
            margin: 0 auto;
            border: 0.5rem solid $detGrey;
            flex-grow: 1;
            align-self: stretch;
            padding-top: 1rem;
            ul{
                padding: 0 1rem;

                .header-link{
                    font-weight: 700;
                    font-size: 1.1rem;
                    margin: 0 0 0.4rem;
                }

                .link{
                    margin: 0;
                    line-height: 1.9rem;
                    a{
                        color: $fontWhite;
                        text-transform: capitalize;
                        img{
                            display: block;
                            width: 135px;
                            height: 40px;
                            margin: 0.4rem 0;
                        }
                    }

                    a:hover{
                        color: $priGreen;
                    }
                }

            }
        }

        .footer-social{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 1rem;
            .social {
                display: flex;
                align-items: center;
                column-gap: 0.6rem;
                .social-icon{
                    fill: $fontWhite;
                    height: 24px;
                    aspect-ratio: 1/1;
                    transition: all 0.2s linear;
        
                }
                .facebook:hover{
                    fill: #1773ea;
                }
                .twitter:hover{
                    fill: #1DA1F2;
                }
                .instagram:hover{
                    fill: #C13584 ;
                }
            }
            .copyright{
                display: flex;
                align-items: center;
                p{
                    margin: 0;
                    opacity: 0.6;
                    flex-grow: 1;
                }
                img{
                    display: block;
                    width: 50px;
                    filter: invert(89%) sepia(4%) saturate(834%) hue-rotate(320deg) brightness(114%) contrast(96%);
                    opacity: 0.6;
                }
                img:hover{
                    filter: invert(36%) sepia(78%) saturate(3759%) hue-rotate(142deg) brightness(93%) contrast(99%);
                    opacity: 1;
                }
            }
        }
    }
</style>
