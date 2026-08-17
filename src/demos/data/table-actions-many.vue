<script setup lang="ts">
import { AppTableActions } from "aps-design-pro";
import "aps-design-pro/style.css";

const more = [
  { key: "refresh", label: "刷新" },
  { key: "export", label: "导出", divided: true },
  { key: "duplicate", label: "复制行" },
  { key: "delete", label: "删除", danger: true },
];
</script>

<template>
  <AppTableActions :more-items="more" more-label="更多行操作" />
</template>
