<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput, type SearchSuggestion } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const suggestions: SearchSuggestion[] = [
  { key: "vue", label: "Vue 3 工程化实战", value: "Vue 3", description: "课程", disabled: true },
  { key: "ts", label: "TypeScript 类型系统", value: "TypeScript", description: "课程" },
  { key: "lin", label: "林知远", value: "林知远", description: "讲师" },
];
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput v-model="keyword" :suggestions="suggestions" placeholder="含禁用建议项，键盘会跳过" aria-label="含禁用项搜索框" />
  </div>
</template>

<style scoped>
.search-demo-field {
  width: min(100%, 320px);
}
</style>
