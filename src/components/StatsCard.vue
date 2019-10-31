<template>
    <div class="stats-card">
        <div class="stats-card-content">
            <p class="card-heading">{{cardHeading}}</p>
            <p class="card-description">{{cardDescription}}</p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({})

    export default class StatsCard extends Vue {
        @Prop() private cardHeading!: string;
        @Prop() private cardDescription!: string;
    }
</script>

<style lang="scss" scoped>
    .stats-card {
        width: 300px;
        height: 300px;
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

            .card-heading {
                font-size: 9vh;
                font-weight: 700;
            }

            .card-description {
                font-size: 2.5vh;
                font-weight: 400;
            }

        }   
    }
</style>
