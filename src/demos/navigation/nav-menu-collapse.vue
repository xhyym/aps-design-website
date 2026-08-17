<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "概览", icon: "grid" as const },
  { key: "b", label: "订单", icon: "chart" as const, children: [
    { key: "b1", label: "全部订单" },
    { key: "b2", label: "退款" },
  ] },
  { key: "c", label: "设置", icon: "settings" as const },
];
</script>

<template>
  <AppMenu :items="items" default-active="b1" :collapse="true" />
</template>
