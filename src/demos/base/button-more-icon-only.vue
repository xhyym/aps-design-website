<script setup lang="ts">
import { AppButtonMore, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const actions: DropdownItem[] = [
  { key: "share", label: "分享", icon: "arrow-right" },
  { key: "star", label: "收藏", icon: "pin" },
  { key: "delete", label: "删除", icon: "trash", danger: true, divided: true },
];

function handleAction(key: string): void {
  console.info("已选择操作", key);
}
</script>

<template>
  <AppButtonMore :items="actions" icon-only @select="handleAction" />
</template>
