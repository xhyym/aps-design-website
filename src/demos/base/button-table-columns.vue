<script setup lang="ts">
import { AppButton, AppButtonTable, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreActions: DropdownItem[] = [
  { key: "columns", label: "选择列", icon: "columns" },
  { key: "filter", label: "筛选", icon: "filter" },
  { key: "export", label: "导出", icon: "arrow-right" },
];

function handleMoreAction(key: string): void {
  console.info("已选择表格操作", key);
}
</script>

<template>
  <AppButtonTable :more-items="moreActions" @select="handleMoreAction">
    <AppButton size="small" variant="text">查看</AppButton>
    <AppButton size="small" variant="text">编辑</AppButton>
  </AppButtonTable>
</template>
