<script setup lang="ts">
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const nodes: TreeOption[] = [
  { label: "一级目录 A", value: "a", children: [{ label: "二级 A1", value: "a1", children: [{ label: "三级 A1x", value: "a1x" }] }, { label: "二级 A2", value: "a2" }] },
  { label: "一级目录 B", value: "b", children: [{ label: "二级 B1", value: "b1" }] },
];
</script>

<template>
  <AppTree :nodes="nodes" show-line accordion default-expand-all />
</template>
