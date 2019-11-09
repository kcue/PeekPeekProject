<template>
  <section>
    <div class="container" id="process-section-container">
      <h2 class="alt-heading">Our Process</h2>
      <div class="process-cards">
        <div class="process-cards-container">
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
export default class ProcessSection extends Vue {
  data() {
    return {
      cardData: [
        {
          additionalClass: "",
          cardHeading: "Free Consultation",
          cardDescription: "Our sales agents will do an on-site visit to provide an in-depth explanation of our services, technology, and process and to provide an estimate for the project efforts.",
        },
        {
          additionalClass: "",
          cardHeading: "Photoshoot",
          cardDescription: "Our photographers will perform a photo shoot of your location at an agreed date and time.",
        },
        {
          additionalClass: "",
          cardHeading: "Design",
          cardDescription: "PeekPeek's UX/UI designers will design the layout of your new WebTour. Each function will be tested with focus groups to ensure an optimal user experience.", 
        },
        {
          additionalClass: "",
          cardHeading: "Final Review",
          cardDescription: "After we have finished wireframe mock ups, we will present the deliverable to make sure you are satisfied with your new tour.", 
        },
        {
          additionalClass: "",
          cardHeading: "Hosting Service",
          cardDescription: "We will host your tour on Amazon WebServer. You can choose your custom URL. We will perform monthly maintenance service and update your tour content if needed.", 
        },
      ]
    };
  }
}
</script>

<style lang="scss">
$card-base-height: 200px;   // TODO: consider moving to _variables.scss;
$overlap-y: 5%;

#process-section {
  position: relative;
  padding-top: 50px;
  margin-bottom: 50px;

  #process-section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    @include medium-screen-landscape {
      flex-direction: row;
      align-items: flex-start;
    }

    h2 {
      margin-top: 5%;
      margin-right: 0%;
      margin-bottom: 5%;
      margin-left: 5%;
      min-width: 250px;
      width: 100%;

      @include medium-screen-landscape {
        margin-right: 2.5%;
        width: 15%;
      }

      @include large-screen-landscape {
        margin-right: 15%;
      }
    }
  }

  .process-cards {
    .process-cards-container {
      // width: 75%;
      // min-width: $site-min-width;
      // max-width: 760px;
      // margin: 1.5em auto 0;
      white-space: initial;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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
      }

      .card:nth-child(1) {
        z-index: 1;
      }

      @for $i from 2 through 5 {    // iterate through card 2 to card 5
        .card:nth-child(#{$i}) {
          z-index: $i;
          margin-top: -1 * $overlap-y;
        }
      }

      .card:nth-child(odd) {
        align-self: flex-start;
      }

      .card:nth-child(even) {
        align-self: flex-end;
      }

    }
  }
}
</style>
