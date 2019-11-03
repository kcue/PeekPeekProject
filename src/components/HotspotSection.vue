<template>
  <section>
    <div class="container" id="hotspot-section-container">
      <img class="hotspot-skyline" src="../assets/images/city-with-infopoints.png"/>
      <div class="hotspot-titles">
        <h4 class="subheading">It's not just the place</h4>
        <h2 class="heading">
          <span class="line">Tell me about&nbsp;</span>
          <span class="line">your history</span>
        </h2>
        <h4 class="subheading">with the hotspots!</h4>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class HotspotSection extends Vue {
}
</script>

<style lang="scss">
#hotspot-section {
  margin: 50px 0 100px;

  @include medium-screen-landscape {
    margin: 0;
    min-width: 1200px;

    &:before {
      display: inline-block;
      content: '';
      vertical-align: middle;
      height: 100vh;
      min-height: $site-min-height;
    }
  }

  #hotspot-section-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include medium-screen-landscape {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      height: $site-min-height;
    }

    @include extra-large-screen-landscape {
      height: 800px;
    }
  }

  .hotspot-skyline {
    width: 90%;
    object-fit: contain;

    @include medium-screen-landscape {
      width: 70%;
      height: 55%;
      position: absolute;
      top: 5%;
      left: 0;
    }
  }

  .hotspot-titles {
    min-width: 450px;
    width: 60%;
    text-align: left;
    white-space: initial;
    margin-top: 5%;

    @include small-screen-landscape {
      margin-left: 28%;
    }

    @include medium-screen-landscape {
      width: 50%;
      position: absolute;
      bottom: 10%;
      left: 45%;
      z-index: 10;
      margin: 0;
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