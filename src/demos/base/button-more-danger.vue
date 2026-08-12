<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "disable", label: "停用成员", icon: "lock", danger: true },
  { key: "remove", label: "移出项目", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择危险操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="成员管理" @select="handleAction" />
</template>
