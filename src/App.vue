<template>
    <div id="app" class="scrolling-wrapper-flexbox fit-screen">
        <Navigation class="page"/>
        <HomeSection class="page"/>
        <StatsSection class="page"/>
        <WebTourVideoSection class="page"/>
        <HotspotsSection class="page"/>
        <SpecialSection class="page"/>
        <TrustedSection class="page"/>
        <YourTurnSection class="page"/>
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
            flex: 0 0 auto;
            margin-right: 3px;
        }
    }

    .fit-screen {
        pointer-events: auto;
        /*position: absolute;*/
        overflow: visible;
        z-index: 7;
        width: 1440px;
        height: 800px;
        top: 21px;
        left: 0px;
    }
    
</style>
