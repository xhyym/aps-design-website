<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="70" striped />
    <AppProgress :percentage="70" striped striped-flow />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
