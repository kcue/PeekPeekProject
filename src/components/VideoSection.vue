<template>
  <section>
    <div class="container" id="video-section-container">
      <div class="video-header">
        <h2 class="heading">
          <span class="line">Welcome to&nbsp;</span>
          <span class="line">the webtour</span>
        </h2>
        <h2 class="subheading">
          <span class="line">It's the full&nbsp;</span>
          <span class="line">experience</span>
        </h2>
        <a id="learn-button" class="button primary-button" target="_blank" href="">Learn More</a>
      </div> 
      <div class="video-wrapper" onclick="openLink()" >
        <iframe class="media" id="firstVideo" 
          width="50%" height="50%" frameborder="0" allowfullscreen="" scrolling="no"
          src="https://www.youtube-nocookie.com/embed/s4EEhXH_pz0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
        <img src="../assets/images/video-arrow.png" />   
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class VideoSection extends Vue {}
</script>

<style lang="scss">
#video-section {
  #video-section-container {
    white-space: initial;

    .video-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      .heading {

      }
      .subheading {

      }
    }
    .video-wrapperr{
      margin-top: 10vh;
      margin-bottom: 10vh;
      display: flex;
      width: 80%;
      max-width: 1200px;
      iframe {
        margin: 0 auto;
        pointer-events: none;
        position: absolute;
        bottom: 100px;
        right: 35%;
      }
    }
  }
}
</style>
