<template>
    <section>
        <div class = "video-header">
          <h1 id = "welcome"> Welcome to <br/> the webtour</h1>
          <h2 id="fullexperience">It's the full <br/>experience</h2>
          <button id="learn-button"><a target="_blank" href="">Learn More</a></button>
        </div> 
        <div class="video-section-container" onclick="openLink()" >

          <iframe class = "media"
          id = "firstVideo"
          width="50%" 
          height="50%" 
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
.peek-section{
  flex-direction: column;
  justify-content: center;
  .video-header{
    text-align: left;
    
    #welcome{
      margin-top: -5%;
      font-size: 70px;
    }
    #fullexperience{
      color:grey;
      font-size:35px;
      
    }
  }

  .video-section-container {
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


    h2 {
      font-weight: normal;
      margin-top: 20px;
      margin-bottom: 0;
      
    }
  }
}
</style>
