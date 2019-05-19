<template>
    <div>
        <h2>Welcome to the WebTour</h2>
        <Buttons v-bind:buttonList = "buttonList"/>
        <img src="../assets/TransparentSkyline.png"/>
        <img src="../assets/InfoSymbol.png"/>
        <h1>It's not just the place, <span>tell me about your story</span> with Spotlights.</h1>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Buttons from "./Buttons.vue"


export default {
    name: "HotspotsSection",
    components: {
        Buttons,
    },
    data() {
        return {
            buttonList: [
                {
                    id: 'webtour learn',
                    label: 'learn more',
                    target: "_blank"
                }
            ]
        };
    }
}
</script>

<style scoped>

</style>