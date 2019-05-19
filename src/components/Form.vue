<template>
    <div>
        <h4>Get your estimate</h4>
        <h1>Which industry are you from?</h1>
        <Buttons v-bind:buttonList="buttonList">
    </div>
</template>

<script>
import Buttons from "./Buttons.vue"
export default {
    name="form",
    components: {
        Buttons
    },
    data() {
        return {
            buttonList: [
                {
                    id: 'education_button',
                    label: 'Education',
                    target: "_blank"
                },
                {
                    id: 'hospitality_button',
                    label: 'Hospitality',
                    target: "_blank"
                },
                {
                    id: 'other_button',
                    label: 'Others',
                    target: "_blank"
                }
            ]
        }
    }
}
</script>

<style>

</style>
