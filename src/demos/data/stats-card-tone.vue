<script setup lang="ts">
import { AppStatsCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatsCard title="正常" value="86" tone="success" />
    <AppStatsCard title="告警" value="12" tone="warning" />
    <AppStatsCard title="异常" value="3" tone="danger" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; flex-wrap: wrap; }
</style>
