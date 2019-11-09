<template>
  <div id="who-page-container">
    <WhoSection class="section" id="who-section" />
  	<WorksSection class="section" id="works-section" :headingTitle="headingTitle" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WhoSection from "@/components/WhoSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import ContactSection from "@/components/ContactSection.vue";


@Component({
  components: {
    WhoSection,
    WorksSection,
    ContactSection
  }
})
export default class Who extends Vue {
  name: string = "who";
  
  created() {
    document.title = "PeekPeek | Who";
  }

  data() {
    return {
      headingTitle: "Results",
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

#works-section::v-deep h2 {
  align-self: flex-end;
  margin: 50px 5% 0 0;
}

.section {
  position: relative;
  width: 100vw;
  min-height: $site-min-height;  // TODO: FIGURE OUT THRESHOLD
  min-width: $site-min-width;   // TODO: FIGURE OUT THRESHOLD
  display: block;

  &::v-deep .container {
    height: 100%;
    width: 100%;
  }
}
</style>
