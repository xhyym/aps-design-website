<script setup lang="ts">
import { AppThemeSvg } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "bell", label: "消息" },
  { name: "user", label: "用户" },
  { name: "calendar", label: "日历" },
] as const;
</script>

<template>
  <div class="theme-svg-demo-list">
    <span v-for="item in items" :key="item.name">
      <AppThemeSvg :name="item.name" :size="18" :label="item.label" />
      {{ item.label }}
    </span>
  </div>
</template>

<style scoped>
.theme-svg-demo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 14px;
  color: var(--aps-text);
}
.theme-svg-demo-list span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
