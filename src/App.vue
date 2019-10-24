<template>
  <div id="app">
    <Navigation id="floating-nav"/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation,
  }
})

export default class App extends Vue {
}
</script>


<style lang="scss">
$base-section-aspect-ratio: 1.75;
$wide-section-ratio: 1.25;
$super-wide-section-ratio: 1.5;

p, h1, h2, h4, h6, span, button {
  font-family: "Libre Franklin", Helvetica, sans-serif;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100vh;
  width: auto;
  display: flex;
  overscroll-behavior-y: none;
  overflow-x: auto;
  overflow-y: hidden;

  background-color: #fbf6f0;
}

button {
  font-size: 2.4vh;
  padding: 10px 18px;
  background-color: #16a4a9;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 15px;
  border-radius: 50px;
  text-decoration: none;
}

h1 {
  font-size: 9vh;
  text-align: left;
}

.title:not(.wide-title), .subtitle:not(.wide-subtitle), .main-text:not(.wide-text) {
  max-width: 70vh;
}

.title, .wide-title {
  font-size: 7vh;
  font-weight: bold;
}

.subtitle, .wide-subtitle {
  font-size: 4.8vh;
  font-weight: normal;
}

.main-text, .wide-text {
  font-size: 3.5vh;
  font-weight: normal;
}

.peek-section {
  display: flex;
}

#floating-nav {
  position: fixed;
  right: 20px;
}

.peek-section {
  height: 100%;
  width: 100vh * $base-section-aspect-ratio; // All sections will maintain a base 1.75:1 aspect ratio except for wide and superwide
  position: absolute;

  p {
    margin: 0;
  }
}

.wide-peek-section{
  width: 100vh * $base-section-aspect-ratio * $wide-section-ratio; // 25% wider than a normal section
}

.super-wide-peek-section {
  width: 100vh * $base-section-aspect-ratio * $super-wide-section-ratio; // 50% wider than a normal section
}

.peek-section:nth-child(1) {
  left: 0%;
  width: 100vw;
}

.peek-section:nth-child(2) {
  left: 100vw;
}

.peek-section:nth-child(3) {
  left: calc(100vw + 100vh * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(4) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(5) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
}

.peek-section:nth-child(6) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
}

.peek-section:nth-child(7) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  width: 100vw;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (max-height: 480px), (max-width: 768px) {
  // Vertically stack
  body {
    overflow-y: auto;
  }

  .peek-section {
    position: relative;
    left: 0% !important;
    width: 100vw !important;
    height: 100vh !important;
    margin-bottom: 10vh;
  }
}

$home-width-breakpoint: 992px;
@media (max-width: $home-width-breakpoint) and (min-width: 769px) {
  .peek-section:nth-child(1) {
    width: $home-width-breakpoint;
    left: 0%;
  }

  .peek-section:nth-child(2) {
    left: $home-width-breakpoint;
  }

  .peek-section:nth-child(3) {
    left: calc(#{$home-width-breakpoint} + 100vh * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(4) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(5) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
  }

  .peek-section:nth-child(6) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  }

  .peek-section:nth-child(7) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
    width: $home-width-breakpoint;
  }
}
</style>