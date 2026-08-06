<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "duplicate", label: "创建副本", icon: "plus" },
  { key: "archive", label: "归档", icon: "panel" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择课程操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" label="课程操作" @select="handleAction" />
</template>
