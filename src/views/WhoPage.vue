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
import { TweenMax, TimelineMax, Linear } from "gsap/all";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";


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
  parallaxController:any = null;
  
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
    Vue.prototype.$ga.page({
      page: "/who",
      title: "Who",
      location: window.location.href
    });
    // hide the demo cards first
    var demoCards = document.querySelectorAll("#demo-cards .demo-card");
    for (var i = 0; i < demoCards.length; i++) {
      demoCards[i]!.classList.add("hidden");
    }

    // initialize scrollmagic controller
    this.controller = new ScrollMagic.Controller({
      vertical: true,
      refreshInterval: 200
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

    var worksSecCardsGroup = document.getElementById("demo-cards");
    var worksSecCardsScene = new ScrollMagic.Scene({
        triggerElement: worksSecCardsGroup,
        offset: 0,
        triggerHook: 0.7,
        reverse: false
      })
      .on("enter", function() {
        worksSecCardsGroup!.classList.add("reveal");
        var worksSecCard = worksSecCardsGroup.children;
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

    // initialize resize handler
    (<any> window).homeResize = Vue.prototype.$_.debounce(this.handleResize, 1000);
    window.addEventListener("resize", (<any> window).homeResize);

    // initialize parallax effects
    this.initParallax();
  }

  beforeDestroy() {
    this.controller.destroy(true);
    this.controller = null;

    this.parallaxController.destroy(true);
    this.parallaxController = null;

    window.removeEventListener("resize", (<any> window).homeResize);
    (<any> window).homeResize = undefined;  // workaround
  }

  handleResize(): void {
    // this is the resize handler
    this.parallaxController.destroy(true);
    this.parallaxController = null;
    this.initParallax();
  }

  initParallax() {
    // @TODO create factory class for animations
    var viewportHeight = Vue.prototype.common.getViewportSize().height;

    this.parallaxController = new ScrollMagic.Controller({
      vertical: true,
      refreshInterval: 200
    });

    var parallaxObjects = [
      // {
      //   elems: document.querySelectorAll(".heading-group"),
      //   fromTopVal: 0, toTopVal: -100,
      //   fromLeftVal: 0, toLeftVal: 0,
      //   triggerElement: "self",
      //   offset: 0,
      //   triggerHook: 0,
      //   duration: viewportHeight
      // },
      {
        elems: document.querySelectorAll(".who-cards .card"),
        fromTopVal: 0, toTopVal: -150, 
        fromLeftVal: 0, toLeftVal: 0,
        triggerElement: ".who-cards-container",
        offset: 0, 
        triggerHook: 0.3,
        duration: viewportHeight
      },
      // {
      //   elems: document.querySelectorAll("#demo-group"),
      //   fromTopVal: -10, toTopVal: 50, 
      //   fromLeftVal: 0, toLeftVal: 0,
      //   triggerElement: "self",
      //   offset: 0, 
      //   triggerHook: 0.6,
      //   duration: viewportHeight
      // },
    ];

    for (var i = 0; i < parallaxObjects.length; i++) {
      var obj = parallaxObjects[i]
      var elems = obj.elems;
      for (var j = 0; j < elems.length; j++) {
        var tween = new TimelineMax()
          .add([
            TweenMax.fromTo(elems[j], 1, 
              { top: obj.fromTopVal, left: obj.fromLeftVal, position: "relative" }, 
              { top: obj.toTopVal, left: obj.toLeftVal, ease: Linear.easeNone}),
          ]);
        var scene = new ScrollMagic.Scene({
            triggerElement: (obj.triggerElement === "self") ? elems[j] : obj.triggerElement,
            offset: obj.offset,
            triggerHook: obj.triggerHook,
            duration: obj.duration
          })
          .setTween(tween)
          .addTo(this.parallaxController);
      }
    }
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
    position: relative;

    @include subpage-heading-transition-styles;
  }

  .top-image, .bottom-image {
    position: relative;
    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
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
      position: relative;
      transition: opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s;
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
