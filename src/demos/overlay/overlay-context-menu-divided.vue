<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "copy", label: "复制", icon: "copy" as const },
  { key: "paste", label: "粘贴", icon: "check" as const },
  { key: "move", label: "移动到…", icon: "drag" as const, divided: true },
  { key: "delete", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="更多操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">更多操作</AppButton>
    </template>
  </AppContextMenu>
</template>
