<template>
  <!-- <div class="who">
    <h1>WHO PAGE</h1>
  </div> -->
  <div id="sections-container">
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactSection from "@/components/ContactSection.vue";
@Component({
  components: {
    ContactSection
  }
})

export default class Home extends Vue {
  name: string = "what";
  
  created() {
    document.title = "PeekPeek | What";
  }

  data() {
    return {
      interludeText: "So, your turn",
      headingTextLine1: "What about",
      headingTextLine2: "you?",
      contactUsButtonText: "Get quote"
    };
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
