<script setup lang="ts">
import { ref } from "vue";
import { AppStepForm, type FormValue, type FormWorkflowStep } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ title: "", agreed: false });
const steps: FormWorkflowStep[] = [{ key: "content", title: "内容确认", items: [{ key: "title", label: "申请标题", type: "input", required: true, rules: [{ required: true, message: "请输入申请标题" }] }], beforeNext: (value) => value.title === "" ? "请先补充申请标题" : true }, { key: "agreement", title: "协议确认", items: [{ key: "agreed", label: "确认协议", type: "checkbox", placeholder: "我已阅读并同意服务协议", required: true, rules: [{ validator: (value) => value === true || "请确认服务协议" }] }] }];
</script>

<template><AppStepForm v-model="model" :steps="steps" finish-text="提交申请" /></template>
