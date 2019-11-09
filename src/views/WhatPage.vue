<template>
  <div id="sections-container">
    <div class="container" id="demo-container">
      <DemoGroup />
    </div>
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoGroup from "@/components/DemoGroup.vue";
import ContactSection from "@/components/ContactSection.vue";

@Component({
  components: {
    DemoGroup,
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
      interludeText: "So, your turn",
      headingTextLine1: "What about",
      headingTextLine2: "you?",
      contactUsButtonText: "Get quote"
    };
  }
}
</script>

<style lang="scss">

</style>
