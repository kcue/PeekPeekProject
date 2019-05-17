<template>
    <div>
        <h1>We do work better than most, actually.</h1>
        <Cards v-bind:cardsList="cardsList"/>
    </div>
</template>

<script lang="ts">
import Cards from "./Cards.vue";

export default {
    name: "StatsSection",
    components: {
        Cards
    },
    data() {
        return {
            cardsList: [
                {
                    id: 1,
                    num: 10,
                    words: 'beep borp'
                },
                {
                    id: 2,
                    num: 15,
                    words: 'beep borp'
                },
                {
                    id: 3,
                    num: 20,
                    words: 'beep borp'
                },
                {
                    id: 4,
                    num: 25,
                    words: 'beep borp'
                }
            ]
        }
    }
}
</script>

