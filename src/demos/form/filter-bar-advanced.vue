<script setup lang="ts">
import { ref } from "vue";
import { AppFilterBar, AppInput, AppSelect } from "aps-design-pro";
import "aps-design-pro/style.css";

const expanded = ref(false);
const keyword = ref("");
const category = ref("");
const teacher = ref("");
const categoryOptions = [{ label: "前端", value: "frontend" }, { label: "后端", value: "backend" }];
</script>

<template><AppFilterBar v-model:expanded="expanded" collapsible><AppInput v-model="keyword" placeholder="课程名称" /><AppSelect v-model="category" :options="categoryOptions" placeholder="课程分类" /><template #advanced><AppInput v-model="teacher" placeholder="讲师姓名" /></template></AppFilterBar></template>
