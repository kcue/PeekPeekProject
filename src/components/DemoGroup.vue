<template>
  <div id="demo-group">
    <div class="container" id="demo-cards" @click="closeAll">
      <FeatureCard v-for="(item, index) in cardData" :key="index" :id="'demo-card-' + index" :class="'demo-card ' + item.layoutClasses">
        <h6 slot="title" class="demo-title">{{item.title}}</h6>
        <p slot="content" class="demo-subtitle">{{item.subtitle}}</p>
        <img slot="img" :src="imagePath(item.img)"/> 
        <!-- <div slot="img" class="demo-img-parent">
          <div :style="{ backgroundImage: `url(${imagePath(item.img)})` }"></div>
        </div> -->
      </FeatureCard>
    </div>
    <div id="iframes-wrapper" @click="closeAll">
     <iframe class="demo-iframe" v-for="(item, index) in cardData" :key="index" :id="'demo-frame-' + index" :src="item.iframe"></iframe>
    </div>
    <i class="far fa-times-circle closed" id="close-button" @click="closeAll"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeatureCard from "@/components/FeatureCard.vue";

@Component({
  components: {
    FeatureCard,
  }
})
export default class DemoGroup extends Vue {
  mounted() {
    let cards = document.getElementById("demo-cards")!.children;
    for (let i = 0; i < cards.length; ++i) {
      cards[i].classList.add(i % 2 === 0 ? "even": "odd");
      cards[i].addEventListener("click", event => {
          event.preventDefault();
          event.stopPropagation();
          let targetElement: HTMLElement = <HTMLElement> event.srcElement;
          targetElement = targetElement.className.toString().includes("demo-section-frame") ? targetElement : <HTMLElement> targetElement.parentElement;
          this.openCard(targetElement!, cards);
      });
    }

    // resize handler
    var oldWidth = window.innerWidth;
    var demoGroupResize = () => {
      var th: number = 768;   // threshold width (mobile format vs landscape format)
      var newWidth: number = window.innerWidth;
      // only close the iframe if it passes the threshold width
      if ((oldWidth > th && newWidth < th) || (oldWidth < th && newWidth > th)) {
        var closeBtn = document.getElementById("close-button");
        if (window.getComputedStyle(closeBtn).opacity != "0") {
          document.getElementById("close-button").click();
        }
      } else if (newWidth > 768) {
        // recalculate position of the close button on landscape format
        var padding: number = 10;
        var closeBtn: HTMLElement = document.getElementById("close-button");
        var currentFrame: HTMLElement = document.querySelector(".active-frame");
        if (window.getComputedStyle(currentFrame).opacity != "0") {
          var closeBtnX = currentFrame!.offsetLeft - padding - closeBtn.offsetWidth;
          var closeBtnY = currentFrame!.offsetTop;
          closeBtn.style.left = closeBtnX + "px";
          closeBtn.style.top = closeBtnY + "px";
        }
      }
      oldWidth = newWidth;
    };
    (<any> window).demoGroupResize = Vue.prototype.$_.debounce(demoGroupResize, 1000);
    window.addEventListener("resize", (<any> window).demoGroupResize);
  }

  beforeDestroy() {
    window.removeEventListener("resize", (<any> window).demoGroupResize);
    (<any> window).demoGroupResize = undefined;
  }

  data() {
    return {
      imagePath: function (name:string): any {
        return require("../assets/images/" + name)
      }, 
      // To rearrange the content of the cards, do not change the structure of the data here.
      // Go to the Style section of this page and change the flex-order. 
      cardData: [
        {
          layoutClasses: "",
          iframe: "http://vr.peekpeek.com/UCI_ARC/",
          title: "University of California, Irvine",
          subtitle: "Anteater Recreational Center Tour",
          img: "demo-uci_arc.png",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "Cal State Long Beach",
          subtitle: "Wellness Center Tour",
          img: "demo-csulb.png",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "Fish on Tap",
          subtitle: "Restaurant Tour",
          img: "demo-fish_on_tap.png",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "West Covina Estates",
          subtitle: "Home Tour",
          img: "demo-west_covina.png",
        }
      ]
    }
  }

  openCard(elem: HTMLElement, cards: HTMLCollection) {    
    let foundIndex: number = -1;
    for (let i = 0; i < cards.length; ++i) {
      cards[i].classList.add("hidden");
      if (cards[i].id == elem.id) {
        foundIndex = i; // index of card that was clicked
      }
    }

    let closeBtn = document.getElementById("close-button")!;
    let frameWrapper = document.getElementById("iframes-wrapper");
    let currentFrame = document.getElementById(`demo-frame-${foundIndex}`);

    // determine position and dimensions of the iframe & close button (should be centered)
    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewportWidth < 768) {  // if mobile, set iframe as full-screen
      document.body.classList.add("noscroll");
       
      setTimeout(() => {
        frameWrapper!.classList.add("fullscreen");

        setTimeout(() => {
          frameWrapper!.classList.add("transition");
          currentFrame!.classList.add("active-frame");
          closeBtn!.classList.remove("closed");
        }, 500);
      }, 500);

    } else {
      currentFrame!.classList.add("centered");
      currentFrame!.classList.add("active-frame");
      
      // determine position of the close icon
      // need setTimeout to wait for final dimensions of the iframe
      setTimeout(() => {
        let padding = 10;
        let closeBtnX = currentFrame.offsetLeft - padding - closeBtn.offsetWidth;
        let closeBtnY = currentFrame.offsetTop;
        closeBtn.style.left = closeBtnX + "px";
        closeBtn.style.top = closeBtnY + "px";
        closeBtn!.classList.remove("closed");
        Vue.prototype.common.appScrollTo(currentFrame);
      }, 1100); // delay 1200 = wait for transition effects on iframe
    }      
  }

  closeAll() {
    let frameWrapper = document.getElementById("iframes-wrapper");
    frameWrapper!.classList.remove("transition");

    let closeBtn = document.getElementById("close-button")!;
    closeBtn!.classList.add("closed");
    closeBtn.style.left = "";
    closeBtn.style.top = "";

    let currentFrame = document.querySelector(".active-frame");
    currentFrame!.classList.remove("active-frame");
    document.body.classList.remove("noscroll");

    setTimeout(() => {
      let cards = document.getElementById("demo-cards")!.children;
      for (let i = 0; i < cards.length; ++i) {
        cards[i].classList.remove("hidden");
      }

      // remove any other added classes
      frameWrapper!.classList.remove("fullscreen");
      currentFrame!.classList.remove("centered");
    }, 1000);
  }
}
</script>

<style lang="scss">
$numCards: 4;

#demo-group {
  width: 100%;
  position: relative;
  overflow: hidden;

  #demo-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    
    .demo-card {
      position: relative;
      min-height: 200px;
      height: 20vh;
      width: 100%;
      margin-top: 5em;
      transition: transform 0.8s ease-out, opacity 0.8s ease-out;
      opacity: 1;
     
      &:nth-child(odd) {
        .text-container {
          left: 5%;
          right: initial;
        }

        &.hidden {
          opacity: 0;
          transform: translateX(120vw);
        }
      }

      &:nth-child(even) {
        .text-container {
          left: initial;
          right: 5%;
        }

        &.hidden{
          opacity: 0;
          transform: translateX(-120vw);
        }
      }
    }
  }

  .text-container {
    background-color: #FFF;
    white-space: normal;
    box-shadow: -10px 0px 20px rgba(#000, 0.1);
    border-radius: 5px;
    min-width: 250px;
    width: 50%;
    padding: 1em;
    position: absolute;
    top: -2.5em;

    .demo-title {
      color: $heading-color;
      font-weight: 700;
      font-size: 1em;
      line-height: 1.2em;
    }

    .demo-subtitle {
      margin-top: 0.8em;
      color: $primary-description-color;
      font-size: 0.8em;
      line-height: 1.2em;
    } 
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 20px rgba(#000, 0.1);
  }

  #close-button {
    text-align: left;
    position: absolute;
    width: 2em;
    height: 2em;
    opacity: 1;
    transition: all 0.8s ease 0.2s;
    left: 10vw;
    top: calc(20vh - 40px);
    cursor: pointer;
    z-index: 100;

    &:before {
      content: "\f057";
      font-size: 2em;
      font-style: normal;
    }

    &.closed {
      opacity: 0;
      pointer-events: none;
    }
  }

  #iframes-wrapper {
    &.fullscreen {
      transition: opacity 0.8s ease 0.2s, background-color 0.8s ease 0.2s;
      overflow: auto;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10000;

      &.transition {
        background-color: $main-background-color;
        opacity: 1;
      }

      & .active-frame {
        width: 90%;
        height: 90%;
        top: 0;
        left: calc(2em + 2%);
        bottom: 0;
        right: 5%;
        margin: auto;
      }

      ~ #close-button {
        background-color: rgba(#FFF, 0.7);
        border-radius: 1em;
        top: 5%;
        left: 1%;
        position: fixed;
        z-index: 10000;
      }
    }
  
    iframe {
      height: 70vh;
      min-height: 450px;
      width: 0;
      top: -100vh;
      right: 0;
      transition: all 0.8s ease 0.2s;
      position: absolute;
      border-width: 0px;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
      
      &.active-frame {
        width: 75%;
        visibility: visible;
        opacity: 1;
        z-index: 1000;
      }

      &.centered {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        margin: auto;
      }
    }
  }
}

@include medium-screen-landscape {
  #demo-group {
    margin-left: 1em;  // leave room for the shadow
    height: 100%;
    width: auto;

    #demo-cards {
      flex-direction: row;

      .demo-card {
        min-width: 180px;
        max-width: 300px;
        width: calc(100vw / #{$numCards});   // 4 = number of demos
        height: 70%;

        .text-container {
          box-shadow: -5px 10px 20px rgba(#000, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: initial;
          width: 90%;
          position: absolute;
          z-index: 0;
        }

        img {
          box-shadow: -5px 10px 20px rgba(#000, 0.1);
          width: 80%;
          position: absolute;
          top: 0;
          right: 0;
        }

        &:nth-child(odd) {
          margin: 10% 0 0 0;

          .text-container {
            top: 10%;
            bottom: initial;
            left: 5%;
            right: initial;
          }

          &.hidden {
            transform: translateY(120vh);
          }
        }

        &:nth-child(even) {
          margin: 0 0 10% 0;

          .text-container {
            top: 75%;
            bottom: initial;
            left: 5%;
            right: initial;
          }

          &.hidden {
            transform: translateY(-120vh);
          }
        }
      }
    }
  }
}
</style>