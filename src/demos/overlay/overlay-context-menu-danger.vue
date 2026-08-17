<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "edit", label: "编辑", icon: "edit" as const },
  { key: "delete", label: "删除", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="行操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">右键菜单</AppButton>
    </template>
  </AppContextMenu>
</template>
