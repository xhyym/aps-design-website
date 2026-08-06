<script setup lang="ts">
import { ref } from "vue";
import { AppCascader } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[]>([]);
const options = [
  { label: "华东", value: "east", children: [{ label: "浙江", value: "zhejiang", children: [{ label: "杭州", value: "hangzhou" }] }, { label: "上海", value: "shanghai" }] },
  { label: "华南", value: "south", children: [{ label: "广东", value: "guangdong", children: [{ label: "广州", value: "guangzhou" }] }] },
];
</script>

<template>
  <div class="demo-field">
    <AppCascader v-model="value" :options="options" clearable filterable placeholder="选择服务区域" aria-label="服务区域" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 400px); }
</style>
