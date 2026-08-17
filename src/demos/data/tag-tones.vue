<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="蓝色" tone="blue" />
    <AppTag label="绿色" tone="green" />
    <AppTag label="橙色" tone="orange" />
    <AppTag label="红色" tone="red" />
    <AppTag label="中性" tone="neutral" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; flex-wrap: wrap; }
</style>
