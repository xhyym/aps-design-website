<script setup lang="ts">
import { AppStatusTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppStatusTag tone="warning" label="待审核" />
    <AppStatusTag tone="warning" label="即将过期" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
