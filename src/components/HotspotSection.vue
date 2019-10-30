<template>
    <section>
        <img class="hotspot-skyline" src="../assets/images/city-with-infopoints.png"/>
        <div class="hotspot-titles">
            <h4 >It's not just the place</h4>
            <h2 ><b>Tell me about</b> <br> <b>your story</b></h2>
            <h4 ><b>with the hotspots!</b></h4>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HotspotSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
#hotspot-section {
    // display: flex;
    // flex-direction: row;
    // justify-content: baseline;

    .hotspot-skyline {
        width: 95%;
        height:50%;
        object-fit: contain;
        position: absolute;
        top: 9%;
        left: 0;
       
    }
    h4{
        color:grey;
    }
    .hotspot-titles {
        position: absolute;
        top:40%;
        left:55%;
        font-size: 30px;
        margin-top: 80px;
        margin-right: 10%;
        z-index: 10;
        text-align: left;
        
        

        h2 {
            margin: 0;
        }

        h4 {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }

    .hotspot-titles-parallax-margin {
        width: 25vh;
        align-items: flex-end;
    }
}


</style>