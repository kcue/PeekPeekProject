<template>
  <div id="sections-container">
    <WhatSection class="section" id="what-section" />
    <ProcessSection class="section" id="process-section" />
    <WorksSection class="section" id="works-section" :headingTitle="headingTitle" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WhatSection from "@/components/WhatSection.vue";
import ProcessSection from "@/components/ProcessSection.vue";
import WorksSection from "@/components/WorksSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ScrollMagic from 'scrollmagic';  // not using global $scrollmagic, since this page is vertical

@Component({
  components: {
    WhatSection,
    ProcessSection,
    WorksSection,
    ContactSection
  }
})
export default class What extends Vue {
  name: string = "what";
  controller: any = null;
  
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

  mounted() {
    // hide the demo cards first
    var demoCards = document.querySelectorAll("#demo-cards .demo-card");
    for (var i = 0; i < demoCards.length; i++) {
      demoCards[i]!.classList.add("hidden");
    }

    // initialize scrollmagic controller
    this.controller = new ScrollMagic.Controller({
      vertical: true
    });

    // What Section Scenes
    var mainScene = new ScrollMagic.Scene({
        triggerElement: ".group:not(.what-cards)",
        triggerHook: 0.5,
        reverse: false // only do once
      })
      .setClassToggle(".group:not(.what-cards)", "reveal")
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

    // ProcessSection Scenes
    var procSecHeading = document.querySelector("#process-section h2");
    var worksSecHeadingScene = new ScrollMagic.Scene({
        triggerElement: procSecHeading,
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .setClassToggle(procSecHeading, "reveal")
      .addTo(this.controller);

    var procSecCards = document.getElementsByClassName("card");
    var procSecCardsScenes = [];
    for (var i = 0; i < procSecCards.length; i++) {
      procSecCardsScenes[i] = new ScrollMagic.Scene({
          triggerElement: procSecCards[i],
          offset: 0,
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle(procSecCards[i], "reveal")
        .addTo(this.controller);
    }

    // Works Section Scenes
    var worksSecHeading = document.querySelector("#works-section h2");
    var worksSecHeadingScene = new ScrollMagic.Scene({
        triggerElement: worksSecHeading,
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .setClassToggle(worksSecHeading, "reveal")
      .addTo(this.controller);

    var worksSecCards = document.getElementById("demo-cards");
    var worksSecCardsScene = new ScrollMagic.Scene({
        triggerElement: worksSecCards,
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on("enter", function() {
        worksSecCards!.classList.add("reveal");
        var worksSecCard = worksSecCards.children;
        for (var i = 0; i < worksSecCard.length; i++) {
          worksSecCard[i]!.classList.remove("hidden");
        }
      })
      .addTo(this.controller);

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
#works-section::v-deep h2 {
  align-self: center;
  margin: 50px 0 0 0;

  @include medium-screen-landscape {
    margin-bottom: 25px;
  }
}

// transition animations on all sections for this page are found here
#what-section::v-deep {
  .group:not(.what-cards) {
    @include subpage-heading-transition-styles;
  }

  @include featurecard-vertical-transition-styles;
}

#process-section::v-deep {
  h2 {
    transition: all 0.5s ease-out 0.2s;
    opacity: 0;
    transform: translateY(0.5em);
    
    &.reveal {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card {
    transition: all 0.5s ease-out 0.2s;
    opacity: 0;

    &:nth-child(odd) {
      transform: translate(30%, -30%);
    }

    &:nth-child(even) {
      transform: translate(-30%, -30%);
    }

    &.reveal {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
}

@include works-section-vertical-transition-styles;
@include contact-section-vertical-transition-styles;
</style>
