<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="success" label="已发布" />
    <AppStatusTag tone="success" label="部署完成" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
