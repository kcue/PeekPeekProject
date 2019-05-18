<template>
    <section class="peek-section" id="video-section">
        <div class="video-section-container">
            <h2>Welcome to WebTour<sup>TM</sup></h2>
            <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/GbpJN-nZt8A" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen=""></iframe>
            <p>Get the full <b>Experience</b></p>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VideoSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
.video-section-container {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;

    h2, p {
        font-size: 48px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    iframe {
        width: 80%;
        max-width: 800px;
        margin: 0 auto;
    }
}
</style>