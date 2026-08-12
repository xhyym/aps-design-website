<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["m1", "m3"]);
const options = [
  { key: "m1", label: "模块 A", description: "基础" },
  { key: "m2", label: "模块 B", description: "进阶" },
  { key: "m3", label: "模块 C", description: "高级" },
];
</script>

<template><AppTransfer v-model="values" :options="options" target-order="unshift" :titles="['可选模块', '已启用模块']" aria-label="模块顺序" /></template>
