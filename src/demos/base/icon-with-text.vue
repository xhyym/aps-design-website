<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="icon-demo-text">
    <p class="icon-demo-text__row"><AppIcon name="check" :size="16" /> 配置已保存</p>
    <p class="icon-demo-text__row"><AppIcon name="warning" :size="16" /> 有 2 项待处理</p>
    <p class="icon-demo-text__row"><AppIcon name="refresh" :size="16" /> 正在同步</p>
  </div>
</template>

<style scoped>
.icon-demo-text {
  display: grid;
  gap: 10px;
}

.icon-demo-text__row {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin: 0;
  color: var(--aps-muted);
  font-size: 14px;
}
</style>
