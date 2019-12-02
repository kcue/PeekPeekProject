<template>
  <div id="home-page-container">
    <HomeSection class="section" id="home-section" />
    <StatsSection class="section" id="stats-section" />
    <VideoSection class="section" id="video-section" />
    <HotspotSection class="section" id="hotspot-section" />
    <CaseStudiesSection class="section" id="case-studies-section" />
    <PartnersSection class="section" id="partners-section" />
    <ContactSection class="section" id="contact-section" :interludeText="interludeText" :headingTextLine1="headingTextLine1" :headingTextLine2="headingTextLine2" :contactUsButtonText="contactUsButtonText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeSection from "@/components/HomeSection.vue";
import StatsSection from "@/components/StatsSection.vue";
import VideoSection from "@/components/VideoSection.vue";
import HotspotSection from "@/components/HotspotSection.vue";
import CaseStudiesSection from "@/components/CaseStudiesSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ScrollMagic from "scrollmagic";  // not using vue-scrollmagic for transitions because it switches between horizontal & vertical layout

import { TweenMax, TimelineMax, Linear } from "gsap/all";
import "imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

@Component({
  components: {
    HomeSection,
    StatsSection,
    VideoSection,
    HotspotSection,
    CaseStudiesSection,
    PartnersSection,
    ContactSection
  }
})

export default class Home extends Vue {
  name: string = "home";
  controller: any = null;
  parallaxController:any = null;
  
  created() {
    document.title = "PeekPeek | Home";
  }

  mounted() {
    Vue.prototype.$ga.page({
      page: "/",
      title: "Home",
      location: window.location.href
    });  // google analytics

    // Scrolling vertically will move the page horizontally
    // Only activated when the website is stacked horizontally
    window.onwheel = (event: any) => {
      if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
        // Need to prevent default behavior for Safari for touchpad scrolling gesture to work
        event.preventDefault();
        window.scrollTo(window.scrollX + event.deltaX + event.deltaY, window.scrollY); // Added deltaX to ensure native horizontal scrolling
      } else {
        // For all other browsers
        window.scrollTo(window.scrollX + event.deltaY, window.scrollY);
      }
    }
  
    // SCROLL TRANSITION ANIMATIONS
    // hide the demo cards first
    var demoCards = document.querySelectorAll("#demo-cards .demo-card");
    for (var i = 0; i < demoCards.length; i++) {
      demoCards[i]!.classList.add("hidden");
    }

    // initialize scrollmagic controller
    // check if horizontal or vertical
    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var isVerticalLayout = true;  // mobile
    if (viewportWidth >= 768) {
      isVerticalLayout = false;
    }
    this.controller = new ScrollMagic.Controller({
      vertical: isVerticalLayout
    });

    // Stats Section Scenes
    var statsSecElements = document.getElementById("stats-section").querySelectorAll(".heading, .primary-description, #button-prompt, #solution-button");
    var statsSecScenes = [];
    for (var i = 0; i < statsSecElements.length; i++) {
      statsSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: ".stats-captions",
          offset: 0,
          triggerHook: 0.6,
          reverse: false
        })
        .setClassToggle(statsSecElements[i], "reveal")
        .addTo(this.controller);
    }

    // Video Section Scenes
    var vidSecElements = document.getElementById("video-section").querySelectorAll(".heading, .subheading, .button, .video-wrapper, .video-wrapper");
    var vidSecScenes = [];
    for (var i = 0; i < vidSecElements.length; i++) {
      vidSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: "#video-section-container",
          offset: 0,
          triggerHook: 0.6,
          reverse: false
        })
        .setClassToggle(vidSecElements[i], "reveal")
        .addTo(this.controller);
    }

    // Hotspot Section Scenes
    var hsSecElements = document.getElementById("hotspot-section").querySelectorAll("#city-wrapper");
    var hsSecScenes = [];
    for (var i = 0; i < hsSecElements.length; i++) {
      hsSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: hsSecElements[i],
          offset: 0,
          triggerHook: 0.8,
          reverse: false
        })
        .setClassToggle(hsSecElements[i], "reveal")
        .on("enter", function() {
          (<any> window).initCity();
        })
        .addTo(this.controller);
    }
    
    var hsSecElements = document.getElementById("hotspot-section").querySelectorAll(".hotspot-titles");
    var hsSecScenes = [];
    for (var i = 0; i < hsSecElements.length; i++) {
      hsSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: hsSecElements[i],
          offset: 0,
          triggerHook: 0.8,
          reverse: false
        })
        .setClassToggle(hsSecElements[i], "reveal")
        .addTo(this.controller);
    }

    // Case Studies Section Scenes
    var worksSecCards = document.getElementById("demo-cards");
    var worksSecCardsScene = new ScrollMagic.Scene({
        triggerElement: worksSecCards,
        offset: 0,
        triggerHook: 0.5,
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

    var csSecElements = document.getElementById("case-studies-section").querySelectorAll(".heading, .primary-description, .button");
    var csSecScenes = [];
    for (var i = 0; i < csSecElements.length; i++) {
      csSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: ".demo-section-text",
          offset: 0,
          triggerHook: 0.7,
          reverse: false
        })
        .setClassToggle(csSecElements[i], "reveal")
        .addTo(this.controller);
    }

    // Partners Section Scenes
    var partnersSecElements = document.getElementById("partners-section").querySelectorAll("#branding, #learn-button, #logo-slider");
    var partnersSecScenes = [];
    for (var i = 0; i < partnersSecElements.length; i++) {
      partnersSecScenes[i] = new ScrollMagic.Scene({
          triggerElement: "#partners-section-container",
          offset: 0,
          triggerHook: 0.8,
          reverse: false
        })
        .setClassToggle(partnersSecElements[i], "reveal")
        .addTo(this.controller);
    }

    // Contact Section Scenes
    var contactElements = document.querySelectorAll("#contact-section h2, #contact-section button");
    var contactScenes = [];
    for (var i = 0; i < contactElements.length; i++) {
      contactScenes[i] = new ScrollMagic.Scene({
          triggerElement: contactElements[i],
          offset: 0,
          triggerHook: 0.8,
          reverse: false
        })
        .setClassToggle(contactElements[i], "reveal")
        .addTo(this.controller);
    }

    (<any> window).homeResize = Vue.prototype.$_.debounce(this.handleResize, 1000)
    window.addEventListener("resize", (<any> window).homeResize);

    this.initParallax();
  }

  beforeDestroy() {
    this.controller.destroy(true);
    this.controller = null;

    this.parallaxController.destroy(true);
    this.parallaxController = null;

    window.onwheel = null;
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
    var elems: any, scene: any, tween: any;

    var isVertical = true;
    if (viewportWidth >= 768) {
      isVertical = false;
    }

    this.parallaxController = new ScrollMagic.Controller({
      vertical: isVertical,
      refreshInterval: 200
    });

    if (viewportWidth >= 768) {  // horizontal mode
      var parallaxObjects = [
      //   {
      //     elems: document.querySelectorAll("#why-section-container .group:not(.why-cards)"),
      //     fromTopVal: 0, toTopVal: -200,
      //     fromLeftVal: 0, toLeftVal: 0,
      //     triggerElement: "#sections-container",
      //     offset: 0,
      //     triggerHook: 0,
      //     duration: viewportHeight
      //   },
      //   {
      //     elems: document.querySelectorAll(".why-cards .text-container"),
      //     fromTopVal: 30, toTopVal: -20, 
      //     fromLeftVal: 0, toLeftVal: 0,
      //     triggerElement: "self",
      //     offset: 0, 
      //     triggerHook: 0.9,
      //     duration: viewportHeight / 2
      //   },
      ];
    } else {  // vertical mode
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
        // {
        //   elems: document.querySelectorAll(".why-cards .text-container"),
        //   fromTopVal: 30, toTopVal: -20, 
        //   fromLeftVal: 0, toLeftVal: 0,
        //   triggerElement: "self",
        //   offset: 0, 
        //   triggerHook: 0.9,
        //   duration: viewportHeight / 2
        // },
      ];
    }

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

  data() {
    return {
      interludeText: "So, your turn",
      headingTextLine1: "Tell me",
      headingTextLine2: "your story",
      contactUsButtonText: "Contact Us"
    };
  }
}


</script>

<style lang="scss" scoped>
/* Home page specific styles here */
#home-page-container {
  // overflow-x: hidden;

  @include medium-screen-landscape {
    // overflow-x: scroll;
    // overflow-y: hidden;
    white-space: nowrap;
    min-height: $site-min-height;
    height: 100vh;
  }
}

.section {
  position: relative;
  width: 100vw;
  min-height: $site-min-height;  // TODO: FIGURE OUT THRESHOLD
  min-width: $site-min-width;   // TODO: FIGURE OUT THRESHOLD
  display: block;
  overflow: hidden;   // this is temporary until all components have been styled -- some components are causing unusual scrolling issues.

  @include medium-screen-landscape {
    display: inline-block;
    vertical-align: top;
    height: 100vh;
  }

  &::v-deep .container {
    height: 100%;
    width: 100%;
    position: relative;
  }
}

// transition animations on all sections for this page are found here
#stats-section::v-deep {
  .heading, .primary-description, #button-prompt, #solution-button {
    transition: all 0.5s ease-out;
    opacity: 0;
    transform: translateY(0.5em);

    &.reveal {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .primary-description              { transition-delay: 0.2s; }
  #button-prompt, #solution-button  { transition-delay: 0.4s; }

  @include medium-screen-landscape {
    .heading, .primary-description, #button-prompt, #solution-button {
      transform: translateX(10vw);

      &.reveal {
        transform: translateX(0);
      }
    }

    .primary-description              { transition-delay: 0.4s; }
    #button-prompt, #solution-button  { transition-delay: 0.2s; }
  }
}

#video-section::v-deep {
  .heading, .subheading, .button, .video-wrapper {
    transition: all 0.5s ease-out;
    opacity: 0;
    transform: translateY(0.5em);

    &.reveal {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .subheading     { transition-delay: 0.2s; }
  .button         { transition-delay: 0.4s; }  
  .video-wrapper  { transition-delay: 0.6s; }

  @include medium-screen-landscape {
    .heading, .subheading, .button, .video-wrapper {
      transform: translateX(10vw);

      &.reveal {
        transform: translateX(0);
      }
    }
  }
}

#hotspot-section::v-deep {
  #city-wrapper {
    transition: all 0.5s ease-out;
    opacity: 0;
    transform: translateY(20%);

    @include medium-screen-landscape {
      transform: translateX(10vw);
    }

    &.reveal {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .hotspot-titles {
    .heading, .subheading, .primary-description {
      transition: all 0.5s ease-out;
      opacity: 0;
      transform: translateY(0.8em);

      @include medium-screen-landscape {
        transform: translateX(10vw);
      }
    }

    .heading              { transition-delay: 0.3s; }
    .primary-description  { transition-delay: 0.6s; }

    &.reveal {
      .heading, .subheading, .primary-description {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
}

#case-studies-section::v-deep {
  .heading, .primary-description, .button {
    transition: all 0.5s ease-out;
    opacity: 0;
    transform: translateY(0.8em);

    @include medium-screen-landscape {
      transform: translateX(10vw);
    }

    &.reveal {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .primary-description  { transition-delay: 0.3s; }
  .button               { transition-delay: 0.6s; }
}

#partners-section::v-deep {
  #branding, #learn-button, #logo-slider {
    transition: all 0.5s ease-out;
    opacity: 0;
    transform: translateY(0.8em);

    @include medium-screen-landscape {
      transform: translateX(10vw);
    }

    &.reveal {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  #learn-button  { transition-delay: 0.3s; }
  #logo-slider   { transition-delay: 0.6s; }
}

@include contact-section-vertical-transition-styles;
@include medium-screen-landscape {
  #contact-section::v-deep {
    .contact-section-interlude .subheading, 
    .contact-section-main .heading, 
    .contact-section-main button {
      opacity: 0;
      transform: translateX(10vw);

      &.reveal {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .contact-section-interlude .subheading, .contact-section-main button {
      transition-delay: 0.4s;
    }
  }
}
</style>
