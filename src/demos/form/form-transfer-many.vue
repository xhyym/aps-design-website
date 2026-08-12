<script setup lang="ts">
import { ref } from "vue";
import { AppTransfer } from "aps-design-pro";
import "aps-design-pro/style.css";

const values = ref<string[]>(["g1", "g3"]);
const options = [
  { key: "g1", label: "数据看板", description: "实时指标" },
  { key: "g2", label: "用户画像", description: "分群分析" },
  { key: "g3", label: "行为漏斗", description: "转化分析" },
  { key: "g4", label: "留存报表", description: "周期留存" },
  { key: "g5", label: "异常监控", description: "告警规则" },
];
</script>

<template><AppTransfer v-model="values" :options="options" filterable :titles="['全部功能', '已开通功能']" aria-label="功能授权" /></template>
