<script setup lang="ts">
import { AppSvgIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "user", label: "用户" },
  { name: "settings", label: "设置" },
  { name: "bell", label: "通知" },
  { name: "search", label: "搜索" },
] as const;
</script>

<template>
  <div class="svg-icon-demo-list">
    <span v-for="item in items" :key="item.name">
      <AppSvgIcon :name="item.name" :size="18" :label="item.label" />
      {{ item.label }}
    </span>
  </div>
</template>

<style scoped>
.svg-icon-demo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  color: var(--aps-text);
  font-size: 14px;
}
.svg-icon-demo-list span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
</style>
