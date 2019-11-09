<template>
  <div class="demo-card">
    <div class="text-container">
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
    </div>
    <slot name="img"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class DemoCard extends Vue {}
</script>

