<template>
    <div>
        <h3>So, your turn.</h3>
        <h1>Tell me your story.</h1>
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
