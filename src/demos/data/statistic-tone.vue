<script setup lang="ts">
import { AppStatistic } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatistic label="库存告警" :value="6" tone="danger" icon="warning" />
    <AppStatistic label="在线人数" :value="328" tone="success" icon="users" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 48px; }
</style>
