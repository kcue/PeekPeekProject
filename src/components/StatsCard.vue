<template>
    <!-- <button @click="printCaption()">{{ buttonCaption }}</button> -->
    <div class="stats-card">
        <p class="number">{{cardNumber}}</p>
        <div class="card-separator"></div>
        <p class="supportive-title">{{supportiveTitle}}</p>
        <p class="title">{{title}}</p> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StatsCard extends Vue {
    @Prop() private cardNumber!: string;
    @Prop() private supportiveTitle!: string;
    @Prop() private title!: string;

    // printCaption = () => {
    //     console.log(this.buttonCaption)
    // }
}
</script>

<style lang="scss" scoped>
.stats-card {
    width: 300px;
    height: 240px;
    background-color: rgb(254, 255, 254);
    border-radius: 10px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    p {
        color: black;
        margin-left: 20px;
    }

    .number {
        font-size: 84px;
        font-weight: bold;
    }

    .card-separator {
        width: 80px;
        margin: 15px 20px;
        height: 8px;
        background-color: #8f8f94;
        border-radius: 4px;
    }

    .supportive-title {
        font-size: 24px;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #1c7d83;
    }
}

// button {
//     background-color: black;
//     color: white;
//     font-size: 18px;

//     width: 50px;
//     height: 50px;
//     border-radius: 25px;
// }
</style>
