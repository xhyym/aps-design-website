<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";
</script>

<template>
  <div class="svg-icon-meta">
    <span><AppSvgIcon name="clock" :size="15" /> 预计 10 分钟完成</span>
    <span><AppSvgIcon name="users" :size="15" /> 8 位协作者</span>
  </div>
</template>

<style scoped>
.svg-icon-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--aps-muted);
  font-size: 14px;
}

.svg-icon-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
</style>
