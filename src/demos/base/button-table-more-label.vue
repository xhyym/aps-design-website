<script setup lang="ts">
import { AppButton, AppButtonTable, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreActions: DropdownItem[] = [
  { key: "export", label: "导出明细", icon: "arrow-right" },
  { key: "print", label: "打印", icon: "panel" },
];

function handleMoreAction(key: string): void {
  console.info("已选择资源操作", key);
}
</script>

<template>
  <AppButtonTable :more-items="moreActions" more-label="资源操作" @select="handleMoreAction">
    <AppButton size="small" variant="text">查看</AppButton>
    <AppButton size="small" variant="text">编辑</AppButton>
  </AppButtonTable>
</template>
