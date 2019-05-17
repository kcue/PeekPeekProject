<template>
    <div> 
        <h1>Trusted by...</h1>
        <Cards v-bind:cardsList="cardsList"/>
        <Buttons v-bind:buttonList="buttonList"/>
    </div>
</template>

<script lang='ts'>
import Buttons from "./Buttons.vue";
import Cards from "./Cards.vue"

export default {
    name: "TrustedSection",
    components: {
        Buttons,
        Cards
    },
    data() {
        return {
            buttonList: [
                {
                    id: 6,
                    label: 'Take a sneak peek',
                    target: "_blank"
                }
            ],
            cardsList: [
                {
                    id: 5,
                    num: 1,
                    words: 'moving card!'
                },
                {
                    id: 6,
                    num: 2,
                    words: 'moving card!'
                },
                {
                    id: 7,
                    num: 3,
                    words: 'moving card!'
                },
                {
                    id: 8,
                    num: 4,
                    words: 'moving card!'
                }
            ]
        }
    }
}
</script>
