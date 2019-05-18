<template>
    <section class="peek-section" id="hotspot-section">
        <p>It's not just a place</p>
        <img class="hotspot-skyline" src="../assets/images/transparent_skyline.png"/>
        <h2>Tell your story</h2>
        <p>With hotspots</p>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HotspotSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
.hotspot-skyline {
    width: 95%;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    max-height: 80%;
}
</style>