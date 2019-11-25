<template>
  <section>
    <div id="home-section-trigger" class="trigger"></div>
    <div class="container" id="home-section-container">
      <div class="home-pic">
        <img id="inner" src="../assets/images/home-globe-inner.png" />
        <img id="outer" src="../assets/images/home-globe-outer.png"/>
      </div>
      <div class="home-section-headers">
       <div class="primary">
        	<h2 id="splash-text">Pictures are worth 1,000 words -</h2>
          <h2 id="highlight-text"><span id="degree">360&deg;&nbsp;</span><span id="vt-text">Virtual Tours:</span>&nbsp;<span id="millions">Millions</span></h2>
          <div class="home-section-buttons">
            <a class="button primary-button" v-on:click.prevent="common.appScrollTo('#video-section')" href="#">Watch a video</a>
            <a class="button secondary-button" href="/why">Take a peek</a>
          </div>
        </div>      
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class HomeSection extends Vue {
  mounted() {
    var startSplashScreen = this.splashScreen;
    const splashScene = Vue.prototype.$scrollmagic.scene({
        triggerElement: "#home-section-trigger",
        triggerHook: 0.5,
        reverse: false // only do once
      })
      .on('start', function() {
        setTimeout(function() { 
          startSplashScreen();
        }, 1000);
      })
			//.setClassToggle("#home-section-container", "animate") // add class toggle
			//.addIndicators(); // add indicators (use for debugging)
		Vue.prototype.$scrollmagic.addScene(splashScene);
  }
  
  splashScreen() {
    document.getElementById("home-section-container")!.classList.add("animate");
  }
}
</script>

<style lang="scss">
#home-section-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: $site-min-height;
  height: 100vh;

  @include medium-screen-landscape {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
  
  .home-pic {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
      width: 90%;
      min-width: $site-min-height / 2;
      max-width: 50vw;

      @include medium-screen-landscape {
        width: 80%;
        max-width: 700px;
      }
    }

    #outer {
      position: absolute;
      animation: rotating 100s linear infinite;
      transform-origin: 50% 50%;
      z-index: -1;
    }

    @keyframes rotating {
      100% {
        transform: rotate(360deg);
      }
    }
  }

  
  .home-section-headers {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-left: 0px;

    @include medium-screen-landscape {
      white-space: normal;
      text-align: left;
      flex-basis: 80%;
    }

    @include large-screen-landscape {
      flex-basis: 60%;
    }

    @include extra-large-screen-landscape {
      flex-basis: 50%;
    }

    .primary {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      color: $alt-heading-color;

      #splash-text {
        color: $heading-color;
        margin: 20px 0 10px;

        @include medium-screen-landscape {
          margin: 0;
        }
      }

      #highlight-text {
        font-size: 3em;
        line-height: 1.1em;
        
        span {
          display: inline-block;
        }

        @include medium-screen-landscape {
          font-size: 2em;
        }

        #degree {
          @include medium-screen-landscape {
            display: block;
            font-size: 3em;
            line-height: 1.1em;
          }
        }

        #millions {
          color: $heading-color;
        }
      }
    }
  }

  .home-section-buttons {
    text-align: center;

    @include medium-screen-landscape {
      text-align: left;
      margin-top: 25px;
    }

    .button {
      margin-top: 1em;

      @include medium-screen-landscape {
        width: 160px;
      }

      @include large-screen-landscape {
        width: 170px;
      }
    }
  }
  
  // styles below this point control the animations
  * {
    transition: opacity 1s ease, width 1s ease, height 1s ease, flex-basis 1s ease, transform 1s ease, font-size 1s ease;
  }
  
  .home-section-headers {
    width: 0;
    height: 0;
    opacity: 0;
    flex-basis: 0;
    
    #splash-text {
      transition: font-size 1s ease 2s;
      font-size: 3em;
      opacity: 1;
    }
    
    #highlight-text {
      transition-delay: 2s;
      height: 0;
      
      #degree {
        transition-delay: 2.5s;
        opacity: 0;
      }
      
      #vt-text {
        transition-delay: 2.7s;
        opacity: 0;
      }
      
      #millions {
        transition-delay: 3.5s;
        opacity: 0;
        transform: translateY(1em);
      }
    }
  }
  
  .home-section-buttons {
    transition-delay: 4.5s;
    opacity: 0;
    height: 0;
  }
  
  &.animate {
    .home-section-headers {
      width: 100%;
      height: 100%;
      opacity: 1;
    
      @include medium-screen-landscape {
        flex-basis: 80%;
      }

      @include large-screen-landscape {
        flex-basis: 60%;
      }

      @include extra-large-screen-landscape {
        flex-basis: 50%;
      }
      
      #splash-text {
        font-size: 1.2em;
        opacity: 1;
      }
      
      #highlight-text {
        height: 100%;
        
        #degree {
          opacity: 1;
        }
        
        #vt-text {
          opacity: 1;
        }
        
        #millions {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    
    .home-section-buttons {
      opacity: 1;
      height: 100%;
    }
  }
}
</style>
