<script setup lang="ts">
import { AppButton, AppTableActions, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreItems: DropdownItem[] = [
  { key: "duplicate", label: "复制课程" },
  { key: "archive", label: "归档" },
];
</script>

<template><AppTableActions :more-items="moreItems" more-label="更多课程操作"><AppButton size="small" variant="text">编辑</AppButton><AppButton size="small" variant="text">查看</AppButton></AppTableActions></template>
