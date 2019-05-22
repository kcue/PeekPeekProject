<template>
  <div>
    <div>PLACEHOLDER FOR THE 360 VIDEO GRID IGNORE THIS</div>
    <h1>Every single one of you is special.</h1>
    <Buttons v-bind:buttonList="buttonList" />
  </div>
</template>

<script lang="ts">
import Buttons from "./Buttons.vue";

export default {
  name: "360VideoSection",
  components: {
    Buttons
  },
  data() {
    return {
      buttonList: [
        {
          id: 5,
          label: "Check out case studies",
          target: "_blank"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
