<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("design");
const options = [
  { label: "产品中心", value: "product", children: [{ label: "产品设计", value: "design" }, { label: "产品运营", value: "operation", disabled: true }] },
  { label: "研发中心", value: "engineering", children: [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }] },
];
</script>

<template>
  <div class="demo-stack">
    <AppTreeSelect v-model="value" :options="options" disabled aria-label="禁用树选择" />
    <AppTreeSelect v-model="value" :options="options" clearable placeholder="含禁用子节点" aria-label="含禁用项" />
  </div>
</template>

<style scoped>
.demo-stack { display: flex; flex-wrap: wrap; gap: 12px; }
.demo-stack > * { width: min(100%, 220px); }
</style>
