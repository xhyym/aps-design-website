<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeStep = ref(0);
const model = ref<Record<string, FormValue>>({ name: "", category: "" });
const steps: FormWorkflowStep[] = [{ key: "basic", title: "基本信息", description: "填写课程基础资料", items: [{ key: "name", label: "课程名称", type: "input", required: true, rules: [{ required: true, message: "请输入课程名称" }] }] }, { key: "category", title: "分类设置", description: "选择课程所属分类", items: [{ key: "category", label: "课程分类", type: "select", options: [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }], required: true, rules: [{ required: true, message: "请选择课程分类" }] }] }];
</script>

<template><AppStepForm v-model="model" v-model:active-step="activeStep" :steps="steps" /></template>
