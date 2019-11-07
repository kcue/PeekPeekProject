<template>
  <div class="demo-card">
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <slot name="img"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class DemoCard extends Vue {}
</script>

