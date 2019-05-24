<template>
    <section class="peek-section" id="stats-section">
        <div class="stats-section-left-padding"></div>
        <div class="stats-section-content">
            <div class="stats-cards">
                <div class="stats-cards-container">
                    <StatsCard :cardNumber="'18x'" :supportiveTitle="'Longer'" :title="'Duration of Stay'" id="stats-card-one"/>
                    <StatsCard :cardNumber="'130%'" :supportiveTitle="'Increase in'" :title="'Booking Rate'" id="stats-card-two"/>
                    <StatsCard :cardNumber="'12%'" :supportiveTitle="'Increase in'" :title="'Engagement Rate'" id="stats-card-three"/>
                    <StatsCard :cardNumber="'28%'" :supportiveTitle="'Conversion of '" :title="'Physical Visit'" id="stats-card-four"/>
                </div>
            </div>
            <div class="stats-captions">
                <div class="stats-titles">
                    <h2 class="title">We do work</h2>
                    <h4 class="subtitle">Better than most, actually</h4>
                </div>
                <div class="stats-text">
                    <p class="main-text">New Challenge?</p>
                    <p class="main-text">New solution -></p>
                </div>
            </div>
                
        </div> 
        
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatsCard from "@/components/StatsCard.vue";

import { TweenMax, TimelineMax } from 'gsap';

// var controller = Vue.prototype.$scrollmagic.Controller({vertical: false})
@Component({
  components: {
    StatsCard,
  }
})
export default class StatsSection extends Vue {
    mounted() {
        const cards = document.getElementsByClassName("stats-card");
        const cardheight = document.getElementById('stats-card-one').clientHeight;
        const cardWidth = document.getElementById('stats-card-one').clientWidth;
        for(let i = 0; i < cards.length; ++i)
        {

            var flightPath = {
                tree : {
                    curviness: 1.25,
                    //autorotate:false,
                    values: [
                        { x: 0 , y: 0 },
                        { x: 0, y: -cardheight*.6*i - cardheight/2},
                        { x: i % 2 === 0 ? -cardWidth*.4 : cardWidth*.4, y: -cardheight*.8*i - cardheight/2}
                    ]
                }
            }
            var treeTween = TweenMax.to(cards[i], 1, {css:{bezier:flightPath.tree } , ease:Power1.easeInOut} )
            
            // if (i % 2 === 0)
            // {
            //     tween = new TweenMax.to(`#${cards[i].id}`, 1, { y: `-${100 + (75*i)}%`, x: `-40%` });
            //     document.getElementById(cards[i].id).style.alignItems = 'baseline';
            // } else {
            //     tween = new TweenMax.to(`#${cards[i].id}`, 1, { y: `-${100 + (75*i)}%`, x: `40%` });
            //     document.getElementById(cards[i].id).style.alignItems = 'flex-end';
            // }
            
            // tween = new TweenMax.to(`#${cards[i].id}`, 1, { y: `-${100 + (75*i)}%`, x: `${i % 2 === 0 ? -40 : 40}%`});
            document.getElementById(cards[i].id).style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';
            document.getElementById(cards[i].id).firstElementChild.style.margin = i % 2 === 0 ? 'auto 0 auto 25px' : 'auto 25px auto 0';
            document.getElementById(cards[i].id).firstElementChild.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';

            //Getting the width of the element
            let elementWidth = document.getElementById('stats-card-one').clientWidth;
            console.log(elementWidth);

            let scene = new Vue.prototype.$scrollmagic.scene({
            duration: 800,
            offset: -200,
            triggerHook: 'onCenter',
            triggerElement: '#stats-section',
            })

            Vue.prototype.$scrollmagic.addScene(
                scene.setTween(treeTween).addIndicators(),
            )
        }
        // var tween = new TweenMax.to('#stats-card-one', 1, { y: '-200%', x: '-50%' });
        // var rotationTween = new TweenMax.to('#stats-card-one', 1, {rotation:-15})

        // let timeline = new TimelineMax();

        // timeline.add(tween).add(rotationTween);

        // let scene = new Vue.prototype.$scrollmagic.scene({
        //     duration: 800,
        //     offset: -200,
        //     triggerHook: 'onCenter',
        //     triggerElement: '#stats-section',
        // })
        // // Vue.prototype.$scrollmagic.addScene(
        // //     scene.setTween(tween).addIndicators(),
        // // )

        // scene.setTween(timeline).addIndicators();
        // Vue.prototype.$scrollmagic.addScene(scene)
    }
}
</script>

<style lang="scss" scoped>
#stats-section {
    flex-direction: row;

    .stats-section-left-padding {
        flex-grow: 1;
    }

    .stats-section-content {
        flex-grow: 9;
        display: flex;
        justify-content: space-around;

        .stats-cards {
            // display: flex;
            // flex-direction: column;
            // justify-content: center;

            .stats-cards-container {
                width: 300px;
                height: 300px;
                position: relative;
                top: calc(100% - 150px);

                .stats-card {
                    position: absolute;
                    display: flex;
                    flex-direction: column
                }

                .stats-card:nth-child(1) {
                    z-index: 4;
                    top: 0px;
                }

                .stats-card:nth-child(2) {
                    z-index: 3;
                    top: 10px;
                }

                .stats-card:nth-child(3) {
                    z-index: 2;
                    top: 20px;
                }

                .stats-card:nth-child(4) {
                    z-index: 1;
                    top: 30px;
                }
            }
        }        
    }

    .stats-captions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50px;
        justify-content: space-around;


        h2 {
            font-size: 60px;
            margin: 0;
        }

        h4 {
            font-size: 40px;
            font-weight: normal;
            margin: 0;
        }

        .stats-text {
            align-self: flex-end;
        }
    }

}
</style>