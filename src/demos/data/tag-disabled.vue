<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="不可关闭" closable disabled />
    <AppTag label="不可操作" disabled />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; }
</style>
