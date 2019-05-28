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
    let windowLength = {
      titles: 3,
      subtitles: 4.5,
      media: 4,
      maintext: 5.25
    }

    let titles = document.getElementsByClassName("title");
    let subtitles = document.getElementsByClassName("subtitle");
    let media = document.getElementsByClassName("media");
    let mainText = document.getElementsByClassName("main-text");
    
    // this.makeTween(titles, windowLength["titles"]);
    // this.makeTween(subtitles, windowLength['subtitles']);
    // this.makeTween(media, windowLength['media']);
    // this.makeTween(mainText, windowLength['maintext']);  
    
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    // let demos = document.getElementsByClassName("flippety");
    // console.log("Demos:")
    // console.log(demos)
    // for (let i = 0; i < demos.length; ++i)
    // {
    //   debugger;
    //   let roomLeft = ((windowWidth * 1.5) + windowWidth * 0.05) - (demos[i].offsetLeft + (demos[i].clientWidth * 1.5));
    //   console.log(roomLeft);
    //   Vue.prototype.$scrollmagic.addScene(new Vue.prototype.$scrollmagic.scene(
    //       {
    //       triggerElement:`#${this.getParentSection(demos[i].id)}`,
    //       duration: windowWidth,
    //       offset: 0,
    //       triggerHook: 1
    //       }).setTween(`#${demos[i].id}`, {x:`${roomLeft}`, ease: Linear.easeNone})
    //       .addIndicators())
    // }
    // console.log(this.getParentSection(demos[1].id))

  }

  makeTween(array: HTMLCollectionOf<Element>, lengthOfTween: number)
  {
    console.log(lengthOfTween);
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    for (let i = 0; i < array.length; ++i)
    {
      let roomLeft = ((windowWidth * 1.5) + windowWidth * 0.05) - (array[i].offsetLeft + (array[i].clientWidth * 1.5));
      console.log(array[i].id);
      console.log(roomLeft);
      Vue.prototype.$scrollmagic.addScene(new Vue.prototype.$scrollmagic.scene(
        {
          triggerElement:`#${this.getParentSection(array[i].id)}`,
          duration: windowWidth * lengthOfTween,
          offset: windowWidth/5,
          triggerHook: 1,
        }).setTween(`#${array[i].id}`, {x:`${roomLeft}`, ease: Linear.easeNone})
        // .addIndicators()
        )
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
window.addEventListener('wheel', event => window.scrollTo(window.scrollX + event.deltaY, window.scrollY));
</script>


<style lang="scss">
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
  font-size: 20px;
  padding: 10px 18px;
  background-color: #16a4a9;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 15px;
  border-radius: 4px;
}

h1 {
  font-size: 84px;
  text-align: left;
}

.title {
  font-size: 60px;
  font-weight: bold;
}

.subtitle {
  font-size: 40px;
  font-weight: normal;
}

.main-text {
  font-size: 28px;
  font-weight: normal;
}
.peek-section {
  display: flex;
}

#floating-nav {
  position: absolute;
  right: 20px;
}

.peek-section {
  height: 100%;
  width: 100vw;
  position: absolute;

  p {
    margin: 0;
  }
}

.peek-section:nth-child(1) {
  left: 0%;
}

.peek-section:nth-child(2) {
  left: 100%;
}

.peek-section:nth-child(3) {
  left: 200%;
}

.peek-section:nth-child(4) {
  left: 300%;
}

.peek-section:nth-child(5) {
  left: 400%;
}

.peek-section:nth-child(6) {
  left: 500%;
}

.peek-section:nth-child(7) {
  left: 600%;
}

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
</style>
