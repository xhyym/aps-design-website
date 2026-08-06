<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const featureIcons = [
  { name: "calendar", label: "排期" },
  { name: "users", label: "成员" },
  { name: "chart", label: "数据" },
  { name: "settings", label: "设置" },
] as const;
</script>

<template>
  <ul class="icon-gallery" aria-label="工作台功能入口示例">
    <li v-for="item in featureIcons" :key="item.name">
      <AppIcon :name="item.name" :size="18" />
      <span>{{ item.label }}</span>
    </li>
  </ul>
</template>

<style scoped>
.icon-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin: 0;
  padding: 0;
  color: var(--aps-muted);
  font-size: 14px;
  list-style: none;
}

.icon-gallery li {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
</style>
