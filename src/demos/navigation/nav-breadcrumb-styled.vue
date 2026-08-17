<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "项目", href: "/project" },
  { label: "迭代", href: "/project/sprint" },
  { label: "看板" },
];
</script>

<template>
  <div class="wrap">
    <AppBreadcrumb :items="items" />
  </div>
</template>

<style scoped>
.wrap { padding: 8px 12px; border-radius: 8px; background: var(--aps-surface-soft); }
</style>
