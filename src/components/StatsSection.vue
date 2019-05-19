<template>
    <section class="peek-section" id="stats-section">
        <div class="stats-section-left-padding"></div>
        <div class="stats-section-content">
            <div class="stats-cards">
                <div class="stats-cards-container">
                    <StatsCard :cardNumber="'36%'" :supportiveTitle="'Increase in'" :title="'Lead Generation'" id="stats-card-one"/>
                    <StatsCard :cardNumber="'70%'" :supportiveTitle="'Increase in'" :title="'Engagement'" id="stats-card-two"/>
                    <StatsCard :cardNumber="'25'" :supportiveTitle="'Current'" :title="'Affiliates'" id="stats-card-three"/>
                    <StatsCard :cardNumber="'10'" :supportiveTitle="'Minutes of'" :title="'Excitement'" id="stats-card-four"/>
                </div>
            </div>
            <div class="stats-captions">
                <h2>We do work</h2>
                <h4>Better than most, actually</h4>
            </div>
        </div> 
        
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatsCard from "@/components/StatsCard.vue";

@Component({
  components: {
    StatsCard,
  }
})
export default class StatsSection extends Vue {
    
}
</script>

<style lang="scss" scoped>
#stats-section {
    flex-direction: row;

    .stats-section-left-padding {
        flex-grow: 1;
    }

    .stats-section-content {
        flex-grow: 9;
        display: flex;

        .stats-cards {
            // display: flex;
            // flex-direction: column;
            // justify-content: center;

            .stats-cards-container {
                width: 300px;
                height: 300px;
                position: relative;
                top: calc(100% - 150px);

                .stats-card {
                    position: absolute;
                    display: flex;
                    flex-direction: column
                }

                .stats-card:nth-child(1) {
                    z-index: 4;
                    top: 0px;
                }

                .stats-card:nth-child(2) {
                    z-index: 3;
                    top: 10px;
                }

                .stats-card:nth-child(3) {
                    z-index: 2;
                    top: 20px;
                }

                .stats-card:nth-child(4) {
                    z-index: 1;
                    top: 30px;
                }
            }
        }        
    }

    .stats-captions {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 50px;
        justify-content: center;


        h2 {
            font-size: 60px;
            margin: 0;
        }

        h4 {
            font-size: 40px;
            font-weight: normal;
            margin: 0;
        }
    }
}
</style>