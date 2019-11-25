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
import ScrollMagic from 'scrollmagic';  // not using global $scrollmagic, since this page is vertical

@Component({
  components: {
    WhySection,
    ContactSection
  }
})
export default class Why extends Vue {
  name: string = "why";
  controller: any = null;
  
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

  mounted() {
    this.controller = new ScrollMagic.Controller({
      vertical: true
    });

    // Why Section Scenes
    var mainScene = new ScrollMagic.Scene({
        triggerElement: ".group:not(.why-cards)",
        triggerHook: 0.5,
        reverse: false // only do once
      })
      .setClassToggle(".group:not(.why-cards)", "reveal")
      .addTo(this.controller);

    var revealElements = document.getElementsByClassName("feature-card");
    var featureScenes = [];
    for (var i = 0; i < revealElements.length; i++) {
      featureScenes[i] = new ScrollMagic.Scene({
          triggerElement: revealElements[i],
          offset: 0,
          triggerHook: 0.6,
          reverse: false
        })
        .setClassToggle(revealElements[i], "reveal")
        .addTo(this.controller);
    }

    // Contact Section Scenes
    var contactElements = document.querySelectorAll("#contact-section h2, #contact-section button");
    var contactScenes = [];
    for (var i = 0; i < contactElements.length; i++) {
      contactScenes[i] = new ScrollMagic.Scene({
          triggerElement: contactElements[i],
          offset: 0,
          triggerHook: 0.9,
          reverse: false
        })
        .setClassToggle(contactElements[i], "reveal")
        .addTo(this.controller);
    }
  }

  beforeDestroy() {
    this.controller.destroy(true);
    this.controller = null;
  }
}
</script>

<style lang="scss" scoped>
// transition animations on all sections for this page are found here
#why-section::v-deep {
  .group:not(.why-cards) {
    @include subpage-heading-transition-styles;
  }

  @include featurecard-vertical-transition-styles;
}

@include contact-section-vertical-transition-styles;
</style>
  