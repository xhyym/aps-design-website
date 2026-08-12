<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "columns", label: "选择列", icon: "columns" },
  { key: "filter", label: "筛选", icon: "filter" },
];

function handleAction(key: string): void {
  console.info("已选择视图操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="视图设置" @select="handleAction" />
</template>
