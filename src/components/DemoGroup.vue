<template>
  <div id="demo-group">
    <div class="container" id="demo-cards">
      <FeatureCard v-for="(item, index) in cardData" :key="index" :id="'demo-card-' + index" :class="'demo-card ' + item.layoutClasses">
        <h6 slot="title" class="demo-title">{{item.title}}</h6>
        <p slot="content" class="demo-subtitle">{{item.subtitle}}</p>
        <img slot="img" :src="imagePath(item.img)"/> 
      </FeatureCard>
    </div>
    <i @click="closeAll" class="far fa-times-circle closed" id="close-button"></i>
    <div id="iframe">
     <iframe class="demo-iframe" v-for="(item, index) in cardData" :key="index" :id="'demo-frame-' + index" :src="item.iframe"></iframe>
    </div>
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
          let targetElement: HTMLElement = <HTMLElement> event.srcElement;
          targetElement = targetElement.className.toString().includes("demo-section-frame") ? targetElement : <HTMLElement> targetElement.parentElement;
          this.openCard(targetElement!, cards);
      });
    }
  }

  data() {
    return {
      imagePath: function (name:string): any {
        return require("../assets/images/" + name + ".png")
      }, 
      //To rearrange the content of the cards, do not change the structure of the data here.
      //Go to the Style section of this page and change the flex-order. 
      cardData: [
        {
          layoutClasses: "",
          iframe: "http://vr.peekpeek.com/UCI_ARC/",
          title: "University of California, Irvine",
          subtitle: "Anteater Recreational Center Tour",
          img: "demo-uci_arc",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "Cal State Long Beach",
          subtitle: "Wellness Center Tour",
          img: "demo-csulb",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "Fish on Tap",
          subtitle: "Restaurant Tour",
          img: "demo-fish_on_tap",
        },
        {
          layoutClasses: "",
          iframe: "http://panosensing.com/temp/peekpeek/LB_Rec_Center/v3.html",
          title: "West Covina Estates",
          subtitle: "Home Tour",
          img: "demo-west_covina",
        }
      ]
    }
  }

  openCard(elem: HTMLElement, cards: HTMLCollection) {
    console.log(elem);
    
    let foundIndex: number = -1;
    for (let i = 0; i < cards.length; ++i) {
      cards[i].classList.add("hidden");
      if (cards[i].id != elem.id) {
        // cards that were not clicked
        //console.log(cards[i].id + " is not the one you clicked");
        // cards[i].classList.add("flat");
      }
      else{
          foundIndex = i; // index of card that was clicked
      }
    }

    // let fakeCard = document.getElementById("fake-card")!;
    // fakeCard.style.width = `${elem.clientWidth}px`;
    // fakeCard.style.height = `${elem.clientHeight}px`;
    // fakeCard.style.left = `${elem.offsetLeft}px`;
    // if (foundIndex % 2 === 0) {
    //     fakeCard.style.top = `${window.innerHeight - elem.clientHeight}px`;
    //     fakeCard.style.borderRadius = '10px 10px 0px 0px';
    // } else {
    //     fakeCard.style.top = `0px`;
    //     fakeCard.style.borderRadius = '0px 0px 10px 10px';
    // }
    // setTimeout(() => {
    //     fakeCard.style.transition = 'all 1s';
    //     fakeCard.style.top = '20vh';
    //     fakeCard.style.left = '10vw';
    // }, 1000)
    // elem.classList.add("opened");
    // fakeCard.classList.add("clicked");
    // document.getElementById("x-button")!.style.opacity = "1";
    let closeBtn = document.getElementById("close-button")!;
    closeBtn!.classList.remove("closed");
    let currentFrame = document.getElementById(`demo-frame-${foundIndex}`);
    currentFrame!.classList.add("active-frame");          
  }

  closeAll() {
    console.log("close-button-clicked");
    // let demo-iframe = document.getElementsByClassName("demo-iframe")!;
    
    // demo-iframe.style.visibility = "hidden";
    // iframe.display = none;
    setTimeout(() => {
      let cards = document.getElementById("demo-cards")!.children;
      for (let i = 0; i < cards.length; ++i) {
        cards[i].classList.remove("hidden");
      }
    }, 800);

    let closeBtn = document.getElementById("close-button")!;
    closeBtn!.classList.add("closed");

    let currentFrame = document.querySelector(".active-frame");
    currentFrame!.classList.remove("active-frame");

    // let cards = document.getElementsByClassName("demo-section-frames")[0].children;

    // for (let i = 0; i < cards.length; ++i) {
    //   log.console("1");
    //     // cards[i].classList.remove("flat");
    // }
    // let fakeCard = document.getElementById("fake-card")!;
    // fakeCard.style.width = '';
    // fakeCard.style.height = '';
    // fakeCard.style.left = '';
    // fakeCard.style.top = '';
    // fakeCard.style.borderRadius = '';        
    
    // fakeCard.classList.remove("clicked");
    // document.getElementsByClassName("opened")[0].classList.remove("opened");
    // document.getElementsByClassName("active-frame")[0].classList.remove("active-frame");
    // let x_button = document.getElementById("x-button")!;     
    // x_button.style.transition = "transition: opacity .5s ease-in-out 0s";
    // x_button.style.opacity = "0";
    // x_button.style.transition = "transition: opacity .5s ease-in-out 1.5s";
    
    // setTimeout(() => {
    //     fakeCard.style.transition = 'all 1s';
    //     fakeCard.style.top = '20vh';
    //     fakeCard.style.left = '10vw';
    // }, 1000)       
  }
}
</script>

<style lang="scss">
$numCards: 4;

#demo-group {
  width: 100%;

  #demo-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .demo-card {
      position: relative;
      min-height: 200px;
      height: 20vh;
      width: 100%;
      margin-top: 5em;
      transition: margin 1s;

      &:nth-child(odd) {
        .text-container {
          left: 5%;
          right: initial;
        }
      }

      &:nth-child(even) {
        .text-container {
          left: initial;
          right: 5%;
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
    visibility: visible;
    transition: opacity 1s ease 0.2s;
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
      visibility: hidden;
    }
  }

  iframe {
    // display: none;
    height: 60vh;
    width: 0;
    top: 20vh;
    left: 10vw;
    transition: all 1s ease 0.2s;
    position: absolute;
    border-width: 0px;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    //text-align: center; 
    // padding:auto;
    // display: block;
    // margin-left: 200px;
    // margin-right: auto;
    margin:auto;

    
    &.active-frame {
      width: 60vw;
      visibility: visible;
      opacity: 1;
      z-index: 1000;
      // text-align: center; 
      // padding:auto;
      margin:auto;
    
      // margin-left: 200px;
      // margin-right: auto;

      // width: 60vw !important;
      // height: 60vw !important;
      // border-radius: 0 !important;
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
            margin: 200% 0 0 0;
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
            margin: 0 0 200% 0;
          }
        }
      }
    }
  }
}
</style>