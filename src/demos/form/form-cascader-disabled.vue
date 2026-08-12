<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>(["east", "zhejiang", "hangzhou"]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai", disabled: true }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppCascader v-model="value" :options="options" disabled aria-label="禁用级联" />
    <AppCascader v-model="value" :options="options" placeholder="含禁用子节点" aria-label="含禁用项" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 220px); }
</style>
