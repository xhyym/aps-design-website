<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { key: "01", label: "林晨", description: "产品设计" },
  { key: "02", label: "周宁", description: "前端研发" },
  { key: "03", label: "陈果", description: "服务端研发" },
  { key: "04", label: "周远", description: "前端研发", disabled: true },
];
</script>

<template>
  <AppTransfer v-model="values" :options="options" filterable target-order="push" :titles="['候选成员', '已加入项目']" aria-label="项目成员" />
</template>
