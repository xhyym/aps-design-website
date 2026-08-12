<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const model = ref<Record<string, FormValue>>({ keyword: "", status: "", author: "", level: "", tag: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称" },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }] },
  { key: "author", label: "讲师", type: "input", placeholder: "讲师姓名" },
  { key: "level", label: "难度", type: "select", options: [{ label: "入门", value: "junior" }, { label: "进阶", value: "advanced" }] },
  { key: "tag", label: "标签", type: "input", placeholder: "标签" },
];
</script>

<template>
  <AppSearchBar v-model="model" :items="items" :primary-count="3" />
</template>
