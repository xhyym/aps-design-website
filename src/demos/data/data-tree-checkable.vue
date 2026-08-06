<script setup lang="ts">
import { ref } from "vue";
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const checkedKeys = ref<string[]>(["read"]);
const nodes: TreeOption[] = [{ label: "订单权限", value: "orders", children: [{ label: "查看订单", value: "read" }, { label: "编辑订单", value: "write" }, { label: "导出订单", value: "export" }] }];
</script>

<template><AppTree v-model:checked-keys="checkedKeys" :nodes="nodes" checkable check-on-click-node default-expand-all /></template>
