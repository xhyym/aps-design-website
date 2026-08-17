<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppBrandMark size="large" />
    <AppBrandMark size="hero" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 24px; align-items: center; }
</style>
