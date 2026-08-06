<script setup lang="ts">
import { ref } from "vue";
import { AppCascaderPanel, type CascaderOption } from "aps-design-pro";
import "aps-design-pro/style.css";

const value = ref<string[][]>([["course", "frontend"]]);
const options: CascaderOption[] = [{ label: "课程分类", value: "course", children: [{ label: "前端开发", value: "frontend" }, { label: "后端开发", value: "backend" }] }, { label: "内容类型", value: "content", children: [{ label: "直播课", value: "live" }, { label: "录播课", value: "recorded" }] }];
</script>

<template><AppCascaderPanel v-model="value" :options="options" multiple check-strictly filterable aria-label="选择课程分类" /></template>
