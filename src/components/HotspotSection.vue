<template>
  <section>
    <div class="container" id="hotspot-section-container">
      <div id="city-wrapper">
        <div id="city-canvas-container">
          <canvas id="city-canvas"></canvas>
          <div id="dom-overlay-container"></div>
        </div>
      </div>
      <div class="hotspot-titles">
        <h4 class="subheading">It's not just the place</h4>
        <h2 class="heading">
          <span class="line">Tell me about&nbsp;</span>
          <span class="line">your history</span>
        </h2>
        <h4 class="subheading">with the hotspots!</h4>
        <p class="primary-description">
          <span class="line">Take a peek at how we bring the&nbsp;</span>
          <span class="line">following industries to life</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import cityAtlasSrc from "@/assets/images/city-animated_atlas_.png"

@Component({})
export default class HotspotSection extends Vue {
  created() {
    (<any> window).cityAtlasSrc = cityAtlasSrc;
  }

  mounted() {
    // city animation was generated with Adobe Animate
    // the main JS files are located in public/index.html
    // dependencies are imported from there
    (<any> window).initCity();
  }
}
</script>

<style lang="scss">
#hotspot-section {
  margin: 50px 0 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @include medium-screen-landscape {
    display: inline-block;
    margin: 0;
    min-width: 1200px;
  }

  #hotspot-section-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include medium-screen-landscape {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      min-height: $site-min-height;
      max-width: 1300px;
      margin: 0 auto;
    }

    @include high-res-screen-landscape {
      max-width: initial;
    }
  }

  // wrapper defines the size of the whole animation container
  #city-wrapper {
    width: 90%;
    height: 40vh;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @include medium-screen-landscape {
      width: 70%;
      height: 65%;
      margin-top: 2.5%;
      margin-left: 5%;
      justify-content: flex-start;
      align-self: flex-start;
    }
  }

  #city-canvas-container {
    background-color:rgba(255, 255, 255, 0.00);
    
    #city-canvas {
      display: block;
      background-color: rgba(255, 255, 255, 0.00);
    }

    #dom-overlay-container {
      pointer-events: none;
      overflow: hidden;
      position: absolute;
      left: 0px;
      top: 0px;
      display: block;
    }
  }

  .hotspot-titles {
    min-width: $site-min-width;
    width: 60%;
    text-align: left;
    white-space: initial;
    margin-top: 2.5%;

    @include small-screen-landscape {
      min-width: 450px;
      margin-left: 28%;
    }

    @include medium-screen-landscape {
      width: 50%;
      align-self: flex-end;
      margin: 0 0 2.5% -30%;
    }

    @include extra-large-screen-landscape {
      margin: 0 0 2.5% -25%;
    }
    
    h2 {
      margin: 0.3em 0;
    }

    h4 {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>