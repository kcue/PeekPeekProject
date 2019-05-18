<template>
    <div>
        <div  id="we-do-work">We do work</div>
        <div id="better-than-most" class="container"> better than most, actually. </div>
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

<style scoped>
#we-do-work {
    font-size: 60px;
    font-family: "Libre Franklin", sans-serif;
}
    #better-than-most {
        font-size: 40px;
        letter-spacing: -0.75px;
    }
.container {
    width:40%;
    text-align:right;
}
</style>