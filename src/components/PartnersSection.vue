<template>
  <section>
    <div class="container" id="partners-section-container">
      <div class="partners-section-text">
        <h2 class="heading" id="branding"><b>Trusted by</b> </h2>
        <a id="learn-button" class="button primary-button" href="/what">Learn More</a>
      </div>
      <div class="partners-section-icons">
        <!-- TODO: TURN THIS INTO A LOOP FOR CAROUSEL -->

          <div class="swiper-container">
            <div class="swiper-wrapper partners-section-icons">
              <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
              
              
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
              
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
              
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
              
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
               <div class="swiper-slide partners-section-icon-container" id="Paypal">
                <img src="../assets/images/partners-paypal.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="UCI">
                <img src="../assets/images/partners-uci.png"/>
              </div>
              <div class="swiper-slide partners-section-icon-container" id="Hilton">
                <img src="../assets/images/partners-hilton.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="Pierce">
                <img src="../assets/images/partners-pierce.png"/>
              </div>          
              <div class="swiper-slide partners-section-icon-container" id="CSW">
                <img src="../assets/images/partners-csw.png"/>
              </div>
              
             <div class="swiper-pagination"> </div>              
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
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      sliderPerView: 4,
      spaceBetween: 2,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      speed: 10000,
      freeMode: true,
      
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/swiper.min.scss";

.swiper-container {
  width: 110%;
  height: 300vh; 
}
.swiper-wrapper {
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
 }

.swiper-slide{
  width: 100%;
  height: 50%;
    
    /* Center slide text vertically */  
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
}



.section#partners-section {
  height: 50%;
  margin: 1px 0;

  @include medium-screen-landscape {
    min-width: 800px;
    width: auto;
    height: 100vh;
    margin: 0;
    padding-right: 100px;
  }
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

.section#partners-section {
  .partners-section-text {
    min-width: 400px;
    width: 40vw;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #learn-button {
    margin-top: 2em;
  }

  .partners-section-icons {
    display:flex;
    transform: rotate (90deg);
    flex-direction: row;
    margin: 40px 0;
    justify-content: center;
    flex-wrap: nowrap;

    .partners-section-icon-container {
      flex: 0 0 auto;
      margin-top: 20px;
      margin-left: 20px;
      min-width:100px ;
      min-height:100px ;
      max-width:150px;
      max-height:150px ;
      width: 20vw;
      height: 20vw;
      background-color: rgb(254, 255, 254);
      border-radius: 5px;
      box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.15);
      padding: 1%;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      
      .media  
      { 
        -webkit-animation-name: fade-image; 
        -webkit-animation-duration: 1.5s; 
        animation-name: fade-image; 
        animation-duration: 1.5s; 
      }               
      
      }

    }  
  }

  @include medium-screen-landscape{
    .partners-section-icons {
      flex-direction: column;
      align-items: left;

      .partners-section-icon-container {
        margin-top: 30px;
        padding: 10%;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }       
    }
  }   
}
  
</style>