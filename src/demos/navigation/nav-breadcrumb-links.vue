<script setup lang="ts">
import { AppBreadcrumb } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { label: "工作台", href: "/workbench" },
  { label: "订单", href: "/orders" },
  { label: "详情" },
];
</script>

<template>
  <AppBreadcrumb :items="items" />
</template>
