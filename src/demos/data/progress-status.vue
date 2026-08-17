<script setup lang="ts">
import { AppProgress } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="col">
    <AppProgress :percentage="100" status="success" />
    <AppProgress :percentage="55" status="warning" />
    <AppProgress :percentage="20" status="error" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 12px; }
</style>
