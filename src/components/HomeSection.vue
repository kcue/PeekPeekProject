<template>
    <div>
        <img src="../assets/MountainBG.jpg" class="mountain-pic"/>
        <div id="about-you"> <h1>It's all about you.</h1> </div>
        <div class=separator></div>
        <Buttons v-bind:buttonList="buttonList"/>
        
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Buttons from "./Buttons.vue";


export default {
    name: 'HomeSection',
    components: {
        Buttons,
    },
    data() {
        return {
            buttonList: [
                {
                    id: 1,
                    label: "Watch video",
                    target: "_blank"
                },
                {
                    id: 2,
                    label: "Take a peek",
                    target: "_blank"
                }
            ]
        }
    }
}
</script>


<style scoped>

    .mountain-pic {
        pointer-events: auto;
        position: absolute;
        background: url(https://thomashuang.xyz/demo/HorizontalScrollingTest.hyperesources/Pasted.jpg) no-repeat;
        overflow: visible;
        background-size: 100% 100%;
        z-index: 1;
        filter: none;
        transform: none;
        display: inline;
        width: 667px;
        height: 1001px;
        top: -201px;
        left: -90px;
    }

    #about-you {
        pointer-events: auto;
        position: absolute;
        color: rgb(0, 0, 0);
        padding: 8px;
        display: inline;
        font-family: "Libre Franklin", sans-serif;
        letter-spacing: 0;
        font-size: 100px;
        line-height: 77px;
        font-style: normal;
        overflow-wrap: break-word;
        font-weight: normal;
        overflow: visible;
        z-index: 2;
        word-spacing: 0px;
        width: 601px;
        height: 145px;
        top: 253px;
        left: 639px;
    }
</style>
