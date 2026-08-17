<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppContextMenu, type ContextMenuItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: ContextMenuItem[] = [
  { key: "a", label: "可用操作" },
  { key: "b", label: "锁定操作", disabled: true },
];
</script>

<template>
  <AppContextMenu v-model="open" :items="items" menu-label="操作菜单">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">操作菜单</AppButton>
    </template>
  </AppContextMenu>
</template>
