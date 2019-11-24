<template>
  <section>
    <div class="stats-cards">
      <div class="stats-cards-container">
        <Card v-for="(card, index) in cardData" :key="index" :cardHeading="card.cardHeading" :cardDescription="card.cardDescription" :id="'stats-card-' + (index + 1)" :class="card.additionalClass" />
      </div>
    </div>
    <div class="stats-captions">
      <div class="stats-titles">
        <h2 class="heading">
          <span class="line">Seeing is&nbsp;</span>
          <span class="line">believing</span>
        </h2>
        <p class="primary-description">90% of customers make purchase decisions based on a website's visual content alone.</p>
        <p class="primary-description">Impress engage and impace potential customers by adding PeekPeek's 360&deg; virtual reality tour to your website. With our results, we could be the best tool in your toolbox</p>
        <h3 id="button-prompt">New challenge?</h3>
        <a id="solution-button" class="button primary-button" href="/who">New solution</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { TweenMax, TimelineMax, Power1 } from 'gsap';



let scenes: any;



@Component({
  components: {
    Card
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

  

  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "82%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "",
          cardHeading: "90%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "highlight",
          cardHeading: "1%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "",
          cardHeading: "Top5",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        }
      ]
    }
  }



  animateValue(obj:Element, start = 0, end:any = null, duration = 1500) {
        if (obj) {
            // save starting text for later (and as a fallback text if JS not running and/or google)
            var textStarting = obj.innerHTML;
            // remove non-numeric from starting text if not specified
            end = end || parseInt(textStarting.replace(/\D/g, ""));
            var range = end - start;
            // no timer shorter than 50ms (not really visible any way)
            var minTimer = 50;
            // calc step time to show all interediate values
            var stepTime = Math.abs(Math.floor(duration / range));
            // never go below minTimer
            stepTime = Math.max(stepTime, minTimer);
            // get current time and calculate desired end time
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer:number;
            function run() {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - (remaining * range));
                var text:string = value + "";
                // replace numeric digits only in the original string
                obj.innerHTML = textStarting.replace(/([0-9]+)/g, text);
                if (value == end) {
                    clearInterval(timer);
                }
            }
            timer = setInterval(run, stepTime);
            run();
        }
    }





  cardAnimation(){

    let cards = document.getElementsByClassName("stats-card");
    let cardheight = document.getElementById(cards[0].id)!.clientHeight;
    let cardWidth = document.getElementById(cards[0].id)!.clientWidth;
    for(let i = 0; i < cards.length; ++i)

      {

        var flightPath = {

          tree : {
            curviness: 1.25,

            values: [
                { x: 0 , y: 0 },
                { x: 0, y: -cardheight*.6*i - cardheight/2},
                { x: i % 2 === 0 ? -cardWidth*.42 : cardWidth*.42, y: -cardheight*.8*i - cardheight/2}
              ]
            }
          }

        var treeTween = TweenMax.to(cards[i], 1, {css:{bezier:flightPath.tree } , ease:Power1.easeInOut} )
        
        document.getElementById(cards[i].id)!.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';
        let firstElement: HTMLElement= <HTMLElement>(document.getElementById(cards[i].id)!.firstElementChild!)
        firstElement.style.margin = i % 2 === 0 ? 'auto 0 auto 2.5vh' : 'auto 2.5vh auto 0';
        firstElement.style.alignItems = i % 2 === 0 ? 'baseline' : 'flex-end';
        //Getting the width of the element
        let elementWidth = document.getElementById(cards[0].id)!.clientWidth;
        let scene = new Vue.prototype.$scrollmagic.scene({
        duration: window.innerWidth * 0.65,
        offset: window.innerWidth / 3,
        triggerHook: 'onEnter',
        triggerElement: '#stats-section',
        })
        scenes.push(scene);
        Vue.prototype.$scrollmagic.addScene(
          scene.setTween(treeTween)
        )
        let numberScene = new Vue.prototype.$scrollmagic.scene({
          duration: 2000,
          reverse: false,
          triggerHook: 'onEnter',
          triggerElement: `#${cards[i].id}`})
          .on("enter", () => this.animateValue(cards[i].getElementsByClassName("card-number")[0]));
        Vue.prototype.$scrollmagic.addScene(numberScene)
        }
    }
}
</script>

<style lang="scss">
// $card-base-height: 200px;
$overlap-x: 5%;
$overlap-y: 4%;

#stats-section {
  margin-bottom: 50px;

  @include medium-screen-landscape {
    width: 100vw;
    min-width: 1000px;
    margin-right: 10vw;
    margin-left: 50px;
    margin-bottom: 0;
  }

  .stats-cards {
    margin-top: 5%;

    @include medium-screen-landscape {
      display: inline-block;
      vertical-align: middle;
      width: 50%;
      height: 100%;
      margin-top: 0;
    }

    .stats-cards-container {
      width: 80%;
      min-width: $site-min-width;
      max-width: 600px;
      margin: 0 auto;
      padding: 5% 0;
      white-space: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include medium-screen-landscape {
        width: 90%;
        height: 100%;
        margin-left: 20px;
      }

      .card {
        width: 52%;
        display: flex;
        align-items: center;
        background-color: rgb(254, 255, 254);
        border-radius: 10px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);

        @include medium-screen-landscape {
          width: 52%;
          min-height: 25%;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 15%;

          .card-heading {
            font-size: 3em;
            line-height: 1em;
            font-weight: 700;
            color: $heading-color;

            @include medium-screen-landscape {
              font-size: 2em;
            }
          }

          .card-description {
            font-size: 1.2em;
            line-height: 1.7em;
            margin-top: 1em;
            font-weight: 400;
            color: $secondary-description-color;

            @include medium-screen-landscape {
              font-size: 1em;
              line-height: 1.7em;
              margin-top: 1.2em;
            }
          }
        }

        &.highlight .card-content .card-heading {
            color: $alt-heading-color;
        }
      }

      .card:nth-child(1) {
        z-index: 4;
        margin-top: 0;
        margin-right: $overlap-x;
        align-self: flex-end;
      }

      .card:nth-child(2) {
        z-index: 2;
        margin-top: -1 * $overlap-y;
        margin-left: 0;
        align-self: flex-start;
      }

      .card:nth-child(3) {
        z-index: 3;
        margin-top: -4 * $overlap-y;
        margin-right: 0;
        align-self: flex-end;
      }

      .card:nth-child(4) {
        z-index: 1;
        margin-top: -2 * $overlap-y;
        margin-left: $overlap-x;
        align-self: flex-start;
      }
    }
  }

  .stats-captions {
    display: block; //change
    text-align: left;
    margin: 5% 5vw;

    @include medium-screen-landscape {
      width: 50vw;
      max-width: 450px;
      display: inline-block;
      vertical-align: middle;
      white-space: initial;
      margin-left: 5vw;
    }

    .heading {
      margin-bottom: 0.7em;
    }

    #solution-button, #button-prompt {
      display: inline-block;
    }

    #button-prompt {
      font-size: 1.1em;
      font-weight: 700;
      color: $subheading-color;
      margin-top: 3em;
    }

    #solution-button {
      margin-left: 20px;
    }
  }
}
</style>
