<template>
  <div id="app" class="scrolling-wrapper-flexbox fit-screen">
    <Navigation />
    <HomeSection />
    <StatsSection />
    <!--<WebTourVideoSection class="page" />-->
    <!--<HotspotsSection class="page" />-->
    <!--<SpecialSection class="page" />-->
    <!--<TrustedSection class="page" />-->
    <!--<YourTurnSection class="page" />-->
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import StatsSection from "./components/StatsSection";
import WebTourVideoSection from "./components/WebTourVideoSection";
import HotspotsSection from "./components/HotspotsSection";
import SpecialSection from "./components/SpecialSection";
import TrustedSection from "./components/TrustedSection";
import YourTurnSection from "./components/YourTurnSection";

export default {
  name: "app",
  components: {
    Navigation,
    HomeSection,
    StatsSection,
    // WebTourVideoSection,
    // HotspotsSection,
    // SpecialSection,
    // TrustedSection,
    // YourTurnSection
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

* {
  background-color: #fbf6f0;
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  .page {
    /*display: flex;*/
  }
}

.fit-screen {
  pointer-events: auto;
  /*position: absolute;*/
  overflow: visible;
  z-index: 7;
  width: 100vw;
  height: 100vh;
  left: 0px;
}
</style>
