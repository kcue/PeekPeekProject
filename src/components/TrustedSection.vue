<template>
    <div> 
        <h1><span>Customized Branding</span> with PeekPeek</h1>
        <h2>Lorem ipsum dolor sit amet, dolore magna aliqua. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nurra pariatur.
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
                    id: 'sneak_peek',
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
                },
                {
                    id: 9,
                    num: 5,
                    words: 'moving card!'
                },
                {
                    id: 10,
                    num: 6,
                    words: 'moving card!'
                }
            ]
        }
    }
}
</script>
