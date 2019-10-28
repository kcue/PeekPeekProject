<template>
    <section class="peek-section" id="video-section">
        <div class = "video-header">
          <h1 id = "welcome"> Welcome to <br/> the webtour</h1>
          <h2 id="fullexperience">It's the full <br> experience</h2>
          <button id="learn-button"><a target="_blank" href="">Learn More</a></button>
        </div> 
        <div class="video-section-container">

          <iframe class = "media"
          id = "firstVideo"
          width="100%" 
          height="100%" 
          src="https://www.youtube-nocookie.com/embed/s4EEhXH_pz0" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen=""
          scrolling="no"></iframe>
            
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VideoSection extends Vue {}
</script>

<style lang="scss" scoped>
.video-header{
  margin-top: 50px;
  #welcome{
    font-size: 50px;
  }
  #fullexperience{
    color: silver;
  }

}

.video-section-container {
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  width: 80%;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;

  iframe {
    margin: 0 auto;
    pointer-events: none;
  }

  h2 {
    font-weight: normal;
    margin-top: 20px;
    margin-bottom: 0;
    text-align: left;
  }
}
</style>
