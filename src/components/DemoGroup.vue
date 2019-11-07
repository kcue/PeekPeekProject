<template>
  <div id="demo-card-group">
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
export default class DemoSection extends Vue {
  mounted() {
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
}
</script>

<style lang="scss">
#demo-card-group {
  iframe {
    display: none; // temporary
  }
}
</style>