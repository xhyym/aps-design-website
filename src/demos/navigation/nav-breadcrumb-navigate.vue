<script setup lang="ts">
import { ref } from "vue";
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const items = [
  { label: "首页", href: "/home" },
  { label: "列表", href: "/list" },
  { label: "当前" },
];
</script>

<template>
  <div>
    <AppBreadcrumb :items="items" @navigate="(href: string) => (last = href)" />
    <p class="hint">最近点击：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
