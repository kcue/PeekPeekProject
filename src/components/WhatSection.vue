<template>
  <section>
    <div class="container" id="what-section-container">
      <div class="group">
        <h1 class="heading">What</h1>
        <h2 class="subheading">This is what we do</h2>
        <h2 class="alt-subheading">and how we do it</h2>
      </div>
      <div class="what-cards group">
        <div class="what-cards-container">
          <FeatureCard v-for="(item, index) in cardData" :key="index" :id="'feature-card-' + index" :class="'feature-card ' + item.layoutClasses">
            <h6 slot="title" class="alt-subheading">{{ item.title }}</h6>
            <div slot="content" class="feature-content">
              <div class="text" v-html="item.content"></div>
              <a class="button primary-button" href="#works-section">{{ item.btnText }}</a>
            </div>
            <img slot="img" :src="imagePath( item.img )"/>  
          </FeatureCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeatureCard from "@/components/FeatureCard.vue";

@Component({
  components: {
    FeatureCard
  }
})
export default class WhatSection extends Vue {
  data() {
    return {
      imagePath: function (name:string): any {
        return require("../assets/images/" + name)
      }, 
      cardData: [
        {
          layoutClasses: "",
          title: "What we can do",
          content: "1. High-resolution immersive experience<br><br>2. Intuitive user-friendly interface<br><br>3. Gadgets and app free<br><br>4. Customized design<br><br>5. Low cost",
          btnText: "Check out a Demo",
          img: "feature-shop.jpg",
        }
      ]
    };
  }
}
</script>

<style lang="scss">
$card-base-height: 200px;
$overlap-y: 5%;

#what-section {
  position: relative;
  padding-bottom: 50px;

  #what-section-container {
    min-width: $site-min-width;
    width: 80%;
    margin: 0 auto;

    @include medium-screen-landscape {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 90%;
      margin-top: 10%;

      .group {
        flex: 0 0 auto;

        &:not(.what-cards) {
          min-width: 280px;
          max-width: 380px;
          width: 35%;
        }

        &.what-cards {
          width: 60%;
        }
      }
    }

    h1 {
      padding-top: 2.5em;
      margin-bottom: 0.4em;

      @include medium-screen-landscape {
        padding-top: 1.5em;
      }
    }

    h2 {
      line-height: 1.1em;
    }

    h1, h2 {
      margin-left: 5%;

      @include small-screen-landscape {
        margin-left: 0;
      }
    }

    .what-cards {
      .what-cards-container {
        width: 75%;
        min-width: $site-min-width;
        max-width: 760px;
        margin: 1.5em auto 0;
        white-space: initial;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .feature-card {
          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            align-self: flex-start;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: 0px 0px 20px rgba(#000, 0.1);
            width: 95%;
            min-height: 220px;
            max-height: 300px;
            height: 40vh;
          }

          .text-container {
            align-self: flex-end;
            background-color: #FFF;
            white-space: normal;
            box-shadow: -10px 0px 20px rgba(#000, 0.1);
            border-radius: 5px;
            min-width: 250px;
            width: 95%;
            padding: 2em 3em;
            margin-top: -2em;
            
            .alt-subheading {
              line-height: 1.2em;
            }

            .text {
              margin-top: 2em;
              color: $primary-description-color;
              font-weight: 700;
              font-size: 0.8em;
              line-height: 1.2em;
            }
          }

          .button {
            margin: 2em 0 0;
          }
        }
      }
    }
  }  
}
</style>
