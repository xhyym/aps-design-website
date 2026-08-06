<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="theme-svg-demo">
    <span><AppThemeSvg name="bell" :size="16" label="消息提醒" /> 消息提醒</span>
    <span><AppThemeSvg name="settings" :size="20" label="偏好设置" /> 偏好设置</span>
  </div>
</template>

<style scoped>
.theme-svg-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--aps-muted);
  font-size: 14px;
}

.theme-svg-demo span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
