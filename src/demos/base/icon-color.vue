<script setup lang="ts">
import { AppIcon } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { name: "check", color: "var(--aps-green, #2da44e)" },
  { name: "warning", color: "var(--aps-orange, #bc4c00)" },
  { name: "trash", color: "var(--aps-red, #e5484d)" },
  { name: "bell", color: "var(--aps-blue, #0a6cdf)" },
] as const;
</script>

<template>
  <div class="icon-demo-color">
    <span v-for="item in items" :key="item.name" :style="{ color: item.color }">
      <AppIcon :name="item.name" :size="22" />
    </span>
  </div>
</template>

<style scoped>
.icon-demo-color {
  display: flex;
  gap: 16px;
}
</style>
