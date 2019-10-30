<template>
    <div id="sections-container">
        <HomeSection class="section" id="home-section"/>
        <StatsSection class="section" id="stats-section"/>
        <VideoSection class="section" id="video-section"/>
        <HotspotSection class="section" id="hotspot-section"/>
        <DemoSection class="section" id="demo-section"/>
        <PartnersSection class="section" id="partners-section"/>
        <ContactSection class="section" id="contact-section"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HomeSection from '@/components/HomeSection.vue';
    import StatsSection from '@/components/StatsSection.vue';
    import VideoSection from '@/components/VideoSection.vue';
    import HotspotSection from '@/components/HotspotSection.vue';
    import DemoSection from '@/components/DemoSection.vue';
    import PartnersSection from '@/components/PartnersSection.vue';
    import ContactSection from '@/components/ContactSection.vue';

    @Component({
        components: {
            HomeSection,
            StatsSection,
            VideoSection,
            HotspotSection,
            DemoSection,
            PartnersSection,
            ContactSection,
        }
    })
    export default class Home extends Vue {
        name: string = 'home'

        created () {
            document.title = 'PeekPeek | Home';
        }
    }

    if (window.innerHeight > 480 && window.innerWidth > 768) {
      // Scrolling vertically will move the page horizontally
      // Only activated when the website is stacked horizontally
      // window.onwheel = event => {
      //   if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
      //     // Need to prevent default behavior for Safari for touchpad scrolling gesture to work
      //     event.preventDefault();
      //     window.scrollTo(window.scrollX + event.deltaX + event.deltaY, window.scrollY); // Added deltaX to ensure native horizontal scrolling
      //   } else {
      //     // For all other browsers
      //     window.scrollTo(window.scrollX + event.deltaY, window.scrollY);
      //   }
      // }
    }

</script>


<style lang="scss">
    /* Home page specific styles here */

    $base-section-aspect-ratio: 1.75;
    $wide-section-ratio: 1.25;
    $super-wide-section-ratio: 1.5;

    .section {
        position: relative;
        height: 100%;
        width: 100vw;

        @include medium-screen-landscape {
            float: left;
        }
    }




.title:not(.wide-title), .subtitle:not(.wide-subtitle), .main-text:not(.wide-text) {
  max-width: 70vh;
}

.title, .wide-title {
  font-size: 7vh;
  font-weight: bold;
}

.subtitle, .wide-subtitle {
  font-size: 4.8vh;
  font-weight: normal;
}

.main-text, .wide-text {
  font-size: 3.5vh;
  font-weight: normal;
}

.peek-section {
  display: flex;
}

.peek-section {
  height: 100%;
  width: 100vh * $base-section-aspect-ratio; // All sections will maintain a base 1.75:1 aspect ratio except for wide and superwide
  position: absolute;

  p {
    margin: 0;
  }
}

.wide-peek-section{
  width: 100vh * $base-section-aspect-ratio * $wide-section-ratio; // 25% wider than a normal section
}

.super-wide-peek-section {
  width: 100vh * $base-section-aspect-ratio * $super-wide-section-ratio; // 50% wider than a normal section
}

.peek-section:nth-child(1) {
  left: 0%;
  width: 100vw;
}

.peek-section:nth-child(2) {
  left: 100vw;
}

.peek-section:nth-child(3) {
  left: calc(100vw + 100vh * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(4) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio});
}

.peek-section:nth-child(5) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
}

.peek-section:nth-child(6) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
}

.peek-section:nth-child(7) {
  left: calc(100vw + 100vh * 2 * #{$base-section-aspect-ratio} 
  + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
  + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  width: 100vw;
}



@media (max-height: 480px), (max-width: 768px) {
  // Vertically stack
  body {
    overflow-y: auto;
  }

  .peek-section {
    position: relative;
    left: 0% !important;
    width: 100vw !important;
    height: 100vh !important;
    margin-bottom: 10vh;
  }
}

$home-width-breakpoint: 992px;
@media (max-width: $home-width-breakpoint) and (min-width: 769px) {
  .peek-section:nth-child(1) {
    width: $home-width-breakpoint;
    left: 0%;
  }

  .peek-section:nth-child(2) {
    left: $home-width-breakpoint;
  }

  .peek-section:nth-child(3) {
    left: calc(#{$home-width-breakpoint} + 100vh * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(4) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio});
  }

  .peek-section:nth-child(5) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio});
  }

  .peek-section:nth-child(6) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
  }

  .peek-section:nth-child(7) {
    left: calc(#{$home-width-breakpoint} + 100vh * 2 * #{$base-section-aspect-ratio} 
      + 100vh * #{$base-section-aspect-ratio} * #{$wide-section-ratio} 
      + 100vh * 2 * #{$base-section-aspect-ratio} * #{$super-wide-section-ratio});
    width: $home-width-breakpoint;
  }
}
</style>