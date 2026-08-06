<script setup lang="ts">
import { ref } from "vue";
import { AppColumnSettings, type ColumnVisibilityOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const visibility = ref<Record<string, boolean>>({ id: true, customer: true, amount: true });
const options: ColumnVisibilityOption[] = [{ key: "id", label: "订单号" }, { key: "customer", label: "客户" }, { key: "amount", label: "金额" }];
</script>

<template><AppColumnSettings v-model="visibility" :options="options" storage-key="aps-docs-order-columns" :min-visible="2" /></template>
