<template>
    <div>
        <img src="../assets/MountainBG.jpg"/>
        <h1>It's all about you.</h1>
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



