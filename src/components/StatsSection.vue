<template>
    <section class="peek-section" id="stats-section">
        <div class="stats-cards-left-margin"></div>

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
                <h2 class="title" id="work">We do work</h2>
                <h4 class="subtitle" id ="better">Better than most, actually</h4>
            </div>
            <div class="stats-text">
                <p class="subtitle" id="challenge">New Challenge?</p>
                <p class="subtitle" id="solution">New solution -></p>
            </div>
        </div>

        <div class="stats-captions-parallax-margin"></div>
        
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatsCard from "@/components/StatsCard.vue";

import { TweenMax, TimelineMax } from 'gsap';

let scenes;
// var controller = Vue.prototype.$scrollmagic.Controller({vertical: false})
@Component({
  components: {
    StatsCard,
  }
})


export default class StatsSection extends Vue { 
    mounted() {
        window.addEventListener('resize', ()=> {
            for (let i = 0; i < scenes.length; ++i)
            {
                scenes[i].destroy(true);
            }
            scenes = [];
            this.cardAnimation();
        })
        scenes = []; 
        this.cardAnimation();
    }

    cardAnimation() {
        let cards = document.getElementsByClassName("stats-card");
        let cardheight = document.getElementById('stats-card-one')!.clientHeight;
        let cardWidth = document.getElementById('stats-card-one')!.clientWidth;
        for(let i = 0; i < cards.length; ++i)
        {

            var flightPath = {
                tree : {
                    curviness: 1.25,
                    //autorotate:false,
                    values: [
                        { x: 0 , y: 0 },
                        { x: 0, y: -cardheight*.6*i - cardheight/2},
                        { x: i % 2 === 0 ? -cardWidth*.42 : cardWidth*.42, y: -cardheight*.8*i - cardheight/2}
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
            document.getElementById(cards[i].id).firstElementChild.style.margin = i % 2 === 0 ? 'auto 0 auto 2.5vh' : 'auto 2.5vh auto 0';
            document.getElementById(cards[i].id).firstElementChild.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';

            //Getting the width of the element
            let elementWidth = document.getElementById('stats-card-one').clientWidth;
            console.log(elementWidth);

            let scene = new Vue.prototype.$scrollmagic.scene({
            duration: window.innerWidth * 0.65,
            offset: window.innerWidth / 3,
            triggerHook: 'onEnter',
            triggerElement: '#stats-section',
            })
            scenes.push(scene);
            Vue.prototype.$scrollmagic.addScene(
                scene.setTween(treeTween)
                /*.addIndicators() */,
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
    display: flex;

    .stats-cards-left-margin {
        width: 10vh;
    }

    .stats-cards {
        .stats-cards-container {
            width: 51.25vh;
            height: 51.25vh;
            position: relative;
            top: 80vh;

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

    .stats-captions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;


        h2 {
            font-size: 7vh;
            margin: 0;
            text-align: left;
        }

        h4 {
            font-size: 6vh;
            font-weight: normal;
            margin: 0;
            text-align: left;
        }

        .stats-text {
            align-self: flex-end;
            margin-right: 4vh;

            p {
                font-size: 3.5vh;
            }
        }
    }

    .stats-captions-parallax-margin {
        flex: auto;
    }

}
</style>
