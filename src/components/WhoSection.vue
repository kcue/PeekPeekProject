<template>
  <section>
    <div class="container" id="who-section-container">
      <img class="top-image" src="../assets/images/who-laptop.png">
      <img class="bottom-image" src="../assets/images/who-main_image.png">
      <div class="heading-group">
        <h1 class="heading">Who</h1>
        <h2 class="subheading">Marketing Tech</h2>
        <h2 class="alt-subheading">Modern Approach</h2>
      </div>
      <div class="who-cards">
        <div class="who-cards-container">
          <Card v-for="(card, index) in cardData" :key="index" :cardHeading="card.cardHeading" :cardDescription="card.cardDescription" :id="'card-' + (index + 1)" :class="card.additionalClass" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class WhoSection extends Vue {
  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "Who we are",
          cardDescription: "PeekPeek was created to help companies enhance the way that they present themselves through digital means. PeekPeek's WebTour technology converts prospects to customers by allowing them to virtually visit and experience a company's physical location. Surpassing other 3D technologies, WebTour seamlessly integrates customized design, digital assets, and interactive features to dramatically augment the experience of users.",
        },
        {
          additionalClass: "",
          cardHeading: "Our Product",
          cardDescription: "WebTour enables quick and easy maneuvering throughout a virtual space. A powerful tool to motivate online visitors to visit physical businesses and locations.",
        },
        {
          additionalClass: "",
          cardHeading: "A fully immersive solution for all industries",
          cardDescription: "Real Estate<br/><br/>Hospitality & Travel<br/><br/>Retail<br/><br/>News & Entertainment<br/><br/>Education", 
        },
      ]
    };
  }
}
</script>

<style lang="scss">
$card-base-height: 200px;
$overlap-y: 5%;

#who-section {
  position: relative;
  padding-bottom: 100px;
  margin-bottom: 50px;

  #who-section-container {
    min-width: $site-min-width;
    width: 80%;
    margin: 0 auto;

    .top-image, .bottom-image {
      position: absolute;
      z-index: -1;
    }

    .top-image {
      min-width: 200px;
      width: 35%;
      top: 10%;
      right: -35px;

      @include small-screen-landscape {
        min-width: 250px;
        right: 0;
      }
    }

    .bottom-image {
      min-width: 320px;
      width: 55%;
      height: 60%;
      object-fit: cover;
      left: 0;
      bottom: 0;

      @include small-screen-landscape {
        min-width: 420px;
      }
    }

    h1 {
      padding-top: 2.5em;
      margin-bottom: 0.4em;
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
  }

  .who-cards {
    .who-cards-container {
      width: 75%;
      min-width: $site-min-width;
      max-width: 760px;
      margin: 1.5em auto 0;
      white-space: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include large-screen-landscape {
        margin-top: -2em;
      }

      .card {
        min-width: 300px;
        width: 55%;
        display: flex;
        align-items: center;
        background-color: rgb(254, 255, 254);
        border-radius: 5px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 12%;

          .card-heading {
            font-size: 2em;
            line-height: 1.2em;
            font-weight: 700;
            color: $alt-heading-color;
          }

          .card-description {
            font-size: 0.8em;
            line-height: 1.6em;
            margin-top: 2em;
            font-weight: 400;
            color: $primary-description-color;
          }
        }

        &:nth-child(3) .card-description {
          line-height: 1.2em;
          font-weight: 700;
        }
      }

      .card:nth-child(3n-2) {
        z-index: 1;
      }

      .card:nth-child(3n-1) {
        z-index: 2;
        margin-top: -1 * $overlap-y;
      }

      .card:nth-child(3n) {
        z-index: 3;
        margin-top: -1 * $overlap-y;
      }

      .card:nth-child(odd) {
        align-self: flex-end;
      }

      .card:nth-child(even) {
        align-self: flex-start;
      }

    }
  }
}
</style>
