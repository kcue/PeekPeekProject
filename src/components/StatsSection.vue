<template>
  <div>
    <!--<div id="we-do-work">We do work</div>-->
    <!--<div id="better-than-most" class="container">-->
    <!--better than most, actually.-->
    <div>
      <h1 id="we-do-work">
        We do work
        <span id="better-than-most" class="container"
          >better than most, actually.</span
        >
      </h1>
      <h2>New Challenge?</h2>
      <h2>New Solution</h2>
      <Cards v-bind:cardsList="cardsList" />
    </div>
    <Cards v-bind:cardsList="cardsList" />
  </div>
</template>

<script lang="ts">
import Cards from "./Cards.vue";

export default {
  name: "StatsSection",
  components: {
    Cards
  },
  data() {
    return {
      cardsList: [
        {
          id: 1,
          num: "18x",
          words: "longer stay!"
        },
        {
          id: 2,
          num: "130%",
          words: "booking rate!"
        },
        {
          id: 3,
          num: "12%",
          words: "increase in engagement rate!"
        },
        {
          id: 4,
          num: "28%",
          words: "physical visit!"
        }
      ]
    };
  }
};
</script>

<style scoped>
#we-do-work {
  font-size: 60px;
  font-family: "Libre Franklin", sans-serif;
}
#better-than-most {
  font-size: 40px;
  letter-spacing: -0.75px;
}
.container {
  width: 40%;
  text-align: right;
}
</style>
