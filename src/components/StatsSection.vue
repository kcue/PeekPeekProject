<template>
    <div>
        <h1>We do work <span>better than most, actually.</span></h1>
        <h2>New Challenge?</h2>
        <h2>New Solution</h2>
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
                    num: 18,
                    words: 'Longer Stay'
                },
                {
                    id: 2,
                    num: 130,
                    words: 'Booking Rate'
                },
                {
                    id: 3,
                    num: 12,
                    words: 'Engagement Rate'
                },
                {
                    id: 4,
                    num: 28,
                    words: 'Physical Visit'
                }
            ]
        }
    }
}
</script>

