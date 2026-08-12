<script setup lang="ts">
import { AppSvgIcon, type IconName } from "aps-design-pro";
import "aps-design-pro/style.css";

const iconNames: IconName[] = [
  "grid", "settings", "users", "shield", "menu", "search", "bell",
  "chevron-down", "plus", "minus", "dots", "arrow-up", "arrow-right",
  "logout", "panel", "close", "user", "refresh", "check", "warning",
  "edit", "trash", "columns", "sort", "sun", "moon", "lock", "eye",
  "arrow-left", "chevron-up", "filter", "fullscreen", "pin", "calendar",
];
</script>

<template>
  <div class="svg-icon-demo-grid">
    <div v-for="name in iconNames" :key="name" class="svg-icon-cell">
      <AppSvgIcon :name="name" :size="20" :label="name" />
      <code>{{ name }}</code>
    </div>
  </div>
</template>

<style scoped>
.svg-icon-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 10px;
}
.svg-icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px;
  border: 1px solid var(--aps-border);
  border-radius: 8px;
  color: var(--aps-text);
  font-size: 12px;
}
.svg-icon-cell code {
  color: var(--aps-muted);
}
</style>
