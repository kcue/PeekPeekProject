<template>
    <div id="app">
        <Navigation/>
        <HomeSection/>
        <StatsSection/>
        <WebTourVideoSection/>
        <HotspotsSection/>
        <SpecialSection/>
        <TrustedSection/>
        <YourTurnSection/>
    </div>
</template>

<script>
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import StatsSection from './components/StatsSection';
import WebTourVideoSection from "./components/WebTourVideoSection";
import HotspotsSection from "./components/HotspotsSection";
import SpecialSection from "./components/SpecialSection";
import TrustedSection from "./components/TrustedSection";
import YourTurnSection from "./components/YourTurnSection";

export default {
    name: 'app',
    components: {
        Navigation,
        HomeSection,
        StatsSection,
        WebTourVideoSection,
        HotspotsSection,
        SpecialSection,
        TrustedSection,
        YourTurnSection
    },
}
</script>

<style lang="scss">
    * {
        background-color: #fbf6f0;
    }
    
</style>
