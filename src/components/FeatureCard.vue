<template>
  <div class="feature-card">
  	<slot name="img"></slot>
    <div class="text-container">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class FeatureCard extends Vue {}
</script>

