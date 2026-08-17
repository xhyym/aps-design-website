<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppMenuRight } from "aps-design-pro";
import "aps-design-pro/style.css";

const last = ref("");
const visible = ref(false);
const items = [
  { key: "k1", label: "刷新", icon: "refresh" as const },
  { key: "k2", label: "导出", icon: "download" as const },
];
</script>

<template>
  <div>
    <AppButton @click="visible = true">打开菜单</AppButton>
    <AppMenuRight v-model="visible" :items="items" label="更多" @select="(key: string) => (last = key)" />
    <p class="hint">已选：{{ last || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
