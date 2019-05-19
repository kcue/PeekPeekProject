<template>
    <div>
        <h1>So... your turn to <span>Tell me about yourself...</span></h1>
        <Buttons v-bind:buttonList="buttonList"/>
    </div> 
</template>

<script lang="ts">
import Buttons from "./Buttons.vue";

export default {
    name: "YourTurnSection",
    components: {
        Buttons
    },
    data() {
        return {
            buttonList: [
                {
                    id: 6,
                    label: 'Contact Us',
                    target: "_blank"
                }
            ]
        }
    }
}
</script>
