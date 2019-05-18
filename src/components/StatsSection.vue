<template>
    <section class="peek-section" id="stats-section">
        <div class="stats-cards">
            <StatsCard :cardNumber="'36%'" :supportiveTitle="'Increase in'" :title="'Lead Generation'"/>
            <StatsCard :cardNumber="'70%'" :supportiveTitle="'Increase in'" :title="'Engagement'"/>
            <StatsCard :cardNumber="'25'" :supportiveTitle="'Current'" :title="'Affiliates'"/>
            <StatsCard :cardNumber="'10'" :supportiveTitle="'Minutes of'" :title="'Excitement'"/>
        </div>
        <div class="stats-captions">
            <h2>We do work</h2>
            <h4>Better than most, actually</h4>
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
</style>