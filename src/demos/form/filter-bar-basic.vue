<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const status = ref("");
const statusOptions = [{ label: "全部状态", value: "" }, { label: "已发布", value: "published" }, { label: "草稿", value: "draft" }];
</script>

<template><AppFilterBar><AppInput v-model="keyword" placeholder="搜索课程名称" /><AppSelect v-model="status" :options="statusOptions" placeholder="选择状态" /></AppFilterBar></template>
