<template>
  <section>
    <div class="container" id="video-section-container">
      <h2 class="heading">
        <span class="line">Welcome to&nbsp;</span>
        <span class="line">the webtour</span>
      </h2>
      <div class="content-group">
        <h3 class="subheading">
          <span class="line">It's the full&nbsp;</span>
          <span class="line">experience</span>
        </h3>
        <a id="learn-button" class="button primary-button" href="/what">Learn More</a>
      </div>
      <div class="video-wrapper" onclick="openLink()">
        <iframe class="media" id="firstVideo" 
          frameborder="0" allowfullscreen="" scrolling="no"
          src="https://www.youtube-nocookie.com/embed/s4EEhXH_pz0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
        <img src="../assets/images/video-arrow.png"/>   
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
  margin-bottom: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include medium-screen-landscape {
    display: inline-block;
    min-width: 900px;
    width: 100%;
    height: auto;
    text-align: center;

    &:before {
      display: inline-block;
      content: '';
      vertical-align: middle;
      height: 100vh;
      min-height: $site-min-height;
    }
  }

  #video-section-container {
    white-space: initial;
    display: inline-block;
    vertical-align: middle;

    .heading, .content-group, #learn-button {
      margin: 2.5% 0 0;
      text-align: center;
    }

    @include medium-screen-landscape {
      width: auto;

      .heading {
        text-align: left;
        margin: 0;
        width: 100%;
      }

      .content-group {
        float: left;
        text-align: left;
        margin: 0;
        width: 28%;

        .subheading {
          margin: 5% 0;
        }

        #learn-button {
          margin: 0;
        }
      }
    }

    .video-wrapper {
      $video-min-width: 300px;
      $video-max-width: 600px;
      $video-min-height: 300px;

      position: relative;
      margin: 5% auto 40px auto;
      min-width: $video-min-width;
      width: 80vw;

      @include medium-screen-landscape {
        width: 62.5%;
        float: left;
        margin: 5% 7.5% 40px 2%;   // margins to make space for the arrow
      }

      @include high-res-screen-landscape {
        // width: 68%;
      }

      iframe {
        min-width: $video-min-width;
        min-height: $video-min-height;
        max-height: 400px;
        width: 80vw;
        height: 50vw;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);

        @include medium-screen-landscape {
          width: 100%;
          height: 50vh;
        }

        @include high-res-screen-landscape {
          max-height: 500px;
          // width: 68%;
        }
      }

      @keyframes arrow-bounce {
        0%   { transform: translate(0, 0); }
        50%  { transform: translate(0, -5%); }
        100% { transform: translate(0, 0); }
      }

      img {
        position: absolute;
        width: 70px;
        bottom: -25px;
        right: -30px;
        animation-name: arrow-bounce;
        animation-timing-function: linear;
        animation-duration: 2s;
        animation-iteration-count: infinite;

        @include medium-screen-landscape {
          width: 100px;
          bottom: -40px;
          right: -45px;
        }

        @include high-res-screen-landscape {
          width: 160px;
          bottom: -50px;
          right: -70px;
        }
      }
    }
  }
}
</style>
