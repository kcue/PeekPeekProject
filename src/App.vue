<template>
  <div id="app">
    <Navigation id="floating-nav"/>
    <div id="sections-container">
      <HomeSection/>
      <StatsSection/>
      <VideoSection/>
      <HotspotSection/>
      <DemoSection/>
      <PartnersSection/>
      <ContactSection/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from '@/components/Navigation.vue';
import HomeSection from '@/components/HomeSection.vue';
import StatsSection from '@/components/StatsSection.vue';
import VideoSection from '@/components/VideoSection.vue';
import HotspotSection from '@/components/HotspotSection.vue';
import DemoSection from '@/components/DemoSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import ContactSection from '@/components/ContactSection.vue';

import { TweenMax, TimelineMax } from 'gsap';
let windowLength;
let scenes;

@Component({
  components: {
    Navigation,
    HomeSection,
    StatsSection,
    VideoSection,
    HotspotSection,
    DemoSection,
    PartnersSection,
    ContactSection,
  }
})
export default class App extends Vue {
  mounted(){
     windowLength = {
      titles: 3,
      subtitles: 4.5,
      media: 4,
      maintext: 5.25
    }
    console.log(`Width: ${window.innerWidth}, navMaxTouchIsNotZero: ${navigator.maxTouchPoints !== 0}, ots: ${'ontouchstart' in window}`)
    console.log(`notTouch: ${!(navigator.maxTouchPoints !== 0 || 'ontouchstart' in window)}`);
    if (window.innerWidth > 992 || (window.innerWidth <= 992 && !(navigator.maxTouchPoints !== 0 || 'ontouchstart' in window))) {
      // This means the device is a laptop that is touchscreen, a laptop that is not touch screen, or a large touchscreen thing
      // Here is where we want to put parallax into the website
      console.log('should enable parallax');
      scenes = []; 
      this.parallaxAnimation();
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 || (window.innerWidth <= 992 && !(navigator.maxTouchPoints !== 0 || (navigator.msMaxTouchPoints !== undefined || navigator.msMaxTouchPoints !== 0) || 'ontouchstart' in window))) {
      // This means the device is a laptop that is touchscreen, a laptop that is not touch screen, or a large touchscreen thing
      // Here is where we want to put parallax into the website
      for (let i = 0; i < scenes.length; ++i)
        {
            scenes[i].destroy(true);
        }
      scenes = []; 
      this.parallaxAnimation();
      }
    })  
  }

  parallaxAnimation()
  {
    let titles = document.getElementsByClassName("title");
    let subtitles = document.getElementsByClassName("subtitle");
    let media = document.getElementsByClassName("media");
    let mainText = document.getElementsByClassName("main-text");
    let windowWidth = window.innerWidth > 992 ? window.innerWidth : 992;
    let windowHeight = window.innerHeight;

    console.log(`Window width: ${windowWidth}`)

    this.makeTween(titles, windowLength["titles"]);
    this.makeTween(subtitles, windowLength['subtitles']);
    this.makeTween(media, windowLength['media']);
    this.makeTween(mainText, windowLength['maintext']);  
    
  }

  makeTween(array: HTMLCollectionOf<Element>, lengthOfTween: number)
  {
    console.log(lengthOfTween);
    let windowWidth = window.innerWidth > 992 ? window.innerWidth : 992;
    let windowHeight = window.innerHeight;
    for (let i = 0; i < array.length; ++i)
    {
      // let roomLeft = ((windowWidth * 1.5) + windowWidth * 0.05) - (array[i].offsetLeft + (array[i].clientWidth * 1.5));
      console.log(`parent of section: ${this.getParentSection(array[i].id)}`);
      let sectionWidth = document.getElementById(this.getParentSection(array[i].id))!.clientWidth;
      let roomLeft = sectionWidth - array[i].offsetLeft - array[i].clientWidth;
      // roomLeft = roomLeft > array[i].clientWidth * 1 ? array[i].clientWidth * 1 : roomLeft;
      console.log(`Element: ${array[i].id} RoomLeft: ${roomLeft}`);
      let scene = new Vue.prototype.$scrollmagic.scene(
        {
          triggerElement:`#${this.getParentSection(array[i].id)}`,
          duration: sectionWidth * lengthOfTween,
          offset: windowWidth/5,
          triggerHook: 1,
        }).setTween(`#${array[i].id}`, {x:`${roomLeft}`, ease: Linear.easeNone})
        // .addIndicators()
        scenes.push(scene);
      Vue.prototype.$scrollmagic.addScene(scene)
    }
  }

  getParentSection(elementName: string): string {
    //console.log(elementName)
    const element = document.getElementById(elementName);
    //console.log(element)
    let result = element.parentElement;
    while (result !== null) {
        if (result.tagName === 'SECTION') {
            break;
        }
        result = result.parentElement;
    }
    return result.id;
  }
}
// Scrolling vertically will move the page horizontally
window.onwheel = event => {
  if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    // Need to prevent default behavior for Safari for touchpad scrolling gesture to work
    event.preventDefault();
    window.scrollTo(window.scrollX + event.deltaX + event.deltaY, window.scrollY); // Added deltaX to ensure native horizontal scrolling
  } else {
    // For all other browsers
    window.scrollTo(window.scrollX + event.deltaY, window.scrollY);
  }
}
</script>


<style lang="scss">
$min-section-width: 992;

p, h1, h2, h4, h6, span, button {
  font-family: "Libre Franklin", Helvetica, sans-serif;
  color: black;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100vh;
  width: auto;
  display: flex;
  overscroll-behavior-y: none;
  overflow-x: auto;
  overflow-y: hidden;

  background-color: #fbf6f0;
}

button {
  font-size: 2.4vh;
  padding: 10px 18px;
  background-color: #16a4a9;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 15px;
  border-radius: 50px;
}

h1 {
  font-size: 9vh;
  text-align: left;
}

.title {
  font-size: 7vh;
  font-weight: bold;
}

.subtitle {
  font-size: 4.8vh;
  font-weight: normal;
}

.main-text {
  font-size: 3.5vh;
  font-weight: normal;
}

.peek-section {
  display: flex;
  min-width: $min-section-width * 1px;
}

#floating-nav {
  position: fixed;
  right: 20px;
}

.peek-section {
  height: 100%;
  width: 175vh;
  position: absolute;

  p {
    margin: 0;
  }
}

.wide-peek-section{
  width: calc(175vh * 1.25);
}

.super-wide-peek-section {
  width: calc(175vh * 1.5);
}

.peek-section:nth-child(1) {
  left: 0%;
  width: 100vw;
}

.peek-section:nth-child(2) {
  left: 100vw;
}

.peek-section:nth-child(3) {
  left: calc(100vw + 175vh);
}

.peek-section:nth-child(4) {
  left: calc(100vw + 350vh);
}

.peek-section:nth-child(5) {
  left: calc(100vw + 568.75vh);
}

.peek-section:nth-child(6) {
  left: calc(100vw + 831.25vh);
}

.peek-section:nth-child(7) {
  left: calc(100vw + 1093.75vh);
  width: 100vw;
}
// .peek-section:nth-child(1) {
//   left: 0%;
// }

// .peek-section:nth-child(2) {
//   left: 100%;
// }

// .peek-section:nth-child(3) {
//   left: 200%;
// }

// .peek-section:nth-child(4) {
//   left: 300%;
// }

// .peek-section:nth-child(5) {
//   left: 450%;
// }

// .peek-section:nth-child(6) {
//   left: 600%;
// }

// .peek-section:nth-child(7) {
//   left: 775%;
// }

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (max-height: 480px), (max-width: 768px) {
  // vertical stack
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

@media (max-width: 992px) {
  .medium-peek-section {
    width: $min-section-width * 1.25px;
  }

  .wide-peek-section{
    width: $min-section-width * 1.5px;
  }

  .super-wide-peek-section {
    width: $min-section-width * 1.75px;
  }

  .peek-section:nth-child(1) {
    // 1st section has normal width
    left: 0%;
  }

  .peek-section:nth-child(2) {
    // 2nd section has normal width
    left: $min-section-width * 1px;
  }

  .peek-section:nth-child(3) {
    // 3rd section has normal width
    left: $min-section-width * 2px;
  }

  .peek-section:nth-child(4) {
    // 4th section is a wide section (150%)
    left: $min-section-width * 3px;
  }

  .peek-section:nth-child(5) {
    // 5th section is a wide section (150%)
    left: $min-section-width * 4.5px;
  }

  .peek-section:nth-child(6) {
    // 6th section is a super wide section (175%)
    left: $min-section-width * 6px;
  }

  .peek-section:nth-child(7) {
    left: $min-section-width * 7.75px;
  }
}
</style>