<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const iconNames = [
  "grid", "settings", "users", "shield", "menu", "search", "bell",
  "chevron-down", "chevron-left", "chevron-right", "chevron-up",
  "plus", "minus", "dots", "arrow-up", "arrow-right", "arrow-left",
  "logout", "panel", "close", "user", "refresh", "check", "warning", "edit", "trash",
  "columns", "sort", "sun", "moon", "lock", "eye", "eye-off", "filter",
  "fullscreen", "fullscreen-exit", "pin", "calendar", "clock", "chart",
  "play", "pause", "volume", "volume-off", "drag", "download", "print",
  "zoom-in", "zoom-out", "copy",
] as const;
</script>

<template>
  <ul class="icon-demo-grid" aria-label="全部内置图标">
    <li v-for="name in iconNames" :key="name">
      <AppIcon :name="name" :size="20" />
      <code>{{ name }}</code>
    </li>
  </ul>
</template>

<style scoped>
.icon-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.icon-demo-grid li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid var(--aps-line-soft);
  border-radius: 10px;
  color: var(--aps-ink);
}

.icon-demo-grid code {
  font-size: 11px;
  color: var(--aps-faint);
}
</style>
