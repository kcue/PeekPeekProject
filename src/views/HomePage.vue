<template>
  <div id="sections-container">
    <HomeSection class="section" id="home-section" />
    <StatsSection class="section" id="stats-section" />
    <VideoSection class="section" id="video-section" />
    <HotspotSection class="section" id="hotspot-section" />
    <DemoSection class="section" id="demo-section" />
    <PartnersSection class="section" id="partners-section" />
    <ContactSection class="section" id="contact-section" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeSection from "@/components/HomeSection.vue";
import StatsSection from "@/components/StatsSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import HotspotSection from "@/components/HotspotSection.vue";
import DemoSection from "@/components/DemoSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import ContactSection from "@/components/ContactSection.vue";

@Component({
  components: {
    HomeSection,
    StatsSection,
    VideoSection,
    HotspotSection,
    DemoSection,
    PartnersSection,
    ContactSection
  }
})
export default class Home extends Vue {
  name: string = "home";

  created() {
    document.title = "PeekPeek | Home";
  }
}

if (window.innerHeight > 480 && window.innerWidth > 768) {
  // Scrolling vertically will move the page horizontally
  // Only activated when the website is stacked horizontally
  // window.onwheel = event => {
  //   if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
  //     // Need to prevent default behavior for Safari for touchpad scrolling gesture to work
  //     event.preventDefault();
  //     window.scrollTo(window.scrollX + event.deltaX + event.deltaY, window.scrollY); // Added deltaX to ensure native horizontal scrolling
  //   } else {
  //     // For all other browsers
  //     window.scrollTo(window.scrollX + event.deltaY, window.scrollY);
  //   }
  // }
}
</script>

<style lang="scss">
/* Home page specific styles here */
#sections-container {
  overflow-x: hidden;

  @include medium-screen-landscape {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    min-height: $site-min-height;
    height: 100vh;
  }
}

.section {
  position: relative;
  width: 100vw;
  min-height: $site-min-height;  // TODO: FIGURE OUT THRESHOLD
  min-width: $site-min-width;   // TODO: FIGURE OUT THRESHOLD
  display: block;
  overflow: hidden;   // this is temporary until all components have been styled -- some components are causing unusual scrolling issues.

  @include medium-screen-landscape {
    display: inline-block;
    vertical-align: top;
    height: 100vh;
  }

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
