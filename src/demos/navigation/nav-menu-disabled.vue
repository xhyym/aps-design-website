<script setup lang="ts">
import { AppMenu } from "aps-design-pro";
import "aps-design-pro/style.css";

const items = [
  { key: "a", label: "可用菜单" },
  { key: "b", label: "维护中（禁用）", disabled: true },
  { key: "c", label: "设置", children: [
    { key: "c1", label: "通用" },
    { key: "c2", label: "禁用子项", disabled: true },
  ] },
];
</script>

<template>
  <AppMenu :items="items" default-active="a" />
</template>
