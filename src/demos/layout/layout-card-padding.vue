<script setup lang="ts">
import { AppCard } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppCard header="紧凑" padding="small"><p>紧凑内容</p></AppCard>
    <AppCard header="宽松" padding="large"><p>宽松内容</p></AppCard>
  </div>
</template>

<style scoped>
.row { display: flex; gap: 16px; }
.row :deep(.aps-card) { width: 240px; }
</style>
