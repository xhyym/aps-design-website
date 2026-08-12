<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const path = ref<string[]>(["east", "zhejiang", "hangzhou"]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="path" :options="options" clearable placeholder="显示完整层级" aria-label="完整层级" />
    <AppCascader v-model="path" :options="options" :show-all-levels="false" separator=" > " clearable placeholder="只显示末级" aria-label="末级路径" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 220px); }
</style>
