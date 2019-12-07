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
import { TweenMax, TimelineMax, Linear } from "gsap/all";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";


@Component({
  components: {
    WhySection,
    ContactSection
  }
})
export default class Why extends Vue {
  name: string = "why";
  controller: any = null;
  parallaxController:any = null;
  
  created() {
    document.title = "PeekPeek | Why";
  }

  data() {
    return {
      interludeText: "Can you tell me more",
      headingTextLine1: "about how we",
      headingTextLine2: "can help?",
      contactUsButtonText: "Get quote"
    };
  }

  mounted() {
    Vue.prototype.$ga.page({
      page: "/why",
      title: "Why",
      location: window.location.href
    });
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
    var viewportWidth = Vue.prototype.common.getViewportSize().width;

    this.parallaxController = new ScrollMagic.Controller({
      vertical: true,
      refreshInterval: 200
    });

    var parallaxObjects = [
      // {
      //   elems: document.querySelectorAll("#why-section-container .group:not(.why-cards)"),
      //   fromTopVal: 0, toTopVal: -200,
      //   fromLeftVal: 0, toLeftVal: 0,
      //   triggerElement: "#sections-container",
      //   offset: 0,
      //   triggerHook: 0,
      //   duration: viewportHeight
      // },
      {
        elems: document.querySelectorAll(".feature-img"),
        fromTopVal: 20, toTopVal: -20, 
        fromLeftVal: 0, toLeftVal: 0,
        triggerElement: "self",
        offset: 0, 
        triggerHook: 0.8,
        duration: viewportHeight * 0.8
      },
      {
        elems: document.querySelectorAll(".why-cards .text-container"),
        fromTopVal: 30, toTopVal: -20, 
        fromLeftVal: 0, toLeftVal: 0,
        triggerElement: "self",
        offset: 0, 
        triggerHook: 0.9,
        duration: viewportHeight * 0.8
      },
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
// transition animations on all sections for this page are found here
#why-section::v-deep {
  .group:not(.why-cards) {
    @include subpage-heading-transition-styles;
  }

  @include featurecard-vertical-transition-styles;
}

@include contact-section-vertical-transition-styles;
</style>
  