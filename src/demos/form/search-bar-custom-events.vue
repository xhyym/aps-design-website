<script setup lang="ts">
import { ref } from "vue";
import { AppSearchBar, type FormItem, type FormValue } from "aps-design-pro";
import "aps-design-pro/style.css";

const page = ref(1);
const model = ref<Record<string, FormValue>>({ keyword: "", status: "" });
const items: FormItem[] = [
  { key: "keyword", label: "关键词", type: "input", placeholder: "课程名称", span: 4 },
  { key: "status", label: "状态", type: "select", options: [{ label: "已发布", value: "published" }, { label: "草稿", value: "draft" }], span: 4 },
];

function onSearch() {
  page.value = 1;
  /* reload() 重置页码后请求列表 */
}
function onReset() {
  /* reload() 直接重新请求 */
}
</script>

<template>
  <AppSearchBar v-model="model" :items="items" @search="onSearch" @reset="onReset" />
</template>
