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
          <span class="line">Seeing is&nbsp;</span>
          <span class="line">believing</span>
        </h2>
        <p class="primary-description">90% of customers make purchase decisions based on a website's visual content alone.</p>
        <p class="primary-description">Impress engage and impace potential customers by adding PeekPeek's 360&deg; virtual reality tour to your website. With our results, we could be the best tool in your toolbox</p>
        <h3 id="button-prompt">New challenge?</h3>
        <a id="solution-button" class="button primary-button" href="./who">New solution</a>
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
export default class StatsSection extends Vue {
  mounted() {}

  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "82%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "",
          cardHeading: "90%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "highlight",
          cardHeading: "1%",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        },
        {
          additionalClass: "",
          cardHeading: "Top5",
          cardDescription: "Lorem Ipsum is simply dummy text.",
        }
      ]
    };
  }
}
</script>

<style lang="scss">
// $card-base-height: 200px;
$overlap-x: 5%;
$overlap-y: 4%;

#stats-section {
  margin-bottom: 50px;

  @include medium-screen-landscape {
    width: 100vw;
    min-width: 1000px;
    margin-right: 10vw;
    margin-left: 50px;
    margin-bottom: 0;
  }

  .stats-cards {
    margin-top: 5%;

    @include medium-screen-landscape {
      display: inline-block;
      vertical-align: middle;
      width: 50%;
      height: 100%;
      margin-top: 0;
    }

    .stats-cards-container {
      width: 80%;
      min-width: $site-min-width;
      max-width: 600px;
      margin: 0 auto;
      padding: 5% 0;
      white-space: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @include medium-screen-landscape {
        width: 90%;
        height: 100%;
        margin-left: 20px;
      }

      .card {
        width: 52%;
        display: flex;
        align-items: center;
        background-color: rgb(254, 255, 254);
        border-radius: 10px;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15);

        @include medium-screen-landscape {
          width: 52%;
          min-height: 25%;
        }

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 15%;

          .card-heading {
            font-size: 3em;
            line-height: 1em;
            font-weight: 700;
            color: $heading-color;

            @include medium-screen-landscape {
              font-size: 2em;
            }
          }

          .card-description {
            font-size: 1.2em;
            line-height: 1.7em;
            margin-top: 1em;
            font-weight: 400;
            color: $secondary-description-color;

            @include medium-screen-landscape {
              font-size: 1em;
              line-height: 1.7em;
              margin-top: 1.2em;
            }
          }
        }

        &.highlight .card-content .card-heading {
            color: $alt-heading-color;
        }
      }

      .card:nth-child(1) {
        z-index: 4;
        margin-top: 0;
        margin-right: $overlap-x;
        align-self: flex-end;
      }

      .card:nth-child(2) {
        z-index: 2;
        margin-top: -1 * $overlap-y;
        margin-left: 0;
        align-self: flex-start;
      }

      .card:nth-child(3) {
        z-index: 3;
        margin-top: -4 * $overlap-y;
        margin-right: 0;
        align-self: flex-end;
      }

      .card:nth-child(4) {
        z-index: 1;
        margin-top: -2 * $overlap-y;
        margin-left: $overlap-x;
        align-self: flex-start;
      }
    }
  }

  .stats-captions {
    display: block;
    text-align: left;
    margin: 5% 5vw;

    @include medium-screen-landscape {
      width: 50vw;
      max-width: 450px;
      display: inline-block;
      vertical-align: middle;
      white-space: initial;
      margin-left: 5vw;
    }

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
