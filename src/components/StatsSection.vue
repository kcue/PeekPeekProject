<template>
  <section>
    <div class="stats-cards">
      <div class="stats-cards-container">
        <StatsCard v-for="(card, index) in cardData" :key="index" :cardHeading="card.cardHeading" :cardDescription="card.cardDescription" :id="'stats-card-' + (index + 1)" :class="card.additionalClass" />
      </div>
    </div>

    <div class="stats-captions">
      <div class="stats-titles">
        <h2 class="stats-heading">Seeing is believing</h2>
        <p class="stats-subtext">90% of customers make purchase decisions based on a website's visual content alone.</p>
        <p class="stats-subtext">Impress engage and impace potential customers by adding PeePeek's 360&deg; virtual reality tour to your website. With our results, we could be the best tool in your toolbox</p>
        <h3 id="button-prompt">New challenge?</h3>
        <a id="solution-button" class="button primary-button" target="_blank" href="">New solution</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatsCard from "@/components/StatsCard.vue";

@Component({
  components: {
    StatsCard
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
$card-base-width: 270px;

#stats-section {
  .stats-cards {
    .stats-cards-container {
      width: $card-base-width * 2;
      min-height: 100vh;
      margin: 0 auto;
      position: relative;

      .stats-card {
        width: $card-base-width;
        height: $card-base-width;
        display: block;
        background-color: rgb(254, 255, 254);
        border-radius: 10px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);

        .stats-card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;

          p {
            color: black;
          }

          .card-heading {
            font-size: 9vh;
            font-weight: 700;
          }

          .card-description {
            font-size: 2.5vh;
            font-weight: 400;
          }
        }
      }

      .stats-card:nth-child(1) {
        z-index: 4;
      }

      .stats-card:nth-child(2) {
        z-index: 2;
      }

      .stats-card:nth-child(3) {
        z-index: 3;
      }

      .stats-card:nth-child(4) {
        z-index: 1;
      }
    }
  }

  .stats-captions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;

    .stats-captions {
      margin-left: 40px;
    }

    #work {
      font-size: 60px;
      margin: 0;
    }
    
    #stat-subtext {
      color: gray;
    }

    #solution-button, #button-prompt{
      color: gray;
      display: inline;
    }

    #solution-button {
      margin-left: 20px;
    }
  }
}
</style>
