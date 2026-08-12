<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const names = ["grid", "users", "settings", "search", "bell", "check", "calendar", "chart"] as const;
</script>

<template>
  <div class="icon-demo-basic">
    <AppIcon v-for="name in names" :key="name" :name="name" :size="20" />
  </div>
</template>

<style scoped>
.icon-demo-basic {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  color: var(--aps-ink);
}
</style>
