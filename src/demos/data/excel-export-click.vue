<script setup lang="ts">
import { ref } from "vue";
import { AppExcelExport } from "aps-design-pro";
import "aps-design-pro/style.css";

const done = ref("");
</script>

<template>
  <div>
    <AppExcelExport filename="数据导出.xlsx" @export="done = '已触发导出：数据导出.xlsx'" />
    <p class="hint">{{ done || "点击上方按钮触发导出" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
