<template>
  <div id="sections-container">
    <ProcessSection class="section" id="process-section" />
    <WorksSection class="section" id="works-section" :headingTitle="headingTitle" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProcessSection from "@/components/ProcessSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import ContactSection from "@/components/ContactSection.vue";

@Component({
  components: {
    ProcessSection,
    WorksSection,
    ContactSection
  }
})
export default class What extends Vue {
  name: string = "what";
  
  created() {
    document.title = "PeekPeek | What";
  }

  data() {
    return {
      headingTitle: "Featured Work",
      interludeText: "So, your turn",
      headingTextLine1: "What about",
      headingTextLine2: "you?",
      contactUsButtonText: "Get quote"
    };
  }
}
</script>

<style lang="scss" scoped>
#works-section::v-deep h2 {
  align-self: center;
  margin: 50px 0 0 0;
}
</style>
