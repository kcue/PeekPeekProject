<template>
  <!-- <div class="who">
    <h1>WHO PAGE</h1>
  </div> -->
  <div id="who-page-container">
  	<WhoProcessSection class="section" id="who-process-section" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactSection from "@/components/ContactSection.vue";
import WhoProcessSection from "@/components/WhoProcessSection.vue";
@Component({
  components: {
    ContactSection,
    WhoProcessSection
  }
})

export default class Home extends Vue {
  name: string = "who";
  
  created() {
    document.title = "PeekPeek | Who";
  }

  data() {
    return {
      interludeText: "So, your turn",
      headingTextLine1: "So who are",
      headingTextLine2: "you?",
      contactUsButtonText: "Tell me More"
    };
  }
}
</script>

<style lang="scss" scoped>
#who-page-container {
  overflow-x: hidden;
}

.section {
  position: relative;
  width: 100vw;
  min-height: $site-min-height;  // TODO: FIGURE OUT THRESHOLD
  min-width: $site-min-width;   // TODO: FIGURE OUT THRESHOLD
  display: block;

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
