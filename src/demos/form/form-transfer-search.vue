<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>([]);
const options = [
  { key: "u01", label: "林晨", description: "产品设计" },
  { key: "u02", label: "周宁", description: "前端研发" },
  { key: "u03", label: "陈果", description: "服务端研发" },
  { key: "u04", label: "赵敏", description: "测试" },
  { key: "u05", label: "孙浩", description: "运维" },
  { key: "u06", label: "李雷", description: "数据" },
];
</script>

<template><AppTransfer v-model="values" :options="options" filterable :titles="['候选成员', '已加入项目']" aria-label="项目成员" /></template>
