<template>
    <section>
        <div class="container" id="home-section-container">
            <div class="home-pic">
                <img src="../assets/images/main-globe.png" />
            </div>
            <div class="home-section-headers">
                <div class="primary">
                	<h2 id="minimize-text">Pictures are worth 1,000 words -</h2>
                    <h2 id="highlight-text"><span id="degree">360&deg</span> Virtual Tours: <span id="millions">Millions</span></h2>
                    <div class="home-section-buttons">
                        <a class="button primary-button" target="_blank" href="https://www.youtube.com/watch?v=s4EEhXH_pz0">Watch a video</a>
                        <a class="button secondary-button" target="_blank" href="https://www.peekpeek.com/industries">Take a peek</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class HomeSection extends Vue {
        mounted() {
            document.onreadystatechange = () => {
                if (document.readyState == 'complete') {
                    this.runSplashTransition();
                }
            };
        }
        runSplashTransition() {
            // document.getElementById('minimize-text')!.classList.add('minimize');
            // document.getElementsByClassName('secondary')[0].classList.remove('hidden');
        }
    }
</script>

<style lang="scss" scoped>
    #home-section-container {
        display: flex;
        justify-content: center;
        flex-direction: column;

        @include medium-screen-landscape {
            justify-content: center;
            flex-direction: row;
            align-items: center;
        }

        .home-pic {
            position: relative;
            text-align: center;

            @include medium-screen-landscape {
                // flex-basis: 80%;
            }

            img {
                width: 50%;
                max-width: 700px;

                @include medium-screen-landscape {
                    width: 80%;
                }
            }
        }

        .home-section-headers {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            margin-left: 0px;

            @include medium-screen-landscape {
                white-space: normal;
                text-align: left;
                flex-basis: 80%;
            }

            @include large-screen-landscape {
                flex-basis: 60%;
            }

            @include extra-large-screen-landscape {
                flex-basis: 50%;
            }

            .primary {
                font-weight: 700;
                color: $alt-heading-color;

                #minimize-text {
                    color: $heading-color;
                    font-size: 1em;
                    margin: 20px 0 10px;

                    @include medium-screen-landscape {
                        margin: 0;
                    }
                }

                #highlight-text {
                    font-size: 3em;
                    line-height: 1.1em;

                    @include medium-screen-landscape {
                        font-size: 2em;
                    }

                    #degree {
                        @include medium-screen-landscape {
                            display: block;
                            font-size: 3em;
                            line-height: 1.1em;
                        }
                    }

                    #millions {
                        color: $heading-color;
                    }
                }
            }
        }

        .home-section-buttons {
            text-align: center;
            margin-top: 10px;

            @include medium-screen-landscape {
                text-align: left;
                margin-top: 25px;
            }

            .button {
                @include medium-screen-landscape {
                    width: 160px;
                }

                @include large-screen-landscape {
                    width: 170px;
                }
            }
        }
    }




</style>
