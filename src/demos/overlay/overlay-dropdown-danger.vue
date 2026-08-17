<script setup lang="ts">
import { ref } from "vue";
import { AppButton, AppDropdown, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const open = ref(false);
const items: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "download" as const },
  { key: "delete", label: "删除项目", icon: "trash" as const, danger: true },
];
</script>

<template>
  <AppDropdown v-model="open" :items="items" menu-label="项目操作">
    <template #trigger="{ toggle }">
      <AppButton @click="toggle">项目操作</AppButton>
    </template>
  </AppDropdown>
</template>
