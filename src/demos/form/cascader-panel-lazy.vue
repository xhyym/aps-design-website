<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption, type CascaderLoadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["china"]);
const rootOptions: CascaderOption[] = [{ label: "中国", value: "china" }];

const loadData: CascaderLoadRequest = async ({ option, signal }) => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (signal.aborted) return [];
  if (option.value === "china") {
    return [
      { label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] },
      { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] },
    ];
  }
  return [];
};
</script>

<template><AppCascaderPanel v-model="value" :options="rootOptions" lazy :load-data="loadData" aria-label="懒加载级联面板" /></template>
