<template>
  <section>
    <div class="container" id="partners-section-container">
      <div class="partners-section-text">
        <h2 class="heading" id="branding">Trusted by</h2>
        <a id="partners-learn-button" class="button primary-button" href="/what">Learn More</a>
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
  numLogos: number = 5;
  mySwiper: any = {};
  swiperResizeHandler: any = Vue.prototype.$_.debounce(this.swiperUpdate, 2000);
  swiperOptions: any = {
    direction: "horizontal",
    loop: true,
    loopedSlides: this.numLogos,
    loopAdditionalSlides: this.numLogos * 2,
    sliderPerView: "auto",
    spaceBetween: 20,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 10000,
    freeMode: true,
    freeModeMomentumBounce: false,
    // breakpoints: {
    //   768: {
    //     direction: "vertical",
    //   }
    // },
  }

  swiperUpdate() {
    this.mySwiper.destroy(false, true);

    var isVerticalLayout = Vue.prototype.common.isVerticalLayout()
    if (isVerticalLayout) {
      this.swiperOptions.direction = "horizontal";
    } else {
      this.swiperOptions.direction = "vertical";
    }
    this.mySwiper = new Swiper (".swiper-container", this.swiperOptions);
  }

  mounted() {
    var isVerticalLayout = Vue.prototype.common.isVerticalLayout()
    if (isVerticalLayout) {
      this.swiperOptions.direction = "horizontal";
    } else {
      this.swiperOptions.direction = "vertical";
    }
    this.mySwiper = new Swiper (".swiper-container", this.swiperOptions);

    window.addEventListener('resize', this.swiperResizeHandler);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.swiperResizeHandler);
    this.mySwiper.destroy(true, true);
  }
}
</script>

<style lang="scss">
@import "@/assets/css/swiper.min.scss";

.section#partners-section {
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

    @include medium-screen-landscape {
      display: flex;
      flex-direction: row;
    }
  }

  .partners-section-text {
    min-width: 450px;
    width: 30vw;
    margin-left: 20px;
    margin-bottom: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include medium-screen-landscape {
      margin-bottom: 0;
    }
  }

  #partners-learn-button {
    margin: 2em 0 0;
    text-align: center;
  }

  #logo-slider {
    width: 20vh;
    min-width: 150px;
    max-width: 200px;
    height: 20vh;
    min-height: 150px;
    max-height: 200px;
    overflow: visible;

    @include medium-screen-landscape {
      min-width: 170px;
      max-width: 200px;
      min-height: 170px;
      max-height: 200px;
    }

    .swiper-slide{
      /* Center slide contents */  
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-wrapper {
      -webkit-transition-timing-function: linear !important;
      -o-transition-timing-function: linear !important;
      transition-timing-function: linear !important;
      margin: 0;

      .logo {
        background-color: rgb(254, 255, 254);
        border-radius: 5px;
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);

        img {
          height: 60%;
          width: 60%;
          object-fit: contain;              
        }
      }
    }  
  } 
}
  
</style>