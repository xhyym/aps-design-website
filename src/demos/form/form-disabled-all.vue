<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ name: "已发布课程", status: "published" });
const items: FormItem[] = [
  { key: "name", label: "课程名称", type: "input", span: 6 },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }], span: 6 },
];
</script>

<template>
  <AppForm v-model="model" :items="items" disabled />
</template>
