<script setup lang="ts">
import { ref } from "vue";
import { AppDateTimePicker } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
</script>

<template>
  <div class="demo-stack">
    <AppDateTimePicker v-model="value" invalid described-by="dt-hint" clearable />
    <span id="dt-hint">请选择有效的发布时间</span>
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-direction: column; gap: 8px; width: min(100%, 320px); }
</style>
