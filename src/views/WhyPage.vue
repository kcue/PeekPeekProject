<template>
  <div id="sections-container">
    <WhySection class="section" id="why-section" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WhySection from "@/components/WhySection.vue";
import ContactSection from "@/components/ContactSection.vue";

@Component({
  components: {
    WhySection,
    ContactSection
  }
})
export default class Why extends Vue {
  name: string = "why";
  
  created() {
    document.title = "PeekPeek | Why";
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

<style lang="scss" scoped>

</style>
  