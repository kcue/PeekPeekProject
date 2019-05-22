<template>
  <header>
    <ul>
      <li>Who</li>
      <li>What</li>
      <li>Why</li>
      <li class="space"></li>
      <div id="contact-btn">Contact Us</div>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>

<style lang="scss" scoped></style>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background: transparent;
}
ul {
  /* margin: 30px auto; */
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  background: transparent;
}

li {
  flex: 1 1 auto;
  display: inline-block;
  color: #17a4a9;
  font-family: "Libre Franklin", sans-serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  padding: 8px;
  background: transparent;
}

li:hover {
}
li:not(.space):not(.contact) {
  padding-left: 40px;
}

li:not(.space):not(.contact)::after {
  display: block;
  content: "";
  border-bottom: solid 2px #17a4a9;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

li:not(.space):hover::after {
  transform: scaleX(0.9);
}

#contact-btn {
  padding: 6px;
  user-select: none;
  background-color: rgb(23, 164, 169);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.18) 0 2px 15px;
  border: 0 none rgb(160, 160, 160);
  line-height: 35px;
  overflow-wrap: break-word;
  display: inline;
  font-family: "Libre Franklin", sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: normal;
  color: rgb(255, 255, 255);
  cursor: pointer;
  overflow: visible;
  text-shadow: none;
  width: 130px;
  height: 32px;
}
</style>
