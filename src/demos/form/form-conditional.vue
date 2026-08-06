<script setup lang="ts">
import { ref } from "vue";
import { AppForm, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ publishMode: "draft", publishAt: "" });
const items: FormItem[] = [{ key: "publishMode", label: "发布方式", type: "radio-group", options: [{ label: "保存草稿", value: "draft" }, { label: "定时发布", value: "scheduled" }], span: 12 }, { key: "publishAt", label: "发布时间", type: "datetime", visibleWhen: { field: "publishMode", value: "scheduled" }, clearWhenHidden: true, span: 12 }];
</script>

<template><AppForm v-model="model" :items="items" label-position="inline" /></template>
