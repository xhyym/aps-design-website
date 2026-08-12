<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const small = ref("");
const medium = ref("");
const large = ref("");
const options = [
  { label: "产品中心", value: "product", children: [{ label: "产品设计", value: "design" }, { label: "产品运营", value: "operation" }] },
  { label: "研发中心", value: "engineering", children: [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppTreeSelect v-model="small" :options="options" size="small" clearable placeholder="小型" aria-label="小型树选择" />
    <AppTreeSelect v-model="medium" :options="options" size="default" clearable placeholder="默认" aria-label="默认树选择" />
    <AppTreeSelect v-model="large" :options="options" size="large" clearable placeholder="大型" aria-label="大型树选择" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 200px); }
</style>
