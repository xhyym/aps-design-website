<script setup lang="ts">
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const nodes: TreeOption[] = [
  { label: "客户管理", value: "crm", children: [{ label: "客户列表", value: "list" }, { label: "跟进记录", value: "track" }] },
  { label: "订单管理", value: "order", children: [{ label: "订单列表", value: "olist" }] },
];
</script>

<template>
  <AppTree :nodes="nodes" filterable default-expand-all />
</template>
