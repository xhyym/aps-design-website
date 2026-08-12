<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[][]>([["product", "design"]]);
const options: CascaderOption[] = [
  { label: "产品", value: "product", children: [{ label: "设计", value: "design", children: [{ label: "交互设计", value: "ux" }, { label: "视觉设计", value: "ui" }] }, { label: "运营", value: "operation" }] },
  { label: "研发", value: "rd", children: [{ label: "前端", value: "fe", children: [{ label: "Web", value: "web" }, { label: "移动端", value: "mobile" }] }, { label: "后端", value: "be" }] },
];
</script>

<template><AppCascaderPanel v-model="value" :options="options" multiple aria-label="选择部门（多选）" /></template>
