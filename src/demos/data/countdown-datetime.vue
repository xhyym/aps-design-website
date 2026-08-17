<script setup lang="ts">
import { AppCountdown } from "aps-design-pro";
import "aps-design-pro/style.css";

const ts = Date.now() + 1000 * 60 * 60 * 2;
const date = new Date(Date.now() + 1000 * 60 * 30);
</script>

<template>
  <div class="col">
    <AppCountdown :value="ts" format="HH:mm:ss" />
    <AppCountdown :value="date" format="HH:mm:ss" />
  </div>
</template>

<style scoped>
.col { display: flex; flex-direction: column; gap: 8px; }
</style>
