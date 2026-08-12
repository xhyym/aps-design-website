<script setup lang="ts">
import { ref } from "vue";
import { AppCascader, type CascaderOption, type CascaderLoadRequest } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const rootOptions: CascaderOption[] = [
  { label: "中国", value: "china" },
  { label: "美国", value: "usa" },
];

const loadData: CascaderLoadRequest = async ({ option, signal }) => {
  const map: Record<string, CascaderOption[]> = {
    china: [
      { label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] },
      { label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] },
    ],
    usa: [
      { label: "California", value: "ca", children: [{ label: "San Francisco", value: "sf" }] },
      { label: "New York", value: "ny", children: [{ label: "New York City", value: "nyc" }] },
    ],
  };
  await new Promise((resolve) => setTimeout(resolve, 400));
  if (signal.aborted) return [];
  return map[option.value] ?? [];
};
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="rootOptions" lazy :load-data="loadData" clearable placeholder="展开节点时加载子级" aria-label="地区" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
