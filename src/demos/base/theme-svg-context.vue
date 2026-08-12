<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="theme-svg-demo-context">
    <span><AppThemeSvg name="bell" :size="16" label="消息提醒" /> 您有 3 条新消息</span>
    <span><AppThemeSvg name="settings" :size="16" label="偏好设置" /> 偏好设置已更新</span>
  </div>
</template>

<style scoped>
.theme-svg-demo-context {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--aps-muted);
  font-size: 14px;
}
.theme-svg-demo-context span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
