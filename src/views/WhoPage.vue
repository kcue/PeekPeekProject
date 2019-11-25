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
import ScrollMagic from 'scrollmagic';  // not using global $scrollmagic, since this page is vertical

@Component({
  components: {
    WhoSection,
    WorksSection,
    ContactSection
  }
})
export default class Who extends Vue {
  name: string = "who";
  controller: any = null;
  
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

    // Who Section Scenes
    var whoSecElements = document.querySelectorAll(".top-image, .bottom-image, .heading-group, .who-cards .card");
    var whoSecScenes = [];
    for (var i = 0; i < whoSecElements.length; i++) {
      whoSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: whoSecElements[i],
          offset: 0,
          triggerHook: 0.7,
          reverse: false // only do once
        })
        .setClassToggle(whoSecElements[i], "reveal")
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

// transition animations on all sections for this page are found here
#who-section::v-deep {
  .heading-group {
    @include subpage-heading-transition-styles;
  }

  .top-image, .bottom-image {
    transition: all 1s ease-out 0.2s;
    opacity: 0;

    &.reveal {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .top-image {
    transform: translateX(100%);
  }

  .bottom-image {
    transform: translateX(-100%);
  }

  .who-cards {
    .card {
      transition: all 0.7s ease-out 0.2s;
      opacity: 0;

      &:nth-child(odd) {
        transform: translateX(100%);
      }

      &:nth-child(even) {
        transform: translateX(-100%);
      }

      &.reveal {
        opacity: 1;
        transform: translateX(0);
      }
    }

  }
}

@include works-section-vertical-transition-styles;
@include contact-section-vertical-transition-styles;
</style>
