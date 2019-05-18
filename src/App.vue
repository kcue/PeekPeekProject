<template>
  <div id="app">
    <Navigation id="floating-nav"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="./playground">Playground</router-link>
    </div>
    <router-view /> -->
    <div id="sections-container">
      <HomeSection/>
      <StatsSection/>
      <VideoSection/>
      <HotspotSection/>
      <DemoSection/>
      <PartnersSection/>
      <ContactSection/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from '@/components/Navigation.vue';
import HomeSection from '@/components/HomeSection.vue';
import StatsSection from '@/components/StatsSection.vue';
import VideoSection from '@/components/VideoSection.vue';
import HotspotSection from '@/components/HotspotSection.vue';
import DemoSection from '@/components/DemoSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import ContactSection from '@/components/ContactSection.vue';

@Component({
  components: {
    Navigation,
    HomeSection,
    StatsSection,
    VideoSection,
    HotspotSection,
    DemoSection,
    PartnersSection,
    ContactSection,
  }
})
export default class App extends Vue {
  
}

// Scrolling vertically will move the page horizontally
window.addEventListener('wheel', event => window.scrollTo(window.scrollX + event.deltaY, window.scrollY));

</script>


<style lang="scss">
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
  font-size: 20px;
  padding: 10px 18px;
  background-color: #16a4a9;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 15px;
  border-radius: 4px;
}

h1 {
  font-size: 84px;
  text-align: left;
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
  width: 100vw;
  position: absolute;

  p {
    margin: 0;
  }
}

.peek-section:nth-child(1) {
  left: 0%;
}

.peek-section:nth-child(2) {
  left: 100%;
}

.peek-section:nth-child(3) {
  left: 200%;
}

.peek-section:nth-child(4) {
  left: 300%;
}

.peek-section:nth-child(5) {
  left: 400%;
}

.peek-section:nth-child(6) {
  left: 500%;
}

.peek-section:nth-child(7) {
  left: 600%;
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
</style>
