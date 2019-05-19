<template>
    <div> 
        <div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
            <div>
                <img src=""/>
                <iframe src=""/>
            </div>
        </div> 
        <h1>something <span>special</span> for every one of you</h1>
        <Buttons v-bind:buttonList="buttonList"/>
    </div>
</template>

<script lang='ts'>
import Buttons from "./Buttons.vue";

export default {
    name: "VideoSection",
    components: {
        Buttons
    },
    data() {
        return {
            buttonList: [
                {
                    id: 'case_studies',
                    label: 'Check out case studies',
                    target: "_blank"
                }
            ]
        }
    }
}
</script>
