<template>
  <div class="stats-card">
    <div class="stats-card-content">
      <p class="card-heading">{{ cardHeading }}</p>
      <p class="card-description">{{ cardDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class StatsCard extends Vue {
  @Prop() private additionalClass!: string;
  @Prop() private cardHeading!: string;
  @Prop() private cardDescription!: string;
}
</script>
