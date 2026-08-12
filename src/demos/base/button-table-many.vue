<script setup lang="ts">
import { AppButton, AppButtonTable, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreActions: DropdownItem[] = [
  { key: "copy", label: "创建副本", icon: "plus" },
  { key: "archive", label: "归档", icon: "panel" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleMoreAction(key: string): void {
  console.info("已选择表格行操作", key);
}
</script>

<template>
  <AppButtonTable :more-items="moreActions" more-label="更多" @select="handleMoreAction">
    <AppButton size="small" variant="text">查看</AppButton>
    <AppButton size="small" variant="text">编辑</AppButton>
    <AppButton size="small" variant="text">权限</AppButton>
  </AppButtonTable>
</template>
