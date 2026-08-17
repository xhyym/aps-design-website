<script setup lang="ts">
import { AppBrandMark } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppBrandMark size="small" />
    <AppBrandMark size="default" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; align-items: center; }
</style>
