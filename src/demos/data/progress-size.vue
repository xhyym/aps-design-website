<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="60" size="small" />
    <AppProgress :percentage="60" :stroke-width="12" />
    <AppProgress :percentage="60" type="circle" :width="120" :stroke-width="10" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 16px; }
</style>
