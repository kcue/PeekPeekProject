<template>
  <div id="demo-group">
    <div class="container" id="demo-cards">
      <DemoCard v-for="(item, index) in cardData" :key="index" :id="'demo-card-' + index" :class="item.layoutClasses">
        <h6 slot="title" class="demo-title">{{item.title}}</h6>
        <p slot="subtitle" class="demo-subtitle">{{item.subtitle}}</p>
        <img slot="img" :src="imagePath(item.img)"/> 
      </DemoCard>
    </div>
    <!-- <img @click="closeAll" id="x-button" src="../assets/images/X.png"/> -->
    <iframe class="demo-iframe" v-for="(item,index) in cardData" :key="index" :id="'demo-frame-' + index" :src="item.iframe"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoCard from "@/components/DemoCard.vue";

@Component({
  components: {
    DemoCard,
  }
})
export default class DemoGroup extends Vue {
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

  iframe {
    display: none; // temporary
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
          z-index: 100;
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
        }

        &:nth-child(even) {
          margin: 0 0 10% 0;

          .text-container {
            top: 75%;
            bottom: initial;
            left: 5%;
            right: initial;
          }
        }
      }
    }
  }
}
</style>