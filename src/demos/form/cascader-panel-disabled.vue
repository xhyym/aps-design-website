<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["china", "zhejiang", "hangzhou"]);
const options: CascaderOption[] = [
  { label: "中国", value: "china", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }, { label: "宁波", value: "ningbo" }] }, { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template><AppCascaderPanel v-model="value" :options="options" disabled aria-label="禁用级联面板" /></template>
