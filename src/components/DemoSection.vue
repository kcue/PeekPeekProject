<template>
    <section class="peek-section" id="demo-section">
        <div class="demo-section-frames">
            <div class="demo-section-frame flippety bottom" id="demo-frame-one">
                <h6>University of California, Irvine</h6>
                <p>Anteater Recreational Center tour</p>
                <img src="../assets/images/uci-arc.png"/>
            </div>
            <div class="demo-section-frame flippety top" id="demo-frame-two">
                <h6>Cal State Long Beach</h6>
                <p>Wellness Center tour</p>
                <img src="../assets/images/csulb-wellness.png"/>
            </div>
                        <div class="demo-section-frame flippety top" id="demo-frame-three">
                <h6>Fish on Tap</h6>
                <p>Resturaunt tour</p>
                <img src="../assets/images/fish-on-tap.png"/>
            </div>
                        <div class="demo-section-frame flippety top" id="demo-frame-four">
                <h6>West Covina Estates</h6>
                <p>Home tour</p>
                <img src="../assets/images/west-covina.png"/>
            </div>
        </div>
        <div class="demo-section-text">
            <div class="demo-section-titles">
                <h2 class="title" id="special">Something <b>special</b></h2>
                <h4 class="subtitle" id="everysingleone">for every single one of you</h4>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { TweenMax, TimelineMax } from 'gsap';

@Component
export default class DemoSection extends Vue {
    mounted(){
        // let windowWidth = window.innerWidth;
        // let windowHeight = window.innerHeight;
        // let demos = document.getElementsByClassName("flippety");

        // for (let i = 0; i < demos.length; ++i)
        // {
        //     let roomLeft = ((windowWidth * 1.5) + windowWidth * 0.05) - (demos[i].offsetLeft + (demos[i].clientWidth * 1.5));
        //     console.log(roomLeft);
        //     Vue.prototype.$scrollmagic.addScene(new Vue.prototype.$scrollmagic.scene(
        //         {
        //         triggerElement:`#${this.getParentSection(demos[i].id)}`,
        //         duration: roomLeft,
        //         offset: 0,
        //         triggerHook: 1
        //         }).setTween(`#${demos[i].id}`, {x:`${roomLeft}`, ease: Linear.easeNone})
        //         .addIndicators())
        // }
        //             console.log(this.getParentSection(demos[1].id))

    }
    
    getParentSection(elementName: string): string {
    //console.log(elementName)
    const element = document.getElementById(elementName);
    //console.log(element)
    let result = element.parentElement;
    while (result !== null) {
        if (result.tagName === 'SECTION') {
            break;
        }
        result = result.parentElement;
    }
    return result.id;
  }

}
</script>

<style lang="scss" scoped>
#demo-section {
    display: flex;
    flex-direction: row;

    .demo-section-text, .demo-section-icons {
        display: flex;
    }

    .demo-section-text {
        margin-top: 5vh;
        margin-left: 30px;
        display: flex;
        width: 35%;

        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .main-text {
            text-align: left;
            margin-bottom: 15vh;
        }

        .title, .subtitle {
            font-weight: normal;
            text-align: left;
            margin: 0;
        }
    }

    .demo-section-frames {
        width: 65%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-left: 20px;


        .demo-section-frame:nth-child(odd) {
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);
            border-radius: 10px 10px 0 0;
            margin: auto 10px 0 10px;
            
            img {
                margin: auto auto 0 auto;
            }
        }

        .demo-section-frame:nth-child(even) {
            box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);
            border-radius: 0 0px 10px 10px;
            margin: 0 10px auto 10px;

            img {
                margin: 0 auto auto auto;
            }

            h6, p {
                order: 2;
            }

        }

        .demo-section-frame {
            width: 40%;
            height: 85%;
            background: white;

            display: flex;
            flex-direction: column;

            img {
                max-width: 100%;
                height: 85%;
                object-fit: cover;
            }

            h6 {
                font-size: 28px;
                padding-top: 15px !important;
            }

            h6, p {
                text-align: left;
                margin-bottom: 10px;
                margin-top: 0;
                padding: 0 15px;
            }
        }
    }   
}
</style>