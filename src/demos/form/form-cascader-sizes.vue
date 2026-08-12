<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref<string[]>([]);
const medium = ref<string[]>([]);
const large = ref<string[]>([]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="small" :options="options" size="small" clearable placeholder="小型" aria-label="小型级联" />
    <AppCascader v-model="medium" :options="options" size="default" clearable placeholder="默认" aria-label="默认级联" />
    <AppCascader v-model="large" :options="options" size="large" clearable placeholder="大型" aria-label="大型级联" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 200px); }
</style>
