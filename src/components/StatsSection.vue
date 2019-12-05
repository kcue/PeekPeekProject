<template>
  <section id="stats-section">
    <div class="container" id="stats-section-container">
      <div class="stats-cards">
        <div class="stats-cards-container">
          <Card v-for="(card, index) in cardData" :key="index" :cardHeading="card.cardHeading" :cardDescription="card.cardDescription" :id="'stats-card-' + (index + 1)" :class="card.additionalClass" :data-card-heading="card.cardHeading" />
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
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

import { TweenMax, TimelineMax, Power1 } from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

@Component({
  components: {
    Card,
  }
})
export default class StatsSection extends Vue {
  controller: any = null;
  scenes: any = [];

  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "67%",
          cardDescription: "increase in booking rate",
        },
        {
          additionalClass: "",
          cardHeading: "10x",
          cardDescription: "longer engagement",
        },
        {
          additionalClass: "highlight",
          cardHeading: "75%",
          cardDescription: "public wants virtual tour",
        },
        {
          additionalClass: "",
          cardHeading: "4 weeks",
          cardDescription: "to recoup ROI",
        }
      ]
    }
  }

  mounted() {
    this.scenes = []; 
    this.cardAnimation();
    (<any> window).statsCardsResize = Vue.prototype.$_.debounce(this.statsCardsResize, 1000);
    window.addEventListener("resize", (<any> window).statsCardsResize);
  }

  beforeDestroy() {
    this.controller.destroy(true);
    this.controller = null;

    window.removeEventListener("resize", (<any> window).statsCardsResize);
    (<any> window).statsCardsResize = undefined;
  }

  statsCardsResize(): void {
    // restart the animations on resize
    for (let i = 0; i < this.scenes.length; ++i) {
      this.scenes[i].destroy(true);
    }
    this.scenes = [];
    this.cardAnimation();
  } 

  cardAnimation() {
    // check if horizontal or vertical
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    var isVerticalLayout = Vue.prototype.common.isVerticalLayout();  // check if mobile or not

    // initialize scrollmagic controller
    this.controller = new ScrollMagic.Controller({
      vertical: isVerticalLayout,
    });

    let cards = document.getElementsByClassName("card");
    let cardContainer= <HTMLElement> document.getElementsByClassName("stats-cards-container")[0];
    let cardheight = (<HTMLElement> cards[0])!.clientHeight;
    let cardWidth = (<HTMLElement> cards[0])!.clientWidth;
    let containerHeight = cardContainer!.offsetHeight;
    let containerWidth = cardContainer!.offsetWidth;
    for (let i = 0; i < cards.length; ++i) {
      (<HTMLElement> cards[i]).removeAttribute("style"); // clear inline styles
      let cardPosX = (<HTMLElement> cards[i])!.offsetLeft;
      let cardPosY = (<HTMLElement> cards[i])!.offsetTop;
      var flightPath = {
        tree: {
          curviness: 1.25,

          values: [
            { x: 0, y: 0 },
            //{ x: 0, y: -(-cardheight * 0.6 * i) - (cardheight / 2) },
            { x: (i % 2 === 0) ? (containerWidth * 0.25) : (-containerWidth * 0.25), y: (viewportHeight * 0.8)}
          ]
        }
      };
      var treeTween = TweenMax.to(cards[i], 1, { 
        css: {
          bezier: flightPath.tree,
          autoAlpha: 1
        }, 
        ease: Power1.easeInOut,
        overwrite: true
      });
      if (!isVerticalLayout) {
        // change values for horizontal layout
        flightPath.tree.values = [
          { x: 0, y: 0 },
          { x: 0, y: (-cardheight * 0.6 * i) - (cardheight / 2) },
          { x: (i % 2 === 0) ? (containerWidth * 0.25) : (-containerWidth * 0.25), y: -containerHeight * 0.8 }
        ];
      }
      
      // Getting the width of the element
      let elementWidth = document.getElementById(cards[0].id)!.clientWidth;
      
      // this adds the scenes for the cards moving
      let scene = new ScrollMagic.Scene({
        duration: (isVerticalLayout) ? (viewportHeight * 0.75) : (viewportWidth * 0.75),
        offset: 0,
        triggerHook: "onEnter",
        triggerElement: "#stats-section"
      });
      this.scenes.push(scene);
      this.controller.addScene(
        scene.setTween(treeTween)
      );

      // this adds the scenes for the numbers changing
      let numberScene = new ScrollMagic.Scene({
        duration: 2000,
        reverse: false,
        triggerHook: 0.5,
        triggerElement: "#stats-section"
      })
      .on("enter", () => this.animateValue(cards[i].getElementsByClassName("card-heading")[0], (<HTMLElement> cards[i]).dataset.cardHeading))
      .addTo(this.controller);
    }
  }

  // this method is for the percentages changing
  animateValue(obj:Element, data:string, start = 0, end:any = null, duration = 1500) {
    if (obj) {
      // save starting text for later (and as a fallback text if JS not running and/or google)
      var textStarting = data;
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
}
</script>

<style lang="scss">
// $card-base-height: 200px;
$overlap-x: 7.5%;
$overlap-y: 4%;

#stats-section {
  margin-bottom: 50px;
  flex-direction: row;
  position: relative;
 
  @include medium-screen-landscape {
    width: 100vw;
    min-width: 1000px;
    margin-right: 10vw;
    margin-left: 50px;
    margin-bottom: 0;
  }

  #stats-section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include medium-screen-landscape {
      flex-direction: row;
    }
  }

  .stats-cards {
    margin-top: 5%;

    @include medium-screen-landscape {
      max-width: 600px;
      width: 50%;
      height: 100%;
      margin-top: 0;
    }

    @include high-res-screen-landscape {
      max-width: 1000px;
    }

    .stats-cards-container {
      position: relative;
      top: -80vh;
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
        top: 80vh;
        width: 90%;
        height: 100%;
      }

      @include high-res-screen-landscape {
        max-width: 1000px;
      }

      .card {
        opacity: 0;
        display: flex;
        flex-direction: column;
        width: 52%;
        align-items: flex-start;
        justify-content: center;
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
        // align-self: flex-end;
      }

      .card:nth-child(2) {
        z-index: 2;
        margin-top: -1 * $overlap-y;
        margin-left: 0;
        // align-self: flex-start;
      }

      .card:nth-child(3) {
        z-index: 3;
        margin-top: -4 * $overlap-y;
        margin-right: 0;
        // align-self: flex-end;
      }

      .card:nth-child(4) {
        z-index: 1;
        margin-top: -2 * $overlap-y;
        margin-left: $overlap-x;
        // align-self: flex-start;
      }
    }
  }

  .stats-captions {
    text-align: left;
    margin: 5% 5vw;

    @include medium-screen-landscape {
      width: 50vw;
      max-width: 450px;
      white-space: initial;
      margin-left: 5vw;
    }

    @include high-res-screen-landscape {
      max-width: initial;
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
      margin-left: 1em;
    }
  }
}
</style>
