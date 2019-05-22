<template>
  <div class="flex-container">
    <img src="../assets/MountainBG.jpg" class="mountain-pic" />
    <div id="about-you" style="flex-grow: 1">It's all about you.</div>
    <div id="sep-and-btns">
      <div class="separator-home" style="flex-grow: 1"></div>
      <Buttons
        id="home-btn-position"
        style="flex-grow: 1"
        v-bind:buttonList="buttonList"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Buttons from "./Buttons.vue";

export default {
  name: "HomeSection",
  components: {
    Buttons
  },
  data() {
    return {
      buttonList: [
        {
          id: 1,
          label: "Watch video",
          target: "_blank"
        },
        {
          id: 2,
          label: "Take a peek",
          target: "_blank"
        }
      ]
    };
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
}

.mountain-pic {
  flex-grow: 1;
  background: url(https://thomashuang.xyz/demo/HorizontalScrollingTest.hyperesources/Pasted.jpg);
  background-size: 100% 100%;
  /*z-index: 1;*/
  width: auto;
  height: 100%;
  top: -201px;
  left: -90px;
}

#about-you {
  margin-top: 20%;
  margin-left: 2%;
  /*pointer-events: auto;*/
  color: rgb(0, 0, 0);
  padding: 8px;
  /*display: inline;*/
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 0;
  font-size: 100px;
  line-height: 77px;
  font-style: normal;
  overflow-wrap: break-word;
  font-weight: normal;
  /*overflow: visible;*/
  /*z-index: 2;*/
  word-spacing: 0;
  width: 601px;
  height: 145px;
  /*top: 253px;*/
  /*left: 639px;*/
}

#home-btn-position {
  margin-left: 3%;
  display: flex;
  flex-direction: row;
  top: 479px;
  left: 639px;
  position: absolute;
}

.separator-home {
  margin-left: 3%;
  position: absolute;
  background-color: rgb(143, 143, 148);
  border-radius: 24px;
  border: 0 none rgb(216, 221, 228);
  overflow: visible;
  z-index: 4;
  width: 247px;
  height: 3px;
  top: 445px;
  left: 639px;
}
</style>
