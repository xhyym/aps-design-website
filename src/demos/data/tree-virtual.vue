<script setup lang="ts">
import { AppTree, type TreeOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const nodes: TreeOption[] = Array.from({ length: 500 }, (_, i) => ({
  label: "节点 " + (i + 1),
  value: "n" + i,
  children: [{ label: "子节点 " + (i + 1) + "-1", value: "n" + i + "-1" }, { label: "子节点 " + (i + 1) + "-2", value: "n" + i + "-2" }],
}));
</script>

<template>
  <AppTree :nodes="nodes" virtual :virtual-height="320" default-expand-all />
</template>
