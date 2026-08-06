<script setup lang="ts">
import { ref } from "vue";
import { AppSearchInput } from "aps-design-pro";
import "aps-design-pro/style.css";

const keyword = ref("");
const selectedCourse = ref("尚未选择建议项");
const suggestions = [
  { key: "vue", label: "Vue 3 工程化实战", value: "Vue 3", description: "课程" },
  { key: "typescript", label: "TypeScript 类型系统", value: "TypeScript", description: "课程" },
  { key: "lin", label: "林知远", value: "林知远", description: "讲师" },
];

function selectSuggestion(item: { label: string }): void {
  selectedCourse.value = `已选择：${item.label}`;
}
</script>

<template>
  <div class="search-demo-field">
    <AppSearchInput
      v-model="keyword"
      :suggestions="suggestions"
      placeholder="输入关键词后按方向键选择"
      @select="selectSuggestion"
    />
    <span>{{ selectedCourse }}</span>
  </div>
</template>

<style scoped>
.search-demo-field {
  display: grid;
  gap: 9px;
  width: min(100%, 320px);
  color: var(--aps-muted);
  font-size: 13px;
}
</style>
