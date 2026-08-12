<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const activeStep = ref(0);
const model = ref<Record<string, FormValue>>({ title: "", summary: "", category: "", level: "" });
const steps: FormWorkflowStep[] = [
  {
    key: "basic",
    title: "基础信息",
    description: "填写课程基础资料",
    items: [
      { key: "title", label: "课程标题", type: "input", span: 1, required: true, rules: [{ required: true, message: "请输入课程标题" }] },
      { key: "summary", label: "课程简介", type: "input", span: 1 },
    ],
  },
  {
    key: "category",
    title: "分类设置",
    description: "选择课程所属分类",
    items: [
      { key: "category", label: "课程分类", type: "select", span: 1, options: [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }] },
      { key: "level", label: "难度", type: "select", span: 1, options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
    ],
  },
];
</script>

<template>
  <AppStepForm v-model="model" v-model:active-step="activeStep" :steps="steps" :columns="2" />
</template>
