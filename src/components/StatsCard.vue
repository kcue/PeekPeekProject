<template>
    <div class="stats-card" :id="cardId">
        <div class="stats-card-content">
            <p class="card-heading">{{cardHeading}}</p>
            <p class="card-description">{{cardDescription}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({})

    export default class StatsCard extends Vue {
        @Prop() private cardId!: string;
        @Prop() private cardHeading!: string;
        @Prop() private cardDescription!: string;
    }
</script>

<style lang="scss" scoped>
    .stats-card {
        width: 31.25vh;
        height: 25vh;
        background-color: rgb(254, 255, 254);
        border-radius: 10px;
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.18);
        display: flex;
        flex-direction: column;
        justify-content: center;


        .stats-card-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            p {
                color: black;
            }

            .card-number {
                font-size: 9vh;
                font-weight: bold;
            }

            .card-subtitle {
                font-size: 2.5vh;
            }

            .card-title {
                font-size: 2.5vh;
                font-weight: bold;
                color: #1c7d83;
            }
        }   
    }
</style>
