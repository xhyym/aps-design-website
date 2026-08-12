<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "export", label: "导出数据", icon: "arrow-right" },
  { key: "archive", label: "归档", icon: "panel" },
];

function handleAction(key: string): void {
  console.info("已选择操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" size="small" label="小尺寸菜单" @select="handleAction" />
</template>
