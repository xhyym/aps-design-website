<script setup lang="ts">
import { AppCheckTag } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppCheckTag label="已禁用" :model-value="false" disabled />
    <AppCheckTag label="选中且禁用" :model-value="true" disabled />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 12px; }
</style>
