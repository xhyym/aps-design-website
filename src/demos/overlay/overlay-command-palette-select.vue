<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppCommandPalette, type CommandPaletteItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: CommandPaletteItem[] = [
  { key: "new", title: "新建文档", description: "创建一篇新文档", icon: "plus" as const },
  { key: "search", title: "全局搜索", description: "搜索全部内容", icon: "search" as const },
];
</script>

<template>
  <div>
    <AppButton @click="open = true">打开命令面板</AppButton>
    <AppCommandPalette v-model="open" :items="items" @select="(item) => (picked = item.title)" />
    <p class="hint">已执行：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
