<script setup lang="ts">
import { ref } from "vue";
import { AppTreeSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref("");
const options = [
  { label: "产品中心", value: "product", children: [{ label: "产品设计", value: "design" }, { label: "产品运营", value: "operation" }] },
  { label: "研发中心", value: "engineering", children: [{ label: "前端研发", value: "frontend" }, { label: "服务端研发", value: "backend" }] },
];
</script>

<template>
  <div class="demo-field">
    <AppTreeSelect v-model="value" :options="options" filterable clearable placeholder="选择所属团队" aria-label="所属团队" />
  </div>
</template>

<style scoped>
.demo-field { width: min(100%, 380px); }
</style>
