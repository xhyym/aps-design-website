<script setup lang="ts">
import { AppLoadingState } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="row">
    <AppLoadingState title="正在加载" :rows="2" />
    <AppLoadingState title="正在加载" :rows="5" />
  </div>
</template>

<style scoped>
.row { display: flex; gap: 24px; }
</style>
