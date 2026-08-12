<script setup lang="ts">
import { AppButton, AppButtonTable, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreActions: DropdownItem[] = [
  { key: "disable", label: "停用", icon: "lock", danger: true },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleMoreAction(key: string): void {
  console.info("已选择危险行操作", key);
}
</script>

<template>
  <AppButtonTable :more-items="moreActions" @select="handleMoreAction">
    <AppButton size="small" variant="text">查看</AppButton>
  </AppButtonTable>
</template>
