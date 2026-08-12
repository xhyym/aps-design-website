<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "", category: "" });
const steps: FormWorkflowStep[] = [
  { key: "basic", title: "基本信息", items: [{ key: "name", label: "课程名称", type: "input" }] },
  { key: "category", title: "分类设置", items: [{ key: "category", label: "课程分类", type: "select", options: [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }] }] },
];
</script>

<template>
  <AppStepForm v-model="model" :steps="steps" disabled />
</template>
