<script setup lang="ts">
import { ref } from "vue";
import { AppTimeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppTimeSelect v-model="value" invalid described-by="ts-hint" clearable placeholder="选择时间" aria-label="时间" />
    <span id="ts-hint">请选择一个预约时间</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; width: min(100%, 240px); }
</style>
