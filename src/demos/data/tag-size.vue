<script setup lang="ts">
import { AppTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppTag label="小尺寸" size="small" />
    <AppTag label="默认尺寸" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 8px; align-items: center; }
</style>
