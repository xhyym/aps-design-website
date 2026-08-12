<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-demo-colors">
    <span class="tone-default"><AppSvgIcon name="check" :size="18" label="成功" /> 完成</span>
    <span class="tone-danger"><AppSvgIcon name="warning" :size="18" label="警告" /> 注意</span>
    <span class="tone-muted"><AppSvgIcon name="bell" :size="18" label="消息" /> 通知</span>
  </div>
</template>

<style scoped>
.svg-icon-demo-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14px;
}
.svg-icon-demo-colors span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.tone-default { color: var(--aps-success, #16a34a); }
.tone-danger { color: var(--aps-danger, #dc2626); }
.tone-muted { color: var(--aps-muted, #6b7280); }
</style>
