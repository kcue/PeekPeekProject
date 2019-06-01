<template>
    <section class="peek-section" id="video-section">
        <div class="video-section-container">
            <iframe class = "media"
            id = "firstVideo"
            width="100%" 
            height="100%" 
            src="https://www.youtube-nocookie.com/embed/GbpJN-nZt8A" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen=""
            scrolling="no"></iframe>
            <div>
                <h2 class="wide-title" id="fullexperience">It's the full <b>experience</b></h2>
            </div>
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
#video-section {
    // background-color: #7b329b;
}
.video-section-container {
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    width: 80%;
    max-width: 1200px;
    flex-direction: column;
    justify-content: center;

    iframe {
        margin: 0 auto;
        pointer-events: none;
    }

    h2 {
        font-weight: normal;
        margin-top: 20px;
        margin-bottom: 0;
        text-align: left;
    }
}
</style>