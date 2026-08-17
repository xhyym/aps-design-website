<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const picked = ref("");
const items: ContextMenuItem[] = [
  { key: "view", label: "查看详情" },
  { key: "refresh", label: "刷新" },
];
</script>

<template>
  <div>
    <AppContextMenu v-model="open" :items="items" menu-label="列表操作" @select="(k: string) => (picked = k)">
      <template #trigger="{ toggle }">
        <AppButton @click="toggle">打开菜单</AppButton>
      </template>
    </AppContextMenu>
    <p class="hint">已选：{{ picked || "无" }}</p>
  </div>
</template>

<style scoped>
.hint { color: var(--aps-muted); margin-top: 8px; }
</style>
