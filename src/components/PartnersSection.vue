<template>
  <section>
    <div class="container" id = "partners-section-container">
      <div class="partners-section-text">
        <h2 class="heading" id="branding"><b>Trusted by</b> </h2>
        <a id="learn-button" class="button primary-button" target="_blank" href="">Learn More</a>
        
      </div>
      <div class="partners-section-icons">
        <div class="partners-section-icon-container media" id="Paypal">
          <img src="../assets/images/Paypal.png"/>
        </div>
        <div class="partners-section-icon-container media" id="UCI">
          <img src="../assets/images/UCI.png"/>
        </div>
        <div class="partners-section-icon-container media" id="Hilton">
          <img src="../assets/images/Hilton.png"/>
        </div>
        <div class="partners-section-icon-container media" id="Pierce">
          <img src="../assets/images/Pierce College.png"/>
        </div>
      </div>
      <div class="partners-section-icons-padding"></div>
    </div>
  </section>
</template>



<style lang="scss" scoped>

#partners-section-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
@include medium-screen-landscape{
  #partners-section-container{
    display: flex;
    flex-direction: row;
  }
}

#partners-section {
  #partners-section{
  height: auto;
  min-height: initial;
  margin-top: 100px;
  margin-bottom: 100px;
}
@media (max-width: 767px){


    &:before {
      display: inline-block;
      content: '';
      vertical-align: middle;
      height: 50vh;
      // min-height: $site-min-height;
    }
}


  .partners-section-text {
    min-width: 500px;
    width: 40vw;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #learn-button {
    margin-top: 2em;
  }
  .partners-section-icons{
    display:flex;
    flex-direction: row;
    margin: 20px 0 40px;
    justify-content: center;
    .partners-section-icon-container {
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
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);
        
        padding: 5%;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

      }  
  }
  @include medium-screen-landscape{
    .partners-section-icons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      flex-wrap: nowrap;

      .partners-section-icon-container {
        min-width:175px ;
        min-height:175px ;
        max-width:300px;
        max-height:300px ;
        width: 20vw;
        height: 20vw;
        background-color: rgb(254, 255, 254);
        border-radius: 5px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);
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