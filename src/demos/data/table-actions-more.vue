<script setup lang="ts">
import { AppButton, AppTableActions, type DropdownItem } from "aps-design-pro";
import "aps-design-pro/style.css";

const moreItems: DropdownItem[] = [
  { key: "disable", label: "暂停服务" },
  { key: "delete", label: "删除" },
];
</script>

<template><AppTableActions :more-items="moreItems"><AppButton size="small">续费</AppButton><AppButton size="small" variant="secondary">联系客户</AppButton></AppTableActions></template>
