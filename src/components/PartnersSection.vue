<template>
  <section>
    <div class="container" id="partners-section-container">
      <div class="partners-section-text">
        <h2 class="heading" id="branding"><b>Trusted by</b> </h2>
        <a id="learn-button" class="button primary-button" href="/what">Learn More</a>
      </div>
      <div class="swiper-container" id="logo-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide logo" id="Paypal">
            <img src="../assets/images/partners-paypal.png"/>
          </div>
          <div class="swiper-slide logo" id="UCI">
            <img src="../assets/images/partners-uci.png"/>
          </div>
          <div class="swiper-slide logo" id="Hilton">
            <img src="../assets/images/partners-hilton.png"/>
          </div>          
          <div class="swiper-slide logo" id="Pierce">
            <img src="../assets/images/partners-pierce.png"/>
          </div>          
          <div class="swiper-slide logo" id="CSW">
            <img src="../assets/images/partners-csw.png"/>
          </div>           
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class PartnersSection extends Vue {
  mounted() {
    var mySwiper = new Swiper (".swiper-container", {
      // Optional parameters
      direction: "horizontal",
      updateOnWindowResize: true,
      loop: true,
      loopedSlides: 4,
      loopAdditionalSlides: 8,
      sliderPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      speed: 10000,
      freeMode: true,
      freeModeMomentumBounce: false,
      // freeModeMomentumRatio: .1,
      // freeModeSticky: true,
      breakpoints: {
        768: {
          direction: "vertical",
        }
      }
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/swiper.min.scss";

.section#partners-section {
  height: 50%;

  @include medium-screen-landscape {
    min-width: 800px;
    width: auto;
    height: 100vh;
    margin: 0;
    padding: 0 100px;
  }

  #partners-section-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include medium-screen-landscape{
      display: flex;
      flex-direction: row;
    }
  }

  .partners-section-text {
    min-width: 450px;
    width: 30vw;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #learn-button {
    margin-top: 2em;
  }

  #logo-slider {
    min-width: 200px ;
    // min-height: 200px ;
    max-width: 250px;
    // max-height:150px ;
    width: 20%;
    height: 100vh;
    overflow: visible;

    .swiper-wrapper {
      -webkit-transition-timing-function: linear !important;
      -o-transition-timing-function: linear !important;
      transition-timing-function: linear !important;
    }

    .swiper-slide{
      width: 100%;
      height: 50%;
      // min-width:100px ;
      // min-height:100px ;
      // max-width:150px;
      // max-height:150px ;
      // width: 20vw;
      // height: 20vw;

      /* Center slide text vertically */  
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-wrapper {
      // display:flex;
      // transform: rotate (90deg);
      // flex-direction: row;
      margin: 0;
      // justify-content: center;
      // flex-wrap: nowrap;

      .logo {
        // margin-top: 20px;
        // margin-left: 20px;
        // min-width:100px ;
        // min-height:100px ;
        // max-width:150px;
        // max-height:150px ;
        // width: 20vw;
        // height: 20vw;
        background-color: rgb(254, 255, 254);
        border-radius: 5px;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.15);
        // padding: 1%;

        img {
          // height: 100%;
          // width: 100%;
          height: 20vw;
          width: auto;
          object-fit: contain;
        
        // .media  
        // { 
        //   -webkit-animation-name: fade-image; 
        //   -webkit-animation-duration: 1.5s; 
        //   animation-name: fade-image; 
        //   animation-duration: 1.5s; 
        // }               
        }
      }
    }  
  }

  @include medium-screen-landscape{
    .swiper-wrapper {
      // flex-direction: column;
      // align-items: left;

      .logo {
        // margin-top: 30px;
        // padding: 10%;

        img {
          // height: 100%;
          // width: 100%;
          object-fit: contain;
        }
      }       
    }
  }   
}
  
</style>