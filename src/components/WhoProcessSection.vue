<template>
  <section>
    <div class="stats-cards">
      <div class="stats-cards-container">
        <Card v-for="(card, index) in cardData" :key="index" :cardHeading="card.cardHeading" :cardDescription="card.cardDescription" :id="'stats-card-' + (index + 1)" :class="card.additionalClass" />
      </div>
    </div>
    <div class="stats-captions">
      <div class="stats-titles">
        <h2 class="heading">
          <span class="line">Our Process</span>
        </h2>
        <!-- <p class="primary-description">90% of customers make purchase decisions based on a website's visual content alone.</p>
        <p class="primary-description">Impress engage and impace potential customers by adding PeekPeek's 360&deg; virtual reality tour to your website. With our results, we could be the best tool in your toolbox</p>
        <h3 id="button-prompt">New źhallenge?</h3>
        <a id="solution-button" class="button primary-button" target="_blank" href="">New solution</a> -->
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
export default class WhoProcessSection extends Vue {
  mounted() {}

  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "82%",
          cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          additionalClass: "",
          cardHeading: "90%",
          cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          additionalClass: "highlight",
          cardHeading: "1%",
          cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        },
        {
          additionalClass: "",
          cardHeading: "Top5",
          cardDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        }
      ]
    };
  }
}
</script>

<style lang="scss">
$card-base-width: 280px;
$card-base-height: 200px;
$overlap-x: 50px;
$overlap-y: 25px;

#who-process-section {
  margin-bottom: 100px;

  .cards {
    margin-top: 5%;

    .stats-cards-container {
      width: $card-base-width * 2;
      height: $card-base-height * 4 + 50px;  // 4 cards
      margin: 0 auto;
      position: relative;
      white-space: initial;

      .card {
        width: $card-base-width;
        min-height: $card-base-height;
        display: flex;
        align-items: center;
        background-color: rgb(254, 255, 254);
        border-radius: 5px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);
        position: absolute;

        .stats-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          padding: 40px;

          .card-heading {
            font-size: 3em;
            line-height: 1em;
            font-weight: 700;
            color: $heading-color;
          }

          .card-description {
            font-size: 0.8em;
            line-height: 1.7em;
            margin-top: 2em;
            font-weight: 400;
            color: $secondary-description-color;
          }
        }

        &.highlight .stats-card-content .card-heading {
            color: $alt-heading-color;
        }
      }

      .card:nth-child(1) {
        z-index: 4;
        top: 0;
        left: $card-base-width - $overlap-x;
      }

      .card:nth-child(2) {
        z-index: 2;
        top: $card-base-height - $overlap-y;
        left: $overlap-x / 4;

      }

      .card:nth-child(3) {
        z-index: 3;
        top: ($card-base-height * 2) - ($overlap-y * 3);
        left: $card-base-width - ($overlap-x / 4);
      }

      .card:nth-child(4) {
        z-index: 1;
        top: ($card-base-height * 3) - ($overlap-y * 4);
        left: $overlap-x;
      }
    }
  }

  .stats-captions {
    display: block;
    text-align: left;
    margin: 5% 5vw;


    .heading {
      margin-bottom: 0.7em;
    }

    #solution-button, #button-prompt {
      display: inline-block;
    }

    #button-prompt {
      font-size: 1.1em;
      font-weight: 700;
      color: $subheading-color;
      margin-top: 3em;
    }

    #solution-button {
      margin-left: 20px;
    }
  }
}
</style>
